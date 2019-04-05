<template>
    <div class="index-box">
        <Header></Header>
        <Lunbo></Lunbo>
        <Nav></Nav>
        <Zxun></Zxun>
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
//首页
import Header from "./index/Header";
import Lunbo from "./index/Lunbo";
import Nav from "./index/Nav";
import Zxun from "./index/Zxun";
import Content from "./index/Conent";
import Footer from "./index/Footer";
export default {
    name: 'Index',
    components: {
        Header,Lunbo,Nav,Zxun,Content,Footer
    }
}
</script>
