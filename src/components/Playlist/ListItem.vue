<template>
    <a v-bind:class="cls" class="collection-item" href="">
        {{ opt.name }} <span class="right">{{ opt.length | t }}</span>
    </a>
</template>



<script>
export default {
    name: 'ListItem',
    props: {
        opt: {
            type: Object,
            required: true
        },
        num: {
            type: Number,
            required: true
        }
    },
    computed: {
        current() {
            return this.$store.getters['currentList/song_current'];
        }
    },
    methods: {
        cls() {
            return this.current.PlayingFile === 1 + this.num ? 'active' : '';
        }
    }
};
</script>


<style lang="scss">
</style>
