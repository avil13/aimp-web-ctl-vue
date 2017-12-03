import Vue from 'vue';
import Router from 'vue-router';
import Playlist from '@/components/Playlist/Playlist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'playlist',
      component: Playlist
    }
  ]
});
