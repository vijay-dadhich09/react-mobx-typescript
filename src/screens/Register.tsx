import React from 'react';
import { observable } from 'mobx';
import {observer} from 'mobx-react';

import { InputState, Input } from '../components/Input';
import { UserProps, UserState } from '../state/UserState';

export class RegisterUserState {
  @observable
  name = new InputState();
  @observable
  email = new InputState();
  @observable 
  age = new InputState();
}

const Register:React.FC<{userState: UserState, inputState: RegisterUserState}> = observer(({userState, inputState}) => {
  // console.log('userState: ', userState);
  // console.log('inputState: ', inputState);
  const { user } = userState;
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const { name, email, age } = inputState;
    console.log('inputState.name: ', inputState.name.value);
    console.log('inputState.email: ', inputState.email.value);
    console.log('inputState.age: ', inputState.age.value);
    const user: UserProps = {
      name: name.value,
      email: email.value,
      age: Number(age.value)
    }
    userState.registerUser(user);
    console.log('userState: ', userState);
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Input state={inputState.name}/>
        <Input state={inputState.email}/>
        <Input state={inputState.age}/>
        <input type="submit" value="Submit" />
      </form>
      <div>{`name: ${user.name}`}</div>
      <div>{`email: ${user.email}`}</div>
      <div>{`age: ${user.age}`}</div>
      
    </div>
    
  )
})

export default Register;