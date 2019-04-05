<template>
  <mt-header fixed id="header" class="logo" title="搜索">
    <mt-button icon slot="left" >乐视商城</mt-button>
    <mt-button icon="" slot="right" class="gwc" @click="gogwc()"><i class="icon-shopping-cart icon-white"></i> </mt-button>
    <mt-button icon="" slot="right" class="yh" @click="goDl()"><i class="icon-user icon-white"></i> </mt-button>
    <!-- <i class="icon-search"></i>  -->
  </mt-header>
  
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      
    };
  },
  methods: {
    goDl () {
      this.$router.push({ path: './dl' });
    },
    gogwc () {
      this.$router.push({ path: './gwc' });
    }
  }
};
</script>   

<style scoped lang = 'scss'>
#header {
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 1rem;
  padding: 0;
  color: #000;
  position: fixed;
  left:0; top: 0;
}
</style>

