<template>
<div id="app">
    <router-view class="router" tag="main"/>
    <controll-bar tag="footer"></controll-bar>
</div>
</template>

<script>
import ControllBar from '@/components/ControllBar';

export default {
    name: 'app',
    components: {
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
    height: calc(100vh - 150px);
    overflow-y: auto;
}
</style>
