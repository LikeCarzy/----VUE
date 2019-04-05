<template>
  <mt-header fixed class="tit" title="搜索">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button icon slot="right" class="pint">
        <div class="fl">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </mt-button>
  </mt-header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
div.fl{
    padding-top: 0.35rem;
    padding-left: 0.25rem;
    span{
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        background: #000;
        border-radius: 0.05rem;
        float: left;
        margin-left: 0.1rem;
    }
}
</style>
