import Store from './store';

export default class GettersSetters {
  store!: typeof Store;

  get items() {
    return this.store.items;
  }
}
