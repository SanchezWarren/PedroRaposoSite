import { createApp } from 'vue';
import Vuex from 'vuex';

import store from './store.js'
import App from './App.vue';

const app = createApp(App);

app.use(Vuex);


app.use(store);

app.mount('#app');
