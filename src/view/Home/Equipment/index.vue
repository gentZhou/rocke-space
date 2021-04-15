<template>
  <div class="equipment-container">
    <div class="top-option">
      <span>客户选择</span>
      <el-select
        v-model="value"
        filterable
        placeholder="全部代理"
        popper-class="select1"
      >
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>设备工作详情</span>
      <el-select
        v-model="value"
        filterable
        placeholder="全部设备"
        popper-class="select1"
      >
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        v-model="value"
        filterable
        placeholder="设备类型"
        popper-class="select1"
      >
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input placeholder="请输入设备SN/关键字" />
      <el-button icon="iconfont iconshuaxin"></el-button>
    </div>
    <div class="table-container">
      <el-table
        class="table-data"
        :data="data.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
        header-align="center"
      >
        <el-table-column type="index" label="编号" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="设备类型" align="center">
        </el-table-column>

        <el-table-column
          prop="amount1"
          label="设备SN"
          align="center"
          class-name="SN"
        >
          <template slot-scope="scope">
            <span @click="toDetail">{{ scope.row.amount1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="amount2" label="切膜数量" align="center">
        </el-table-column>
        <el-table-column prop="amount3" label="最后一次上线时间" align="center">
        </el-table-column>
        <el-table-column
          prop="amount3"
          label="操作"
          align="center"
          class-name="operation"
          width="300"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.tag"
              active-text="开启"
              inactive-text="禁用"
              active-color="#05C985"
              inactive-color="rgba(40,40,40,0.1)"
            >
            </el-switch>
            <span style="padding-right:30px;" @click="dialogFormVisible = true"
              >编辑</span
            >
            <span style="padding-right:30px;" @click="toDetail">详情</span>
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
      <el-dialog
        title="编辑设备"
        :visible.sync="dialogFormVisible"
        width="700px"
      >
        <el-form :model="form">
          <el-form-item label="设备SN" :label-width="formLabelWidth">
            <p>b36aa4492a088f8db</p>
          </el-form-item>
          <el-form-item label="客户名称" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="请输入"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="店铺" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="请输入"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="请输入"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="请输入"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="请输入"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="编辑设备信息" :label-width="formLabelWidth">
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
  </div>
</template>

<script>
export default {
  name: "Equipment",

  props: {},
  data() {
    return {
      options1: [
        {
          value: "1",
          label: "全部代理",
        },
        {
          value: "2",
          label: "华为-北京市-代表处",
          disabled: true,
        },
        {
          value: "3",
          label: "华为-重庆市-代表处",
        },
        {
          value: "4",
          label: "华为-青海省-代表处",
        },
        {
          value: "5",
          label: "华为-安慰省-代表处",
        },
      ],
      options3: [
        {
          value: "1",
          label: "设备类型",
        },
        {
          value: "2",
          label: "华为-北京市-代表处",
          disabled: true,
        },
        {
          value: "3",
          label: "华为-重庆市-代表处",
        },
        {
          value: "4",
          label: "华为-青海省-代表处",
        },
        {
          value: "5",
          label: "华为-安慰省-代表处",
        },
      ],
      value: "",
      data: [
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "哈哈哈哈",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987126",
          name: "哈哈哈哈",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
      currentPage: 1,
      pagesize: 13,
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
    toDetail() {
      this.$router.push({ path: "/home/equipment/details" });
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@shadow: 0px 0px 8px 8px #eee;
@logo: #0268fc;
.equipment-container {
  .top-option > * {
    margin-right: 15px;
  }
  .top-option {
    white-space: nowrap;
    span {
      font-weight: bold;
    }
    .el-input {
      width: 200px;
    }
    .el-button {
      background-color: @logo;
      color: white;
      border-radius: 30px;
      padding: 12px 30px;
      margin-left: 20px;
    }
  }
  .table-container {
    border-radius: 2px;
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
        span {
          cursor: pointer;
        }
        span:hover {
          color: #1268fb;
        }
      }
      .SN {
        span {
          cursor: pointer;
        }
        span:hover {
          color: @logo;
        }
      }
    }
  }
}
</style>
