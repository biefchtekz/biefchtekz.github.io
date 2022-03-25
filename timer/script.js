function ifLessThan10(number) {
  if (number == 0) number = '00';
  else if (number < 10) number = '0' + number;
  else number = number.toString();
  return number;
} // добавляє нулик на початку якщо число менше ніж 10
function ifLessThan100(number) {
  if (number == 0) number = '000';
  else if (number < 10) number = '00' + number;
  else if (number < 100) number = '0' + number;
  else number = number.toString();
  return number;
} // добавляє нулик на початку якщо число менше ніж 100 (Для мілісекунд)
function showTime() {
  //показ часу і дати
  const date = new Date(Date());
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let currentDate = ifLessThan10(day) + '.' + ifLessThan10(month) + '.' + year;
  let currentTime =
    ifLessThan10(hours) +
    ':' +
    ifLessThan10(minutes) +
    ':' +
    ifLessThan10(seconds);
  document.getElementById('currentDate').innerText = currentDate;
  document.getElementById('currentTime').innerText = currentTime;
}
setInterval(showTime, 0); // Оновлення показу часу
let stopWatchInterval;
let milisec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let totalTime = 0;
let loopCount = 0;
let timerInterval;
let timerSec = 0;
let timerMin = 0;
function stopWatchStart() {
  stopWatchInterval = setInterval(function () {
    milisec += 10;
    if (milisec == 1000) {
      sec += 1;
      milisec = 0;
    }
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
    if (min == 60) {
      hr += 1;
      min = 0;
    }
    totalTime =
      ifLessThan10(hr) +
      ':' +
      ifLessThan10(min) +
      ':' +
      ifLessThan10(sec) +
      ':' +
      ifLessThan100(milisec);
    document.getElementById('stopWatch').innerText = totalTime;
  }, 10);
}
function stopWatchLoop() {
  loopCount += 1;
  document.getElementById(
    'stopWatchLoopDisplay'
  ).innerHTML += `<p>${loopCount}. ${totalTime}</p>`;
}
function stopWatchStop() {
  clearInterval(stopWatchInterval);
}
function stopWatchReset() {
  document.getElementById('stopWatch').innerText = '00:00:00:000';
  document.getElementById('stopWatchLoopDisplay').innerHTML = ``;
  milisec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  totalTime = 0;
  loopCount = 0;
}
function increaseTimerValue() {
  let timerValue = document.getElementById('timerValue').innerText;
  timerValue = parseInt(timerValue) + 1;
  document.getElementById('timerValue').innerText = timerValue;
}
function decreaseTimerValue() {
  let timerValue = document.getElementById('timerValue').innerText;
  if (timerValue == 1) timerValue = 1;
  else timerValue = parseInt(timerValue) - 1;
  document.getElementById('timerValue').innerText = timerValue;
}
function timer() {
  if (timerMin + timerSec != 0) {
    timerSec -= 1;
    if (timerSec == -1) {
      timerSec = 59;
      timerMin -= 1;
    }
    document.getElementById('currentTimerValue').innerText =
      ifLessThan10(timerMin) + ':' + ifLessThan10(timerSec);
  } else {
    timerAlert();
    clearInterval(timerInterval);
    document.getElementById('timerStartButton').style.pointerEvents = 'all';
  }
}
function timerStart() {
  document.getElementById('timerStartButton').style.pointerEvents = 'none';
  let timerValue = document.getElementById('timerValue').innerText;
  timerMin = parseInt(timerValue);
  document.getElementById('currentTimerValue').innerText = `${timerValue}:00`;
  timerInterval = setInterval(timer, 1000);
}
function timerStop() {
  document
    .getElementById('timerStartButton')
    .setAttribute('onclick', 'timerResume()');
  document.getElementById('timerStartButton').style.pointerEvents = 'all';
  clearInterval(timerInterval);
}
function timerResume() {
  document
    .getElementById('timerStartButton')
    .setAttribute('onclick', 'timerStart()');
  document.getElementById('timerStartButton').style.pointerEvents = 'none';
  timerInterval = setInterval(timer, 1000);
}
function timerReset() {
  clearInterval(timerInterval);
  document.getElementById('currentTimerValue').innerText = '00:00';
  document
    .getElementById('timerStartButton')
    .setAttribute('onclick', 'timerStart()');
  document.getElementById('timerStartButton').style.pointerEvents = 'all';
  timerMin = 0;
  timerSec = 0;
}
let alertInterval;
function timerAlert() {
  let alertAction = document.getElementById('timerAlert').style;
  alertAction.bottom = '50px';
  let rotate = 5;
  alertAction.transform = `rotate(${rotate}deg)`;
  alertInterval = setInterval(function () {
    rotate = rotate * -1;
    alertAction.transform = `rotate(${rotate}deg)`;
  }, 100);
}
function alertStop() {
  let alertAction = document.getElementById('timerAlert').style;
  clearInterval(alertInterval);
  alertAction.transform = 'rotate(0)';
  alertAction.bottom = '-200px';
}
