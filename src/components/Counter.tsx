import React, {MouseEvent} from 'react';
import { CounterState } from "../state/CounterState";
import { observer }  from 'mobx-react';

export const Counter: React.FC<{ state: CounterState }> = observer(({state}) => {
  const {count, increment, decrement} = state;

  const handleIncrementClick = (event: MouseEvent): void => {
    event.preventDefault();
    increment();
  }
  const handleDecrementClick = (event: MouseEvent): void => {
    event.preventDefault();
    decrement();
  }

  return (
    <div>
      <button onClick={handleDecrementClick}>Decrement</button>
      <span>{`count: ${count}`}</span>
      <button onClick={handleIncrementClick}>Increment</button>
    </div>
  )
})