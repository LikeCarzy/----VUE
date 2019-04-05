<template>
  <div class="header-box">
    <a href="/index" class="l">
      <span class></span>
    </a>
    <a href class="r">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Header",
  
};
</script>

<style lang="scss" scoped>
div.header-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  a.l {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    left: 0.2rem;
    position: absolute;
    top: 0.2rem;
    border-radius: 50%;
    text-align: center;
    background: rgba(153, 153, 153, 0.8);
    overflow: hidden;
    span {
      width: 26px;
      height: 26px;
      display: block;
      color: #fff;
      margin: 0;
      margin-left: 2px;
      margin-top: 2px;
      background-image: url(../../../static/img/r.png);
    }
  }
  a.r {
    width: 0.6rem;
    height: 0.6rem; 
    padding: 0;
    position: absolute;
    top: 0.2rem;
    left: 6.7rem;
    right: 0.2rem;
    overflow: hidden;
    background: rgba(153, 153, 153, 0.8);
    border-radius: 50%;
    span:first-child{
        margin-left: 0.05rem;
    }
    span {
      display: block;
      width: 0.1rem;
      height: 0.1rem;
      background: #fff;
      border-radius: 50%;
      float: left;
      margin-left: 0.1rem;
      margin-top: 0.25rem;
    }
  }
}
</style>
