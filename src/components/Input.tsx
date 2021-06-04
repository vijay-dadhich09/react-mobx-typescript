import React, {ChangeEvent} from 'react';
import { makeObservable, observable, action} from 'mobx';
import { observer }  from 'mobx-react';

export class InputState {
  @observable
  value: string = ''
  constructor() {
    makeObservable(this, {
      value: observable,
      onChange: action
    })
  }
  
  @action
  onChange = (newValue: string) => {
    this.value = newValue;
  }
}
export const Input: React.FC<{ state: InputState }> = observer(({state}) => {
  const {value, onChange} = state;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // console.log('onchangeValue:', event.target.value);
    onChange(event.target.value);
  }

  return (
    <div>
      <input
        value={value}
        onChange={handleOnChange}
      />
      {/* <button onClick={handleDecrementClick}>Decrement</button>
      <span>{`count: ${count}`}</span>
      <button onClick={handleIncrementClick}>Increment</button> */}
    </div>
  )
})