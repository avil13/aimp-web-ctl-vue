import Vue from 'vue';

Vue.filter('t', (val) => {
    if (!val) {
        return '';
    }

    const v = parseInt(val / 1000);

    if (v > 3600) {
        return parseInt(v / 3600) + ':' + parseInt(v / 60) + ':' + v % 60;
    }
    return parseInt(v / 60) + ':' + v % 60;
});
