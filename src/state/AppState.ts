import { observable } from 'mobx';
import { CounterState } from './CounterState';
import { UserState } from './UserState';

export class ApplicationState {
  @observable
  counter = new CounterState();
  @observable
  userData = new UserState();
}

export const AppStore = new ApplicationState();

