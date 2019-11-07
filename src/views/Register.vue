<!--  -->
<template>
  <div class="register">
    <p>
      <input type="text" v-model="username" placeholder="请输入账号" />
    </p>
    <p>
      <input type="password" v-model="passwd" placeholder="请输入密码" />
    </p>
    <p>
      <button @click="zhu">注册</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      flag: false,
      data: [],
      username: "",
      passwd: ""
    };
  },
  components: {},
  computed: {},
  created() {},
  methods: {
    //   注册功能
    zhu() {
      let reg = /^[0-9a-zA-Z]{6,20}$/;
      if (!this.username.trim() || !this.passwd.trim()) {
        alert("不能为空");
      } else if (!reg.test(this.passwd)) {
        alert("密码格式错误");
      } else {
        axios.post("/zhuce", { username: this.username, passwd: this.passwd })
          .then(({ data }) => {
            this.data = data;
            if (data.code == 0) {
              alert(data.msg);
            } else if (data.code == 1) {
                this.$router.push('/home/quan')
                
            }
          });
      }
    }
  }
};
</script>
<style scoped>
.register {
  width: 100%;
  height: 300px;
  margin: 50px 0;
}
.register p input {
  width: 200px;
  height: 30px;
  margin: 20px 5px 0 70px;
  outline: none;
}
.register p button {
  width: 100px;
  height: 30px;
  margin: 20px 0 0 120px;
}
</style>