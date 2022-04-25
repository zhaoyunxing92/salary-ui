import { createPinia } from 'pinia';
import plugin from 'pinia-plugin-persist'

export { useStore } from './store';

const store = createPinia();
store.use(plugin);

export default store;