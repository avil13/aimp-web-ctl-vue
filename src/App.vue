<template>
  <div id="app" class="container row flex-container">
    <router-view class="router"/>

    <controll-bar></controll-bar>
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


#app {
    * {
        color: #666;
    }
    .flex-container {
        display: box;
        display: flex;
        flex-direction: column;
    }
    .router {
        height: calc(100vh - 128px);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
    }
}
</style>
