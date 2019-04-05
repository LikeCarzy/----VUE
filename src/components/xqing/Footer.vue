<template>
  <div class="footer-box">
    <div class="con">
      <a href="#/gwc" class="car">
        <span>
          <em></em>
        </span>
      </a>
      <a href class="go">
        <em>加入购物车</em>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
div.footer-box {
  position: fixed;
  width: 100%;
  height: auto;
  overflow: hidden;
  left: 0;
  bottom: 0;
  z-index: 100;
  div.con {
    display: -webkit-box;
    a.car {
      width: 30%;
      height: 1rem;
      display: block;
      line-height: 1.5rem;
      background: #fff;
      span {
        display: block;
        text-align: center;
        width: 0.6rem;
        height: 0.64rem;
        margin-top: 0.2rem;
        margin-left: 0.5rem;
        em {
          display: block;
          width: 0.6rem;
          height: 0.64rem;
          margin: 0;
          background: url(../../../static/img/gwc.png) center no-repeat;
        }
      }
    }
    a.go{
        width: 70%;
        display: block;
        height: 1rem;
        background: #f45353;
        color: #fff;
        text-align: center;
        position: relative;
        em{
            font-size: 0.4rem;
            position: absolute;
            top: 0.3rem;
            left: 1.5rem;
        }
    }
  }
}
</style>
