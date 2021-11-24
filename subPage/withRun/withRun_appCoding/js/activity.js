$(document).ready(function () {
  /* activity */
  $(".startBtn").click(function () {
    $("#map").animate({ height: "500px" }, 300, "linear");
    $(".gnb > ul > li > ul").css("display", "block");
    $(".startBtn").addClass("on");
    $(".stopBtn").addClass("on");
    $(".record").addClass("on");
    $(".exercise").addClass("on");
    $(".bg").addClass("on");
    $("#map").addClass("on");
    $(".km").addClass("on");
    $(".speed").addClass("on");
    $(".speedOn").addClass("on");
    $(".calorie").addClass("on");
    $(".calorieOn").addClass("on");
  });

  $(".stopBtn").click(function () {
    $(".km").removeClass("on");
    $(".reStartBtn").addClass("on");
    $(".speed").removeClass("on");
    $(".speedOn").removeClass("on");
    $(".calorie").removeClass("on");
    $(".calorieOn").removeClass("on");
  });
  $(".reStartBtn").click(function () {
    $(".stopBtn").addClass("on");
    $(".reStartBtn").removeClass("on");
    $(".km").addClass("on");
    $(".speed").addClass("on");
    $(".speedOn").addClass("on");
    $(".calorie").addClass("on");
    $(".calorieOn").addClass("on");
  });

  circleDraw(100, ".km.on", "#A9B1FF");
  function circleDraw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 1000);
  }
  function color(i, classname, colorname) {
    $(classname).css({
      background:
        "conic-gradient(" + colorname + " 0% " + i + "%, #fff " + i + "% 100%)",
    });
  }
  var cnt0 = 50;
  var cnt1 = 0;

  counterFn();
  counterFn1();

  function counterFn() {
    id0 = setInterval(count0Fn, 800);

    function count0Fn() {
      cnt0++;
      if (cnt0 > 70) {
        clearInterval(id0);
      } else {
        $(".speedOn").text(cnt0);
      }
    }
  }
  function counterFn1() {
    id0 = setInterval(count0Fn, 1000);
    function count0Fn() {
      cnt1++;
      if (cnt1 > 24650) {
        clearInterval(id0);
      } else {
        $(".calorieOn").text(cnt1);
      }
    }
  }
  // /* startBtn */
  // //Time
  // let hours = 0;
  // let minutes = 0;
  // let seconds = 0;
  // let intervalId;

  // const appendHour = document.getElementById("hour");
  // const appendMinutes = document.getElementById("minute");
  // const appendSeconds = document.getElementById("second");
  // const buttonStart = document.getElementById("startBtn");
  // const buttonStop = document.getElementById("stopBtn");
  // const buttonReStart = document.getElementById("reStartBtn");
  // buttonStart.onclick = function () {
  //   clearInterval(intervalId);
  //   intervalId = setInterval(aperateTimer, 600);
  //   // 10ms 마다 시간에 대한 숫자가 증가한다!
  // };
  // buttonReStart.onclick = function () {
  //   clearInterval(intervalId);
  //   intervalId = setInterval(aperateTimer, 600);
  // };
  // buttonStop.onclick = function () {
  //   clearInterval(intervalId);
  // };

  // function aperateTimer() {
  //   seconds++;
  //   appendSeconds.textContent = seconds > 9 ? seconds : "0" + seconds;
  //   if (seconds > 59) {
  //     minutes++;
  //     appendMinutes.textContent = minutes > 9 ? minutes : "0" + minutes;
  //     seconds = 0;
  //     appendSeconds.textContent = "00";
  //   }
  //   if (minutes > 59) {
  //     hours++;
  //     appendHour.textContent = hours > 9 ? hours : "0" + hours;
  //     minutes = 0;
  //     appendMinutes.textContent = "00";
  //   }
  // }

  //KM
  // let k = 0;
  // let m = 0;
  // let interval;

  // const appendKilo = document.getElementById("kilo");
  // const appendMetre = document.getElementById("metre");
  // const startBtn = document.getElementById("startBtn");
  // const stopBtn = document.getElementById("stopBtn");
  // const reStartBtn = document.getElementById("reStartBtn");

  // startBtn.onclick = function () {
  //   clearInterval(interval);
  //   interval = setInterval(aperateKM, 600);
  //   // 10ms 마다 시간에 대한 숫자가 증가한다!
  // };
  // reStartBtn.onclick = function () {
  //   clearInterval(interval);
  //   interval = setInterval(aperateKM, 600);
  // };
  // stopBtn.onclick = function () {
  //   clearInterval(interval);
  // };

  // function aperateKM() {
  //   m++;
  //   appendMetre.textContent = m > 9 ? m : "0" + m;
  //   if (m > 99) {
  //     k++;
  //     appendKilo.textContent = k;
  //     m = 0;
  //     appendMetre.textContent = "00";
  //   }
  // }
});
