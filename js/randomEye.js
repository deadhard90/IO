
document.getElementById("OK").onclick = function  makeNewPosition(){
  var eye = document.getElementById('eye');
  eye.style.height = "50px";
 
setInterval (function randomPositionEye(){
  var rand1 = Math.floor(Math.random() * 15);
  var rand2 = Math.floor(Math.random() * 50);
  var IO = document.getElementById('IO');
  
  if(rand1 >= IO.clientWidth){
    rand1 = IO.clientWidth
  }
  if(rand2 >= IO.clientHeight){
    rand2 = IO.clientHeight
  }
  eye.style.right = rand1 + 'px';
  eye.style.top = rand2 + 'px';
},2000)
}