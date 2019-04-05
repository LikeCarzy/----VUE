<template>
    <div class="fenlei-box">
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script>
//分类页
import Header from "./fenlei/Header";
import Content from "./fenlei/Content"
export default {
    name: 'Fenlei',
    components: {
        Header,Content
    }
}
</script>
