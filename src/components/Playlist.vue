<template>
  <div class="collection">
     <Menu></Menu>
     <list-item v-for="(v, i) in list" v-bind:key="i" :opt="v" :num="i"></list-item>
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
          return this.$store.getters['list'];
      }
  }
};
</script>

<style>
</style>
