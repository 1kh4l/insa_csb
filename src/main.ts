import Vue, { VNode } from "vue";
import VueAnalytics from "vue-analytics";
import FlagIcon from "vue-flag-icon";
import VueRouter, { Route } from "vue-router";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import vuetify from "./plugins/vuetify";
import Router from "./router";
import store from "./store";

Vue.use(VueAnalytics, {
  id: "UA-158916892-1",
});
Vue.use(VueRouter);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

interface Position {
  x: number;
  y: number;
}

interface PositionSelector {
  offset: Position;
  selector: string;
}

/* Router */
const router = new VueRouter({
  mode: "history",
  routes: Router,
  scrollBehavior(to: Route): PositionSelector {
    if (to.hash) {
      return {
        offset: { x: 0, y: 100 },
        selector: to.hash,
      };
    }
    return;
  },
});

new Vue({
  i18n,
  render: (h): VNode => h(App),
  router,
  store,
  vuetify,
}).$mount("#app");
