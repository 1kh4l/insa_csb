import FlagIcon from 'vue-flag-icon';
import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import Router from './router';

Vue.use(VueRouter);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

/* Router */
const router = new VueRouter({
    routes: Router,
});

new Vue({
    vuetify,
    render: h => h(App),
    store,
    FlagIcon,
    router,
}).$mount('#app');
