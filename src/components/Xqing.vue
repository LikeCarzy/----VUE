<template>
    <div class="xqing-box">
        <Header></Header>
        <Lunbo></Lunbo>
        <Content></Content>
        <Js></Js>
        <Footer></Footer>
    </div>
</template>

<script>
//详情页
import Header from "./xqing/Header"
import Lunbo from "./xqing/Lunbo"
import Content from "./xqing/Conternt"
import Js from "./xqing/Js"
import Footer from "./xqing/Footer"
export default {
    name: 'Xqing',
    components: {
        Header,Lunbo,Content,Js,Footer
    }
}
</script>
