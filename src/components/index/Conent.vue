<template>
  <div class="content-box">
    <div class="rm box">
      <h2>热卖精选</h2>
      <div class="con-box">
        <div class="l">
          <a href="#/xqing" @click="goxqing()">
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-12-10/201812/1544443527981.jpg"
              alt
            >
          </a>
        </div>
        <div class="r">
          <div class="t">
            <a href>
              <img
                src="https://img1-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-12/201806/1528783695570.jpg"
                alt
              >
            </a>
          </div>
          <div class="b">
            <a href>
              <img
                src="https://img1-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-12-05/201812/1544014393182.jpg"
                alt
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="zn box">
      <h2>智能大屏</h2>
      <div class="zn-con">
        <a href>
          <img
            src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-12-14/201812/1544786351723.jpg"
            alt
          >
        </a>
        <ul class>
          <li>
            <a href>
              <img
                src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
                alt
              >
            </a>
          </li>
          <li>
            <a href>
              <img
                src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
                alt
              >
            </a>
          </li>
          <li>
            <a href>
              <img
                src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
                alt
              >
            </a>
          </li>
        </ul>
        <ul class>
          <li>
            <a href>
              <img
                src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
                alt
              >
            </a>
          </li>
          <li>
            <a href>
              <img
                src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
                alt
              >
            </a>
          </li>
          <li>
            <a href>
              <img
                src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
                alt
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="jp box">
      <h2>精品配件</h2>
      <div class="jp-con">
        <a href>
          <img
            src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-12-10/201812/1544442734058.jpg"
            alt
          >
        </a>
        <ul class>
        <li>
          <a href>
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
              alt
            >
          </a>
        </li>
        <li>
          <a href>
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
              alt
            >
          </a>
        </li>
        <li>
          <a href>
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
              alt
            >
          </a>
        </li>
      </ul>
      <ul class>
        <li>
          <a href>
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
              alt
            >
          </a>
        </li>
        <li>
          <a href>
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
              alt
            >
          </a>
        </li>
        <li>
          <a href>
            <img
              src="https://img2-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-06-19/201806/1529402454462.jpg"
              alt
            >
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  methods: {
    goxqing () {
      this.$router.push({ path: './xqing' });
    }
  }
};
</script>

<style lang="scss" scoped>
div.content-box {
  width: 100%;
  height: auto;
  position: relative;
  // top: -1rem;
  background: #ccc;
  padding-top: 0.2rem;
  h2 {
    padding: 0 0.24rem;
    height: 0.73rem;
    line-height: 0.73rem;
    position: relative;
    font-size: 0.3rem;
    background: #fff;
    margin: 0;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  div.box {
    padding-bottom: 0.2rem;
    div.con-box {
      width: 100%;
      height: auto;
      overflow: hidden;
      position: relative;
      div.l {
        width: 50%;
        float: left;
        a {
          display: block;
          img {
            width: 3.75rem;
            height: 100%;
          }
        }
      }
      div.r {
        width: 50%;
        float: right;
      }
    }
    div.zn-con {
      ul {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        margin: 0;
        li {
          width: 33.33%;
          float: left;
          a {
            img {
              width: 2.5rem;
              height: 2.9rem;
            }
          }
        }
      }
    }
    div.jp-con {
      ul {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        margin: 0;
        li {
          width: 33.33%;
          float: left;
          a {
            img {
              width: 2.5rem;
              height: 2.9rem;
            }
          }
        }
      }
    }
  }
}
</style>
