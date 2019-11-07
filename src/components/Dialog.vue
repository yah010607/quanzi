<!--弹框  -->
<template>
  <div class="tan">
    
    <div class="box">
      <p class="shuru">输入要发布的文本内容...</p>
      <div class="shangchuan"></div>
      <p class="foot">
        <span @click="quxiao">取消</span>
        <span>确定</span>
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
  methods: {
    // 取消弹框 自定义事件
    quxiao() {
      this.$emit("quxiaozi");
    }
  }
};
</script>
<style scoped>
.tan {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);
}
.box {
  width: 300px;
  height: 300px;
  background: #fff;
  margin: 140px 37px;
}
.shuru {
  color: #bbb;
  font-size: 14px;
  padding: 20px;
}
.shangchuan {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  margin: 50px 20px;
  background: #eee;
}
.foot {
  width: 100%;
  height: 40px;
  padding-left: 180px;
}
.foot span {
  color: red;
  padding-left: 20px;
}

</style>