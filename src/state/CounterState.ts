import { makeObservable, observable, action } from 'mobx';

export class CounterState {
  @observable
  count: number = 0;

 constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      updateByValue: action
    })
  }
  

  @action
  increment = () =>{
    this.count +=1;
  }
  @action
  decrement = () => {
    this.count -=1;
  }
  @action
  updateByValue(newValue: number) {
    this.count = newValue;
  }
}
