function toggleMusic1() {
    var audio = document.getElementById("arjanvailly");
    // Toggle play/pause
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}





//toggle menu//
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  