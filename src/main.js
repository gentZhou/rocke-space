import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
// 默认样式
import "@/styles/reset.less";
import '@/assets/font/iconfont.css';
// 引入echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 使用rem适配
import "@/util/setRem"
import i18n from "@/i18n/i18n";
// 注册语言切换组件
import LanguageSwitching from "@/components/i18";
Vue.component("LanguageSwitching", LanguageSwitching);
// 注册表格公共组件
import TableInterlaced from "@/components/TableInterlaced";
Vue.component("TableInterlaced", TableInterlaced);

Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: (h) => h(App),
});
