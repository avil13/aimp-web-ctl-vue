<template>
    <a v-bind:class="cls" class="collection-item" href="">
        {{ opt.name }}
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
    data() {
        return {};
    },
    computed: {
        current() {
            return this.$store.getters['song_current'];
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
