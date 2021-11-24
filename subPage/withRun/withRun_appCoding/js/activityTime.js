$(window).ready(function () {
  /* startBtn */
  //Time
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let intervalId;

  const appendHour = document.getElementById("hour");
  const appendMinutes = document.getElementById("minute");
  const appendSeconds = document.getElementById("second");
  const buttonStart = document.getElementById("startBtn");
  const buttonStop = document.getElementById("stopBtn");
  const buttonReStart = document.getElementById("reStartBtn");
  buttonStart.onclick = function () {
    clearInterval(intervalId);
    intervalId = setInterval(aperateTimer, 600);
    // 10ms 마다 시간에 대한 숫자가 증가한다!
  };
  buttonReStart.onclick = function () {
    clearInterval(intervalId);
    intervalId = setInterval(aperateTimer, 600);
  };
  buttonStop.onclick = function () {
    clearInterval(intervalId);
  };

  function aperateTimer() {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : "0" + seconds;
    if (seconds > 59) {
      minutes++;
      appendMinutes.textContent = minutes > 9 ? minutes : "0" + minutes;
      seconds = 0;
      appendSeconds.textContent = "00";
    }
    if (minutes > 59) {
      hours++;
      appendHour.textContent = hours > 9 ? hours : "0" + hours;
      minutes = 0;
      appendMinutes.textContent = "00";
    }
  }
});
