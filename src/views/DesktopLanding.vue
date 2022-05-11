<template>
  <div class="body fixed-no-scroll">
    <div class="bg"></div>
    <div class="content">
      <img
        class="content-logo"
        src="https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/logo_lg.png"
        alt="warhammer logo"
      />

      <h2>
        测测你的战锤“基因”
        <br />
        你所属的战锤宇宙是哪个？
      </h2>
      <p>
        扫描下方二维码进入测试吧！
        <br />
        （手机端体验更佳哦!）
      </p>
      <img
        class="content-qr"
        src="https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/base_qr.png"
        alt="warhammer qr code"
      />
    </div>
    <footer>
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow"
        >沪ICP备17004107号-1</a
      >
    </footer>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.body {
  // background-color: #000;
  background-color: #222222;
  position: relative;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  @media only screen and (orientation: portrait) {
    height: 40%;
  }
  background: linear-gradient(
      to bottom,
      #222222 14.09%,
      rgba(34, 34, 34, 0.6) 27.08%,
      rgba(34, 34, 34, 0.7) 73.96%,
      #222222 100%
    ),
    url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/wh_desktop_bg.jpg);
  // background: linear-gradient(to bottom, #000 14.09%, rgba(34, 34, 34, 0.6) 34.08%, rgba(34, 34, 34, 0.7) 63.96%, rgba(0,0,0,0.7) 75%, #000 100%), url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/wh_desktop_bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.content {
  z-index: 99;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "jiading";
  text-align: center;
  &-qr {
    width: 17rem;
    object-fit: cover;
    border: solid 0.2rem #edcc69;
    border-radius: 1rem;
    filter: drop-shadow(0px 0px 42px rgba(255, 255, 255, 0.25));
  }
  h2 {
    margin-bottom: 2.5rem;
    font-size: 3.4rem;
    line-height: 4.8rem;
  }
  p {
    color: #edcc69;
    margin-bottom: 4rem;
    width: 60%;
    font-size: 2.4rem;
    line-height: 4.1rem;
  }
  &-logo {
    position: absolute;
    top: 5rem;
    left: 6rem;
    width: 9rem;
    object-fit: cover;
  }
}
footer {
  z-index: 999;
  text-align: center;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  a {
    color: #fff;
  }
}
</style>
