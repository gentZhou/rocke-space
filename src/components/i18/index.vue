<!-- i18n -->
<template>
  <!-- <el-select
      class="language"
      @change="langChange"
      v-model="value"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select> -->
  <div class="userinfo">
    <el-dropdown @command="handleCommand" class="language">
      <span class="el-dropdown-link">
        {{ value }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in options"
          :key="item.value"
          :command="item.value"
          >{{ item.label }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <i class="iconfont iconlogo"></i>

    <el-dropdown @command="signOut">
      <span class="el-dropdown-link">
        <span class="username">Hi,小七</span>
        <i class="el-icon-arrow-down "></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="基本资料">基本资料</el-dropdown-item>
        <el-dropdown-item command="退出">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="修改用户" :visible.sync="dialogFormVisible" width="700px">
      <el-form :model="form">
        <el-form-item label="上级客户" :label-width="formLabelWidth">
          <el-select v-model="value" disabled placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="客户密码" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            placeholder="请输入"
            autocomplete="off"
          ></el-input>
        </el-form-item>
     
        <el-form-item label="联系地址" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            v-model="form.name"
            placeholder="请输入"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t("message.text"), //使用方式3，需刷新起效
      options: [
        {
          value: "cn",
          label: "中文",
        },
        {
          value: "en",
          label: "English",
        },
      ],
      value: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "150px",
    };
  },
  methods: {
    //语言切换
    // langChange(e) {
    //   localStorage.setItem("lang", e);
    //   this.$i18n.locale = e;
    //   window.location.reload();
    // },
    handleCommand(e) {
      localStorage.setItem("lang", e);
      this.$i18n.locale = e;
      window.location.reload();
    },
    signOut(e) {
      if (e == "基本资料") {
        this.dialogFormVisible=true;
      } else {
        this.$router.push({ path: "/login" });
      }
    },
  },
  mounted() {
    // this.value=localStorage.lang;
    this.options.forEach((item) => {
      if (item.value == localStorage.lang) {
        this.value = item.label;
      }
    });
    // console.log(this.$route)
  },
};
</script>

<style scoped lang="less">
@logo: #0268fc;
.userinfo {
  position: absolute;
  top: 30px;
  right: 50px;
  .language {
    margin-right: 20px;
  }
  .iconlogo {
    display: inline-block;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    background-color: @logo;
    padding: 10px;
    margin-right: 10px;
  }
  .username {
    padding-right: 20px;
  }
}
.el-dropdown-link {
  cursor: pointer;
}

/deep/.el-dialog {
  border-radius: 8px;
  label {
    padding-right: 20px;
  }
  .el-dialog__header {
    background-color: #eee;
    border-radius: 8px 8px 0 0;
    padding-top: 15px;
  }
  .el-input {
    width: 400px;
  }
  .el-textarea {
    width: 400px;
  }
  .submit {
    text-align: center;
    padding-top: 30px;
    .el-button {
      float: none;
      padding: 12px 35px;
      background-color:@logo;
      // margin
    }
    .el-button--default {
      margin-left: 30px;
      background-color: #eee;
      border: none;
      span {
        color: rgb(159, 159, 159);
      }
    }
    .el-button--default:hover {
      background-color: #E1EAF9  !important;
    }
  }
}
</style>
