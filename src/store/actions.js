import api from './../api';

export default {
    GET_STATUS(context) {
        return Promise.all([
            api('get_player_status').then(data => context.commit('status', data))
        ]);
    },
    GET_PLAYLIST_LIST(context, action) {
        return api('get_playlist_list', action.payload).then(data => {
            context.commit('playlist_list', data);
        });
    }
};
