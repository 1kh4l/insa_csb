import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: [],
        status: null,
    },
    mutations: {
        setItems(state, items) {
            Vue.set(state, 'items', items);
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
        getItems(context) {
            const newItems = [{ name: 'newOne', data: 'bye' }];
            context.commit('setItems', newItems);
        },
    },
    getters: {
        byeItems: state => state.items.filter(item => item.data === 'bye'),
    },
};
