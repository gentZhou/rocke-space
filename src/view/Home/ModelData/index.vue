<template>
  <div class="ModelData-container">
    <div class="top-data">
      <div class="data1 item">
        <div class="left">
          <div class="title">品牌总数</div>
          <p>200,000+</p>
        </div>
        <div class="right">
          <div class="title">机型总数</div>
          <p>200,000+</p>
        </div>
        <em class="line"></em>
      </div>
      <div class="data2 item">
        <div class="pie-container">
          <h4>机型数据总数</h4>
          <div ref="pie" style="width:100%;height:100%;"></div>
        </div>
        <ul class="pieList">
          <li class="pieItem">
            <i style="backgroundColor:#05C985"></i>
            <span>手机</span>
            <em>2356</em>
          </li>
          <li class="pieItem">
            <i style="backgroundColor:#1F8EFA"></i>
            <span>平板</span>
            <em>6544</em>
          </li>
          <li class="pieItem">
            <i style="backgroundColor:#FFAB4F"></i>
            <span>相机</span>
            <em>5678</em>
          </li>
          <li class="pieItem">
            <i style="backgroundColor:#843FA0"></i>
            <span>手表</span>
            <em>9035</em>
          </li>
          <li class="pieItem">
            <i style="backgroundColor:#EE423D"></i>
            <span>pos机</span>
            <em>8953</em>
          </li>
          <li class="pieItem">
            <i style="backgroundColor:#BD10E0"></i>
            <span>游戏机</span>
            <em>8035</em>
          </li>
        </ul>
      </div>
      <div class="data3 item">
        <h4>规格尺寸</h4>
        <div class="S size">S</div>
        <div class="M size">M</div>
        <div class="L size">L</div>
        <div class="XL size">XL</div>
      </div>
    </div>
    <div class="options-container">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input placeholder="请输入设备SN/关键词" />
    </div>
    <div class="table-container">
      <TableInterlaced :headerData="tablePorp" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelData",
  props: {},
  data() {
    return {
      pie: null,
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
      value: "",
      switchValue: false,
      tablePorp: [
        {
          label: "素材ID",
          prop: "id",
        },
        {
          label: "素材类型",
          prop: "materialType",
        },
        {
          label: "素材品牌",
          prop: "materialType",
        },
        {
          label: "型号名称（中文）",
          prop: "materialType",
        },
        {
          label: "型号名称（英文）",
          prop: "materialType",
        },
        {
          label: "规格尺寸",
          prop: "materialType",
        },
        {
          label: "更新时间",
          prop: "materialType",
        },
      ],
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
      this.pie = this.$echarts.init(this.$refs.pie);
      let option = {
        color: [
          "#FFAB4F",
          "#EE423D",
          "#BD10E0",
          "#843FA0",
          "#1F8EFA",
          "#05C985",
        ],
        tooltip: {
          trigger: "item",
        },
        graphic: {
          elements: [
            {
              type: "text",
              left: "center",
              top: "59%",
              style: {
                text: "224", //这里改用实际值
                textAlign: "center",
                fill: "darkgray",
                width: 30,
                height: 25,
                fontSize: 14,
                color: "red",
              },
            },
          ],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            top: "25%",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 2356, name: "手机" },
              { value: 6544, name: "平板" },
              { value: 5678, name: "相机" },
              { value: 9035, name: "手表" },
              { value: 8953, name: "pos机" },
              { value: 8035, name: "游戏机" },
            ],
          },
        ],
      };
      this.pie.setOption(option);
      window.addEventListener("resize", () => {
        this.pie.resize();
        // this.myChart3.resize();
      });
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
@shadow: 0 0px 8px 8px #eee;
@logo: #1268fb;

.ModelData-container {
  .top-data {
    // width: 1603px;
    height: 190px;
    white-space: nowrap;
    .item {
      background-color: #fff;
      box-shadow: @shadow;
      display: inline-block;
      height: 100%;
    }
    .data1 {
      width: calc(100% - 1200px);
      position: relative;
      .left,
      .right {
        float: left;
        width: 50%;
        text-align: center;
        .title {
          margin-top: 35px;
          font-weight: bold;
        }
        p {
          margin-top: 44px;
          font-size: 18px;
          color: @logo;
          font-weight: bold;
        }
      }
      .line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1px;
        height: 65px;
        background-color: #eee;
      }
    }
    .data2 {
      width: 840px;
      margin-left: 22px;
      .pie-container {
        width: 250px;
        height: 100%;
        float: left;
        margin-left: 50px;
        position:relative;
        h4{
          position:absolute;
          left:50%;
          top:35px;
          transform: translateX(-50%);
        }
      }
      .pieList {
        float: left;
        width: 450px;
        padding-top: 50px;
        .pieItem {
          width: 130px;
          float: left;
          vertical-align: middle;
          margin-top: 15px;
          i {
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            vertical-align: middle;
          }
          span {
            padding-left: 10px;
            vertical-align: middle;
          }
          em {
            float: right;
            color: #98a7b9;
            line-height: 20px;
          }
        }
        .pieItem:nth-child(odd) {
          margin-right: 130px;
        }
      }
    }
    .data3 {
      width: 320px;
      float: right;
      position: relative;
      h4 {
        padding: 28px 0 0 35px;
      }
      .size {
        position: absolute;
        border-radius: 50%;
        text-align: center;
        // font-weight: bold;
        font-size: 20px;
        cursor: pointer;
      }
      .S {
        left: 35px;
        top: 120px;
        line-height: 40px;
        width: 40px;
        height: 40px;
        color: #4c249d;
        background-color: rgb(237, 233, 245);
      }
      .M {
        left: 90px;
        top: 70px;
        line-height: 45px;
        width: 45px;
        height: 45px;
        color: #d63649;
        background-color: rgb(247, 215, 219);
      }
      .L {
        left: 150px;
        top: 100px;
        line-height: 48px;
        width: 48px;
        height: 48px;
        color: #1f8efa;
        background-color: rgb(210, 232, 254);
      }
      .XL {
        left: 220px;
        top: 50px;
        line-height: 65px;
        width: 65px;
        height: 65px;
        color: #33ac2e;
        background-color: rgb(214, 238, 213);
      }
    }
  }
  .options-container {
    white-space: nowrap;
    .el-select {
      margin-right: 25px;
    }
    .el-input {
      width: 300px;
      margin: 35px 0 25px 0;
    }
  }
  .table-container {
    background-color: white;
    padding-top: 26px;
    overflow: hidden;
  }
}
</style>
