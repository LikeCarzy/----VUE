<template>
  <div class="con-box">
    <div class="l">
      <ul>
        <li class="lb1 bdt0 cur">
          <a href>
            <em>超级电视</em>
          </a>
        </li>
        <li class="lb2">
          <a href>
            <em>智能硬件</em>
          </a>
        </li>
        <li class="lb3">
          <a href>
            <em>精品配件</em>
          </a>
        </li>
        <li class="lb4">
          <a href>
            <em>乐视会员</em>
          </a>
        </li>
      </ul>
    </div>
    <div class="r">
      <div class="fenlei_list" data-lei="1">
        <div class="fenleiimg">
          <a href="/xqing">
            <img
              src="https://img1-lemall.letvimg.com/le-cloud/s-pc/resource/img/2018-11-06/201811/1541486273686.jpeg"
              alt
            >
          </a>
        </div>
        <section class="fenleitit">
          <h2>
            <em>爆款推荐</em>
          </h2>
        </section>
        <div class="baopinlist">
          <ul>
            <li>
              <a href="/#/xqing">
                <b>
                  <div>
                    <img
                      src="https://img3-lemall.letvimg.com/le-cloud/s-cat/resource/img/201712/1514267783940.jpg"
                      alt
                    >
                  </div>
                  <i>
                    <em>X40L</em>
                  </i>
                </b>
              </a>
            </li>
            <li>
              <a href>
                <b>
                  <div>
                    <img
                      src="https://img3-lemall.letvimg.com/le-cloud/s-cat/resource/img/201712/1514267783940.jpg"
                      alt
                    >
                  </div>
                  <i>
                    <em>X40L</em>
                  </i>
                </b>
              </a>
            </li>
            <li>
              <a href>
                <b>
                  <div>
                    <img
                      src="https://img3-lemall.letvimg.com/le-cloud/s-cat/resource/img/201712/1514267783940.jpg"
                      alt
                    >
                  </div>
                  <i>
                    <em>X40L</em>
                  </i>
                </b>
              </a>
            </li>
            <li>
              <a href>
                <b>
                  <div>
                    <img
                      src="https://img3-lemall.letvimg.com/le-cloud/s-cat/resource/img/201712/1514267783940.jpg"
                      alt
                    >
                  </div>
                  <i>
                    <em>X40L</em>
                  </i>
                </b>
              </a>
            </li>
            <li>
              <a href>
                <b>
                  <div>
                    <img
                      src="https://img3-lemall.letvimg.com/le-cloud/s-cat/resource/img/201712/1514267783940.jpg"
                      alt
                    >
                  </div>
                  <i>
                    <em>X40L</em>
                  </i>
                </b>
              </a>
            </li>
            <li>
              <a href>
                <b>
                  <div>
                    <img
                      src="https://img3-lemall.letvimg.com/le-cloud/s-cat/resource/img/201712/1514267783940.jpg"
                      alt
                    >
                  </div>
                  <i>
                    <em>X40L</em>
                  </i>
                </b>
              </a>
            </li>
          </ul>
        </div>
        <div class="fenleilist">
          <a href class="h_box">
            <dl>
              <dt>
                <img
                  src="https://img2-lemall.letvimg.com/webext/20160608/default/4846163213975967"
                  alt
                >
              </dt>
              <dd>
                <div class="fenleitext">
                  <em>X系列</em>
                </div>
              </dd>
            </dl>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  cur: "lb1"
};
</script>

<style lang="scss" scoped>
div.con-box {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  background: #ccc;
  overflow: hidden;
  div.l {
    overflow: hidden;
    width: 27.8%;
    height: 100%;
    float: left;
    ul {
      margin: 0;
      height: 12.55rem;
      li {
        border-bottom: 1px solid #d3d3d3;
        width: 100%;
        background: #ccc;
        a {
          display: block;
          width: 88%;
          height: auto;
          padding: 0.4rem 0;
          margin: 0 auto;
          font-size: 0.24rem;
          color: #000;
          text-align: center;
        }
      }
      li.bdt0 {
        border-top: 0;
        border-bottom: 0;
      }
      li.cur {
        background-color: #fff;
        a {
          color: #f15353;
          border: 0;
        }
      }
    }
  }
  div.r {
    margin: 0;
    width: 72.2%;
    left: 27.5%;
    height: 12.55rem;
    float: right;
    background: #fff;
    div.fenlei_list {
      div.fenleiimg {
        padding: 0.2rem;
        overflow: hidden;
        height: auto;
        a {
          img {
            display: block;
            width: 100%;
            height: auto;
            overflow: hidden;
          }
        }
      }
      section.fenleitit {
        border-bottom: 1px solid #d3d3d3;
        position: relative;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        h2 {
          font-size: 0.24rem;
          padding: 0 0.58em;
          background: #fff;
          text-align: center;
          height: 0.5rem;
          line-height: 0.5rem;
          position: absolute;
          top: 50%;
          left: 38%;
          margin-top: -0.25rem;
          color: #999;
        }
      }
      div.baopinlist {
        height: auto;
        overflow: hidden;
        ul {
          margin: 0 0.2rem;
          li {
            width: 33.33%;
            float: left;
            padding-bottom: 0.3rem;
            a {
              display: block;
              width: 100%;
              b {
                display: block;
                width: 89%;
                margin: 0 auto;
                text-align: center;
                i {
                  display: inline-block;
                  color: #777;
                  line-height: 0.5rem;
                  overflow: hidden;
                  width: 100%;
                  height: 0.5rem;
                  font-size: 0.24rem;
                }
              }
            }
          }
        }
      }
      div.fenleilist {
        margin: 0 0.2rem;
        height: auto;
        overflow: hidden;
        padding-bottom: 5.7rem;
        a.h_box {
          border-top: 1px solid #ccc;
          display: block;
          dl {
            margin: 0;
            display: -webkit-box;
            dt {
              width: 1rem;
              height: 0.5rem;
              padding: 0.3rem 0;
              margin-right: 0.3rem;
              img {
              }
            }
            dd {
              height: 100%;
              -webkit-box-flex: 1;
              padding: 0.4rem 0;
              font-size: 0.34rem;
              div {
                display: table;
                height: 100%;
                em {
                  display: table-cell;
                  vertical-align: middle;
                  word-break: break-all;
                  padding-right: 0.3rem;
                  font-size: 0.28rem;
                  color:  #000;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
