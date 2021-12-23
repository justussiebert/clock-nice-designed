function updateTime() {
  const date = new Date();
  const hour = formatNumberString(date.getHours());
  const minute = formatNumberString(date.getMinutes());
  const second = formatNumberString(date.getSeconds());

  const clockDigital = document.querySelector(".clock-digital-inner");
  clockDigital.innerText = hour + ":" + minute + ":" + second;

  // todo update rotation of .seconds
  const secondsTmp = date.getSeconds();
  const minutsTmp = date.getMinutes();
  const hoursTmp = date.getHours();

  const secondsEl = document.querySelector(".pointerSeconds");
  const minutsEl = document.querySelector(".pointerMinuts");
  const hoursEl = document.querySelector(".pointerHours");

  secondsEl.style.setProperty("--seconds", secondsTmp * 6 + "deg");
  minutsEl.style.setProperty("--minuts", minutsTmp * 6 + "deg");
  hoursEl.style.setProperty("--hours", hoursTmp * 30 + "deg");
}

function formatNumberString(n) {
  //let s = "0" + n.toString();
  //return s.slice(-2);
  let s = n.toString();
  //console.log(s.length);
  if (s.length < 2) {
    s = "0" + s;
  } else {
    //s = n;
  }
  return s;
}

updateTime();

// Von Hand aktualisieren
// const btn = document.querySelector("button");
// btn.addEventListener("click", updateTime);

setInterval(updateTime, 1000);
