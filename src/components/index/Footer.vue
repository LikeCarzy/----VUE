<template>
  <div class="footer-box">
    <ul class="footer-t">
      <li>
        <a href>
          <em>App</em>
        </a>
      </li>
      <li>
        <a href>
          <em>触屏版</em>
        </a>
      </li>
      <li>
        <a href>
          <em>电脑版</em>
        </a>
      </li>
    </ul>
    <div class="lm">
      <a href>客服热线 1010-9000</a>
      <a href class="yj">意见反馈</a>
    </div>
    <p>
      <em>©2017乐视商城</em>
    </p>
    <div class="ad">
      <span>本网站中消费指南、售后服务、用户反馈及法定公式等内容并非广告</span>
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
  position: relative;
//   top: -1rem;
  background: #ccc;
  ul {
    width: 100%;
    display: -webkit-box;
    margin: 0;
    li {
      -webkit-box-flex: 1;
      font-size: 0.24rem;
      color: #a4a4a5;
      padding-left: 1rem;
      a {
        color: #a4a4a4;
        display: block;
        em {
        }
      }
    }
  }
  div.lm {
    display: inline-block;
    font-size: 0.36rem;
    padding: 0.3rem 0.5rem 0.1rem 1rem;
    a {
      color: #f45353;
    }
    a.yj {
      padding-left: 0.5rem;
    }
  }
  p {
    color: #a4a4a5;
    font-size: 0.24rem;
    padding-left: 3rem;
    margin: 0;
  }
  div.ad {
    overflow: hidden;
    text-align: center;
    width: 100%;
    height: auto;
    span {
      display: inline-block;
      border-radius: 0.25rem;
      background: #d3d3d3;
      color: #fff;
      font-size: 0.12rem;
    }
  }
}
</style>
