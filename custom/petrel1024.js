// 如果不显示侧边栏，修改描述信息的位置
var postBg = document.getElementsByClassName("post-bg");
var postInfo = document.getElementById("post-info");
if (postBg.length != 0) {
  if (postBg[0].previousSibling.id != "sidebar") {
    postInfo.style.padding = "0 16%";
  }
}
