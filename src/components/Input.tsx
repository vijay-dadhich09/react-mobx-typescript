import React, {ChangeEvent} from 'react';
import { makeObservable, observable, action} from 'mobx';
import { observer }  from 'mobx-react';

export interface InputProps {
  value: string;
  label: string;
  error: string;
}
export class InputState implements InputProps {
  @observable
  value: string;
  @observable
  label: string;
  @observable
  error: string;
  constructor(props: InputProps) {
    makeObservable(this, {
      value: observable,
      label: observable,
      error: observable,
      onChange: action,
      setError: action,
      reset: action,
    })
    this.value = props.value;
    this.label = props.label;
    this.error = props.error;
  }
  
  @action
  onChange = (newValue: string) => {
    this.value = newValue;
  }

  @action
  setError = (newError: string) => {
    this.error = newError;
  }

  @action
  reset = () => {
    this.value = '';
    this.error = ''
  }
}
export const Input: React.FC<{ state: InputState }> = observer(({state}) => {
  const {value, label, error, onChange} = state;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  }

  return (
    <div className="intpuWrapper">
      {error !== '' && <div className="inputError">{error}</div>}
      <label>
        {label}
        <input
          value={value}
          onChange={handleOnChange}
        />
      </label>      
    </div>
  )
})