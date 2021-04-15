<template>
  <div class="Consumables-contaienr">
    <div class="top-option">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="请输入设备SN/关键">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
        <el-table-column prop="brand" label="明码" align="center">
        </el-table-column>
        <el-table-column prop="brand" label="膜纸客户" align="center">
        </el-table-column>
        <el-table-column prop="brand" label="数量/盒" align="center">
        </el-table-column>
        <el-table-column prop="brand" label="激活状态" align="center">
        </el-table-column>
        <el-table-column prop="brand" label="激活时间" align="center">
        </el-table-column>
        <el-table-column prop="brand" label="设备SN" align="center">
        </el-table-column>
        <el-table-column
          prop="brand"
          label="操作"
          align="center"
          class-name="operation"
        >
          <template slot-scope="scope">
            <span>编辑</span>
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
     <el-dialog
        title="编辑客户"
        :visible.sync="dialogFormVisible"
        width="700px"
      >
        <el-form :model="form">
          <el-form-item label="设备SN" :label-width="formLabelWidth">
           <p>a3e8860e25ffab76</p>
          </el-form-item>
          <el-form-item label="所属客户" :label-width="formLabelWidth">
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
          <el-form-item label="备注" :label-width="formLabelWidth">
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
  name: "Consumables",
  props: {},
  data() {
    return {
      options: [
        {
          value: "全部耗材",
          label: "全部耗材",
        },
      ],
      value: "",
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
      dialogFormVisible: false,
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

<style lang="less">
@logo: #0268fc;
.Consumables-contaienr {
  .top-option {
    white-space: nowrap;
    .el-select {
      margin-right: 25px;
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
    background-color: white;
    margin-top: 26px;
    padding-top: 26px;
    box-shadow: 0 0 8px 8px #eee;
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
          display:none;
          cursor: pointer;
        }
        i:hover{
          color:@logo;
        }
      }
      .el-table__body tr:hover i{
        display:inline;
      }
      .el-table__body tr:hover .operation span{
        display:none;
      }
    }
  }
}
</style>
