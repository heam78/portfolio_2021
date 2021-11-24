/* main.js*/
//$(function(){});
$(document).ready(function () {
  //윈도우 시작하면 화면 맨위로 이동
  $("body, html").stop().animate({ scrollTop: 0 }, 1500, "swing");

  //브라우저의 높이값을 div의 높이값으로
  var ht = $(window).height();
  $("#container > div").height(ht);

  $(window).resize(function () {
    var ht = $(window).height();
    $("#container > div").height(ht);
  });

  //윈도우가 시작될때 실행되게
  var start = setTimeout(function () {
    $("#content1 > section").addClass("on");
  }, 500);

  /*$(window).scroll(function(){
    $("container > div").mousewheel
  })*/
  $(window).scroll(function () {
    var scroll = $(this).scrollTop(); //현재 scroll위치값
    var content = $("#container > div");

    for (i = 0; i < 13; i++) {
      if (
        scroll >=
        content.eq(i).offset().top - 100 - $("#container").offset().top
      ) {
        $("#content" + (i + 1) + " > section").addClass("on");
      } else {
        $("#content" + (i + 1) + " > section").removeClass("on");
      }
    }

    //한페이지씩 이동
    /*$("#container > div").mousewheel(function (event, delta) {
      //마우스 휠을 올렸을때
      if (delta > 0) {
        var prev = $(this).prev().offset().top - $("#container").offset().top;
        $("html,body").stop().animate({ scrollTop: prev }, 1400, "linear");
      } else if (delta < 0) {
        //마우스 휠을 내렸을때
        var next = $(this).next().offset().top - $("#container").offset().top;
        $("html,body").stop().animate({ scrollTop: next }, 1400, "linear");
      }
    });*/
  }); //scroll
});
