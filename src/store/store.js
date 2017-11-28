import Vuex from 'vuex';
import Vue from 'vue';
import api from './../api';

Vue.use(Vuex);


const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,

    state: {
        song_current: '',
        playlist_crc: '',
        list: [{
            name: 'Eric Clapton - Travelin Alone',
            length: '236559'
          }]
    },
    mutations: {
        song_current(state, str = '') {
            state.song_current = str;
        },
        status(state, str = '') {
            state.status = str;
        },
        list(state, arr = []) {
            state.list = arr;
        },
        playlist_crc(state, str = '') {
            state.playlist_crc = str;
        }
    },
    getters: {
        song_current: state => state.song_current,
        list: state => state.list
    },
    actions: {
        GET_STATUS(context) {
            return Promise.all([
                api('get_player_status').then(data => context.commit('status', data))
            ]);
        },
        GET_PLAYLIST_LIST(context, action) {
            return api('get_playlist_list', action.payload).then(data => {
                context.commit('list', data);
            });
        }
    }
});
