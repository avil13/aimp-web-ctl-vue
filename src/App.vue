<template>
    <div id="app">
        <!-- <router-view class="router" role="main" /> -->
        <play-list class="router" tag="main"></play-list>
        <controll-bar tag="footer"></controll-bar>
    </div>
</template>

<script>
import PlayList from '@/components/Playlist/Playlist';
import ControllBar from '@/components/ControllBar/ControllBar';

export default {
    name: 'app',
    components: {
        PlayList,
        ControllBar
    }
};
</script>

<style lang="scss">
@import './style/materialize-css/sass/materialize.scss';
@import './style/fonts/material-icons.scss';
* {
    color: #666;
}

.router {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: calc(100vh - 130px);
    overflow-y: auto;
}

input[type=range] {
    border: none;
}
@media only screen and (max-width: 600px) {
    .container{
        width: 100%;
    }
}
</style>
