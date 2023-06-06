from fastapi import FastAPI, Response, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, validator
import uvicorn
import pandas as pd
import json
from utils import load_model, recommendations, rebuild_model

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Specify the file path of the saved model
file_path = './store/surprise_model.dump'

model = load_model(file_path)

ratings_data = pd.read_csv('./dataset/ratings.csv')
books_metadata = pd.read_csv('./dataset/books.csv')
books = books_metadata.copy()
books.sort_values("average_rating", ascending=False, inplace=True)


@app.get("/books")
def topBook(skip: int = 0, limit: int = 10):
    df_top_rating = books.iloc[skip: skip + limit].reset_index(drop=True)
    json_data = df_top_rating.to_json(orient='records')
    # Get the total count of rows
    total_count = books.shape[0]
    # Create the response dictionary
    response_data = {
        "total": total_count,
        "cursor": skip + limit,
        "data": json.loads(json_data)
    }
    # Create a FastAPI response with the response dictionary as JSON
    response = Response(content=json.dumps(response_data),
                        media_type="application/json")
    return response


@app.get('/book/{book_id}')
def getBook(book_id: int):
    # Using iloc
    result = books.loc[books['id'] == book_id]
    if not result.empty:
        book = result.iloc[0].dropna().to_dict()
        ratings = ratings_data.loc[ratings_data['book_id'] == book.get(
            "id")].to_json(orient="records")
        response_data = {
            "book": book,
            "ratings": json.loads(ratings)
        }
        return JSONResponse(content=response_data)
    else:
        return JSONResponse(status_code=404, content={
            "message": "Book not found!"
        })


@app.get("/recommend/{user_id}")
def recommend(user_id: str, skip: int = 0, limit: int = 10):
    df_result = recommendations(model, user_id, books_metadata, skip, limit)
    json_data = df_result.to_json(orient='records')
    total_count = books.shape[0]
    # Create the response dictionary
    response_data = {
        "total": total_count,
        "cursor": skip + limit,
        "data": json.loads(json_data)
    }
    # Create a FastAPI response with the response dictionary as JSON
    response = Response(content=json.dumps(response_data),
                        media_type="application/json")
    return response


class Rating(BaseModel):
    book_id: int
    user_id: int
    rating: int = Field(..., gt=0, le=5)

    # Validator to check rating value
    @validator('rating')
    def validate_rating(cls, rating):
        if rating < 1 or rating > 5:
            raise ValueError("Rating value must be between 1 and 5")
        return rating


@app.post("/rating")
def rating_book(rating: Rating):
    book_id = rating.book_id
    user_id = rating.user_id
    rating_value = rating.rating
    global ratings_data

    new_row = pd.DataFrame(
        {"book_id": book_id, "user_id": user_id, "rating": rating_value}, index=[0])
    ratings_data = pd.concat(
        [new_row, ratings_data.loc[:]]).reset_index(drop=True)
    print(ratings_data.head())
    # Example response
    response = {"message": "Rating created successfully",
                "book_id": book_id,
                "user_id": user_id,
                "rating": rating_value}
    return response


def background_task(df):
    global model
    new_model = rebuild_model(df)
    model = new_model
    print("Background task executed: model has been rebuilt")


@app.post("/rebuild")
async def process_request(background_tasks: BackgroundTasks):
    # Process the request
    # Add the background task to the queue
    global ratings_data
    background_tasks.add_task(background_task, ratings_data)
    return {"message": "Request processed. Background task will run in the background."}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
