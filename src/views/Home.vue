<template>
  <div class="home">
    <div class="main">
      <router-view />
    </div>
    <div class="foot">
      <router-link to="/home/quan">圈子</router-link>
      <router-link to="/home/my">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main {
  flex: 1;
}
.foot {
  display: flex;
  width: 100%;
  height: 45px;
  line-height: 45px;
}
.foot a {
  flex: 1;
  color: #000;
  text-align: center;
  text-decoration: none;
}
.foot a.router-link-active {
  color: red;
}
</style>
