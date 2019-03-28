<template>
    <div class="container">
        <mt-header fixed title="随意App"></mt-header>
        <transition>
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab my-footer">
            <router-link class="mui-tab-item-llb " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/news">
                <span class="mui-icon mui-icon-more"></span>
                <span class="mui-tab-label">新闻</span>
            </router-link>
            <router-link class="mui-tab-item-llb" to="/connect">
                <span class="mui-icon iconfont mui-icon-chat"></span>
                <span class="mui-tab-label">联系我们</span>
            </router-link>

        </nav>
    </div>

</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

    .container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }


       .mui-bar-tab .mui-tab-item-llb.mui-active {
           color: #007aff;
       }

    .mui-bar-tab .mui-tab-item-llb {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item-llb .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>