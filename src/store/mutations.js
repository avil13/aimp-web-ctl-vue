export default {
    song_current(state, str = '') {
        state.song_current = str;
    },
    status(state, str = '') {
        state.status = str;
    },
    playlist_list(state, arr = []) {
        state.playlist_list = arr;
    },
    playlist_crc(state, str = '') {
        state.playlist_crc = str;
    }
};
