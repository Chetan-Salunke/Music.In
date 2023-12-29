// function toggleMusic1() {
//     var audio = document.getElementById("arjanvailly");
//     // Toggle play/pause
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }
//toggle menu//
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//direct music js
let currentAudio = null;

function playSong(songName) {
    if (currentAudio) {
        currentAudio.pause();
    }


    // Create a new audio element
    const audio = new Audio();

    // Set the source of the audio element based on the selected song
    if (songName === 'song1') {
        audio.src = './Music/Arjan Vailly Animal 128 Kbps.mp3';
    } else if (songName === 'song2') {
        audio.src = './Music/Softly-(PagalWorld).mp3';
    }
    else if (songName === 'song3') {
        audio.src = './Music/Jamal Kudu - Animal-(PagalWorld.Com.IN).mp3';
    }
    else if (songName === 'song4') {
        audio.src = './Music/Obsessed(PagalWorld.com.pe).mp3';
    }

    // Play the audio
    audio.play();

    
    
    // Update the currentAudio variable to the newly created audio element
    currentAudio = audio;
}
