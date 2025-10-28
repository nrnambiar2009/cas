const images = ["aggressive.gif", "chill.gif", "trollface.jpg", "freak_queef.png", "jaycob.png"];

const random = Math.floor(Math.random() * images.length);

document.querySelector("article img").src = "resources/" + images[random];