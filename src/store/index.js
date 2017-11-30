import Vuex from 'vuex';
import Vue from 'vue';

import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    state,
    mutations,
    getters,
    actions
});
