<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home"></router-link>
      <router-link to="/apeople"></router-link>
      <router-link to="/cang"></router-link>
      <router-link to="/change"></router-link>
      <router-link to="/comment"></router-link>
      <router-link to="/login"></router-link>
      <router-link to="/register"></router-link>
    </div>

      <router-view />
    
  </div>
</template>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
