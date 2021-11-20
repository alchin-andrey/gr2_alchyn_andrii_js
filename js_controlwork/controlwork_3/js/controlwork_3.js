/* 
Самостоятельная работа 3
Часы
*/
$(document).ready(function () {
    $('div').remove();
    $('body').removeAttr('style');

document.body.insertAdjacentHTML('beforeEnd',  `
            <div class="clock">
            <div id="main"></div>
            <div class="hour">
                <div class="hr" id="hr"></div>
            </div>
            <div class="min">
                <div class="mn" id="mn"></div>
            </div>
            <div class="sec">
                <div class="sc" id="sc"></div>
            </div>
            </div>
            `)

const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

let theta = [];

let setup = function (n, r, id) {
    let main = document.getElementById(id);
    let mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
    let circleArray = [];
    for (let i = 0; i < n; i++) {
        let circle = document.createElement('div');
        circleArray.push(circle);
        circleArray[i].posx = Math.round(r * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(r * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) - 5 + 'px';
        circleArray[i].style.left = ((mainHeight/ 2 ) + parseInt(circleArray[i].posx.slice(0, -2))) - 5 + 'px';
        if (i % 3 === 0 ) {
            circle.className = 'text number' + i + 1;
            let arr = [3, 1, 2, 12, 11, 10, 9, 8, 7, 6, 5, 4];
            circleArray[i].innerText = `${arr[i]}`;
        } else {
        circle.className = 'circle number' + i + 1;
        circleArray[i].style.backgroundColor = "black";
        }
        main.appendChild(circleArray[i]);
    }
};

let generate = function(n, r, id) {
    let frags = 360 / n;
    for (let i = 0; i <= n; i++) {
        theta.push((frags / 180) * i * Math.PI);
    }
    setup(n, r, id)
}
generate(12, 175, 'main');

setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})

});
