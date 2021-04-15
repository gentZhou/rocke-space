<template>
  <div class="dataSettings-container">
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="产品类别（多选）">
        <el-checkbox label="全选" v-model="checkedAll1"></el-checkbox>
        <el-checkbox-group v-model="checkList1">
          <el-checkbox label="手机"></el-checkbox>
          <el-checkbox label="平板"></el-checkbox>
          <el-checkbox label="相机"></el-checkbox>
          <el-checkbox label="手表"></el-checkbox>
          <el-checkbox label="pos机"></el-checkbox>
          <el-checkbox label="游戏机"></el-checkbox>
          <el-checkbox label="手机"></el-checkbox>
          <el-checkbox label="平板"></el-checkbox>
          <el-checkbox label="相机"></el-checkbox>
          <el-checkbox label="手表"></el-checkbox>
          <el-checkbox label="pos机"></el-checkbox>
          <el-checkbox label="游戏机"></el-checkbox>
          <el-checkbox label="手机"></el-checkbox>
          <el-checkbox label="平板"></el-checkbox>
          <el-checkbox label="相机"></el-checkbox>
          <el-checkbox label="手表"></el-checkbox>
          <el-checkbox label="pos机"></el-checkbox>
          <el-checkbox label="游戏机"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="显示机型数据（多选）">
        <el-checkbox label="全选" v-model="checkedAll2"></el-checkbox>

        <el-checkbox-group v-model="checkList2">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用"></el-checkbox>
          <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="膜码尺寸（多选）">
        <el-checkbox label="全选" v-model="checkedAll3"></el-checkbox>

        <el-checkbox-group v-model="checkList3">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用"></el-checkbox>
          <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="显示品牌（多选）" class="brand">
        <div class="brand-container">
          <i class="iconfont iconsearch_icon-01"></i>
           <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入品牌名"
          popper-class="brand"
          @change="assetChange"
        >
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        </div>
       
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
      form: {},
      checkedAll1: false,
      checkedAll2: false,
      checkedAll3: false,
      checkList1: [],
      checkList2: [],
      checkList3: [],
      options: ["全部", "小米", "OPPO", "华为", "vivo", "魅族", "苹果"],
      value: [],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    assetChange(val) {
      // console.log(val);
      if (this.options.indexOf(val[val.length - 1]) == -1) {
        if (this.value.length > 0) {
          this.value.length = this.value.length - 1;
        }
      }
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@logo: #0268fc;
.dataSettings-container {
  padding: 60px 220px 0 80px;
  .el-form {
    /deep/.el-form-item__label {
      color: #000;
    }
    .el-checkbox {
      color: #000;
    }
    .el-checkbox-group {
      /deep/span {
        color: #666;
      }
    }
    .brand {
      .brand-container{
        position:relative;
      }
      .iconsearch_icon-01{
        position:absolute;
        color:@logo;
        top:0;
        left:15px;
        z-index: 9;
        pointer-events: none;
      }
      /deep/.el-select {
        width: 600px;
        .el-select__tags {
          padding-left: 40px;
          .el-tag.el-tag--info{
            background-color: transparent;
            .el-tag__close{
              background-color: transparent;
              border:1px solid #909399;
            }
            .el-tag__close:hover{
              color:white !important;
              background-color:#B9394A ;
              border-color: #B9394A;
            }
          }
          .el-tag.el-tag--info:hover{
            color:#B9394A;
            border-color:#B9394A;
          }
          .el-tag.el-tag--info:hover .el-tag__close{
            color:#B9394A;
            border-color:#B9394A;
          }
        }
        .el-input__inner::placeholder {
            padding-left: 40px !important;
          }
          /* 谷歌 */
          .el-input__inner::-webkit-input-placeholder {
            padding-left: 40px !important;
          }
          /* 火狐 */
          .el-input__inner:-moz-placeholder {
            padding-left: 40px !important;
          }
          /*ie*/
          .el-input__inner:-ms-input-placeholder {
            padding-left: 40px !important;
          }
      }
    }
    .btn {
      .el-button {
        padding: 12px 38px;
        margin-top: 30px;
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
