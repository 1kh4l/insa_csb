import FlagIcon from 'vue-flag-icon';
import VueRouter from 'vue-router';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import Router from './router';

Vue.use(VueAnalytics, {
  id: 'UA-158916892-1',
});
Vue.use(VueRouter);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

/* Router */
const router = new VueRouter({
  mode: 'history',
  routes: Router,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 100 },
      };
    }
    return false;
  },
});

new Vue({
  vuetify,
  render: (h) => h(App),
  store,
  FlagIcon,
  i18n,
  router,
}).$mount('#app');
