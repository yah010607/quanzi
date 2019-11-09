<!--  -->
<template>
  <div class>
    <div class="sc" @click="$router.go(-1)">&lt;</div>
    {{getSCc}}
  </div>
</template>

<script>
import {  mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["scdata"]),
    ...mapGetters(['getSCc'])
  },
  created() {
      this.getSCY()
  },
  methods: {
      ...mapActions(['getSCY'])
  }
};
</script>
<style scoped>
.sc {
  width: 50px;
  height: 50px;
  background: #ccc;
  text-align: center;
  line-height: 50px;
}
</style>
