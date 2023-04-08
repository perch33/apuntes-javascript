/* Vídeo: https://www.pexels.com/es-es/video/2869107/ */
const video = document.getElementById("video");

/* modo clásico */

/* addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    video.play();
  } else if (document.visibilityState === "hidden") {
    video.pause();
  }
}); */

/* modo ternario */

addEventListener("visibilitychange", () =>
  document.visibilityState === "visible" ? video.play() : video.pause()
);
