<template>
  <div class="tablePublic-container">
    <el-table
      class="table-interlaced"
      :data="data.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
      header-align="center"
    
    >
      <el-table-column
        align="center"
        v-for="(item,index) in headerData"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :type="item.type"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      :pager-count="4"
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
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size:"S(70.85*154.22)",
          updateTime:"2020-10-15 16:04:50"
        },
         {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size:"S(70.85*154.22)",
          updateTime:"2020-10-15 16:04:50"
        },
         {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size:"S(70.85*154.22)",
          updateTime:"2020-10-15 16:04:50"
        },
         {
          id: "11225",
          materialType: "手机前膜",
          brand: "vivo",
          modelNameCn: "Y9S(缅甸定制)",
          modelNameEn: "Y9S(Myanmar)",
          size:"S(70.85*154.22)",
          updateTime:"2020-10-15 16:04:50"
        },
      ]
      }
    },
    headerData:{
      type:Array,
      default:function(){
        return [
          {
            prop:'id',
            label:"素材ID",
          },
          {
            prop:'materialType',
            label:"素材类型",
          },
          {
            prop:'brand',
            label:"素材品牌",
          },
          {
            prop:'modelNameCn',
            label:"型号名称（中文）",
          },
          {
            prop:'modelNameEn',
            label:"型号名称（英文）",
          },
          {
            prop:'size',
            label:"规格时间",
          },
          {
            prop:'updateTime',
            label:"更新时间",
          },
        ]
        // name: "王小虎",
        //   amount1: "165",
        //   amount2: "4.43",
        //   amount3:
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
.el-table td, .el-table th.is-leaf{
  border:none !important;
}
.el-table::before {
  display:none;
}


.el-pagination{
  text-align:right  !important;
  margin:20px 0;
  margin-right:31px;
  .active{
    width:28px;
    height:28px;
    padding:0;
    min-width: 28px;
    border-radius:50%;
    background-color:#1268FB;
    color:white !important;
  }
}
.tablePublic-container {
  width: 100%;
  margin-top:20px;
}
.el-table {
  margin: 0 31px;
  width: calc(100% - 62px);
  /deep/.el-table__row:nth-child(odd) {
    background-color: #f8f9fa;
  }
}
</style>
