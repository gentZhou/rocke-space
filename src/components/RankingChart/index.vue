<template>
  <div class="rankingChart" :id="chartId"></div>
</template>

<script>
export default {
  //   props: ["chartRef", "color1", "color2", "total"],
  props: {
    chartId: {
      type: String,
      default: "chartId",
    },
    color1: {
      type: String,
      default: "red",
    },
    color2: { type: String, default: "blue" },
    data: {
      type: Number,
      default: 500,
    },
    total: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let id = this.chartId;
      this.chart = this.$echarts.init(document.getElementById("chartId"));
      let option = {
        tooltip: {},
        grid: {
          left: "40%",
          top: 0,
          bottom: 0,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          type: "category",
          data: [
            "fjdfj",
            "sdjfjdfdfdfsafdhk",
            "ewwwe",
            "wew",
            "esdd",
            "1222",
            "22121",
            "22121",
            "2121",
            "2122",
          ],
          offset: 140,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            align: "left",
          },
        },
        series: [
          {
            data: [50, 100, 200, 300, 400, 500, 600, 700, 900, 1000],
            // realtimeSort: true,
            type: "bar",
            label: {
              show: true,
              position: "left",
            },
            showBackground: true,
            backgroundStyle: {
              color: "#F5F5F5",
            },

            itemStyle: {
              color: function(params) {
                // console.log(params);
                if (params.dataIndex > 6) {
                  return {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0.1,
                        color: "#FF8F4F", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#FF5627", // 100% 处的颜色
                      },
                    ],
                    global: false, // 缺省为 false
                  };
                } else {
                  return {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 1,
                        color: "#1268FB", // 0% 处的颜色
                      },
                      {
                        offset: 0.1,
                        color: "#05A1FE", // 100% 处的颜色
                      },
                    ],
                    global: false, // 缺省为 false
                  };
                }
              },
            },
          },
        ],
      };
      this.chart.setOption(option);
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    },
  },
};
</script>

<style scoped lang="less">
.rankingChart {
  position:absolute;
  height: 560px;
  width: 100%;
  bottom:24px;
}
</style>
