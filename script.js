//HAM MENU
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', function () {
    var subMenuToggles = document.querySelectorAll('.sub-menu-toggle');

    subMenuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var subMenu = this.nextElementSibling;
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
                this.classList.remove('active');
            } else {
                subMenu.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});


// Close the menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamMenu.contains(e.target) && offScreenMenu.classList.contains('active')) {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        menuToggle.checked = false; // Reset the checkbox to unchecked state
    }
});


//BACKGROUND MUSIC - HOME
const playlist = [
    "Songs/Lie.mp3",
    "Songs/Native.mp3",
    "Songs/New Delhi.mp3",
    "Songs/Nova.mp3",
    "Songs/Stuck.mp3",
    ];

    let audio = new Audio();
    let isPlaying = false;
    let currentTrackIndex = 0;
    audio.volume = matchMedia;

    audio.addEventListener('ended', playRandomTrack);


    function togglePlay() {
        if (isPlaying) {
            audio.pause();
        } else {
            playRandomTrack();
        }
        isPlaying = !isPlaying;
    }

    function playRandomTrack() {
        const randomIndex = Math.floor(Math.random() * playlist.length);
        const randomTrack = playlist[randomIndex];
        audio.src = randomTrack;
        audio.play();
    }

    