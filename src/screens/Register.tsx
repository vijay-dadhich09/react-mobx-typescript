import React, {useEffect} from 'react';
import { observable } from 'mobx';
import {observer} from 'mobx-react';
import { useHistory } from 'react-router-dom'
import Validator from 'validatorjs';
import { InputState, Input } from '../components/Input';
import { UserProps, UserState } from '../state/UserState';

const rules = {
  name: 'required|alpha|size:3',
  email: 'required|email',
  age: 'min:18'
};


export class RegisterUserState {
  @observable
  name = new InputState({value: '', label: 'Name: ', error: ''});
  @observable
  email = new InputState({value: '', label: 'Email: ', error: ''});
  @observable 
  age = new InputState({value: '', label: 'Age: ', error: ''});
}

const setError = (className: InputState, value: string | boolean) => {
  if(typeof value === 'string') {
    className.setError(value);
  } else {
    className.setError('');
  }
}

const Register:React.FC<{userState: UserState, inputState: RegisterUserState}> = observer(({userState, inputState}) => {
  let history = useHistory();
  const { name, email, age } = inputState;
  useEffect(() => {
    name.reset();
    email.reset();
    age.reset();
  }, [])
  
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const newUserValues: UserProps = {
      name: name.value,
      email: email.value,
      age: Number(age.value)
    }
    userState.registerUser(newUserValues);
    const validation = new Validator(newUserValues, rules);
    if(validation.fails()) {
      const hasNameError: string | boolean = validation.errors.first('name'); 
      setError(name, hasNameError)
      
      const hasEmailError: string | boolean  = validation.errors.first('email'); 
      setError(email, hasEmailError)
      
      const hasAgeError: string | boolean = validation.errors.first('age'); 
      setError(age, hasAgeError)
      
    } else {
      history.push("/RegisterConfirmation");
    }
  }
  return (
    <div>
      <h1>Register User</h1>
        <form onSubmit={handleSubmit}>
          <Input state={inputState.name}/>
          <Input state={inputState.email}/>
          <Input state={inputState.age}/>
          <input type="submit" value="Submit" />
        </form>
    </div>
    
  )
})

export default Register;