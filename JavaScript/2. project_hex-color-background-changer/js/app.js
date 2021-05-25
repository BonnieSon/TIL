let body = document.querySelector("body");
let Value = document.querySelector("#hex-value");
let btn = document.querySelector("#btn");
let hexValue = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.onclick = function(){
    let hex = "#";

    for(let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random()*hexValue.length);
        hex += hexValue[index]
    }
    Value.textContent = hex;
    body.style.backgroundColor = hex;

}