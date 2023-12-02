import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setuser(state, value) {
            state.user = value;
        },
    },
    actions: {},
    modules: {},
    getters: {
        dataUser: (state) => {
            return state.user;
        }
    }
});
