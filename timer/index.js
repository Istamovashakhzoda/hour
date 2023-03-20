"use script"

const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")


let days =1;
let hours =00;
let minutes= 00;
let seconds=00;

const newtimeday = setInterval(() => {
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML= seconds;

  seconds++;
  minutes++;

day.innerHTML = new Time().
getDate();
hour.innerHTML = new Time().
getDate();
minute.innerHTML = new Time().
getDate();
second.innerHTML = new Time().
getDate();

if(day<10){
  day = "0" + day;
}
if(hour<10){
  hour = "0" + hour;
}
if(minute <10){
  minute = "0" + minute;
}
if(second<10){
  second = "0" + second;
}
},
1000)













// const current = newDate()
// //const newa = newDate("January 1 ${current +1}  00:00:00")
//   function date(){
//     let current = newDays();
//     const newe = newtimeday - current;
//     const d = Math.floor(newe/1000/60/60/24);
//     const e = Math.floor(newe/1000/60/60+24);
//     const f = Math.floor(newe/1000/60)+60;
//     const g = Math.floor(newe/1000)+60;
//     day.innerHTML = d;
//     hour.innerHTML = e < 10 ? '0' + h : h;
//     minute.innerHTML = f < 10 ? '0' + m : m;
//     second.innerHTML = s < 10 ? '0' + s : s; 
//   }
//   setInterval(date,1000)

