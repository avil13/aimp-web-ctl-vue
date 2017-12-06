<template>
<div class="container">

  <div>
     <Menu></Menu>
     <div role="main">
         <div role="listbox" class="collection listbox">
            <list-item v-for="(v, i) in list" v-bind:key="i" :opt="v" :num="i"></list-item>
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
          return this.$store.getters['playlist_list'];
      }
  }
};
</script>

<style lang="scss">
.listbox {
    margin-top: 30px;
}
</style>
