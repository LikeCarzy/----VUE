<template>
  <div class="con-box">
    <div class="kong" v-if="kongFlag">
      <div class="con">
        <i></i>
        <p>您的购物车还是空的呢</p>
        <a href>去逛逛</a>
      </div>
    </div>

    <div class="sp-list" v-show="!kongFlag">
      <div class="cont-box">
        <div class="sp">
          <div class="box">
            <div class="logo">
              <label class="leshi">乐视自营</label>
            </div>
            <div class="car-box">
              <div class="select-check">
                <span class="le-check"></span>
              </div>
              <div class="carlist">
                <div class="car-tit">
                  <div class="l">
                    <a href>
                      <img
                        src="https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513647453308.jpg"
                        alt
                      >
                    </a>
                  </div>
                  <div class="r">
                    <div class="x">
                      <h2>
                        <em>X55C</em>
                      </h2>
                      <p>
                        <em>X55C 55吋</em>
                      </p>
                    </div>
                    <div class="y">
                      <p>
                        ￥
                        <em>2199.00</em>
                      </p>
                      <div class="kuang">
                        <a href class="jian">
                          <em>-</em>
                        </a>
                        <div class>
                          <em>1</em>
                        </div>
                        <a href class="jia">
                          <em>+</em>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="in-box">
                  <h2>
                    <em>包含2件</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="js">
          <div class="l">
            <div class="g">
              <span class="le-check"></span>
            </div>
            <div class="x">
              <em>全选</em>
            </div>
            <div class="z">
              <p class="ze">
                <em class="spze">商品总额</em>
                <em class="q">￥</em>
                <em class="q">2199.00</em>
              </p>
              <p class="yh">
                <span>
                  <em class="h">已优惠</em>
                  <em class="q">¥</em>
                  <em class="q">0.00</em>
                </span>
                <em class="yf">不含运费</em>
              </p>
            </div>
          </div>
          <div class="r">
            <em>去结算(1)</em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      kongFlag: true
    };
  }
};
</script>

