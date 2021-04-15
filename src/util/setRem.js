function setRem() {
  // const width = document.documentElement.clientWidth;
  let width
  width = window.screen.availWidth;

  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
    )
  ) {
    // document.write("手机访问.");
    //  width = window.screen.availHeight;
    // alert('请旋转屏幕至横屏使用')
  } else {
    // document.write("电脑访问.");
  }
  document.documentElement.style.fontSize = width / 100 + "px";
}
window.onresize = function() {
  setRem();
};
setRem();
