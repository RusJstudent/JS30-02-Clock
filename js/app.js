'use strict';

let secondHand = document.querySelector('.seconds');
let minuteHand = document.querySelector('.minutes');
let hourHand = document.querySelector('.hours');

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let secondsAngle = seconds * 6 + 180;
let minutesAngle = minutes * 6 + 180;
let hoursAngle = 360 / 12 * hours + minutes / 2 + 180;

rotate();

let mCounter = seconds;

setInterval(() => {
    secondsAngle += 6;

    if (mCounter > 0 && mCounter % 60 === 0) minutesAngle += 6;
    mCounter++;

    hoursAngle += 0.1 / 12;

    rotate();
}, 1000);

function rotate() {
    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
}


// Для жесткого перемещения часовой стрелки (сейчас оно плавное)
// let hoursAngle = 360 / 12 * hours + 180;
// let hCounter = minutes * 60 + seconds;

// if (hCounter > 0 && hCounter % 3600 === 0) hoursAngle += 30;
// hCounter++;
