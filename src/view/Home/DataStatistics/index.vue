<template>
  <div class="statistics-container">
    <div class="choice" ref="topChoice" :class="{ choiceFixed: choiceFixed }">
      <span class="customer">客户选择</span>
     <div class="customer-select">
       <i class="iconfont iconsearch_icon-01"></i>
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
    <div class="data-statistics">
      <div class="left-data">
        <div class="total">
          <em
            >切膜统计
            <el-popover
              placement="top-start"
              title="切膜总数"
              width="200"
              trigger="hover"
              content="当前所选客户及所选时段内的设备切膜总数"
            >
              <i
                class="iconfont iconbangzhu1"
                slot="reference"
              ></i> </el-popover
          ></em>
          <p><strong>{{total.toLocaleString()}}</strong>次</p>
        </div>
        <div class="whole" @click="toEquipment">
          <em>查看全部<i class="iconfont iconMOREsvg"></i></em>
          <p class="iconfont iconshuju1"></p>
        </div>
      </div>
      <div class="right-data">
        <ul class="dataList">
          <li class="dataItem total">
            <p class="title">
              总设备
              <el-popover
                placement="top-start"
                title="总设备"
                width="200"
                trigger="hover"
                content="当前所选客户及所选时段内的总设备数量"
              >
                <i class="iconfont iconbangzhu1" slot="reference"></i>
              </el-popover>
            </p>
            <p class="num"><strong>2,567</strong>台</p>
          </li>
          <li class="dataItem">
            <p class="title">三天未工作</p>
            <p class="num">
              <strong>100</strong>台<i class="iconfont iconright"></i>
            </p>
          </li>
          <li class="dataItem">
            <p class="title">7天未工作</p>
            <p class="num">
              <strong>50</strong>台<i class="iconfont iconright"></i>
            </p>
          </li>
          <li class="dataItem">
            <p class="title">15天未工作</p>
            <p class="num">
              <strong>300</strong>台<i class="iconfont iconright"></i>
            </p>
          </li>
          <li class="dataItem">
            <p class="title">1个月未工作</p>
            <p class="num">
              <strong>500</strong>台<i class="iconfont iconright"></i>
            </p>
          </li>
        </ul>
        <div class="viewAll" @click="toEquipment">
          <p>查看全部<i class="iconfont iconMOREsvg"></i></p>
          <img src="../../../assets/shuju.png" />
        </div>
      </div>
    </div>
    <div class="echarts-container">
      <ul class="echarts-nav">
        <li
          class="item"
          v-for="(chartItem, index) in chartList"
          :key="index"
          :class="{ active: active == chartItem }"
          @click="selected(chartItem, index)"
        >
          {{ chartItem }}
        </li>
      </ul>


      <div class="chart" ref="chart1Position">
        <h4>
          切膜趋势图
          <el-popover
            placement="top-start"
            title="切膜趋势图"
            width="200"
            trigger="hover"
            content="将自动获取当前所选客户及所选时段内的切膜数据，可根据选项筛选查看膜纸类型及膜纸规格详情"
          >
            <i class="iconfont iconbangzhu1" slot="reference"></i>
          </el-popover>
        </h4>
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
              v-for="item in QMoption"
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
        <div style="width: 100%; height: 100%" ref="chart1"></div>
      </div>
      <div class="chart" ref="chart2Position">
        <h4>
          活跃设备趋势图
          <el-popover
            placement="top-start"
            title="活跃设备趋势图"
            width="200"
            trigger="hover"
            content="将自动获取当前所选客户及所选时段内的总设备及活跃设备的工作详情"
          >
            <i class="iconfont iconbangzhu1" slot="reference"></i>
          </el-popover>
        </h4>
        <div class="modifyDate">
          <ul class="DWMY">
            <li class="D">日</li>
            <li class="W">周</li>
            <li class="M">月</li>
            <li class="Y">年</li>
          </ul>
        </div>
        <div style="width: 100%; height: 100%" ref="chart2"></div>
      </div>
      <div class="chart" ref="chart3Position">
        <h4>
          设备平均切膜趋势图
          <el-popover
            placement="top-start"
            title="设备平均切膜趋势图"
            width="200"
            trigger="hover"
            content="将自动获取当前所选客户及所选时段内的设备平均切膜详情"
          >
            <i class="iconfont iconbangzhu1" slot="reference"></i>
          </el-popover>
        </h4>
        <div class="modifyDate">
          <ul class="DWMY">
            <li class="D">日</li>
            <li class="W">周</li>
            <li class="M">月</li>
            <li class="Y">年</li>
          </ul>
        </div>
        <div style="width: 100%; height: 100%" ref="chart3"></div>
      </div>
      <div class="chart" ref="chart4Position">
        <h4>
          切割机型数据TOP排行
          <el-popover
            placement="top-start"
            title="切割机型数据TOP排行"
            width="200"
            trigger="hover"
            content="将自动获取当前所选客户及所选时段内的设备切割机型数据TOP排行详情"
          >
            <i class="iconfont iconbangzhu1" slot="reference"></i>
          </el-popover>
        </h4>
        <div class="modifyDate">
          <ul class="DWMY">
            <li class="D">日</li>
            <li class="W">周</li>
            <li class="M">月</li>
            <li class="Y">年</li>
          </ul>
        </div>
        <div style="width: 100%; height: 100%" ref="chart4"></div>
      </div>
      <div class="bottom-container">
        <div class="left bottomItem" ref="chart5Position">
          <h4>
            代理详情
            <el-popover
              placement="top-start"
              title="代理详情"
              width="200"
              trigger="hover"
              content="将自动获取当前所选客户及所选时段内的代理相关切膜详情，并可根据升序和降序进行数据浏览"
            >
              <i class="iconfont iconbangzhu1" slot="reference"></i>
            </el-popover>
          </h4>
          <el-table
            class="table-data"
            :data="
              data.slice((currentPage - 1) * pagesize, currentPage * pagesize)
            "
            header-align="center"
            header-row-class-name="bottom-header"
          >
            <el-table-column
              type="index"
              label="编号"
              align="center"
              width="80"
            >
            </el-table-column>
            <el-table-column prop="name" label="代理" align="center">
            </el-table-column>
            <el-table-column
              prop="amount1"
              sortable
              label="总设备数(2,567)"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="amount1"
              sortable
              label="代理设备数(2,567)"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="amount2"
              sortable
              label="切膜总数(200,000)"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="amount3"
              sortable
              label="日平均切膜数(200)"
              align="center"
            >
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
        <div class="right bottomItem" ref="chart6Position">
          <h4>
            设备日平均切膜排行
            <el-popover
              placement="top-start"
              title="设备日平均切膜排行"
              width="200"
              trigger="hover"
              content="将自动获取当前所选客户及所选时段内设备日平均切膜排行前十，或排行后十数据"
            >
              <i class="iconfont iconbangzhu1" slot="reference"></i>
            </el-popover>
          </h4>
          <div class="order">
            <div class="orderItem">升序</div>
            <div class="orderItem">降序</div>
          </div>
          <ul class="ranking">
            <li
              class="rankingItem"
              :class="ranking < 4 ? 'topThree' : ''"
              v-for="ranking in rankingList"
              :key="ranking"
            >
              {{ ranking }}
            </li>
          </ul>
          <RankingChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RankingChart from "@/components/RankingChart";
