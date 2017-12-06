import Vue from 'vue';

Vue.filter('t', (val) => {
    if (!val) {
        return '';
    }

    const v = parseInt(val / 1000);

    let min = parseInt((v % 3600) / 60);
    if (min < 10) {
        min = '0' + min;
    }

    let sec = v % 60;
    if (sec < 10) {
        sec = '0' + sec;
    }

    if (v > 3600) {
        return parseInt(v / 3600) + ':' + min + ':' + sec;
    }
    return min + ':' + sec;
});
