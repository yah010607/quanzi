<!--  -->
<template>
  <div class="my">
    <div class="head">
      <div class="tu"></div>
      <div class="right">
        <p class="name">张俊杰</p>
        <p class="con">
          <span>年龄：18</span>
          <span>
            活跃度
            <span class="num">32</span>
          </span>
        </p>
      </div>
    </div>
    <div class="my-route">
      <router-link to="/apeople">
        <i class="iconfont icon-wode"></i>个人信息
        <span>></span>
      </router-link>
      <router-link to="/comment">
        <i class="iconfont icon-linedesign-01"></i>我的评论
        <span>></span>
      </router-link>
      <router-link to="/cang">
        <i class="iconfont icon-shoucang"></i>个人收藏
        <span>></span>
      </router-link>
    </div>
    <div class="foot-route">
      <router-link to="/cang">
        <i class="iconfont icon-xiugaimima01"></i>修改密码
      </router-link>
      <p>
        <i class="iconfont icon-tuichu"></i>退出
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  computed: {},
  created() {},
  methods: {}
};
</script>
<style scoped >
.my {
  width: 100%;
  height: 100%;
  background: #eee;
}
.my .head {
  display: flex;
  width: 100%;
  height: 100px;
  padding: 15px;
  background: red;
}
.my .head .tu {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: green;
}
.my .head .right {
  padding: 10px 20px;
}
.my .head .right .name {
  height: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}
.my .head .right .con {
  font-size: 12px;
  color: #fff;
}
.my .head .right .con span {
  padding-right: 40px;
}
.my .head .right .con .num {
  font-size: 18px;
}
.my .my-route {
  width: 100%;
  height: 150px;
  background: #fff;
  margin: 20px 0;
}
.my .my-route a {
  display: block;
  width: 100%;
  height: 45px;
  color: #000;
  line-height: 50px;
  text-decoration: none;
  padding-left: 30px;
}
.my .my-route a span {
  padding-left: 220px;
}
.my .my-route a i {
  color: red;
  font-weight: bold;
  padding: 0 5px;
}
.my .foot-route {
  width: 100%;
  height: 100px;
  background: #fff;
}
.my .foot-route a {
  display: block;
  width: 100%;
  height: 45px;
  color: #000;
  line-height: 50px;
  text-decoration: none;
  padding-left: 30px;
}
.my .foot-route a i {
  color: red;
  padding: 0 5px;
  font-weight: bold;
}
.my .foot-route p {
  width: 100%;
  height: 45px;
  color: #000;
  line-height: 50px;
  text-decoration: none;
  padding-left: 30px;
}
.my .foot-route p i {
  width: 30px;
  color: red;
  padding: 0 5px;
  font-weight: bold;
}
</style>
