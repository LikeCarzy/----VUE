// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


require('../utils/rem') //移动端rem

import MintUI from 'mint-ui';
import { Search } from 'mint-ui';
import 'mint-ui/lib/style.css';
import '../static/bootstrap/css/bootstrap.min.css'
Vue.component(Search.name, Search);
Vue.use(MintUI);

Vue.config.productionTip = false;

import 'swiper/dist/css/swiper.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
