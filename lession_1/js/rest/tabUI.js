var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var tabItem = $$(".tab-item");
var tabPane = $$(".tab-pane");

var tabActive = $(".tab-item.active");
var line = $(".line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabItem.forEach((tab, index) => {
  var panes = tabPane[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    this.classList.add("active");
    panes.classList.add("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
  };
});
