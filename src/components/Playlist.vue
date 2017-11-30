<template>
    <div class="collection">
        <list-item v-for="(v, i) in list" v-bind:key="i" :opt="v" :num="i"></list-item>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
    name: 'Playlist',
    components: {
        ListItem
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
</style>
