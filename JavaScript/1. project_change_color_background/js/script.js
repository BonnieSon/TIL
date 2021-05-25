const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["violet", "blue", "red", "green", "yellow", "pink"];

body.style.backgroundColor = "violet";

button.onclick = function(){
   const colorIndex = parseInt(Math.random()*colors.length)
   body.style.backgroundColor = colors[colorIndex];
   
   
    // const colors = document.querySelector("colors")
   // body.style.backgroundColor = colors;
   // colors = body;
};