<template>
  <div class="allQuestions-container">
    <el-table
      class="table-data"
      :data="
        searchData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      :show-header="false"
    >
      <el-table-column prop="type" width="30" >
        <template slot-scope="scope">
          <p class='type' :class="{'type-v1':scope.row.type=='v1','type-v2':scope.row.type=='v2','type-v3':scope.row.type=='v3',}">{{scope.row.type}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="problem"  >
      </el-table-column>
      <el-table-column prop="time" width="200" class-name="time">
      </el-table-column>
      <el-table-column prop="state" width="200">
        <template slot-scope="scope">
          <p :class="{answered:scope.row.state=='已解答'}">{{scope.row.state}}</p>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      :pager-count="5"
      layout="total, prev, pager, next,slot"
      :total="data.length"
    >
      <span>共 {{ Math.ceil(data.length / 10) }} 页</span>
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
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
      data: [
        {
          type:'v2',
          problem:'客户端提示:未连接膜切机',
          time:'1小时前',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'三天前',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'昨天',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'4月23日',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'2020年12月2日',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'2020年12月2日',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'2020年12月2日',
          state:'已解答'
        },
        {
          type:'v2',
          problem:'客户端提示:未连接膜切机',
          time:'2020年12月2日',
          state:'已解答'
        },
        {
          type:'v3',
          problem:'客户端提示:未连接膜切机',
          time:'2020年12月2日',
          state:'已解答'
        },
       
      ],
      search: "",
    };
  },
  computed: {
    searchData: function() {
      var search = this.search;
      //此处的etquestions均为data, 这个etquestions.content.title是根据自己的需要写,一般写data
      if (search) {
        return this.data.filter((item) => {
          if (item.amount1.indexOf(search) != -1) {
            return item;
          }
        });
      }
      return this.data;
    },
  },
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

</style>
