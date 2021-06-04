import React from 'react';
import {observer} from 'mobx-react';
import {AppStore} from '../state/AppState'

const Confirmation:React.FC = () => {
  const {name, email, age} = AppStore.userData.user;
  return (
    <div>
      <h1>Details are submited successfully</h1>
      <div>{`name: ${name}`}</div>
      <div>{`email: ${email}`}</div>
      <div>{`age: ${age}`}</div>
    </div>
  )
}
const RegisterConfirmation = observer(Confirmation);
export default RegisterConfirmation;