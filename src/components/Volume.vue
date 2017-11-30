<template>
<div>
    <div v-bind:class="{volume_open: show}" class="volume volume_bottom volume_show-equalizer">
        <div class="volume__holder"></div>
        <div class="volume__control">
            <div class="volume__bar">
                <div class="d-slider-vert volume__slider">
                    <input class="slider-v" type="range" orient="vertical" value="20" min="0" max="100">
                </div>
            </div>
        </div>
        <div role="button" v-on:click="open" class="volume__btn">
            <div class="volume__icon"></div>
        </div>
    </div>
</div>
</template>


<script>
export default {
  name: 'Volume',
  data() {
    return {
        show: false
    };
  },
  methods: {
      open() {
          this.show = !this.show;
      }
  }
};
</script>


<style lang="scss">
input[type=range][orient=vertical].slider-v{
    transform: rotate(270deg);
    width: 130px;
    left: -50px;
    top: 60px;
}
.d-slider-vert{display:block;position:relative;width:32px;height:136px;}
.volume{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;position:relative;line-height:0;}
.volume__btn{opacity:.4;position:relative;display:inline-block;cursor:pointer;}
.volume__icon{position:relative;background:url(/static/volume.svg) center center no-repeat;background-position:0 0;display:inline-block;width:28px;height:28px;margin:6px;-webkit-box-sizing:border-box;box-sizing:border-box;}
.volume__control{display:block;position:absolute;width:44px;height:198px;background:#fff;right:-2px;border:1px #e0e0e0 solid;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 15px 30px rgba(0, 0, 0, 0.2);box-shadow:0 15px 30px rgba(0, 0, 0, 0.2);opacity:0;z-index:-1;}
.volume__control:after,.volume__control:before{display:block;position:absolute;content:"";width:0;height:0;border-style:solid;}
.volume__control:before{right:16px;}
.volume__control:after{right:18px;}
.volume__bar{display:block;position:absolute;top:0;right:0;width:42px;height:100%;background:#f7f6f4;z-index:1;}
.volume__slider.d-slider-vert{position:absolute;bottom:31px;left:50%;margin-left:-16px;}
.volume__holder{display:none;position:absolute;width:100%;height:80px;left:0;}
.volume_show-equalizer .volume__control{height:176px;}
.volume_show-equalizer .volume__bar{bottom:37px;}
.volume_open .volume__btn{opacity:1;}
.volume_open .volume__control{opacity:1;z-index:10;}
.volume_open .volume__holder{display:block;}
.volume_bottom .volume__control{margin-bottom:65px;bottom:-500px;}
.volume_bottom .volume__control:before{bottom:-6px;border-width:6px 6px 0 6px;border-color:#e0e0e0 transparent transparent transparent;}
.volume_bottom .volume__control:after{bottom:-5px;border-width:5px 4px 0 4px;border-color:#f7f6f4 transparent transparent transparent;}
.volume_bottom .volume__holder{bottom:0;}
.volume_bottom.volume_open .volume__control{-webkit-animation:volume_bottom__expand 100ms ease-out;animation:volume_bottom__expand 100ms ease-out;bottom:10px;}
</style>
