<template>
  <div class="table-container">
    <el-table
      class="table-interlaced"
      :data="data.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
      header-align="center"
    >
      <el-table-column
        :type="undefined"
        label="编号"
        width="180"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="name" label="代理" align="center">
      </el-table-column>
      <el-table-column prop="amount1" sortable label="机器数量" align="center">
      </el-table-column>
      <el-table-column prop="amount2" sortable label="切膜总数" align="center">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="日平均切膜数"
        align="center"
      >
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
</template>

<script>
export default {
  props: {
    data:{
      type:Array,
      default:function(){
        return  [
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
      ]
      }
    },
    currentPage:{
      type:Number,
      default:1,
    },
    pagesize:{
      type:Number,
      default:13,
    }
  },
  data() {
    return {
    
    };
  },

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
.table-container {
  width: 100%;
}
.el-table {
  margin: 0 31px;
  width: calc(100% - 62px);
  /deep/.el-table__row:nth-child(odd) {
    background-color: #f8f9fa;
  }
}
</style>
