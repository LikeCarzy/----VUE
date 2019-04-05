<template>
  <div class="dl-box">
    <div class="dl-header">
      <div class="in-box">
        <p class="logo-box">
          <a href>
            <img src="../../../static/img/logo.png" alt>
          </a>
        </p>
        <p class="tit">一个帐号玩转所有乐视服务</p>
      </div>
    </div>
    <div class="login-box">
      <div class="pad-box">
        <ul>
          <li>
            用户名：
            <input type="text" class="uname" placeholder="请输入用户名">
          </li>
          <li>
            密 码：
            <input type="text" class="upad" placeholder="请输入密码">
          </li>
        </ul>
        <hr>
        <p class="dl-zc-box">
          <button class="login">登录</button>
          <button class="zc">注册</button>
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="lan">
        <span class="language">
          语言：
          <i class="text">简体中文</i>
        </span>
        <span class="area">
          国家/地区：
          <i class="text">中国</i>
        </span>
      </div>
      <p class="service_tel">客服电话：
        <i>
          <a href="tel:10109000">1 010 9000</a>
        </i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dl"
};
</script>

<style lang="scss" scoped>
div.dl-box {
  div.dl-header {
    width: 100%;
    margin-bottom: 0.5rem;
    div.in-box {
      padding-top: 0.8rem;
      text-align: center;
    }
  }
  div.login-box {
    ul {
      li {
        margin-bottom: 0.2rem;
        input {
          border: none;
          width: 70%;
          height: 0.6rem;
        }
      }
    }
    p.dl-zc-box {
      overflow: hidden;
      width: 100%;
      height: 1rem;
      text-align: center;
      button.login {
        width: 3rem;
        height: 1rem;
        background: #8dc6ed;
        border: none;
        color: #fff;
        border-radius: 5%;
      }
      button.zc {
        width: 3rem;
        height: 1rem;
        background: #8dc6ed;
        border: none;
        color: #fff;
        border-radius: 5%;
      }
    }
  }
  div.bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 2rem;
    text-align: center;
    div.lan {
      padding-top: 0.5rem;
      span {
        i {
          color: #999;
          text-decoration: underline;
        }
      }
    }
    p.service_tel {
      padding-top: 0.3rem;
    }
  }
}
</style>
