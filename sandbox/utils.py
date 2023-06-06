from surprise import dump, Dataset, SVD, Reader
import os


def load_model(model_filename):
    """
    The function "load_model" takes a filename as input and loads a model.

    :param model_filename: The filename or path of the file containing the saved machine learning model
    that needs to be loaded
    """
    file_name = os.path.expanduser(model_filename)
    _, loaded_model = dump.load(file_name)
    return loaded_model


def compute_ranking(model, uid, iid):
    return model.predict(uid, iid).est


def recommendations(model, uid, df_items, skip=0, limit=10):
    df_recommendations = df_items.copy()
    df_recommendations["rating_predicted"] = df_recommendations["book_id"].apply(
        lambda book_id: compute_ranking(model, uid, book_id))
    df_recommendations.sort_values(
        "rating_predicted", ascending=False, inplace=True)
    return df_recommendations.iloc[skip: skip + limit].reset_index(drop=True)


def rebuild_model(df):
    reader = Reader(rating_scale=(1, 5))
    data = Dataset.load_from_df(df[['user_id', 'book_id', 'rating']], reader)
    model = SVD(random_state=0, n_factors=100, n_epochs=30, verbose=True)
    model.fit(data.build_full_trainset())
    return model
