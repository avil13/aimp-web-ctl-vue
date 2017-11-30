<template>
<div class="volume right">
    <div></div>
</div>
</template>


<script>
// https://codepen.io/vsync/pen/sChzo
// TODO: надо переделать, этот элемент не доступный
export default {
  name: 'Volume',
  data() {
    return {};
  }
};
</script>


<style lang="scss">
$w_vol: 10px;

.volume, .volume > div{
  display:inline-block;
  position:relative;
  border-style:solid;
  border-width: $w_vol ($w_vol*3);
  border-color:rgba(black,0) rgba(black,.1) rgba(black,.1) rgba(black,0);

  > div{
    position:absolute;
    bottom: -$w_vol;
    left:-($w_vol*3);
    border-color:rgba(black,0) #333 #333 rgba(black,0);
  }
}

// center the volume on screen
// .volume{
//   position:absolute;
//   width:0; height:0;
//   margin:auto;
//   top:0; bottom:0; left:0; right:0;
// }
</style>
