/* main.js */
$(document).ready(function () {
  var start = setTimeout(function () {
    $("#content > .cont_main").addClass("on");
    $(".gnb > li:nth-child(1)").addClass("on");
  }, 500);

  $(".gnb > li").click(function () {
    var i = $(this).index();
    $("section").removeClass("on");
    $("section").eq(i).addClass("on");
    // $(".gnb li").removeClass("on");
    $(".gnb li").eq(i).toggleClass("on");
  });
  
  $(".gnb>li:nth-of-type(2)").click(function () {
    $(".cont_w3c > p").addClass("on");
  });
  $(".gnb>li:nth-of-type(3)").click(function () {
    $(".cont_access > p").addClass("on");
  });
});
