<template>
  <div class="systemsettings-container">
    <!-- <el-menu
      :default-active="activeMenu"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item index="/home/systemsettings/datasettings"
        >数据设置</el-menu-item
      >
      <el-menu-item index="/home/systemsettings/informaticasettings"
        >个人信息设置</el-menu-item
      >
    </el-menu> -->
    <el-tabs v-model="activeMenu" @tab-click="handleClick">
      <el-tab-pane label="数据设置" name="/home/systemsettings/datasettings">
      </el-tab-pane>
      <el-tab-pane
        label="个人信息设置"
        name="/home/systemsettings/informaticasettings"
      ></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SystemSettings",
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
@logo: #1268fb;
.systemsettings-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0px 8px 8px #eee;
  padding: 20px 40px;
  min-height: 760px;
  /deep/.el-tabs {
    .el-tabs__active-bar {
      background-color: @logo;
      height: 3px;
    }
    .el-tabs__item {
      font-size: 18px;
      font-weight: bold;
      border: none;
    }
    .is-active {
      color: @logo;
    }
    .el-tabs__item:hover {
      color: @logo;
    }
  }
}
</style>
