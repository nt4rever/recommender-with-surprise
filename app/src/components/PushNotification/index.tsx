import { message } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { messageActions } from '~/store/ducks/message/slice';

const PushNotification = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const notification = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notification.open) {
      messageApi.open({
        type: 'success',
        content: notification.message
      });
      dispatch(messageActions.close());
    }
  }, [dispatch, messageApi, notification.message, notification.open]);

  return <>{contextHolder}</>;
};

export default PushNotification;
