import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    items: [],
    status: null,
    visible: true,
    lang: 'co',
  },
  mutations: {
    setItems(state, items) {
      Vue.set(state, 'items', items);
    },
    setVisibility(state) {
      Vue.set(state, 'visible', !state.visible);
    },
    setLanguage(state, lang) {
      Vue.set(state, 'lang', lang);
    },
    addItem(state, item) {
      let newItems = [];
      newItems = state.items;
      newItems.push(item);
      Vue.set(state, 'items', newItems);
    },
  },
  actions: {
    addItem(context, item) {
      context.commit('addItem', item);
    },
    setVisibility(context) {
      context.commit('setVisibility');
    },
    setLanguage(context, lang) {
      context.commit('setLanguage', lang);
    },
    getItems(context) {
      const newItems = [{ name: 'newOne', data: 'bye' }];
      context.commit('setItems', newItems);
    },
  },
  getters: {
    byeItems: state => state.items.filter(item => item.data === 'bye'),
  },
};
