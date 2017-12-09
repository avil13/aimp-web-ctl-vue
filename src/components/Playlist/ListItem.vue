<template>
    <a @click.prevent="set_song_play" v-bind:class="cls" class="collection-item" role="listitem" href="">
        <span class="right">{{ opt.length | t }}</span>
        <div class="truncate">{{ opt.name }}</div>
    </a>
</template>


<script>
export default {
    name: 'ListItem',
    props: {
        opt: {
            type: Object,
            required: true
        }
    },
    computed: {
        current() {
            return this.$store.getters['song_current'];
        },
        current_playlist() {
            return this.$store.getters['current_playlist'];
        }
    },
    methods: {
        cls() {
            debugger;
            return 'active';
            // return ((this.current.PlayingList ^ 0) === this.current_playlist.id) &&
            // this.current.PlayingFile === this.opt.number
            // ? 'active' : '';
        },
        set_song_play() {
            this.$store.dispatch({
                type: 'SET_SONG_PLAY',
                payload: this.opt.number
            });
        }
    }
};
</script>


<style lang="scss">
</style>
