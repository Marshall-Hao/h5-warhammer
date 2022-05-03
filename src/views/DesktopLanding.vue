<template>
  <div class="body fixed-no-scroll">
    <div class="bg"></div>
    <div class="content">
      <img class="content-logo" src="../assets/images/misc/logo_lg.png" alt="warhammer logo">

      <p>
        远益惑蝼样慈沿华唯棚填吃展姓忠厉惧祁昌盐塑账伸灼电！
      </p>
      <img class="content-qr" src="../assets/images/misc/base_qr.png" alt="warhammer qr code">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .body {
    // background-color: #000;
    background-color: #222222;
    position: relative;
  }
  .bg {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 100%;
    @media only screen
      and (orientation: portrait) {
        height: 40%;
    }
    background: linear-gradient(to bottom, #222222 14.09%, rgba(34, 34, 34, 0.6) 27.08%, rgba(34, 34, 34, 0.7) 73.96%, #222222 100%), url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/wh_desktop_bg.jpg);
    // background: linear-gradient(to bottom, #000 14.09%, rgba(34, 34, 34, 0.6) 34.08%, rgba(34, 34, 34, 0.7) 63.96%, rgba(0,0,0,0.7) 75%, #000 100%), url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/wh_desktop_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .content {
    z-index: 99;
    width: 100%; height: 100%;
    position: relative;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    &-qr {
      width: 17rem; object-fit: cover;
      border: solid 0.2rem #EDCC69; border-radius: 1rem;
      filter: drop-shadow(0px 0px 42px rgba(255, 255, 255, 0.25));
    }
    p {
      font-family: 'jiading';
      text-align: center;
      margin-bottom: 6rem;
      width: 60%;
      font-size: 3.4rem;
      line-height: 4.5rem;
    }
    &-logo {
      position: absolute;
      top: 5rem; left: 6rem;
      width: 9rem;
      object-fit: cover;
    }
  }
</style>
