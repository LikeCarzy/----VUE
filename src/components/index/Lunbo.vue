<template>
  <div class="swiper-container" id="lunbo">
    <div class="swiper-wrapper">
      <div class="swiper-slide sl1"><img src="https://img1-lemall.letvimg.com/le-cloud/s-pc/resource/img/2019-01-23/201901/1548246508918.jpg" alt=""></div>
      <div class="swiper-slide sl2"><img src="https://img1-lemall.letvimg.com/le-cloud/s-pc/resource/img/2019-01-07/201901/1546852121835.jpg" alt=""></div>
      <div class="swiper-slide sl3"><img src="https://img0-lemall.letvimg.com/le-cloud/s-pc/resource/img/2019-01-02/201901/1546413872122.jpg" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Lunbo",
  mounted () {
    new Swiper('#lunbo',{
      loop: true, // 循环模式选项
      autoplay: true, //可选选项，自动滑动
      freeMode: true,
      simulateTouch: true,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination"  //分页
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 4rem;
  position: relative;
  // top: -1rem;
  .swiper-wrapper {
    width: 100%;
    height: 4rem;
    .swiper-slide {
      background: red;
      width: 100%;
      height: 4rem;
    }
  }
}
</style>

