/* main.js */

$(document).ready(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");

  //주메뉴
  $(document).on("mouseover foucs", ".gnb > ul > li > a", function () {
    $(".gnb > ul > li").removeClass("on");
    $(this).parent().addClass("on");

    var ht = $(this).next().heigt();

    //header_wrap 내려오기
    $(".header_wrap")
      .stop()
      .animate({ heigt: 70 + ht }, 500, "linear");
    //하위ul보이기
  });
  $(document).on("mouseleave blur", "nav.gnb", function () {
    $(".header_wrap").stop().animate({ heigt: "70px" }, 300, "linear");
    $(".gnb > ul > li").removeClass("on");
  });

  //검색박스
  $(document).on("click", "div.btn_srch", function () {
    $("div.srch_box").css("display", "block");
  });
  $(document).on("click", ".btn_srch_close", function () {
    $("div.srch_box").css("display", "none");
  });

  //오토배너
  var $bnnNum = 0;
  var $lastNum = $(".slide_wrap>li").size() - 1;

  function autoBanner() {
    $bnnNum++;
    if ($bnnNum > $lastNum) {
      $bnnNum = 0;
    }
    $("li.slide").removeClass("active");
    $("li.slide").eq($bnnNum).addClass("active");

    $("div.slide_roll > ul > li").removeClass("on");
    $("div.slide_roll > ul > li").eq($bnnNum).addClass("on");
  }
  var $autoBnn = setInterval(autoBanner, 5000); //5초마다 실행해라

  //롤링버튼 클릭
  $(document).on("click", ".slide_roll li a", function (e) {
    e.preventDefault();
    var $rollNum = $(this).parent().index();
    console.log($rollNum);

    $("li.slide").removeClass("active");
    $("li.slide").eq($rollNum).addClass("active");

    $("div.slide_roll > ul > li").removeClass("on");
    $("div.slide_roll > ul > li").eq($rollNum).addClass("on");
  });

  //퀵메뉴
  $(document).on("click", ".btn_top", function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 1400, "swing");
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll < 70) {
      $(".btn_top").fadeOut();
    } else if (scroll >= 70) {
      $(".btn_top").fadeIn();
    }
  });

  /*content7*/

  //section
  var $bannNum = 0;
  var $lastNum = $(".banner_frame > section").size() - 1;
  console.log($lastNum);

  var $banner_w = $(".banner_frame > section").width();

  //.lounge_scroll
  var $lounNum = 0;
  var $lastLongNum = $(".lounge_scroll a").size() - 1;
  console.log($lastLongNum);

  // //리사이즈
  $(window).resize(function () {
    $banner_w = $(".banner_frame > section").width();
  });

  //naxt버튼
  $(document).on("click", ".btn_next", function (e) {
    e.preventDefault();
    //next버튼
    $bannNum++;
    if ($bannNum > $lastNum) $bnnNum = 0;

    //lounge_scroll
    $lounNum++;
    if ($lounNum > $lastLongNum) $lastNum = 0;

    $(".banner_frame")
      .stop()
      .animate({ left: -$bannNum * $banner_w }, 600, "linear", function () {
        $(".lounge_arr a").removeClass("on");
        $(".lounge_arr a").eq($bannNum).addClass("on");

        //화살표
        $(".lounge_arr > .btn_prev").addClass("on");
        // 번호
        $(".lounge_arr > div > span.one").addClass("on");
        $(".lounge_arr > div > span.two").addClass("on");
        //lounge_scroll
        $(".lounge_scroll > ul > li").removeClass("on");
        $(".lounge_scroll > ul > li").eq($lounNum).addClass("on");
      });
  });
  $(document).on("click", ".btn_prev", function (e) {
    e.preventDefault();
    //prev버튼
    $bannNum--;
    if ($bannNum < 0) $bannNum = $lastNum;
    //lounge_scroll
    $lounNum--;
    if ($lounNum < 0) $lounNum = $lastNum;

    $(".banner_frame")
      .stop()
      .animate({ left: -$bannNum * $banner_w }, 600, "linear", function () {
        $(".lounge_arr a").removeClass("on");
        $(".lounge_arr a").eq($bannNum).addClass("on");
        $(".lounge_arr > .btn_prev").removeClass("on");
        $(".lounge_arr > div > span.one").removeClass("on");
        $(".lounge_arr > div > span.two").removeClass("on");
        //lounge_scroll
        $(".lounge_scroll > ul > li").removeClass("on");
        $(".lounge_scroll > ul > li").eq($lounNum).addClass("on");
      });
  });
  /* topMenu */
  //언어선택
  $(".topMenu > dd").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });
  /* footer */
  //패밀리사이트
  $(".family_site").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");

    if ($(this).hasClass("on")) {
      $(this).children("a").attr("title", "닫기");
    } else {
      $(this).children("a").attr("title", "열기");
    }
  });
  //주소
  $(".foot_info > small").click(function (e) {
    e.preventDefault();
    $(".foot_info > address").toggleClass("on");
    $(".foot_info > small").toggleClass("on");
  });
  //주메뉴
  $(".site_all > ul > li").click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass("on");
    $(this).toggleClass("on");
  });

  /* sub1 */
  /* content1 */
  $("fieldset > .content_step1 > li").click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass("on");
    $(this).toggleClass("on");
  });
});
