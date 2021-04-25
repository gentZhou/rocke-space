<template>
  <div class="serviceInformation-container">
    <div class="search-container">
      <el-input placeholder="请输入关键字"></el-input>
      <el-button icon="iconfont iconsearch_icon-01"></el-button>
    </div>
    <div class="content-container">
      <div class="common-problem">
        <div class="problem-item">ZC1常见问题</div>
        <div class="problem-item">ZC2常见问题</div>
        <div class="problem-item">ZC1 MAX常见问题</div>
        <div class="problem-item">客户端常见问题</div>
      </div>
      <div class="problem-description">
        <ul class="description-item">
          <li>
            刀针无法切开三层膜?
          </li>
          <li>
            刀针无法切开三层膜?
          </li>
        </ul>
        <ul class="description-item">
          <li>
            出现切割异常?
          </li>
          <li>
            出现切割异常?
          </li>
        </ul>
        <ul class="description-item">
          <li>
            耗材数量为0,无法切割?
          </li>
          <li>
            耗材数量为0,无法切割?
          </li>
        </ul>
        <ul class="description-item">
          <li>
            耗材数量为0,无法切割?
          </li>
          <li>
            耗材数量为0,无法切割?
          </li>
        </ul>
        <ul class="description-item">
          <li>
            忘记密码怎么办?
          </li>
          <li>
            忘记密码怎么办?
          </li>
        </ul>
      </div>
      <div class="service-support">
        <h3>服务与支持</h3>
        <div class="service-list">
          <div class="item">
            <p>设备使用咨询 <i class="iconfont iconright"></i></p>
            <p>智能客服 <i class="iconfont iconright"></i></p>
          </div>
          <div class="item">
            <p>膜纸查询 <i class="iconfont iconright"></i></p>
            <p><router-link to="/home/serviceinformation/servicesupport">问题反馈</router-link> <i class="iconfont iconright"></i></p>
          </div>
          <div class="item">
            <p>型号查询 <i class="iconfont iconright"></i></p>
            <p>客户端/APP下载 <i class="iconfont iconright"></i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
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
@logo: #0268fc;
@shadow: 5px 5px 10px #eee;
.serviceInformation-container {
  .search-container {
    text-align: center;
    .el-input {
      width: 400px;
    }
    .el-button {
      border: none;
      background-color: @logo;
      border-radius: 30px;
      padding: 10px 28px;
      margin-left: 20px;
      /deep/i {
        font-size: 20px;
        color: white;
      }
    }
  }
  .content-container {
    border-radius: 2px;
    background-color: white;
    box-shadow: @shadow;
    margin-top: 20px;
    min-height: 740px;
    min-width:1693px;
    .common-problem {
      padding: 70px 40px 40px;
      white-space: nowrap;
      .problem-item {
        display: inline-block;
        width: 364px;
        height: 160px;
        line-height: 160px;
        text-align: center;
        border-radius: 2px;
        background-color: #eee;
      }
      .problem-item + .problem-item {
        margin-left: 50px;
      }
    }
    .problem-description {
      margin: 0 20px;
      padding: 0 20px 70px 50px;
      border-bottom: 1px solid #eee;
      border-width: 15px;
      white-space:nowrap;
      .description-item {
        display: inline-block;
        li {
          list-style: disc;
          margin-top: 20px;
          color: #999;
        }
      }
      .description-item + .description-item {
        margin-left: 230px;
      }
    }
    .service-support {
      padding: 30px 30px;
      h3 {
        font-size: 16px;
      }
      .service-list {
          white-space:nowrap;
        .item {
          display: inline-block;
          p:hover{
              color:@logo;
          }
          p {
              margin-top: 30px;
              cursor:pointer;
            i {
              font-size: 12px;
              font-weight:bold;
            }
          }
        }
        .item + .item {
          margin-left: 500px;
        }
      }
    }
  }
}
</style>
