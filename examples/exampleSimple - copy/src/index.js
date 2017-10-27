import Vue from 'vue';
import Vuex from 'vuex';
import rootStore from './store';
import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({ ...rootStore });

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});

