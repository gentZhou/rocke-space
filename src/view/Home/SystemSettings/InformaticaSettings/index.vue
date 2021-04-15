<template>
  <div class="informaticasettings-container">
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="客户名">
             <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="客户密码">
             <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话">
             <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机">
             <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮箱">
             <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系地址">
             <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="btn">
        <el-button class="submit">提交</el-button>
        <el-button class="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
         options: [
        {
          value: "1",
          label: "全部",
        },
        {
          value: "2",
          label: "小米",
        },
        {
          value: "3",
          label: "OPPO",
        },
        {
          value: "4",
          label: "华为",
        },
        {
          value: "5",
          label: "vivo",
        },
        {
          value: "5",
          label: "vivo",
        },
        {
          value: "5",
          label: "vivo",
        },
        {
          value: "5",
          label: "vivo",
        },
        {
          value: "5",
          label: "vivo",
        },
        {
          value: "5",
          label: "vivo",
        },
      ],
      value: [],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.informaticasettings-container {
  padding: 60px 0 0 99px;
  .el-form {
    /deep/.el-form-item__label {
      color: #000;
    }
    .el-select{
        width:400px;
    }
      .btn {
      .el-button {
        padding: 12px 38px;
      }
      .submit {
        border: none;
        background-color: #1268fb;
        color: white;
      }
      .reset {
        border: 1px solid #1268fb;
        color: #1268fb;
        margin-left:30px;
      }
      .reset:hover {
        background-color: rgb(218, 228, 246) !important;
      }
    }
  }
}
</style>
