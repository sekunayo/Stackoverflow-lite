var mode = document.getElementById("container");
var profile = document.getElementById("open");
var closer = document.getElementById("closer");
var first = document.getElementById("first-section");
var expand = document.getElementById("effect");
var second = document.getElementById("second-section");
profile.addEventListener("click", function () {
    mode.style.display = "block";
    profile.style.display = "none";
})
closer.addEventListener("click", function () {
    mode.style.display = "none";
    profile.style.display = "block"

})

window.onclick = function (event) {
    if (event.target == mode) {
        mode.style.display = "none";
    }
}
if (screen.width <= 767.98) {
    profile.addEventListener("click", function () {
        first.style.width = "70%";
        expand.style.width = "50%";
        second.style.width = "70%";

    })
    closer.addEventListener("click", function () {
        first.style.width = "100%";
        expand.style.width = "70%";
        second.style.width = "100%";

    })
}