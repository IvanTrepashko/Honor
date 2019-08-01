
var text = document.getElementById("video-text");
var button = document.getElementById("video-button");
var video = document.getElementById("main-video");
var honor = document.getElementById("honor-section");
button.addEventListener("click", toggleClass);

function toggleClass() {

  if (text.className == "container") {
    text.className = "visually-hidden";
    playClip(video);
    button.className = "visually-hidden";
    honor.style.marginTop = '70px';
    video.setAttribute("controls", "controls");
  }
  else {
    text.className = "container";
  }
}

function playClip(media) {
  media.play();
}