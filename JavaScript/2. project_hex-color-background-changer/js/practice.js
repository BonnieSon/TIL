const body = document.querySelector("body");
const hexValue = document.querySelector("#hex-value");
const btn = document.querySelector("#btn");
const colors = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];

btn.onclick = function(){
    let hex = "#";

    for(let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random()*colors.length);
        hex += colors[index];
    }
     hexValue.textContent = hex;
     body.style.backgroundColor = hex;
};
