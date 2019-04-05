<template>
  <div class="cont-box">
    <div class="por">
      <div class="sal-box bdb1">
        <div class="bian-box">
          <h2 class="saltit">
            <label style class="leshi">乐视自营</label>
            <em>X55C</em>
          </h2>
          <p class="salLogo">
            <em>4K超清分辨率|BT709100%色域覆盖|HDR高动态|全通道SDR转HDR|极色炫彩2.0</em>
          </p>
          <p class="jg">
            <b>
              <em class="font28">¥</em>
              <em class="font36">2499.00</em>
            </b>
          </p>
        </div>
        <div class="add">
          <dl>
            <dt>
              <em>送至:</em>
            </dt>
            <dd>
              <div class="info">
                <p>
                  <em>北京&gt;北京市&gt;朝阳区</em>
                </p>
                <p class="nv">
                  <em style>
                    <span>预售，</span>24:00前完成支付，预计（2019.01.04）之前发货
                  </em>
                </p>
              </div>
              <div class="icon">
                <a href class="r">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="pro">
      <div class="pro-box">
        <p class="sel">
          <em>已选</em>
          <b class="in-box">
            <span>X55C</span>
            <span>55吋</span>
            <span>1件</span>
          </b>
        </p>
        <span class="le"></span>
        <ul class="list">
          <li class="xh">
            <p class="tit">型号</p>
            <p class="btn">X55C</p>
          </li>
          <li class="cc">
            <p class="tit">尺寸</p>
            <p class="btn">55吋</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="no">
      <span>暂无评价</span>
      <b>购买后快来发布评价吧</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang="scss" scoped>
div.cont-box {
  border-top: 1px solid #d3d3d3;
  div.por {
    padding-left: 0.3rem;
    background: #fff;
    div.sal-box {
      display: block;
      padding: 0.1rem 0;
      height: auto;
      overflow: hidden;
      position: relative;
      h2.saltit {
        margin: 0;
        position: relative;
        label.leshi {
          background-color: #f01e00;
          color: #fff;
          position: relative;
          display: inline-block;
          top: -0.2rem;
          margin-right: 0.3rem;
          padding: 0 0.2rem;
          font-size: 0.14rem;
          line-height: 0.3rem;
          border-radius: 0.1rem;
        }
        em {
          display: inline-block;
          font-size: 0.3rem;
          line-height: 0.5rem;
          position: absolute;
          top: 0.1rem;
        }
      }
      p.salLogo {
        color: #999;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.24rem;
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
      p.jg {
        height: auto;
        width: 100%;
        overflow: hidden;
        background: #fff;
        b {
          padding-right: 0.3rem;
          color: #f45353;
          em.fon28 {
            font-size: 0.4rem;
          }
          em.font36 {
            font-size: 0.4rem;
          }
        }
      }
      div.add {
        height: auto;
        overflow: hidden;
        background: #f9f9f9;
        margin-right: 0.5rem;
        border-radius: 0.1rem;
        color: #666;
        dl {
          display: -webkit-box;
          padding: 0.1rem;
          margin: 0;
          dt {
            padding-right: 0.1rem;
            line-height: 0.5rem;
            em {
              font-size: 0.28rem;
            }
          }
          dd {
            -webkit-box-flex: 1;
            div.info {
              width: 90%;
              float: left;
              p:first-child {
                overflow: hidden;
                margin: 0;
                em {
                  font-size: 0.24rem;
                }
              }
              p.nv {
                overflow: inherit;
                white-space: inherit;
                text-overflow: inherit;
                em {
                  font-size: 0.24rem;
                  span {
                    color: #ff9100;
                  }
                }
              }
            }
            div.icon {
              line-height: normal;
              width: 10%;
              height: 0.5rem;
              float: right;
              text-align: center;
              overflow: hidden;
              a.r {
                position: relative;
                display: block;
                height: 100%;
                span {
                  margin-left: 0.05rem;
                  width: 0.1rem;
                  height: 0.1rem;
                  background: rgb(54, 39, 39);
                  border-radius: 50%;
                  float: left;
                  margin-top: 0.3rem;
                }
              }
            }
          }
        }
      }
    }
  }
  div.bsb1 {
    border-bottom: 1px solid #d3d3d3;
  }
  div.pro {
    padding-left: 0.3rem;
    background: #fff;
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    div.pro-box {
      padding: 0.3rem 0;
      position: relative;
      p.sel {
        em {
          color: #999;
          font-size: 0.28rem;
        }
        b.in-box {
          margin-left: 0.3rem;
          span {
            font-size: 0.28rem;
            color: #333;
            margin-left: 0.1rem;
          }
        }
      }
      span.le {
        display: block;
        width: 0.24rem;
        height: 0.24rem;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        background: url(../../../static/img/shang.png) center no-repeat;
      }
      ul.list {
        margin: 0;
        padding-top: 0.3rem;
        width: 100%;
        height: auto;
        p.btn {
          background: #f15353;
          color: #fff;
          width: 1rem;
          border: none;
        }
        p.tit {
          font-size: 0.24rem;
          color: #999;
        }
        li.xh {
          padding-bottom: 0.3rem;
        }
      }
    }
  }
  div.no{
    display: block;
    margin-top: 0.3rem;
    padding: 0.3rem 0.5rem;
    overflow: hidden;
    background: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    color: #999;
    font-size: 0.26rem;
    span{
      float: left;
      margin-left: 0.3rem;
    }
    b{
      float: right;
      margin-right: 0.3rem;
    }
  }
}
</style>
