
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Vuex from 'vuex'
Vue.use(Vuex)
var comment=[]
var store= new Vuex.Store({
    state:{comments:comment},
    mutations:{
      pushComment(state,str){
          state.comments.push(str)
      }
    },
    getters:{

    }
})




import VueResource from 'vue-resource'

Vue.use(VueResource)

import './lib/mui/css/mui.min.css'
import './lib/mui/js/mui'

import './lib/mui/css/icons-extra.css'



import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'






import router from './router.js'



import app from './app.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
   router,
    store
})