export default {
  name: "DataStatistics",
  props: {},
  data() {
    return {
      choiceFixed: false,
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
      total:20000,
      startTime: null,
      endTime: null,
      value: "全部类型",
      value1: "",
      value2: "",
      value3: "",
      chart1: null,
      chart2: null,
      data: [
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "哈哈哈哈",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
        {
          id: "12987126",
          name: "哈哈哈哈",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
      currentPage: 1,
      pagesize: 10,
      chartList: [
        "切膜趋势图",
        "活跃设备趋势图",
        "设备平均切膜趋势图",
        "切割机型数据TOP排行",
        "代理详情",
        "设备日平均切膜排行",
      ],
      QMoption: [
        {
          value: "1",
          label: "全部类型",
        },
        {
          value: "2",
          label: "前膜",
        },
        {
          value: "3",
          label: "背膜",
        },
      ],
      active: "切膜趋势图",
      rankingList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init();
    //获取最近7天日期
    // console.log(getDay(0)); //当天日期
    // console.log(getDay(-7)); //7天前日期
    // //获取最近3天日期
    // console.log(getDay(0)); //当天日期
    // console.log(getDay(-3)); //3天前日期
    function getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = doHandleMonth(tMonth + 1);
      tDate = doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
    }
    function doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = "0" + month;
      }
      return m;
    }
    const top = this.$refs.topChoice.offsetTop;
    window.addEventListener("scroll", () => {
      if (this.$refs.topChoice.getBoundingClientRect) {
        if (document.documentElement.scrollTop > top) {
          this.choiceFixed = true;
        } else {
          this.choiceFixed = false;
        }
      }
    });
  },
  watch: {},
  methods: {
    init() {
      this.chart1 = this.$echarts.init(this.$refs.chart1);
      this.chart2 = this.$echarts.init(this.$refs.chart2);
      this.chart3 = this.$echarts.init(this.$refs.chart3);
      this.chart4 = this.$echarts.init(this.$refs.chart4);
      let option = {
        grid: {
          left: "5%",
          right: "3%",
          bottom: "22%",
          top: "20%",
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
              opacity: 0.7,
            },
          },
        },
        series: [
          {
            data: [
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
              150,
              230,
              224,
              218,
              135,
              147,
              260,
              300,
              150,
              100,
              150,
              200,
            ],
            type: "line",
            emphasis: {
              lineStyle: {
                width: 1,
              },
              itemStyle: {
                color: "#0268FC",
                borderColor: "#0268FC",
                borderWidth: 3,
              },
            },
            symbol: "circle",
            symbolSize: 4,

            lineStyle: {
              color: "#FE5528",
              width: 1,
            },
            itemStyle: {
              color: "#FE5528",
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
                    color: "#FF5627", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#4F97FF", // 100% 处的颜色
                  },
                  {
                    offset: 1,
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
      let option2 = {
        grid: {
          left: "6%",
          right: "6%",
          bottom: "22%",
          top: "20%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          show: true,
          icon: "rect",
          itemHeight: 14,
          itemWidth: 14,
          left: "2%",
          top: "5%",
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
              opacity: 0.7,
            },
          },
        },
        series: [
          {
            name: "总设备",
            data: [150, 230, 224, 218, 135, 147, 260, 300, 150, 100, 150, 200],
            type: "bar",
            barWidth: "25%",
            barGap: "0",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#1268FB", // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "#05A1FE", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              opacity: 0.9,
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#0268FC",
              },
            },
          },
          {
            name: "活跃设备",
            data: [200, 150, 300, 220, 110, 110, 200, 230, 150, 100, 150, 200],
            type: "bar",
            barWidth: "25%",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0.1,
                    color: "#FF5627", // 100% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "#FF8F4F", // 0% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              opacity: 0.9,
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#FF5627",
              },
            },
          },
        ],
      };
      let option3 = {
        grid: {
          left: "6%",
          right: "6%",
          bottom: "22%",
          top: "20%",
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
              opacity: 0.7,
            },
          },
        },
        series: [
          {
            data: [200, 150, 300, 220, 110, 110, 200, 230, 150, 100, 150, 200],
            type: "line",
            smooth: 0.5,
            symbol: "none",
            lineStyle: {
              white: 1,
              color: "#1268FB",
              opacity: 0.2,
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
                    offset: 0,
                    color: "#0268FC", // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "#F2FEFF", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              opacity: 0.4,
            },
          },
        ],
      };
      let option4 = {
        grid: {
          left: "6%",
          right: "6%",
          bottom: "22%",
          top: "20%",
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
              opacity: 0.7,
              type: "dashed",
            },
          },
        },
        series: [
          {
            data: [200, 150, 300, 220, 110, 110, 200, 230, 150, 100, 150, 200],
            type: "bar",
            barWidth: "35%",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#0268FC", // 0% 处的颜色
                  },
                  {
                    offset: 0.8,
                    color: "#A5CAFF", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              opacity: 0.8,
            },
          },
        ],
      };
      // 4.传入数据
      this.chart1.setOption(option);
      this.chart2.setOption(option2);
      this.chart3.setOption(option3);
      this.chart4.setOption(option4);
      window.addEventListener("resize", () => {
        this.chart1.resize();
        this.chart2.resize();
        this.chart3.resize();
        this.chart4.resize();
        // this.myChart3.resize();
      });
    },
    toEquipment() {
      this.$router.push({ path: "/home/equipment" });
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    selected(name, index) {
      this.active = name;
      let dom = `chart${index + 1}Position`;
      let position = this.$refs[dom].offsetTop;
      window.scrollTo(0, position-100);
    },
  },
  components: {
    RankingChart,
  },
};
</script>

