import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { Spin } from 'antd';

export const LoadingFixed: React.FC = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (isFetching + isMutating !== 0)
    return (
      <div className='fixed right-1 top-1'>
        <Spin />
      </div>
    );
  return null;
};
