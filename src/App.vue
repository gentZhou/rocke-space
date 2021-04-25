<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {

    document.cookie =
      "uct_difference=" + new Date().getTimezoneOffset() + "; path=/";

    var jsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (jsSrc.indexOf("zh") >= 0) {


      (function(w, d, n, a, j) {
        w[n] =
          w[n] ||
          function() {
            (w[n].a = w[n].a || []).push(arguments);
          };
        j = d.createElement("script");
        j.async = true;
        j.src = "https://qiyukf.com/script/c654114d546280dfd1cf56abace263f9.js";
        d.body.appendChild(j);
      })(window, document, "ysf");
      // 假如浏览器语言是中文


      
      ysf("config", {
        uid: "123456789",
        name: "test",
        email: "test@163.com",
        mobile: "13888888888",
        level: 1, // vip级别
        data: JSON.stringify([
          { key: "real_name", value: "啦啦啦啦啦" },
          { key: "mobile_phone", hidden: true },
          { key: "email", value: "13800000000@163.com" },
          {
            index: 0,
            key: "account",
            label: "账号",
            value: "zhangsan",
            href: "http://example.domain/user/zhangsan",
          },
          { index: 1, key: "sex", label: "性别", value: "先生" },
          { index: 2, key: "reg_date", label: "注册日期", value: "2015-11-16" },
          {
            index: 3,
            key: "last_login",
            label: "上次登录时间",
            value: "2015-12-22 15:38:54",
          },
          {
            index: 4,
            key: "avatar",
            label: "头像",
            value: "https://xxxxx.jpg",
          },
        ]),
      });
      if (!localStorage.lang) {
        localStorage.setItem("lang", "cn");
      }
    } else if (jsSrc.indexOf("en") >= 0) {
      if (!localStorage.lang) {
        localStorage.setItem("lang", "en");
      }
    } else {
      // 假如浏览器语言是其它语言
    }
  },
};
</script>

<style lang="less" scoped>

</style>