<style scoped lang="less">
@logo: #0268fc;

.statistics-container {
  .choice {
    white-space: nowrap;
    width: 100%;
    span {
      color: black;
      font-weight: bold;
      padding-right: 15px;
    }
    .customer-select{
      position: relative;
      display:inline-block;
      .iconsearch_icon-01{
        position:absolute;
        z-index: 9;
        top:50%;
        left:12px;
        color:@logo;
        transform: translateY(-50%);
      }
      /deep/.el-input__inner{
        padding-left:40px;
      }
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
  .choiceFixed {
    background-color: #fff;
    padding: 15px 0;
    padding-left: 55px;
    width: calc(100% + 40px);
    position: fixed;
    top: 0;
    z-index: 99;
    transform: translateX(-55px);
    box-shadow: 15px 2px 10px 0 rgb(0 0 0 / 10%);
  }
  .data-statistics {
    margin-top: 30px;
    white-space: nowrap;
    .iconbangzhu1 {
      font-size: 20px;
      position: relative;
      top: 2px;
      padding-left: 8px;
      cursor: pointer;
    }
    .iconbangzhu1:hover {
      color: #bbb;
    }
    .left-data {
      min-width:380px;
      width: calc(100% - 1180px);
      height: 180px;
      background-color: @logo;
      color: white;
      display: inline-block;
      padding: 45px 70px;
      box-sizing: border-box;
      border-radius: 2px;
      .total {
        float: left;
        strong {
          font-size: 26px;
          padding-right: 8px;
        }
      }
      .whole {
        float: right;
        .iconMOREsvg {
          font-size: 14px;
          padding-left: 8px;
        }
        .iconshuju1 {
          font-size: 26px;
        }
        em {
          cursor: pointer;
        }
        em:hover {
          color: #bbb;
        }
      }

      p {
        margin-top: 30px;
      }
    }
    .right-data {
      display: inline-block;
      height: 180px;
      width: 1160px;
      background-color: white;
      box-shadow: 5px 5px 10px #eee;
      margin-left: 20px;
      border-radius: 2px;
      .iconbangzhu1 {
        color: #bbb;
        padding-left: 4px;
      }
      .iconbangzhu1:hover {
        color: @logo;
      }
      .dataList {
        width: 1000px;
        height: 160px;
        float: left;
        .dataItem::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          width: 1px;
          height: 50px;
          transform: translate(0px, -50%);
          background-color: #eee;
        }
        .dataItem {
          width: 20%;
          float: left;
          height: 100%;
          position: relative;
          text-align: center;
          .title {
            font-size: 12px;
            margin-top: 40px;
          }
          .num {
            text-align: center;
            margin-top: 30px;
            display: inline-block;
            position: relative;
            font-size: 12px;
            .iconright {
              position: absolute;
              font-size: 12px;
              right: -15px;
              color: @logo;
              font-weight: bold;
              transform: rotate(-90deg);
              -ms-transform: rotate(-90deg); /* IE 9 */
              -moz-transform: rotate(-90deg); /* Firefox */
              -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
              -o-transform: rotate(-90deg); /* Opera */
            }
            strong {
              color: #ff5627;
              font-size: 24px;
              padding-right: 2px;
            }
          }
        }
        .total {
          .tile {
            color: #0268fc;
          }
          .num strong {
            color: #0268fc;
          }
        }
      }
      .viewAll {
        float: right;
        margin-top: 40px;
        margin-right: 50px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        i {
          font-size: 14px;
        }
        img {
          margin-top: 30px;
        }
      }
      .viewAll:hover {
        color: @logo;
      }
    }
  }
  .echarts-container {
    .echarts-nav {
      margin: 38px 0 30px 0;
      height: 35px;
      white-space: nowrap;
      .item {
        font-size: 16px;
        display: inline-block;
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        margin-right: 20px;
      }

      .item:hover {
        background: rgb(218, 228, 246);
        color: @logo;
      }
      .active {
        background: #1268fb !important;
        color: white !important;
      }
    }
    .chart + .chart {
      margin-top: 25px;
    }
    .chart {
      border-radius:2px;
      height: 480px;
      background-color: white;
      box-shadow: 5px 5px 10px #eee;
      position: relative;
      h4 {
        font-size: 16px;
        font-weight: bold;
        padding: 27px 0 0 32px;
        i {
          cursor: pointer;
          font-size: 20px;
          color: #bbb;
          vertical-align: middle;
          position: relative;
          bottom: 2px;
          font-weight: normal;
        }
        i:hover {
          color: @logo;
        }
      }
      .modifyDate {
        position: absolute;
        z-index: 9;
        right: 40px;
        top: 65px;
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
    }
    .bottom-container {
      width: 1623px;
      height: 700px;
      margin-top: 25px;
      .bottomItem {
        border-radius:2px;
        box-shadow: 5px 5px 10px #eee;
        h4 {
          margin: 38px 0 0 30px;
          font-size: 16px;
          i {
            font-weight: normal;
            cursor: pointer;
            font-size: 20px;
            color: #bbb;
            vertical-align: middle;
            position: relative;
            bottom: 2px;
          }
          i:hover {
            color: @logo;
          }
        }
      }
      .left {
        width: 1000px;
        height: 100%;
        float: left;
        background-color: white;
        .table-data {
          margin: 0 30px;
          width: calc(100% - 60px);
          border: 1px solid #ebeef5;
          margin-top: 33px;
          /deep/.bottom-header th {
            background-color: #f5f5f5;
          }
          /deep/.el-table__row:nth-child(odd) {
            background-color: #fff;
          }
          /deep/ td {
            border-bottom: 1px solid #ebeef5 !important;
          }
        }
        .el-pagination {
          text-align: center;
          margin: 15px 0;
        }
      }
      .right {
        width: 600px;
        height: 100%;
        background-color: white;
        float: right;
        position: relative;
        .order {
          position: absolute;
          top: 70px;
          right: 70px;
          z-index: 9;
          .orderItem {
            float: left;
            border-radius: 40px;
            padding: 8px 15px;
            cursor: pointer;
          }
          .orderItem:hover {
            background-color: @logo;
            color: white;
          }
        }

        .ranking {
          position: absolute;
          bottom: 24px;
          left: 40px;
          color: white;
          display: flex;
          flex-direction: column;
          height: 560px;
          justify-content: space-around;
          // :first-child {
          //   margin-top: 15px;
          // }
          // :last-child {
          //   margin-bottom: 15px;
          // }
          li {
            border-radius: 50%;
            background-color: #1f8efa;
            text-align: center;
            padding: 5px 5px;
          }
          // li {
          //   margin-bottom: 30px;
          // }
          .topThree {
            background-color: #ff5627;
          }
        }
      }
    }
  }
}
</style>
