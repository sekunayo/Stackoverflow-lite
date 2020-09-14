
var mode = document.getElementById("container");
var profile = document.getElementById("open");
var closer = document.getElementById("closer");
profile.addEventListener("click", function(){
      mode.style.display = "block";
      profile.style.display="none";
})
closer.addEventListener("click", function(){
    mode.style.display="none";
    profile.style.display="block"
})

window.onclick = function(event){
    if (event.target == mode) {
        mode.style.display = "none";
}
}