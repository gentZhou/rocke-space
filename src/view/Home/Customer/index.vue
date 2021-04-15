<template>
  <div class="customer-container">
    <div class="top-option">
      <el-input v-model="value" placeholder="请输入编号/用户名/店铺/手机">
      </el-input>
      <el-button icon="iconfont iconshuaxin " class="search"></el-button>

      <el-button
        class="addBtn"
        icon="el-icon-plus"
        @click="dialogFormVisible = true"
        >新增用户</el-button
      >

      <el-dialog
        title="编辑客户"
        :visible.sync="dialogFormVisible"
        width="700px"
      >
        <el-form :model="form">
          <el-form-item label="上级客户" :label-width="formLabelWidth">
            <el-select v-model="value" placeholder="请选择">
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
          <el-form-item label="用户状态" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
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
    <div class="table-container">
      <el-table
        :data="data.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
        header-align="center"
      >
        <el-table-column
          type="index"
          label="编号"
          width="180"
        ></el-table-column>
        <el-table-column label="膜纸客户" prop="materialType"></el-table-column>
        <el-table-column label="设备数量" prop="materialType"></el-table-column>
        <el-table-column label="上级客户" prop="materialType"></el-table-column>
        <el-table-column label="激活时间" prop="materialType"></el-table-column>
        <el-table-column
          label="操作"
          prop="materialType"
          class-name="operation"
        >
          <template slot-scope="scope">
            <span >编辑</span>
            <i class="iconfont iconbianji" @click="dialogFormVisible=true"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, prev, pager, next,slot"
        :total="data.length"
      >
        <span>共 {{ Math.ceil(data.length / 10) }} 页</span>
      </el-pagination>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      dialogFormVisible: false,
      options: [
        {
          value: "全部耗材",
          label: "全部耗材",
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
      radio: "1",
      formLabelWidth: "150px",
      currentPage: 1,
      pagesize: 13,
      data: [
        {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size: "S(70.85*154.22)",
          updateTime: "2020-10-15 16:04:50",
        },
        {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size: "S(70.85*154.22)",
          updateTime: "2020-10-15 16:04:50",
        },
        {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size: "S(70.85*154.22)",
          updateTime: "2020-10-15 16:04:50",
        },
        {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size: "S(70.85*154.22)",
          updateTime: "2020-10-15 16:04:50",
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@color: #1268fb;
@shadow: 0px 0px 8px 8px #eee;
@logo: #0268fc;
.customer-container {
  .top-option {
    white-space: nowrap;
    margin-top:10px;
    .el-input {
      width: 300px;
    }
    .search {
      background-color: @logo;
      color: white;
      border-radius: 30px;
      padding: 12px 30px;
      margin-left: 20px;
    }
    /deep/.addBtn {
      background-color: @color;
      float: right;
      i,
      span {
        color: white;
      }
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
          background-color: @logo;
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
          background-color: #e1eaf9 !important;
        }
      }
    }
  }
  .table-container {
    margin-top: 26px;
    padding-top: 26px;
    background-color: white;
    box-shadow: @shadow;
    overflow: hidden;
    .el-table {
      margin: 0 31px;
      width: calc(100% - 62px);
      /deep/.el-table__row:nth-child(odd) {
        background-color: #f8f9fa;
      }
      .operation {
        i {
          font-size: 20px;
          color: #bbb;
          display: none;
          cursor: pointer;
        }
        i:hover {
          color: @logo;
        }
      }
      .el-table__body tr:hover i {
        display: inline;
      }
      .el-table__body tr:hover .operation span {
        display: none;
      }
    }
  }
}
</style>
