$(window).ready(function () {
  //KM
  let k = 0;
  let m = 0;
  let interval;

  const appendKilo = document.getElementById("kilo");
  const appendMetre = document.getElementById("metre");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const reStartBtn = document.getElementById("reStartBtn");

  startBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(aperateKM, 500);
    // 10ms 마다 시간에 대한 숫자가 증가한다!
  };
  reStartBtn.onclick = function () {
    clearInterval(interval);
    interval = setInterval(aperateKM, 500);
  };
  stopBtn.onclick = function () {
    clearInterval(interval);
  };

  function aperateKM() {
    m++;
    appendMetre.textContent = m > 9 ? m : "0" + m;
    if (m > 99) {
      k++;
      appendKilo.textContent = k;
      m = 0;
      appendMetre.textContent = "00";
    }
  }
});
