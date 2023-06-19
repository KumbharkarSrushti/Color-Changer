var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var box = document.getElementById("box");
console.log(box)
console.log(btn)  
  
btn.onclick = function (){
    box.style.backgroundColor = "red"
}

btn1.onclick = function (){
    box.style.backgroundColor = "blue"
}
btn2.onclick = function (){
    box.style.backgroundColor = "purple"
}
