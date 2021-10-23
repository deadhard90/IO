let over = document.getElementById('IO');
let wordIO = document.getElementById('IOWord');

over.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  wordIO.style.display = "block";
  	wordIO.innerHTML = "Hello!"
	setTimeout(function() {
	  wordIO.innerHTML = "I'm ZerroOne!"
	}, 1000);
}, false);

over.addEventListener("mouseout", function( event ) {
  setTimeout(function() {
    wordIO.style.display = "none";
  }, 500);
 }, false);