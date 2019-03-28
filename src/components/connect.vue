<template>
    <div>
        <input type="text" placeholder="您的姓名">
        <input type="text" placeholder="您的电话" v-model="phone">
        <input type="email" placeholder="您的邮箱" v-model="email">
        <div class="btn mui-text-center">
            <button class="mui-btn-primary mui-text-center " @click="test">提交</button>
        </div>
    </div>
</template>

<script>
    import mui from '../lib/mui/js/mui'

    export default {
        data() {
            return {phone: '', email: ''}
        },
        methods: {
            test() {
                if (!(/^1[34578]\d{9}$/.test(this.phone)) && !(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.email))){
                    mui.toast('您输入的手机号码跟邮箱有误')
                }
                    else if (!(/^1[34578]\d{9}$/.test(this.phone))) {
                        mui.toast('您输入的手机号码有误')
                    } else if (!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.email))) {
                        mui.toast('您输入的邮箱有误')
                    } else {
                        mui.toast('提交成功')
                    }
            }
        },
        watch: {}
    }
</script>

<style lang="less" scoped>

</style>