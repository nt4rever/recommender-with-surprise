import { Button } from 'antd';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is a counter</h1>
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >{`Count is : ${count}`}</Button>
    </div>
  );
};

export default Counter;
