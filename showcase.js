const descriptions = {
  doom: "Orbit the original Linux Doom source tree, zoom out over its 139 files, and descend onto Main Street.",
  "xv6-riscv": "Fly over the kernel and user-space neighborhoods of MIT’s RISC-V teaching operating system, then follow the guided street tour.",
  "linux-helix": "See Linux 6.12 arranged on successive Sky City platforms. Zoom out to see how the levels wind around the helix."
};
const film = document.querySelector("#film");
const buttons = document.querySelectorAll("[data-tour]");
for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    const key = button.dataset.tour;
    for (const item of buttons) item.setAttribute("aria-pressed", String(item === button));
    film.pause();
    film.poster = "media/" + key + "-overview.png";
    film.src = "media/" + key + ".mp4";
    film.setAttribute("aria-label", button.querySelector("strong").textContent + " city tour");
    document.querySelector("#description").textContent = descriptions[key];
    film.load();
  });
}
