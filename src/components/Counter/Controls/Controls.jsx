import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Increment by
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement by
      </button>
    </div>
  );
};

export default Controls;
