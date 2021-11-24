/* main.js*/
//$(function(){});
$(document).ready(function () {
  //윈도우가 시작될때 실행되게
  var start = setTimeout(function () {
    $("section:nth-child(1)").addClass("on");
    $(".gnb > li:nth-child(1)").addClass("on");
  }, 500);

  $(".gnb > li").click(function () {
    var i = $(this).index();
    $("section").removeClass("on");
    $("section").eq(i).addClass("on");
    $(".gnb li").removeClass("on");
    $(".gnb li").eq(i).addClass("on");
  });
});
