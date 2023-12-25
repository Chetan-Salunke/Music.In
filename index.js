function toggleMusic1() {
    var audio = document.getElementById("arjanvailly");
    // Toggle play/pause
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function toggleMusic2() {
    var audio = document.getElementById("Softly");
    // Toggle play/pause
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function toggleMusic3() {
    var audio = document.getElementById("arjanvailly");
    // Toggle play/pause
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function toggleMusic4() {
    var audio = document.getElementById("arjanvailly");
    // Toggle play/pause
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}








let currentPlaying = null;

function playMusic(audioId) {
    const audioElement = document.getElementById(audioId);

    if (currentPlaying !== null) {
        // If there is currently playing music, stop it
        currentPlaying.pause();
        currentPlaying.currentTime = 0;
    }

    // Play the clicked music
    audioElement.play();
    currentPlaying = audioElement;
}





function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  