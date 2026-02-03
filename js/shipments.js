// Optional animation for progress bar
const bar = document.querySelector(".bar");
let width = 0;

setInterval(() => {
  if (width < 60) {
    width += 1;
    bar.style.width = width + "%";
  }
}, 100);
