<template>
    <div>
        <h3>请发表评论</h3>
        <textarea maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data() {
            return {msg:''}
        },
        methods:{
            postComments(){
                this.$store.commit('pushComment',this.msg)
                this.$emit('fuc')
            }
        },

    }
</script>

<style  lang="less" scoped>
    h3 {
        font-size: 18px;
        text-align: center;
    }

</style>