let backgroundIO = document.getElementById("IObackground");
let closeMenuIO = document.getElementById("closeMenu");
let menuOI = document.getElementById('menuIO');
var disable_click = false;

function openMenu(event) {

if(!disable_click) {
	 menuOI.style.display = "block";
} 

}

function closeMenu(event) {

if(disable_click) {
	 menuOI.style.display = "none";
} 

}

closeMenuIO.addEventListener('click', closeMenu)
backgroundIO.addEventListener('click', openMenu)
