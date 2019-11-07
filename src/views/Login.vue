<!--  -->
<template>
  <div class="login">
    <p>
      <input type="text" v-model="username" placeholder="请输入账号" />
    </p>
    <p>
      <input :type="type" v-model="passwd" placeholder="请输入密码" />
      <span :class="['iconfont' ,flag?'icon-yanjing':'icon-yanjing_bi']" @click="changeEye"></span>
    </p>
    <p class="pp">
      <button @click="deng">登录</button>
      <button @click="zhuce" class="zhuce">注册</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      username: "",
      passwd: "",
      type: "password",
      flag: false
    };
  },
  components: {},
  computed: {},
  created() {},
  methods: {
    /**
     * 改变眼睛
     * 1、改变type属性
     * 2、改变flag
     */

    changeEye() {
      this.flag = !this.flag;
      if (this.flag) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    // 登录功能
    deng() {
      if (!this.username.trim() || !this.passwd.trim()) {
        alert("格式错误");
      } else {
        axios
          .post("/login1", { username: this.username, passwd: this.passwd })
          .then(({ data }) => {
            if (data.code === 0) {
              alert(data.msg);
            } else {
              localStorage.token = data.token;
              this.$router.push("/");
            }
          });
      }
    },
  //注册功能
  zhuce(){
    this.$router.push('/register')
  }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 300px;
  margin: 50px 0;
}
.login p input {
  width: 200px;
  height: 30px;
  margin: 20px 5px 0 70px;
  outline: none;
}
.login .pp{
    width: 200px;
    margin: 20px 0 0 70px;
}
.login .pp button{
  width: 70px;
  height: 30px;
  
  text-align: center;
}
.login .pp .zhuce{
margin-left: 60px;
}
</style>