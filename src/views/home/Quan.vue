<!--  -->
<template>
  <div class="quan">
    <div class="head">
      <i class="iconfont icon-zhaopian" @click="zhaotan"></i>
      <input type="text" placeholder="试试搜索你的好友名字" @click="sousuo" />
    </div>
    <!-- 渲染列表 -->
    <div class="wrapper">
      <div class="center">
      <div class="item" v-for="item in data1" :key="item.publishID">
        <div class="item-head">
          <p class="se">
            <img :src="item.avator" />
          </p>
          <span class="title">{{item.nick}}</span>
        </div>
        <p class="p1">{{item.txt}}</p>
        <div v-for="(item,index) in item.comment" :key="index">{{item.nick}}：{{item.txt}}</div>
        <div class="p2">
          <span class="span1">
            <i class="iconfont icon-dianzan" :class="{'red':item.zanFlag}" @click="zan(item.publishID)"></i>
            {{item.zanNum}}
          </span>
          <span class="span2">
            <i class="iconfont icon-linedesign-01" @click="PL(item.publishID)"></i>
            {{item.pinglun}}
          </span>
          <span class="iconfont icon-shoucang shoucang" :class="{'red':item.store}" @click="getSC(item.publishID)"></span>
        </div>
        <div v-if="item.flag"> <input type="text" v-model="txt"/><button  @click="QDs({id:item.publishID,txt})">确定</button></div>
      </div>
    </div>
    </div>

    <!-- 弹框 -->
    <transition name="fade" mode="out-in">
      <Dialog v-show="flag" @quxiaozi="qutan" class="enen" />
    </transition>
  </div>
</template>

<script>
import Dialog from "../../components/Dialog.vue";
import { mapState, mapActions, mapMutations } from "vuex";
// import BScroll from 'better-scroll';
// let center = document.querySelector('.center')
//  new BScroll(center)
export default {
  name: "",
  data() {
    return {
      flag: false,
      txt:""
    };
  },
  components: {
    Dialog
  },
  computed: {
    ...mapState(["data1"])
  },
  created() {
    this.getList()
    
  },
  methods: {
    ...mapActions(["getList","getSC"]),
    ...mapMutations(["zan","PL",'QD']),
    QDs(obj){
      this.QD(obj)
      this.txt=""
    },
    //   出现弹框
    zhaotan() {
      this.flag = true;
    },
    // 取消弹框 （子传过来的事件）
    qutan() {
      this.flag = false;
    },
    // 模糊搜索
    sousuo() {
      this.$router.push("/search");
    }
  }
};
</script>
<style >
.shoucang{
  position: absolute;
  top: 15%;
  right: 20px;
}
.red{
  color: red;
}
.quan {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.head {
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.head i {
  display: block;
  color: red;
  width: 27px;
  height: 27px;
  margin: 13px 10px;
  font-size: 22px;
}
.head input {
  width: 300px;
  height: 30px;
  border: 0;
  margin: 10px 5px;
  border-radius: 20px;
  background: #eee;
  text-align: center;
  outline: none;
}
.quan .center {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.quan .center .se {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  overflow: hidden;
}
.quan .center .se img {
  width: 100%;
  height: 100%;
}
.item {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 25px;
  border-bottom: 1px solid red;
  position:  relative;
}
.item .item-head {
  display: flex;
}
.item .item-head span {
  flex: 1;
}
.item .item-head p {
  margin: 10px;
}
.item .item-head span:nth-child(2) {
  padding: 20px 10px;
}
.item .title {
  font-size: 14px;
}
.item .p1 {
  color: #bbb;
  height: 25px;
  font-size: 14px;
  line-height: 25px;
}
.item .p2 {
  display: flex;
  height: 55px;
  font-size: 14px;
  padding-top: 30px;
}
.item .p2 i {
  margin: 0 5px;
  font-weight: bold;
}
.item .p2 span {
  flex: 1;
}
/* .fade-enter-active, */
/* .fade-leave-active { */
  /* transform: translate(-50%, -50%); */
/* } */
/* .fade-enter, .fade-leave-to .fade-leave-active below version 2.1.8 { */
  /* opacity: 0; */
/* } */
.enen {
  position: relative;
  top: 0px;
  animation: myMove 2s infinite;
  -webkit-animation: myMove 2s ;
}
@keyframes myMove {
  0% {
    top: 0px;
  }

  50% {
    top: 100px;
  }

  100% {
    top: 0px;
  }
}

@-webkit-keyframes myMove {
  0% {
    top: 0px;
  }

  50% {
    top: 100px;
  }

  100% {
    top: 0px;
  }
}
</style>