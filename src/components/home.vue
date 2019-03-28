<template>
    <div>
    <div>
        <mt-swipe :auto="4000" >
            <mt-swipe-item><img src="../images/13073857_FIRG.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../images/13073857_JBw4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../images/13073857_Q1Wx.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../images/13073857_vrML.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="mui-card">

        <div class="mui-card-header "> C++</div>
        <!--内容区-->
        <div class="mui-card-content">C++是C语言的继承,它既可以进行C语言的过程化程序设计,又可以进行以抽象数据类型为特点的基于对象的程序设计,还可以进行以继承和多态为特点的面向对象...</div>
        <!--页脚，放置补充信息或支持的操作-->
        <div class="mui-card-footer"><a href="https://baike.baidu.com/item/C++/99272" target="_blank">了解更多</a></div>
    </div>
        <div class="mui-card">

            <div class="mui-card-header ">java</div>
            <!--内容区-->
            <div class="mui-card-content ">Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向...承和多态为特点的面向对象...</div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer"><a href="https://baike.baidu.com/item/java/85979" target="_blank" >了解更多</a></div>
        </div>
        <div class="mui-card">

            <div class="mui-card-header ">Python</div>
            <!--内容区-->
            <div class="mui-card-content">Python是一种计算机程序设计语言。是一种动态的、面向对象的脚本语言，最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越来越多被用于独立的、...</div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer "><a href="https://baike.baidu.com/item/Python/407313?fr=aladdin" target="_blank">了解更多</a></div>
        </div>
    </div>

</template>

<script>
    export default {

    }
</script>

<style  lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            text-align: center;

            img {
                 width: 100%;
                height: 100%;
            }
        }
    }
    .mui-card-footer a{
        position: absolute;
        right: 0px;

    }


</style>