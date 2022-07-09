import "./components/PictureElement.js";

const playMusic = () => {
  const theme = ["waltz", "8bits"][~~(Math.random() * 2)];
  const audio = new Audio(`sounds/${theme}.mp3`);
  audio.play();
};

const container = document.querySelector(".pictures");

const createPicture = (name, image) => {
  const picture = document.createElement("picture-element");
  picture.setAttribute("image", image);
  picture.setAttribute("name", name);
  container.appendChild(picture);
};

const addAnimation = (size) => {
  const code = `@keyframes move-scene {
    0% { transform: translateX(0); }
    100% { transform: translateX(${size}px); }
  }`;
  const style = document.createElement("style");
  style.innerHTML = code;
  document.body.appendChild(style);
};

// Fake Users
const array = [
  { name: "manuel_jesus_dody", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/44c2ba3c-1c84-44e1-95fe-dbba245c43c3-profile_image-70x70.png" },
  { name: "Djuliox", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/b57b2844-060e-40d9-9d06-bfa4ec576ea9-profile_image-70x70.png" },
  { name: "nicomem14_", picture: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png" },
  { name: "velcevu1", picture: "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-70x70.png" },
  { name: "rebeskor", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/822557d1-5834-4aca-b3db-c88f3c2b10b9-profile_image-70x70.png" },
  { name: "Rising_Okami", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/d18e6aaa-7499-4463-a2c4-ee1564bf43e4-profile_image-70x70.png" },
  { name: "Megavatio", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/784525ca-3dd4-4f2c-a653-5a1cf410fca7-profile_image-70x70.png" },
  { name: "JesusTorresDev", picture: "https://static-cdn.jtvnw.net/jtv_user_pictures/ce16a3e1-edd1-4f0a-831d-ca961feed4d4-profile_image-70x70.png" }
];

const startScene = (array) => {
  if (array.length > 0) {
    playMusic();
    addAnimation(-1 * (array.length * 400) + 1200);
    document.body.style.setProperty("--elements", array.length);
    array.forEach(data => createPicture(data.name, data.picture));
    return;
  }

  const crickets = new Audio("sounds/crickets.mp3");
  document.body.style.setProperty("--elements", 6);
  crickets.play();
};

startScene(array);

/*
fetch("http://localhost:9999/api/newsubs")
  .then(response => response.json())
  .then(array => startScene(array));
*/

const step = 1500;
let pictures;

const turnOn = () => {
  const firstLight = pictures.shift();
  if (firstLight) {
    firstLight.on();
    setTimeout(() => turnOn(), step);
  }
};

setTimeout(() => {
  pictures = [...document.querySelectorAll("picture-element")];
  turnOn();
}, step + 2000);
