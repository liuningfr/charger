import { setStore } from 'retalk';
import CounterModel from './Counter/model';

const store = setStore({
  counter: CounterModel,
});

export default store;