<style lang="scss" scoped>
div.con-box {
  width: 100%;
  height: 100vh;
  background: #f3f3f3;
  padding-top: 0.8rem;
  div.kong {
    width: 100%;
    height: 100%;
    div.con {
      padding-top: 3rem;
      text-align: center;
      i {
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        margin: 0 auto;
        background: url(../../../static/img/q.png) center no-repeat;
      }
      p {
        margin-top: 0.5rem;
        color: #999;
        font-size: 0.3rem;
      }
      a {
        border: 1px solid #000;
        display: inline-block;
        width: 1rem;
        height: 0.5rem;
        border-radius: 0.1rem;
      }
    }
  }
  div.cont-box {
    width: 100%;
    margin: 0;
    padding: 0;
    padding-bottom: 1rem;
    overflow: hidden;
    div.sp {
      background: #fff;
      margin-top: 0.2rem;
      border-bottom: 1px solid #d3d3d3;
      div.box {
        position: relative;
        width: 100%;
        height: auto;
        z-index: 0;
        overflow: hidden;
        div.logo {
          margin: 0 0.3rem;
          padding: 0.2rem 0;
          font-size: 0.12rem;
          color: #666;
          border-bottom: 1px solid #d3d3d3;
          .leshi {
            width: 1rem;
            background-color: #f01e00;
            color: #fff;
            display: inline-block;
            padding: 0 0.2rem;
            font-size: 0.24rem;
            line-height: 0.24rem;
            border-radius: 0.05rem;
          }
        }
        div.car-box {
          background: #fff;
          position: relative;
          height: auto;
          overflow: hidden;
          padding-left: 1rem;
          padding-bottom: 0.5rem;
          div.select-check {
            width: 0.5rem;
            height: 0.5rem;
            line-height: 0.5rem;
            position: absolute;
            left: 0.5rem;
            top: 0.6rem;
            text-align: center;
            border-radius: 50%;
            span.le-check {
              display: inline-block;
              background: #f45353;
              border: 1px solid #f45353;
              border-radius: 50%;
              position: relative;
              width: 100%;
              height: 100%;
              margin: 0;
              cursor: pointer;
              font-size: 0.12rem;
              background: url(../../../static/img/1.png) center no-repeat;
            }
            span.active {
              background: url(../../../static/img/2.png) center no-repeat;
            }
          }
          div.carlist {
            position: relative;
            padding-top: 0.3rem;
            overflow: hidden;
            height: auto;
            div.car-tit {
              display: -webkit-box;
              div.l {
                width: 1.5rem;
                height: 1.5rem;
                border: 1px solid #ddd;
                position: relative;
                margin-right: 0.2rem;
                text-align: center;
                margin-left: 0.5rem;
              }
              div.r {
                overflow: hidden;
                width: 4rem;
                div.x {
                  float: left;
                  h2 {
                    font-size: 0.3rem;
                    margin: 0;
                    line-height: 0.3rem;
                  }
                  p {
                    color: #d3d3d3;
                    padding-top: 0.1rem;
                    margin: 0;
                  }
                }
                div.y {
                  float: right;
                  p {
                    color: #f15353;
                  }
                  div.kuang {
                    overflow: hidden;
                    em {
                      font-size: 0.3rem;
                    }
                    a.jian {
                      float: left;
                      display: block;
                      width: 0.4rem;
                      height: 0.3rem;
                      text-align: center;
                      border-left: 1px solid #ccc;
                      border-top: 1px solid #ccc;
                      border-bottom: 1px solid #ccc;
                      border-top-left-radius: 0.1rem 0.1rem;
                      border-bottom-left-radius: 0.1rem 0.1rem;
                      color: #000;
                    }
                    div {
                      float: left;
                      width: 0.5rem;
                      height: 0.3rem;
                      text-align: center;
                      border: 1px solid #ccc;
                      color: #000;
                    }
                    a.jia {
                      float: left;
                      display: block;
                      width: 0.4rem;
                      height: 0.3rem;
                      text-align: center;
                      border-left: 1px solid #ccc;
                      border-top: 1px solid #ccc;
                      border-bottom: 1px solid #ccc;
                      border-top-right-radius: 0.1rem 0.1rem;
                      border-bottom-right-radius: 0.1rem 0.1rem;
                      color: #000;
                    }
                  }
                }
              }
            }
            div.in-box {
              width: 90%;
              height: 0.5rem;
              background: #f9f9f9;
              border-radius: 0.25rem;
              h2 {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                line-height: 0.5rem;
                em {
                  font-size: 0.24rem;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
    div.js {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1rem;
      div.l {
        float: left;
        width: 75%;
        height: 100%;
        div.g {
          width: 0.8rem;
          height: 100%;
          float: left;
          span {
            display: inline-block;
            background: #f45353;
            // border: 1px solid #f45353;
            border-radius: 50%;
            position: relative;
            width: 100%;
            height: 100%;
            margin: 0;
            cursor: pointer;
            font-size: 0.12rem;
            background: url(../../../static/img/1.png) center no-repeat;
          }
        }
        div.x {
          float: left;
          width: 1rem;
          height: 100%;
          em {
            font-size: 0.24rem;
            width: 100%;
            height: 100%;
            display: block;
            color: #ccc;
            line-height: 1rem;
            text-align: center;
            font-size: 0.4rem;
          }
        }
        div.z {
          float: right;
          p.ze {
            margin: 0;
            em.q {
              color: #f45353;
            }
          }
          p.yh {
            em.q {
              color: #f45353;
            }
          }
        }
      }
      div.r {
        float: right;
        width: 25%;
        height: 100%;
        background: #f45353;
        text-align: center;
        font-size: 0.3rem;
        em {
          color: #fff;
          line-height: 1rem;
        }
      }
    }
  }
}
</style>
