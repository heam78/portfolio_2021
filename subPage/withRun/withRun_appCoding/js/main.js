/* main.js */

$(document).ready(function () {
  /* health */
  $(".health > dd > a").click(function () {
    $(this).toggleClass("on");
  });
  /* gender */
  $(".gender a").click(function () {
    $(".gender a").toggleClass("on");
  });

  /* main2 */
  //.progess
  //week
  var start = setTimeout(function () {
    $(".weekly_entire").addClass("on");
    $(".badges").addClass("on");
    $(".entire").addClass("on");
    $(".progess").addClass("on");
    $(".weekly > ul > li:nth-of-type(1)").addClass("on");
  }, 500);

  $(".progess > ul > .week").click(function () {
    $(".progess > ul > .week").addClass("on");
    $(".progess > ul > .day").addClass("on");
  });
  // day
  $(".progess > ul > .day").click(function () {
    $(".progess > ul > .week").removeClass("on");
    $(".progess > ul > .day").removeClass("on");
  });

  //entire

  var cnt0 = 4450;
  var cnt1 = 24450;

  counterFn();
  counterFn1();

  function counterFn() {
    id0 = setInterval(count0Fn, 20);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 4650) {
        clearInterval(id0);
      } else {
        $(".aveNember").text(cnt0);
      }
    }
  }
  function counterFn1() {
    id0 = setInterval(count0Fn, 20);
    function count0Fn() {
      cnt1++;
      if (cnt1 > 24650) {
        clearInterval(id0);
      } else {
        $(".totalNember").text(cnt1);
      }
    }
  }

  // cicle
  draw(80, ".circle-chart1", "#278eff");
  draw(55, ".circle-chart2", "#278eff");
  draw(30, ".circle-chart3", "#278eff");

  function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 60);
  }
  function color(i, classname, colorname) {
    $(classname).css({
      background:
        "conic-gradient(" +
        colorname +
        " 0% " +
        i +
        "%, #dddada " +
        i +
        "% 100%)",
    });
  }

  $(".weekly > ul > li").each(function () {

    $(this).click(function () {
      $(this).addClass("on");
      $(this).siblings().removeClass("on");
      $(".badges").addClass("on");
      $(".weekly_entire").addClass("on");
      $(".progess").addClass("on");
      $(".entire").addClass("on");
    });
  });

  $(".homeBtn").click(function () {
    $("main").addClass("on");
  });

  /* drawer_btn */
  //drawer열기
  $(".drawer_btn").click(function () {
    $("div.drawer").addClass("on");
    $(".drawer_closeBtn").addClass("on");
    $("body").addClass("on");
    $("div.bg").addClass("on");
  });
  //drawer닫기
  $(".drawer_closeBtn").click(function () {
    $("div.drawer").removeClass("on");
    $(".drawer_closeBtn").removeClass("on");
    $("body").removeClass("on");
    $("div.bg").removeClass("on");
  });
});

/* activity */
// //start
// let kilo = 0;
// let km = 0;

// const appendKilo = document.getElementById("kilo");
// const appendKm = document.getElementById("km");
