<template>
  <div class="swiper-container" id="lunbo">
    <div class="swiper-wrapper">
      <div class="swiper-slide sl1">Slide 1</div>
      <div class="swiper-slide sl2">Slide 2</div>
      <div class="swiper-slide sl3">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Lunbo",
  mounted() {
    new Swiper("#lunbo", {
      loop: true, // 循环模式选项
      autoplay: true, //可选选项，自动滑动
      freeMode: true,
      simulateTouch: true,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination" //分页
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 8rem;
  position: relative;
  // top: -1rem;
  .swiper-wrapper {
    width: 100%;
    height: 8rem;
    .swiper-slide {
      background: blue;
      width: 100%;
      height: 8rem;
    }
  }
}
</style>
