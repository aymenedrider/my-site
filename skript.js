const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('play-btn');
const progressBar = document.querySelector('.progress');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

audio.addEventListener('timeupdate', function() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progressPercent + '%';
});