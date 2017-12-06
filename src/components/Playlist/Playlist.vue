<template>
<div class="container">

  <div>
     <Menu></Menu>
     <div role="main">
         <div role="listbox" class="collection listbox">
            <list-item v-for="(v, i) in list" v-bind:key="i" :opt="v"></list-item>
         </div>
     </div>
  </div>
</div>
</template>

<script>
  import ListItem from './ListItem.vue';
  import Menu from './Menu.vue';

export default {
  name: 'Playlist',
  components: {
      ListItem,
      Menu
  },
  data () {
    return {};
  },
  computed: {
      list() {
          return this.$store.getters['playlist_songs'];
      }
  },
  mounted() {
      this.$store.dispatch({ type: 'GET_PLAYLIST_LIST' });
  }
};
</script>

<style lang="scss">
.listbox {
    margin-top: 30px;
}
</style>
