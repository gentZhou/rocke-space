<template>
  <div class="exportData-container">
    <div class="choice">
      <span class="customer">客户选择</span>
      <el-select
        v-model="value"
        filterable
        placeholder="请选择"
        popper-class="select1"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="iconfont iconshaixuan"></i>快速选择<i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>今天</el-dropdown-item>
          <el-dropdown-item>昨天</el-dropdown-item>
          <el-dropdown-item>最近3天</el-dropdown-item>
          <el-dropdown-item>最近7天</el-dropdown-item>
          <el-dropdown-item>最近15天</el-dropdown-item>
          <el-dropdown-item>最近30天</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="block">
        <el-date-picker
          v-model="startTime"
          prefix-icon="iconfont iconrili"
          type="date"
          placeholder="选择日期时间"
        >
        </el-date-picker>
        <i class="iconfont iconright"></i>
        <el-date-picker
          v-model="endTime"
          prefix-icon="iconfont iconrili"
          type="date"
          placeholder=""
        >
        </el-date-picker>
        <div class="now" v-show="endTime == null">现在</div>
      </div>
      <el-button icon="iconfont iconshuaxin"></el-button>
    </div>
    <div class="details">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item index="/home/exportdata/templatedeatils"
          >模板详情</el-menu-item
        >
        <el-menu-item index="/home/exportdata/equipmentdetails"
          >设备膜码详情</el-menu-item
        >
        <el-menu-item index="/home/exportdata/cuttingstatistics"
          >切膜型号排名</el-menu-item
        >
        <el-menu-item index="/home/exportdata/cuttingmodel"
          >设备切膜统计</el-menu-item
        >
      </el-menu>
      <!-- <el-tabs v-model="activeMenu" @tab-click="handleClick">
        <el-tab-pane label="模码详情" name="/home/exportdata/templatedeatils">
        </el-tab-pane>
        <el-tab-pane
          label="设备膜码详情"
          name="/home/exportdata/equipmentdetails"
        ></el-tab-pane>
        <el-tab-pane
          label="切膜型号排名"
          name="/home/exportdata/cuttingstatistics"
        ></el-tab-pane>
        <el-tab-pane
          label="设备切膜统计"
          name="/home/exportdata/cuttingmodel"
        ></el-tab-pane>
      </el-tabs> -->
      <div class="details-container">
        <router-view></router-view>
      </div>
      <el-button type="primary" icon="iconfont icondaochu">导出数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExportData",
  props: {},
  data() {
    return {
      value: "",
      value2: "",
      options: [
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
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
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
.exportData-container {
  .choice {
    white-space: nowrap;
    span {
      color: black;
      font-weight: bold;
      padding-right: 15px;
    }

    .el-dropdown {
      margin-left: 50px;
      .iconshaixuan {
        color: #8a8a8a;
        font-size: 28px;
        position: relative;
        top: 5px;
        padding-right: 8px;
      }
    }
    .el-dropdown:hover span {
      color: @logo;
    }
    .el-dropdown:hover i {
      color: @logo;
    }
    /deep/ .block {
      position: relative;
      display: inline-block;
      background-color: white;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding-right: 16px;
      .now {
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }
      .iconrili {
        color: @logo;
        font-size: 26px;
        padding-left: 10px;
      }
      .el-date-editor {
        width: 150px;
      }
      .el-input input {
        border: none;
        padding-left: 50px;
        padding-right: 0;
      }
    }
    .el-button {
      background-color: @logo;
      color: white;
      border: none;
      padding: 12px 32px;
      margin-left: 20px;
    }
  }
  .details {
    background-color: white;
    margin-top: 20px;
    box-shadow: 5px 5px 10px #eee;
    padding: 30px;
    border-radius: 8px;
    min-height: 680px;
    .el-menu {
      border: none;
      li {
        border: none;
        border-radius: 30px;
        padding: 0 25px;
        height: 45px;
        line-height: 45px;
        margin-right: 20px;
        color: #333;
      }
      li:hover{
        background-color: #E1EAF9;
        color:@logo;
      }
      .is-active {
        background-color: #1268fb !important;
        color: white !important;
      }
    }
    .details-container {
      background-color: white;
      margin-top: 30px;
      border-radius: 8px;
      box-shadow: 5px 5px 10px #eee;
      border: 1px solid #eeeeee;
      padding: 30px 25px;
    }
    /deep/.el-button {
      padding: 10px 15px;
      margin: 70px 0 40px 0;
      background-color: #1268fb;
      i {
        font-size: 22px;
        vertical-align: middle;
        padding-right: 12px;
      }
      span {
        vertical-align: middle;
      }
    }
    .el-button:hover {
      background-color: #4681e7;
    }
  }
  /deep/.el-tabs {
    .el-tabs__active-bar {
      height: 100%;
      border-radius: 4px;
      background-color: @logo;
      padding: 0 20px;
      left: -20px;
    }
    .el-tabs__item {
      position: relative;
      padding: 0 20px;
      z-index: 9;
    }
    .el-tabs__item:hover {
      color: @logo !important;
      cursor: pointer;
      background-color:#E1EAF9;
      border-radius:4px;
    }
    .el-tabs__nav-wrap::after {
      display: none;
    }
    .el-tabs__item.is-active {
      color: white;
    }
  }
}
</style>
