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

<style lang="less" scoped></style>
