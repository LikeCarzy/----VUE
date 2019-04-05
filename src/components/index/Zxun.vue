<template>
  <div class="zxun-box">
    <div class="jz">
      <div class="mui-scroll-wrapper swiper-container swiper-container2">
        <div class="zxun-show swiper-wrapper">
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
          <div class="swiper-slide">
            <dl>
              <dt>
                <img
                  src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/Aug 25, 2017/201708/1503623761163.png"
                  alt
                >
              </dt>
              <dd>
                <h2>乐视云到底有多安全？</h2>
                <p>让你不再担心云计算的安全问题</p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="zxun-icon">
        <span><img src="../../assets/download.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  nams: "Zxun",
  mounted() {
    new Swiper(".swiper-container2", {
      loop: true, // 循环模式选项
      autoplay: true, //可选选项，自动滑动
      freeMode: true,
      simulateTouch: true,
      freeMode: false,
      direction: "vertical" // 垂直切换选项
    });
  }
};
</script>

<style lang="scss" scoped>
h2 {
  line-height: unset;
}
div.zxun-box {
  background: #fcfcfc;
  overflow: hidden;
  height: 1.07rem;
  position: relative;
  // top: -1rem;
  div.jz {
    outline: 0;
    padding: 0;
    margin: 0;
    div.mui-scroll-wrapper {
      width: 77%;
      height: 1.07rem;
      float: left;
      background: #f8f8f8;
      position: relative;
      border-right: 1px solid #e0e0e0;
      div.zxun-show {
        overflow: hidden;
        position: absolute;
        z-index: 10;
        width: 100%;
        height: auto;
        margin: 0;
        div.swiper-slide {
          dl {
            padding: 0.1rem 0;
            width: 100%;
            margin: 0;
            display: -webkit-box;
            dt {
              width: 1.86rem;
              height: 0.86rem;
              padding: 0 0.1rem 0 0.3rem;
              // overflow: hidden;
              img {
                width: 1.48rem;
                height: 0.86rem;
              }
            }
            dd {
              margin: 0;
              padding: 0;
              border: 0;
              font: inherit;
              vertical-align: baseline;
              width: 3.6rem;
              height: 0.86rem;
              h2 {
                font-size: 0.12rem;
                color: #333;
                width: 3.5rem;
                margin: 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              p {
                color: #999;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 3.5rem;
                font-size: 0.12rem;
              }
            }
          }
        }
      }
    }
    div.zxun-icon {
      padding: 0.1rem 0.24rem;
      float: right;
      span{
        display: block;
        width: 1.2rem;
        height: 0.86rem;
        padding: 0;
        img{
          width: 1.22rem;
          height: 0.86rem;
        }
      }
    }
  }
}
</style>
