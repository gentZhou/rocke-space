<template>
  <div class="templatedeatils-container">
    <h4>
      膜码详情
    </h4>
    <hr />
    <table border="1" cellspacing="0">
      <tr>
        <th v-for="item in data">{{ item }}</th>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
      <tr>
        <td v-for="item in data"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TemplateDeatils",
  props: {},
  data() {
    return {
      data: [
        "明码",
        "膜纸客户",
        "数量/盒",
        "激活状态",
        "激活时间",
        "设备SN",
        "设备客户",
        "店铺",
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.templatedeatils-container {
  h4 {
    color: rgb(113, 113, 113);
    font-size: 20px;
  }
  hr {
    border: none;
    height: 1px;
    background-color: rgb(231, 231, 231);
    margin-top: 15px;
    margin-bottom: 30px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border: rgb(231, 231, 231);
    tr {
      th {
        background-color: rgb(205, 233, 255);
        border: none;
        height: 60px;
        color: #666;
      }
      td {
        background-color: rgb(245, 245, 245);
        text-align: center;
        height: 30px;
      }
    }
  }
}
</style>
