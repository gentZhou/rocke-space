<template>
  <div class="error">
    <img src="../../assets/404page.png" />
    <div class="text">
      <p>很抱歉,没有找到你要访问的页面~</p>
      <div class="btn">
        <el-button @click="back" class="back">返回上一级</el-button>
        <el-button @click="toHome" class="home">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    back() {
      this.$router.go(-2);
    },
    toHome() {
      this.$router.push({ path: "/home" });
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.error {
  width: 100vw;
  height: 100vh;
  background-color: #f6f6f6;
  text-align: center;
  img {
    width: 776px;
    height: 353px;
    margin-top: 120px;
    // position:relative;
    // right:50px;
  }
  .text {
    p {
      font-size: 18px;
      color: #666;
      margin-top: 25px;
    }
    .btn{
        margin-top:25px;
        .el-button{
            background-color:#0268fc;
            border:none;
            color:white;
        }
        .home{
            margin-left:30px;
        }
    }
  }
}
</style>
