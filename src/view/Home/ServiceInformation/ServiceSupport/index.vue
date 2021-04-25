<template>
  <div class="serviceSupport-container">
    <div class="top-menu">
      <router-link to="/home/serviceinformation">服务指南</router-link>
      &gt;
      <router-link to="/home/serviceinformation/servicesupport"
        >问题反馈</router-link
      >
    </div>
    <div class="feedback-container">
      <h3>
        问题反馈
        <router-link to="/home/serviceinformation/questions"
          >我要提问 <i class="iconfont iconright"></i
        ></router-link>
      </h3>
      <el-tabs v-model="activeMenu" @tab-click="handleClick">
        <el-tab-pane
          label="全部问题 (10)"
          name="/home/serviceinformation/servicesupport/allquestions"
        >
        </el-tab-pane>
        <el-tab-pane
          label="等待解答 (2)"
          name="/home/serviceinformation/servicesupport/waitingforanswers"
        >
        </el-tab-pane>
        <el-tab-pane
          label="已解答 (6)"
          name="/home/serviceinformation/servicesupport/answered"
        >
        </el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    activeMenu: {
      get() {
        const route = this.$route;
        const { meta, path } = route;
        // if set path, the sidebar will highlight the path you set
        // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
        return path;
      },
      set: function() {},
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClick(tab, event) {
      this.$router.push({ path: tab.paneName });
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@logo: #0268fc;
@shadow: 5px 5px 10px #eee;
.serviceSupport-container {
  /deep/.el-tabs {
    margin-bottom: 15px;
    .el-tabs__active-bar {
      background-color: @logo;
      height: 3px;
    }
    .el-tabs__item {
      font-size: 14px;
      color: #333;
      border: none;
    }
    .is-active {
      color: @logo;
    }
    .el-tabs__item:hover {
      color: @logo;
    }
  }
  /deep/.el-table {
    margin: 0;
    // width: 100%;
    .el-table__row {
      background-color: transparent;
    }
    .cell {
      padding: 0;
    }
    td,
    th.is-leaf {
      border-bottom: 1px solid #ebeef5 !important;
    }
    .type {
      display: inline-block;
      text-align: center;
      border-radius: 50%;
      color: white;
      width: 25px;
      height: 25px;
      line-height: 25px;
    }
    .type-v1 {
      background-color: #33ac2e;
    }
    .type-v2 {
      background-color: #f7c137;
    }
    .type-v3 {
      background-color: #ff5627;
    }
    .time {
      color: #888;
    }
    .answered {
      color: #33ac2e;
    }
  }
  .feedback-container {
    margin-top: 20px;
    background-color: white;
    box-shadow: @shadow;
    min-height: 700px;
    padding: 50px 25px 20px;
    h3 {
      font-size: 16px;
      padding-bottom: 20px;
      a {
        float: right;
        font-size: 14px;
        font-weight: normal;
        i {
          font-weight: bold;
          color: @logo;
        }
      }
    }
  }
}
</style>
