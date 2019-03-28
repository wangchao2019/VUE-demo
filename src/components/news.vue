<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？ <span @click="change">评论</span></p>
                    </div>
                </a>
            </li>

        </ul>
        <div style="text-align: center">评论区</div>
        <div class="cmt-list"  v-for="item in comments" v-if="!flag">


                <div class="cmt-body">
                      {{item}}

            </div>

        </div>
        <comment-box v-if="flag" @fuc="change"></comment-box>
    </div>
</template>

<script>
    import comment from './comment.vue'

    export default {

        data() {
            return {
                newsList: [{title: '娱乐', id: 1}, {title: '体育', id: 2}, {title: '社会', id: 3}, {title: '科技', id: 4}],
                flag: false,
                comments: this.$store.state.comments
            }
        },
        methods: {
            change() {
                this.flag = !this.flag
            }
        },
        components: {
            "comment-box": comment
        }
    }
</script>

<style lang="less" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .cmt-list{
        margin: 5px 0;

        .cmt-body{
            line-height: 20px;
            text-indent: 2em;
         }
    }

</style>