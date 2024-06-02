const hourEle = document.getElementById('hours');
const minuteEle = document.getElementById('minutes');
const secondEle = document.getElementById('seconds');
const ampmEle = document.getElementById('am_pm');

function updateTime(){
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = 'AM';

  if(hour > 12){
    hour = hour - 12;
    ampm = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  hourEle.innerText = hour;
  minuteEle.innerText = minute;
  secondEle.innerText = second;
  ampmEle.innerText = ampm;
  setTimeout(() =>{
    updateTime();
  }, 1000);
}
updateTime();
