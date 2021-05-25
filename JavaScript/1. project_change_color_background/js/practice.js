const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red", "blue","yellow","pink", "green", "purple", "black"];

body.style.backgroundColor = "violet";

button.onclick = function(){
   let colorIndex = parseInt(Math.random()*colors.length);
   body.style.backgroundColor = colors[colorIndex];
   
};