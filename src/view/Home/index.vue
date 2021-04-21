<template>
  <div class="home-container " :class="{ open: isOpen }">
    <el-menu
      mode="vertical"
      :default-active="activeMenu"
      router
      class="left-menu"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <el-menu-item
        class="logo"
        index="/home"
        @click="isCollapse = !isCollapse"
      >
        <i class="iconfont iconlogo"></i>
        <span slot="title"
          >rock space <em class="iconfont iconright"></em
        ></span>
      </el-menu-item>
      <el-menu-item index="/home/datastatistics">
        <i class="iconfont icontongji"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      <el-menu-item index="/home/equipment">
        <i class="iconfont iconshebei"></i>
        <span slot="title">设备管理</span>
      </el-menu-item>
      <el-menu-item index="/home/consumables">
        <i class="iconfont iconhaocai1"></i>
        <span slot="title">耗材管理</span>
      </el-menu-item>
      <el-menu-item index="/home/customer">
        <i class="iconfont iconkehu"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
      <el-menu-item index="/home/modeldata">
        <i class="iconfont iconshuju"></i>
        <span slot="title">机型数据</span>
      </el-menu-item>
      <el-menu-item class="bottom-menu" index="/home/exportdata">
        <i class="iconfont icondaochu"></i>
        <span slot="title">导出数据</span>
      </el-menu-item>
      <el-menu-item index="/home/systemsettings">
        <i class="iconfont iconshezhi"></i>
        <span slot="title">系统设置</span>
      </el-menu-item>
      <el-menu-item index="/home/feedback">
        <i class="iconfont iconbangzhu"></i>
        <span slot="title">反馈</span>
      </el-menu-item>
      <!-- <el-menu-item @click="isCollapse = false" index="/home/serviceinformation">
        <i class="iconfont iconbangzhu"></i>
        <span slot="title">服务指南</span>
      </el-menu-item> -->
    </el-menu>
    <div class="clock">
      <i class="iconfont iconshijian"></i>
      <span class="date">{{ date }}</span>
      <span class="time">{{ time }}</span>
      <span></span>
    </div>
    <LanguageSwitching />

    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      date: "",
      time: "",
      isCollapse: true,
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
      let menuArr = path.split("/");
      let firstMenu = `/${menuArr[1]}/${menuArr[2]}`;
      return firstMenu;
    },
    isOpen() {
      return this.isCollapse == true;
    },
  },
  created() {},
  mounted() {
    this.getdate();
    this.timer = setInterval(() => {
      this.getdate();
    }, 1000);
  },
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getdate() {
      // let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      // let week = weeks[time.getDay()];
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      this.getTime();
      this.date = year + "." + month + "." + day; //week;
    },
    getTime() {
      let time = new Date();
      let hour = time.getHours();
      let minutes = time.getMinutes();
      let second = time.getSeconds();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (second < 10) {
        second = "0" + second;
      }
      this.time = hour + ":" + minutes + ":" + second;
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@logo: #1268fb;
// 时间
.clock {
  position: absolute;
  top: 35px;
  left: 250px;
  color: rgb(48, 131, 252);
  .iconshijian {
    font-size: 20px;
    vertical-align: middle;
    padding-right: 8px;
  }
  span {
    vertical-align: middle;
  }
  .time {
    padding-left: 5px;
  }
}

.home-container {
  background-color: #f9f9f9;

  .left-menu {
    position: fixed;
    left: 0;
    top: 0;
    min-width: 100px;
    max-width: 400px;
    height: 100vh;
    background-color: white;
    text-align: center;
    border: none;
    box-shadow: 10px 10px 10px #eee;
    .bottom-menu {
      margin-top: 250px;
    }
    i {
      font-size: 22px;
      color: #979797 !important;
      padding: 0 13px;
    }
    .iconkehu{
      font-size:24px;
    }
    span {
      letter-spacing: 1px;
      font-weight: bold;
      color: #333 !important;
    }
    .is-active {
      span {
        color: @logo !important;
      }
      i {
        color: @logo !important;
      }
    }
    li {
      padding: 0 40px;
    }
    li:hover {
      background: transparent;
      cursor: pointer;
    }
    li:hover i {
      color: @logo !important;
    }
    li:hover span {
      color: @logo !important;
    }
    .logo {
      margin-top: 15px;
      height: 80px;
      i,
      span {
        display: inline-block;
        color: @logo !important;
      }
      em {
        position: absolute;
        bottom: -10px;
        color: #dbdbdb;
      }
      .iconright {
        transform: rotate(180deg);
        -ms-transform: rotate(180deg); /* IE 9 */
        -moz-transform: rotate(180deg); /* Firefox */
        -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
        -o-transform: rotate(180deg);
      }
    }
    .logo:hover em {
      color: @logo;
    }
  }
  .el-menu--collapse {
    width: 100px !important;
  }
  .right-container {
    min-height: calc(100vh - 133px);
    padding: 83px 0 50px 50px;
    padding-left: 240px;
    width: calc(100% - 280px);
  }

}
  .open {
    .clock {
      left: 150px;
    }
    .right-container {
      padding-left: 150px;
      width: calc(100% - 210px);
    }
    /deep/.statistics-container .echarts-container .bottom-container {
      width: 1693px;
      .left {
        width: 1070px;
      }
    }
  }
</style>
