import { observable } from 'mobx';
import { CounterState } from './CounterState';
import { UserState } from './UserState';

export class AppState {
  @observable
  counter = new CounterState();
  @observable
  user = new UserState();
}