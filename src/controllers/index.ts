import GettersSetters from './getters_setters';
import Store from './store';
import { applyMixins } from './mixins';

class PublicController {
  store = Store;

  shuffleArray(arr: any[]) {
    return arr.sort(() => 0.5 - Math.random());
  }
}

interface PublicController extends GettersSetters {
  store: typeof Store;
}

applyMixins(PublicController, [GettersSetters]);

export { PublicController };

export default new PublicController();
