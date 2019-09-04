let text = document.getElementById("video-text"),
  button = document.getElementById("video-button"),
  video = document.getElementById("main-video"),
  honor = document.getElementById("honor-section");
button.addEventListener("click", function() {
  if (text.className == "container") {
    text.className = "visually-hidden";
    playClip(video);
    button.className = "visually-hidden";
    honor.style.marginTop = "70px";
    video.setAttribute("controls", "controls");
  } else {
    text.className = "container";
  }
});

function playClip(media) {
  media.play();
}
