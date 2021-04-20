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
      


// 客服系统
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
  },
};
</script>

<style lang="less" scoped>

</style>
