let clockDigital = document.querySelector('.digital');
let pointerSecond = document.querySelector('.p_s');
let pointerMinute = document.querySelector('.p_m');
let pointerHour = document.querySelector('.p_h');

function updateClock() {
    let hourNow = new Date();
    let hour = hourNow.getHours();
    let minute = hourNow.getMinutes();
    let second = hourNow.getSeconds();

    clockDigital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = (360 / 12) * hour - 90;

    pointerSecond.style.transform = `rotate(${sDeg}deg)`;
    pointerMinute.style.transform = `rotate(${mDeg}deg)`;
    pointerHour.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    return time < 10 ? '0' + time : time;
}

setInterval(updateClock, 1000);
updateClock();
