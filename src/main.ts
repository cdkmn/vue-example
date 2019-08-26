import 'reflect-metadata';
import Vue from 'vue';

import app from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import api from './api';

Vue.config.productionTip = false;

Vue.use(api, { baseUrl: 'http://localhost:9090' });

new Vue({
  vuetify,
  router,
  render: (h) => h(app),
}).$mount('#app');
