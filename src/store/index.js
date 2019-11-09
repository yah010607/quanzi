import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data1: [],
    list: {},
    scdata:[]
  },
  getters:{
    getSCc(state){
      return  state.data1.filter(item=>item.store)
    }
  },
  mutations: {
    //获取全部数据
    setList(state, payload) {
      state.data1 = payload
    }, 
    //获取登录数据
    setObj(state, payload) {
      state.list = payload
    },
    //获取收藏数据
    setSC(state,payload){
      state.scdata=payload
    },

    //点赞功能
    zan(state, id) {
      let obj = state.data1.find(item => item.publishID == id)
      if (!obj.zanFlag) {
        obj.zanNum++
        obj.zanFlag = !obj.zanFlag
      } else {
        obj.zanNum--
        obj.zanFlag = !obj.zanFlag
      }
    },

    //评论功能
    PL(state, id) {
      let obj = state.data1.find(item => item.publishID == id)
      obj.flag = !obj.flag
    },

    //提交评论按钮
    //渲染内容
    QD(state, payload) {
      let obj = state.data1.find(item => item.publishID == payload.id)

      let comObj = {
        "userID":'111',
        "nick": "张三丰",
        "avator": "zhangsanfeng.png",
        "txt": payload.txt
      }
      obj.comment.push(comObj)
      obj.pinglun++
      obj.flag = !obj.flag
    },
    
    //收藏
    // SC(state,id){
    //   let obj = state.data1.find(item => item.publishID == id)
    //   obj.store=!obj.store
    //  state.scdata= state.data1.filter(item=>item.store)
    // }
  },
  actions: {
    //获取数据
    getList({ commit }) {
      Axios.get('/list').then(({ data }) => {
        commit('setList', data)
      })
    },
    //登录数据
    getObj({commit}){
      Axios.post('/login1').then(({data})=>{
          commit("setObj",data)
      })
    },
  //收藏判断是否为true
    getSC({commit},id){
      Axios.post('/shoucang',{id:id}).then(({data})=>{
        commit("setList",data)
      })
    },
    //收藏页的内容
    getSCY({commit}){
      Axios.get('/scy').then(({data})=>{
        commit("setSC",data)
      })
    }
  },
    
  modules: {
  }
})
