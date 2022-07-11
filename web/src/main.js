
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import VuePaginate from 'vue-paginate';

Vue.use(VueResource);
Vue.use(VuePaginate);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
