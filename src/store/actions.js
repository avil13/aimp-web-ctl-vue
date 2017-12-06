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

            if (!context.state.current_playlist) {
                // устанавливаем дефолтный плейист
                context.dispatch({
                    type: 'SET_PLAYLIST',
                    payload: data[0]
                });
            }
        });
    },
    SET_PLAYLIST(context, action) {
        if (action.payload) {
            context.commit('current_playlist', action.payload);
            context.dispatch({
                type: 'GET_PLAYLIST_LIST_SONGS',
                payload: {
                    id: action.payload.id
                }
            });
        }
    },
    GET_PLAYLIST_LIST_SONGS(context, action) {
        return api('get_playlist_songs', action.payload).then(data => {
            const songs = data && data.songs && data.songs.map((v, i) => {
                v.number = i;
                return v;
            });
            context.commit('playlist_songs', songs || []);
        });
    },
    SET_SONG_PLAY(context, action) {
        return api('set_song_play', {
            playlist: context.state.current_playlist.id,
            song: action.payload
        });
    }
};


/*
get_playlist_list
get_song_current
get_volume
get_player_status
get_playlist_crc
*/
