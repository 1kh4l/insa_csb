import FlagIcon from 'vue-flag-icon';
import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import Router from './router';

Vue.use(VueRouter);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

/* Router */
const router = new VueRouter({
    mode: 'history',
    routes: Router
});

new Vue({
    vuetify,
    render: h => h(App),
    store,
    FlagIcon,
    i18n,
    router,
}).$mount('#app');
