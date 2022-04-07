const musics = [
  {
    artist: "SUNWOO",
    title: "광합성",
    url: "official_theboyz/to-theb-from-sunwoo",
  },
  {
    artist: "SUNWOO",
    title: "Berry",
    url: "official_theboyz/like-a-birthday-cake",
  },
  {
    artist: "YERINB",
    title: "La La La Love Song",
    url: "eyriej/yerin-la-la-la-love-song",
  },
  {
    artist: "Mariya Takeuchi",
    title: "Plastic Love",
    url: "user-542419308/plastic-love",
  },
  {
    artist: "Her Majesty's Sound",
    title: "Ole devil called love",
    url: "hermajestyssound/ole-devil-called-love",
  },
  {
    artist: "Olivia Rodrigo",
    title: "deja vu",
    url: "oliviarodrigo/deja-vu",
  },
]

const artist = document.querySelector(".music__inner__artist");
const title = document.querySelector(".music__inner__title");
const todaysMusic = musics[Math.floor(Math.random() * musics.length)];

artist.innerText = todaysMusic.artist;
title.innerText = todaysMusic.title;

const musicUrl = document.querySelector("a");
musicUrl.href = `http://soundcloud.com/${todaysMusic.url}`;