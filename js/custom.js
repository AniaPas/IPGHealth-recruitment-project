export default function () {
  const playBtn = document.querySelector("play-text");
  const videoContainer = document.querySelector("video-container");
  const close = document.querySelector("play-text");

  playBtn.addEventListener("click", () => {
    videoContainer.classList.add("show");
  });
  close.addEventListener("click", () => {
    videoContainer.classList.remove("show");
  });
}
