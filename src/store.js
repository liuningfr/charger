import { setStore } from 'retalk';
import DemoModel from '@/pages/Demo/model';

const store = setStore({
  demo: DemoModel,
});

export default store;
