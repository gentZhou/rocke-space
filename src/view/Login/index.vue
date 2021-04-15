<template>
  <div class="login-container">
    <div class="box1"></div>
    <div class="box2"></div>

    <div class="login-bg">
      <div class="login-content">
        <h3 class="title">
          登陆
        </h3>
        <el-form :model="formLogin">
          <el-form-item label="">
            <i class="iconfont iconuseL"></i>
            <el-input v-model="formLogin.mail" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input
            type="password"
              v-model="formLogin.password"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input class="last-input" v-model="formLogin.code" placeholder="验证码"></el-input>
          </el-form-item>
          <el-form-item>
          <el-checkbox v-model="formLogin.agreement">7天免登陆</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" type="primary" @click="onSubmit">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      formLogin: {
        mail: "15877506936@163.com",
        password: "",
        code: "",
        agreement: false,
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onSubmit(){
      this.$router.push({path:'/home'})
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
.el-form-item{
    margin-bottom:0;
  }
  .el-input {
    background-size:100% 100%;
    .el-input__inner {
      background: transparent;
      border:none;
      padding-left:0;
      padding-right:0;
      border-bottom:1px solid #eee;
      border-radius: 0;
    }
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: rgb(0,192,211)  !important;
}
  
.login-container {
  width: 100vw;
  height: 100vh;
  background: #666;
  .login-bg {
    width: 700px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background: white;
    .login-content {
      width: 300px;
      position: absolute;
      top: 50%;
      left: 120px;
      transform: translateY(-50%);
      // background:rgb(0,192,211);
      .title {
        font-size: 24px;
        margin-bottom: 60px;
      }
      .el-input {
        margin-bottom: 30px;
      }
      .last-input{
        margin-bottom:0;
      }
      .submit{
        width:100%;
      }
    }
  }
}
</style>
