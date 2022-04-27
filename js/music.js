const musics = [
  {
    artist: "SUNWOO",
    title: "광합성",
  },
  {
    artist: "SUNWOO",
    title: "Berry",
  },
  {
    artist: "YERINB",
    title: "La La La Love Song",
  },
  {
    artist: "Mariya Takeuchi",
    title: "Plastic Love",
  },
  {
    artist: "Her Majesty's Sound",
    title: "Ole devil called love",
  },
  {
    artist: "Olivia Rodrigo",
    title: "deja vu",
  },
  {
    artist: "Red Velvet",
    title: "BAMBOLEO",
  },
]

const artist = document.querySelector(".music__inner__artist");
const title = document.querySelector(".music__inner__title");
const audio = document.querySelector("audio");
let todaysMusic = musics[Math.floor(Math.random() * musics.length)];

artist.innerText = todaysMusic.artist;
title.innerText = todaysMusic.title;
audio.src = `/yours-today/sound/${todaysMusic.title}.mp3`;

const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");

function playAudio() {
  audio.play();
  btnPlay.style.display = "none";
  btnPause.style.display = "block";
}

btnPlay.addEventListener("click", playAudio);

function pauseAudio() {
  audio.pause();
  btnPause.style.display = "none";
  btnPlay.style.display = "block";
}

btnPause.addEventListener("click", pauseAudio);

function nextTrack() {
  todaysMusic = musics[Math.floor(Math.random() * musics.length)];
  audio.src = `/yours-today/sound/${todaysMusic.title}.mp3`;
  artist.innerText = todaysMusic.artist;
  title.innerText = todaysMusic.title;
  setTimeout(playAudio, 2000);
}

audio.addEventListener("ended", nextTrack);