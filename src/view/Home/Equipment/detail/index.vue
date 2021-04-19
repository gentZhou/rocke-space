<template>
  <div class="detail-container">
    <h3><router-link to="/home/equipment">设备管理</router-link> &gt; <em>a3e886Oe25ffab76</em></h3>
    <div class="item-container">
      <h4>设备详情</h4>
      <el-table class="table-data1" :data="tableData1" header-align="center">
        <el-table-column prop="name" label="归属客户" width="180" align="left">
        </el-table-column>
        <el-table-column prop="name" label="代理" align="left">
        </el-table-column>
        <el-table-column prop="contacts" label="联系人" align="left">
        </el-table-column>
        <el-table-column prop="phone" label="电话" align="left">
        </el-table-column>
        <el-table-column prop="state" label="设备当前状态" align="left">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.tag"
              active-text="开启"
              inactive-text="禁用"
              active-color="#05C985"
              inactive-color="rgba(40,40,40,0.1)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="firstTime" label="第一次切膜时间" align="left">
        </el-table-column>
        <el-table-column prop="lastTime" label="最后切膜时间" align="left">
        </el-table-column>
        <el-table-column prop="address" label="地址" align="left">
        </el-table-column>
      </el-table>
    </div>
    <div class="item-container QMdetail">
      <h4>设备切膜详情</h4>
      <div class="choice">
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
        <div class="QMnum">
          <p>切膜总数:200次</p>
          <span>日平均切膜数:200次</span>
          <span>剩余切膜数:20次</span>
        </div>
      </div>
      <div class="modifyDate">
        <ul class="DWMY">
          <li class="D">日</li>
          <li class="W">周</li>
          <li class="M">月</li>
          <li class="Y">年</li>
        </ul>
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
      </div>
      <div class="export"><i class="iconfont icondaochu"></i>导出</div>
      <div style="width: 100%; height: 100%" ref="detail_chart1"></div>
    </div>
    <div class="item-container">
      <h4>切膜记录</h4>
      <TableInterlaced :headerData="QMRecordProp" />
    </div>
    <div class="item-container">
      <h4>膜码详情</h4>
      <TableInterlaced :headerData="codeDetails" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  data() {
    return {
      QMRecordProp: [
        {
          prop: "id",
          label: "编号",
        },
        {
          prop: "materialType",
          label: "切膜产品类型",
        },
        {
          prop: "brand",
          label: "切膜产品品牌",
        },
        {
          prop: "modelNameCn",
          label: "切膜产品型号",
        },
        {
          prop: "modelNameEn",
          label: "属性1",
        },
        {
          prop: "size",
          label: "属性2",
        },
        {
          prop: "updateTime",
          label: "属性3",
        },
        {
          prop: "updateTime",
          label: "剩余切膜次数",
        },
        {
          prop: "updateTime",
          label: "切膜时间",
        },
      ],
      codeDetails: [
        {
          prop: "id",
          label: "编号",
        },
        {
          prop: "materialType",
          label: "明码",
        },
        {
          prop: "brand",
          label: "膜纸客户",
        },
        {
          prop: "modelNameCn",
          label: "数量/盒",
        },
        {
          prop: "modelNameEn",
          label: "激活状态",
        },
        {
          prop: "updateTime",
          label: "激活日期",
        },
       
      ],
      tableData1: [
        {
          name: "代理1",
          contacts: "小七",
          phone: 15875506936,
          state: true,
          firstTime: "2019-01-10 15:00",
          lastTime: "2021-01-03 12:00",
          address: "深圳南山西丽万科云城17楼",
        },
      ],
      chart1: null,
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init();
  },
  watch: {},
  methods: {
    init() {
      this.chart1 = this.$echarts.init(this.$refs.detail_chart1);
      let option1 = {
        grid: {
          left: "4%",
          right: "4%",
          top: "30%",
          bottom: "16%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: {
          type: "category",
          data: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
            "23",
            "33",
            "234",
            "3",
            "3",
          ],
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260, 300, 150, 100, 150, 200],
            type: "line",
            smooth: 0.5,
            lineStyle: {
              color: "#1268FB",
              width: 1,
            },
            itemStyle: {
              color: "#1268FB",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0.1,
                    color: "#1268FB", // 0% 处的颜色
                  },

                  {
                    offset: 0.8,
                    color: "#F6FAFF", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              opacity: 0.3,
            },
          },
        ],
      };
      this.chart1.setOption(option1);
      window.addEventListener("resize", () => {
        this.chart1.resize();
      });
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@logo: #0268fc;
@hoverLogo: #1f8efa;
.detail-container {
  .item-container {
    overflow: hidden;
    margin-top: 20px;
    box-shadow: 5px 5px 10px #eee;
    background-color: white;
    border-radius: 2px;
    h4 {
      padding: 22px 0 0 33px;
      font-size: 16px;
    }
  }
  .QMdetail {
    height: 550px;
    position: relative;
    .choice {
      position: absolute;
      z-index: 9;
      top: 70px;
      left: 30px;
      .el-dropdown {
        margin-right: 10px;
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
        padding: 12px 30px;
        margin-left: 20px;
        border-radius: 30px;
      }
      .QMnum {
        margin-top: 20px;
        p {
          margin-bottom: 10px;
        }
        span {
          color: #666;
          padding-right: 20px;
        }
      }
    }
    .modifyDate {
      position: absolute;
      z-index: 9;
      right: 40px;
      top: 140px;
      .DWMY {
        border-radius: 25px;
        border: 1px solid #eeeeee;
        float: left;
        li {
          border-radius: 30px;
          padding: 8px 24px;
          float: left;
          cursor: pointer;
        }
        li:hover {
          background-color: @logo;
          color: white;
        }
      }
      .el-select {
        margin-left: 25px;
      }
    }
    .export {
      z-index: 9;
      position: absolute;
      right: 40px;
      top: 70px;
      color: @logo;
      border: 2px solid @logo;
      border-radius: 30px;
      vertical-align: middle;
      padding: 0px 12px 0px 15px;
      cursor: pointer;
      i {
        display: inline-block;
        transform: rotate(-90deg);
        -ms-transform: rotate(-90deg); /* IE 9 */
        -moz-transform: rotate(-90deg); /* Firefox */
        -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
        -o-transform: rotate(-90deg); /* Opera */
        font-size: 22px;
        padding-bottom: 10px;
        vertical-align: middle;
      }
    }
    .export:hover {
      color: @hoverLogo;
      border-color: @hoverLogo;
    }
  }
  .table-data1 {
    margin: 10px 31px 32px 31px;
    width: calc(100% - 62px);
    /deep/.el-table__row:nth-child(odd) {
      background-color: #f8f9fa;
    }
  }
  .el-switch {
    position: relative;
    right: 35px;
  }
}
</style>
