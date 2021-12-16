/* main.js*/
//$(function(){});
$(document).ready(function () {
  /* header */
  //햄버거 버튼 클릭
  $("div.open_btn").click(function () {
    $(".mob > ul.mob_gnb").addClass("on");
    $("div.close_btn").addClass("on");
    $("div.open_btn").hide();
    $("span.bar_graph1").addClass("on");
    $("span.bar_graph2").addClass("on");
    $("span.bar_graph3").addClass("on");
    $("span.bar_graph4").addClass("on");
    $("span.bar_graph5").addClass("on");
    $(".quick_img").addClass("on");
    $(".quick").addClass("on");
  });
  //닫기버튼클릭
  $("div.close_btn").click(function () {
    $(".mob > ul.mob_gnb").removeClass("on");
    $("div.close_btn").removeClass("on");
    $("div.open_btn").show();
    $("span.bar_graph1").removeClass("on");
    $("span.bar_graph2").removeClass("on");
    $("span.bar_graph3").removeClass("on");
    $("span.bar_graph4").removeClass("on");
    $("span.bar_graph5").removeClass("on");
    $(".quick_img").removeClass("on");
    $(".quick").removeClass("on");
  });

  $(".bg").bind("mouseover focus", function () {
    // $(".bg").addClass("on");
  });
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
    $(".bg").addClass("on");
    $(".open_btn").addClass("on");
  }, 500);

  //스크롤 움직일떄 실행되게
  $(window).scroll(function () {
    var t =
      $(this).scrollTop() + $(window).height() / 2 - $("#quick").height() / 2;
    $("#quick").stop().animate({ top: t }, 500, "linear");

    var quickTop =
      $(this).scrollTop() +
      $(window).height() / 2 -
      $("#quick_img").height() / 2;
    $("#quick_img").stop().animate({ top: quickTop }, 500, "linear");

    var scroll = $(this).scrollTop(); //현재 scroll위치값
    var content = $("#container > div");

    for (i = 0; i < 11; i++) {
      if (scroll >= content.eq(i).offset().top - $("#container").offset().top) {
        $(".gnb li a").removeClass("on");
        $(".gnb li a").eq(i).addClass("on");

        $(".quick li a").removeClass("on");
        $(".quick li a").eq(i).addClass("on");

        //내용물 움직임 시작
        $("#content" + (i + 1) + " > section").addClass("on");
      } else {
        //내용물 움직임 취소
        $("#content" + (i + 1) + " > section").removeClass("on");
      }
    }

    //한페이지씩 이동
    // $("#container > div").mousewheel(function (event, delta) {
    //   if (delta > 0) {
    //     //마우스 휠을 올렸을때
    //     var prev = $(this).prev().offset().top - $("#container").offset().top;
    //     $("html,body").stop().animate({ scrollTop: prev }, 1400, "linear");
    //   } else if (delta < 0) {
    //     //마우스 휠을 내렸을때
    //     var next = $(this).next().offset().top - $("#container").offset().top;
    //     $("html,body").stop().animate({ scrollTop: next }, 1400, "linear");
    //   }

    // });
  }); //scroll
  /* quick,gnb clcick */
  $("#gnb li , #quick li").click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    var target =
      $("#container > div").eq(i).offset().top - $("#container").offset().top;
    $("body , html").stop().animate({ scrollTop: target }, 1500, "swing");
    $(".mob > ul.mob_gnb").removeClass("on");
  });

  // 새창열기
  $(".more_btn > a").attr("target", "_blank");

  //with Run 팝업창 크기로 열기
  $(".popup").click(function () {
    window.open(
      "https://heam78.github.io/withRunApp/splash",
      "With Run",
      "width=375px, height=812px, scrollbars=yes, left=1200px, top=300px"
    );
  });
  $(".kakaoApp").click(function () {
    window.open(
      "https://heam78.github.io/kakao/",
      "KAKAO APP",
      "width=375px, height=812px, scrollbars=yes, left=1200px, top=300px"
    );
  });
  $(".kakaoGit").click(function () {
    window.open("https://github.com/heam78/kakao");
  });

  $(".samsungsemWeb").click(function () {
    window.open("https://heam78.github.io/samsungsem/index.html");
  });
  $(".samGit").click(function () {
    window.open("https://github.com/heam78/samsungsem");
  });
  $(".cjoneWeb").click(function () {
    window.open("https://heam78.github.io/cjone/");
  });
  $(".cjGit").click(function () {
    window.open("https://github.com/heam78/cjone");
  });
  $(".withLand").click(function () {
    window.open("https://heam78.github.io/withRun-Landing/");
  });
  $(".withGit").click(function () {
    window.open("https://github.com/heam78/withRunApp");
  });
  $(".lockWeb").click(function () {
    window.open("https://heam78.github.io/locknlock/");
  });
  $(".lockGit").click(function () {
    window.open("https://github.com/heam78/locknlock");
  });
  $(".lockReac").click(function () {
    window.open("https://heam78.github.io/locknlock-reac/");
  });
  $(".reacGit").click(function () {
    window.open("https://github.com/heam78/locknlock-reac");
  });
});
