/*let loadingIO = document.getElementById('loading');
let elmnt = document.getElementById('IO');

 function load() {
        loadingIO.style.display = "block";

      }
      window.onload = load;

let loadingIOnone = setTimeout(function() {
  loadingIO.style.display = "none";
  elmnt.style.animation = "fly 1.5s infinite"
}, 3000)*/
let loadingIO = document.getElementById('loading');
let elmnt = document.getElementById('IO');

loadingIO.onclick = function loadingOver() {
      sessionStorage.setItem('loadingIO', 'none');
      location.reload();
      etTimeout(function() {
      loadingIO.innerHTML = "loading over! Press OK to start!"
      }, 3000)
    }

      if(sessionStorage.getItem('loadingIO') || !window.sessionStorage) {
      loadingIO.parentNode.removeChild(loadingIO);
      elmnt.style.animation = "fly 1.5s infinite"
      }else{
      if(window.stop !== undefined) {
      window.stop();
      } else if (document.execCommand !== undefined) {
      document.execCommand("Stop", false);
      }
    }