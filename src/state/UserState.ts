import { observable, action, makeObservable } from 'mobx';

export interface UserProps {
  name:string,
  email:string,
  age?: number
}
export class UserState {
  @observable
  user: UserProps = {
    name: '',
    email: '',
  };

  constructor() {
    makeObservable(this, {
      user: observable,
      registerUser: action
    })
  }

  @action
  registerUser = (_user: UserProps) => {
    this.user = _user;
  }
  
}