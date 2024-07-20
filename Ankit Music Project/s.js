console.log("Welcome to My Playlist");

// 1. set variables
let songNo = 0;
let audio = new Audio('music/Lovely.mp3');
let play = document.querySelector('#btn_2');
let Bar = document.querySelector('#bar');
let songItems = Array.from(document.getElementsByClassName('songlist'));

// 5. listing the songs
let songs = [
    { songName: "Lovely", filePath: "music/Lovely.mp3" },
    { songName: "Abhi Kuch Dino Se", filePath: "music/Abhi-Kuch-Dino-Se.mp3" },
    { songName: "Dusk-Till-Dawn", filePath: "music/Dusk-Till-Dawn.mp3" },
    { songName: "Hasi", filePath: "music/Hasi.mp3" },
    { songName: "Jashn E Bahaaraa", filePath: "music/Jashn-E-Bahaaraa.mp3" },
    { songName: "Teri-Jhuki-Nazar", filePath: "music/Teri-Jhuki-Nazar.mp3" },
    { songName: "Prithibi-Ta-Naki", filePath: "music/Prithibi-Ta-Naki.mp3" },
    { songName: "Mann-Mera", filePath: "music/Mann-Mera.mp3" },
    { songName: "Senorita", filePath: "music/Senorita.mp3" },
];

// 6. song name change
songItems.forEach((element, i) => {
    element.getElementsByClassName("sname")[0].innerText = songs[i].songName;
});

// 2. play/pause btn change
play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    } else {
        audio.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
    }
});

// 3. song runtime set
audio.addEventListener('timeupdate', () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100);
    Bar.value = progress;
});

// 4. update bar
Bar.addEventListener('change', () => {
    audio.currentTime = Bar.value * audio.duration / 100;
});

// 7. add songs
songItems.forEach((element, i) => {
    element.addEventListener('click', (e) => {
        songNo = i;
        audio.src = songs[songNo].filePath;
        audio.currentTime = 0;
        audio.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    });
});

// 9. for backward btn
document.getElementById('btn_3').addEventListener('click', () => {
    if (songNo >= songs.length - 1) {
        songNo = 0;
    } else {
        songNo += 1;
    }
    audio.src = songs[songNo].filePath;
    audio.currentTime = 0;
    audio.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
});

// 10. for forward btn
document.getElementById('btn_1').addEventListener('click', () => {
    if (songNo <= 0) {
        songNo = songs.length - 1;
    } else {
        songNo -= 1;
    }
    audio.src = songs[songNo].filePath;
    audio.currentTime = 0;
    audio.play();
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
});
