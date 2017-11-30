<template>
  <div class="menu">
    <div class="title">Мой лист</div>
    <input class="checkbox" type="checkbox" id="menuButton">
    <label class="button material-icons" for="menuButton">menu</label>
    <div class="body">
      <div class="body-container">
        <a class="link" href="">Один</a>
        <a class="link" href="">Два</a>
        <a class="link" href="">Три</a>
        <a class="link" href="">Четыре</a>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Menu',
  data () {
    return {};
  }
};
</script>

<style lang="scss">
  .menu {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    box-sizing: border-box;

    .title {
      padding: 10px;
    }

    .body {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,0.8);
      -webkit-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-transition: transform 0.5s linear;
      -ms-transition: transform 0.5s linear;
      transition: transform 0.5s linear;
      will-change: transform;

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
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        z-index: 1;
      }
      &:checked + .button {
         animation: menuButton 0.4s linear;
         -webkit-animation: menuButton 0.4s linear;
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
      &:after,
      &:before { content: none}
      &:focus{outline:none;}
    }
  }

  @keyframes menuButton {
    0% {
      -ms-transform: scaleX(0);
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    25% {
      -ms-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
    75% {
      -ms-transform: scaleX(0);
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }
    100% {
      -ms-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }
</style>
