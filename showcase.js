const film = document.querySelector("#film");
const tourButtons = [...document.querySelectorAll("[data-tour]")];
const lightButtons = [...document.querySelectorAll("[data-light]")];
function selectTour(buttons, selected) {
  for (const button of buttons) button.setAttribute("aria-pressed", String(button === selected));
  const project = tourButtons.find(b => b.getAttribute("aria-pressed") === "true");
  const light = lightButtons.find(b => b.getAttribute("aria-pressed") === "true").dataset.light;
  const name = project.querySelector("strong").textContent;
  const base = "media/" + project.dataset.tour + "-" + light;
  film.pause();
  film.poster = base + "-overview.png";
  film.src = base + ".mp4";
  film.setAttribute("aria-label", name + " " + light + " tour");
  document.querySelector("#description").textContent = name + " · " + (light === "day" ? "Daylight" : "Nighttime") + " orbit";
  film.load();
}
for (const buttons of [tourButtons, lightButtons]) {
  for (const button of buttons) button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") !== "true") selectTour(buttons, button);
  });
}
const closeup = document.querySelector("#closeup-film");
const closeupButtons = [...document.querySelectorAll("[data-closeup]")];
for (const button of closeupButtons) {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    for (const item of closeupButtons) item.setAttribute("aria-pressed", String(item === button));
    const light = button.dataset.closeup;
    const base = "media/kernel-closeup-" + light;
    closeup.pause();
    closeup.poster = base + "-overview.png";
    closeup.src = base + ".mp4";
    closeup.setAttribute("aria-label", "Kernel Closeup " + (light === "day" ? "in daylight" : "at night"));
    closeup.load();
  });
}
