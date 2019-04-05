<template>
  <div class="nav-box">
    <ul>
      <li>
        <a href="#/fenlei">
          <span class="fenlei"><img src="http://temp.im/466x466/4CD964/fff" alt=""></span>
          <em>全部分类</em>
        </a>
      </li>
      <li>
        <a href>
          <span class="fenlei"><img src="http://temp.im/466x466/4CD964/fff" alt=""></span>
          <em>超级电视</em>
        </a>
      </li>
      <li>
        <a href>
          <span class="fenlei"><img src="http://temp.im/466x466/4CD964/fff" alt=""></span>
          <em>会员购买</em>
        </a>
      </li>
      <li>
        <a href>
          <span class="fenlei"><img src="http://temp.im/466x466/4CD964/fff" alt=""></span>
          <em>安装维修</em>
        </a>
      </li>
      <li>
        <a href>
          <span class="fenlei"><img src="http://temp.im/466x466/4CD964/fff" alt=""></span>
          <em>乐迷社区</em>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data () {
      return {

      }
  }
};
</script>

<style lang="scss" scoped>
div.nav-box {
  width: 100%;
  height: 1.5rem;
  padding: 0.32rem 0.1rem 0.08rem 0.1rem;
  position: relative;
  // top: -1rem;
  ul {
    width: auto;
    height: auto;
    overflow: hidden;
    margin: 0;
    li {
      width: 20%;
      height: auto;
      float: left;
      text-align: center;
      a {
        display: block;
        color: #333;
        span {
          display: block;
          width: 0.88rem;
          height: 0.88rem;
          margin: 0 auto;
          img{
              border-radius: 0.22rem;
          }
        }
        em {
          display: block;
          width: 100%;
          font-size: 0.1rem;
        }
      }
    }
  }
}
</style>

