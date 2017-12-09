export default {
    // song_current(state, str = '') {
    //     state.song_current = str;
    // },
    // status(state, str = '') {
    //     state.status = str;
    // },
    playlist_list(state, arr = []) {
        state.playlist_list = arr;
    },
    playlist_songs(state, arr = []) {
        state.playlist_songs = arr;
    },
    current_playlist(state, arr) {
        state.current_playlist = arr;
    },
    playlist_crc(state, str = '') {
        state.playlist_crc = str;
    },
    song_current(state, val = {}) {
        state.song_current = val;
    }
};
