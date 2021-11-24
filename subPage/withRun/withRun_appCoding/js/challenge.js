$(document).ready(function () {
  /* challenge2 */
  //challenge_progess
  $(".challenge_start .start").click(function () {
    $(".challenge_start").addClass("on");
    $(".loader").addClass("on");
    $(".bt_stop").addClass("on");
    $(".bt_reStart").addClass("on");
    $(".circle-chart4").addClass("on");
    $(".challenge_start ul > li:nth-of-type(3)").addClass("on");
  });

  $(".bt_stop").click(function () {
    $(".loader").removeClass("on");
    $(".bt_stop").removeClass("on");
    $(".bt_reStart").removeClass("on");
    $(".circle-chart4").removeClass("on");
    $(".challenge_start ul > li:nth-of-type(3)").addClass("re");
  });
  $(".bt_reStart").click(function () {
    $(".loader").addClass("on");
    $(".bt_stop").addClass("on");
    $(".bt_reStart").addClass("on");
    $(".circle-chart4").addClass("on");
  });

  // circle
  circleDraw(100, ".circle-chart4", "#278eff");

  function circleDraw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 600);
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

  //play
  let minutes = 0;
  let seconds = 0;
  let intervalId;

  const appendMinutes = document.getElementById("minute");
  const appendSeconds = document.getElementById("second");
  const buttonStart = document.getElementById("bt__start");
  const buttonReStart = document.getElementById("bt__reStart");
  const buttonStop = document.getElementById("bt__stop");

  buttonStart.onclick = function () {
    clearInterval(intervalId);
    intervalId = setInterval(aperateTimer, 600);
  };
  buttonReStart.onclick = function () {
    clearInterval(intervalId);
    intervalId = setInterval(aperateTimer, 600);
  };
  buttonStop.onclick = function () {
    clearInterval(intervalId);
  };
  // 10ms 마다 시간에 대한 숫자가 증가한다!
  function aperateTimer() {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : "0" + seconds;
    if (seconds > 59) {
      minutes++;
      appendMinutes.textContent = minutes > 9 ? minutes : "0" + minutes;
      seconds = 0;
      appendSeconds.textContent = "00";
    }
  }
});
