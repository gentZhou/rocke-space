<template>
  <div class="statistics-container">
    <div class="statistics-content">
      <div class="month item" @click="toDatastatistics">
        <h4>这个月切膜总数</h4>
        <span><em>2,000</em>次</span>
        <p class="describe top">
          上个月切膜总数<strong>20,0000</strong>次
        </p>
        <p class="describe bottom">
          切膜总数<strong>20,0000</strong>次
        </p>
        <div class="Jump">
          <i class="iconfont icontongji"></i>
          <span>数据统计</span>
          <em class="iconfont iconMOREsvg" ></em>
        </div>
      </div>
      <div class="week item" @click="toEquipment">
        <h4>一周未工作设备</h4>
        <span><em>2,567</em>次</span>
        <p class="describe">
          总设备<strong>20,0000</strong>次
        </p>
        <div class="Jump">
          <i class="iconfont iconshebei"></i>
          <span>设备管理</span>
          <em class="iconfont iconMOREsvg" ></em>
        </div>
      </div>
      <div class="total item" @click="toModeldata">
        <h4>机型数据</h4>
        <span><em>18,000</em>次</span>
        <div class="Jump">
          <i class="iconfont iconshuju"></i>
          <span>数据查询</span>
          <em class="iconfont iconMOREsvg" ></em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toDatastatistics(){
      this.$router.push({path:'/home/datastatistics'})
    },
    toEquipment(){
      this.$router.push({path:'/home/equipment'})
    },
    toModeldata(){
      this.$router.push({path:'/home/modeldata'})
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
.statistics-container {
  float: left;
  .statistics-content {
    width: 1200px;
    height: 600px;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    h4 {
      font-size: 14px;
      margin-bottom: 24px;
    }
    .item {
      cursor: pointer;
      width: calc(33.33% - 14px);
      height: 100%;
      box-shadow: 5px 5px 10px #eee;
      border-radius: 2px;
      float: left;
      box-sizing: border-box;
      padding: 100px 30px;
      position: relative;
      .Jump {
        // line-height:30px;
        position: absolute;
        left: 30px;
        bottom: 90px;
        i {
          font-size: 22px;
          vertical-align: middle;
          padding-right: 12px;
          color: rgb(28, 110, 251);
        }
        span {
          font-size: 16px;
          font-weight: bold;
          vertical-align: middle;
          padding-right: 180px;
        }
        em {
          display: inline-block;
          vertical-align: middle;
          font-weight: bold;
          font-size: 16px;
          color: white;
          width: 50px;
          height: 50px;
          background-color: #1268fb;
          line-height: 50px;
          text-align: center;
          border-radius: 50%;
        }
      }
      span {
        em {
          font-size: 38px;
          font-weight: bold;
        }
      }
      .top {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      p {
        color: #666;
        strong {
          margin-left: 2px;
          font-size: 16px;
          color: #1268fb;
        }
      }
    }
    .item + .item {
      margin-left: 20px;
    }
    .month em,
    .total em {
      color: #ff5627;
    }
    .month {
      background: white url("../../../assets/home-bg1.png") no-repeat bottom
        left;
      background-size: 101% auto;
    }
    .week {
      color: white;
      background: #1f8efa url("../../../assets/home-bg2.png") no-repeat bottom
        left;
      background-size: 101% auto;
      p {
        margin-top:20px;
        color: white;
        strong {
          color: white;
        }
      }
      .iconfont {
        color: white !important;
      }
    }
    .total {
      background: white url("../../../assets/home-bg1.png") no-repeat bottom
        left;
      background-size: 101% auto;
    }
  }
}
</style>
