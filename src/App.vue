<template>
  <div id="app">
    <!-- 首页 -->
    <!-- <Header></Header>
    <Lunbo></Lunbo>
    <Nav></Nav>
    <Zxun></Zxun>
    <Content></Content>
    <Footer></Footer>-->
    <!-- 分类页 -->
    <!-- <F_Header></F_Header>
    <F_Content></F_Content> -->
    <!-- 详情页 -->
    <!-- <X_Header></X_Header>
    <X_Lunbo></X_Lunbo>
    <X_Content></X_Content>
    <X_Js></X_Js>
    <X_Footer></X_Footer> -->
    <!-- 购物车页 -->
    <!-- <G_Header></G_Header>
    <G_Content></G_Content> -->
    <!-- 登录页 -->
    <!-- <D_Dl></D_Dl> -->

    <router-view></router-view>
  </div>
</template>

<script>
//首页
// import Header from "./components/index/Header";
// import Lunbo from "./components/index/Lunbo";
// import Nav from "./components/index/Nav";
// import Zxun from "./components/index/Zxun";
// import Content from "./components/index/Conent";
// import Footer from "./components/index/Footer";

//分类页
// import F_Header from "./components/fenlei/Header";
// import F_Content from "./components/fenlei/Content"

//详情页
// import X_Header from "./components/xqing/Header"
// import X_Lunbo from "./components/xqing/Lunbo"
// import X_Content from "./components/xqing/Conternt"
// import X_Js from "./components/xqing/Js"
// import X_Footer from "./components/xqing/Footer"

// 购物车页
// import G_Header from "./components/gwc/Header"
// import G_Content from "./components/gwc/Content"

// 登录页
// import D_Dl from "./components/dl/dl"

export default {
  name: "App",
  data() {
    return {
      msg: "ll"
    };
  },
  components: {
  }
};
</script>

<style lang = 'scss'>
* {
  margin: 0;
  padding: 0;
  font: inherit;
}
em {
  font-style: initial;
}
ul,
li,
dd,
dt {
  list-style: none;
}
a,em{
  text-decoration:none; 
}
a:link{
  text-decoration:none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  #header {
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  div.nav-box {
    width: 7.3rem;
  }
  .swiper-pagination-bullet {
    background: #fff;
  }
}
h1.mint-header-title {
  width: 4.2rem;
  height: 0.64rem;
  line-height: 0.64rem;
  background-color: rgba(249, 249, 249, 0.5);
  border-radius: 0.1rem;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 0.2rem;
  margin: 0;
}
header.logo div.is-left {
  width: 0.6rem;
  text-align: center;
  color: lavenderblush;
}
.gwc {
  margin-right: 0.3rem;
}
.yh {
  margin-right: 0.3rem;
}
/* 分类页样式 */
html body #app header.tit {
  margin: 0;
  width: 100%;
  padding: 0 0.2rem;
  background: #ccc;
  position: relative;
  div.is-left {
    width: 0.5rem;
    padding-left: 0.2rem;
  }
  h1 {
    width: 5rem;
    position: absolute;
    left: 1rem;
  }
  div.is-right {
    padding: 0;
    margin: 0;
    .pint{
      width: 0.98rem;
      label {
        width: 100%;
        height: 100%;
        margin: 0;
        
      }
    }
  }
}
/* 详情页样式 */
header.x-tit{
  background: #ccc;
  h1.mint-header-title{
    border-radius: 0;
    background: none;
    text-align: center;
    color: #000;
    font-size: 0.36rem;
  }
}
/* 购物车样式 */
html body #app header.gwc-tit {
  margin: 0;
  width: 100%;
  padding: 0 0.2rem;
  background: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  div.is-left {
    width: 0.5rem;
    padding-left: 0.2rem;
    color: #000;
  }
  h1 {
    width: 5rem;
    position: absolute;
    text-align: center;
    left: 1rem;
    color: #000;
    background: rgba(0, 0, 0, 0)
  }
  div.is-right {
    padding: 0;
    margin: 0;
    .pint{
      width: 0.98rem;
      label {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    }
  }
}
</style>
