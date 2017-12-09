<template>
<div>
    <div class="title-wrap">
        <div role="banner" class="title">{{ title.name }}</div>
    </div>

    <div class="menu">
        <input role="menu" class="checkbox" type="checkbox" id="menuButton" v-model="menuButton">
        <label class="button" for="menuButton"><span class="crocodile"></span></label>
        <div class="body">
            <div role="navigation" class="body-container">
                <a @click.prevent="set_playlist(v)" v-for="v in playlist_list" v-bind:key="v.id" class="link" href="">{{name(v)}}</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Menu',
    data () {
        return {
            menuButton: false
        };
    },
    computed: {
        playlist_list() {
            return this.$store.getters['playlist_list'];
        },
        title() {
            return this.$store.getters['current_playlist'] || {};
        }
    },
    methods: {
        name(val) {
            return val.name;
        },
        set_playlist(v) {
            this.$store.dispatch({
                type: 'SET_PLAYLIST',
                payload: v
            })
            .then(() => {
                this.menuButton = false;
            });
        }
    }
};
</script>

<style lang="scss">
.title-wrap{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(255,255,255, .8);
    z-index: 1;
    border-bottom: 1px solid #ddd;

    .title {
      padding: 4px 10px;
      font-weight: bold;
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    .body {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.8);
      transform: translateX(-100%);
      transition: transform 0.5s linear;
      will-change: transform;
      z-index: 100;

      .body-container {
        padding: 10px;
        .link {
            display: block;
            color: rgb(38, 165, 154);
            margin-bottom: 20px;
            font-size: 15px;
        }
    }
}

.checkbox {
      position: absolute;
      left: -50px;
      &:checked + .button + .body{
        transform: translateX(0);
        z-index: 1;
      }
      &:checked + .button {
         animation: menuButton 0.4s linear;
        & .crocodile {
          background-color:transparent;
          transition-delay: 0.1s;
        }
        & .crocodile:before {
          transform: rotate(45deg) translateX(7px) translateY(6px);
          transition-delay: 0.1s;
        }
        & .crocodile:after {
          transform: rotate(-45deg) translateX(5px) translateY(-5px);
          transition-delay: 0.1s;
        }
      }
    }
    .button {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background: rgb(38, 165, 154);
      text-align: center;
      line-height: 50px;
      color: #fff;
      padding: 0;
      font-size: 20px;
      position: fixed;
      right: 10px;
      top: 10px;
      z-index: 2;
      outline:none;
      will-change: transform;
      z-index: 101;
      &:before { content: none; }
      &:focus{ outline:none; }
      & .crocodile,
      & .crocodile:before,
      & .crocodile:after {
        position:absolute;
        top:50%;
        left:50%;
        height:3px;
        width:26px;
        border-radius:10px;
        cursor:pointer;
        background:#fff;
        display:block;
        content:'';
        transition: transform 0.3s ease-in-out 0s;
        will-change: transform;
      }
      & .crocodile {
        margin: -1px 0 0 -13px;
        transition: background-color 0.2s ease 0s;
        &:before { margin: -10px 0 0 -13px; }
        &:after { margin: 6px 0 0 -13px; }
      }
    }
  }

  @keyframes menuButton {
    0% {
      transform: scaleX(0);
    }
    25% {
      transform: scaleX(-1);
    }
    75% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(-1);
    }
  }
</style>

