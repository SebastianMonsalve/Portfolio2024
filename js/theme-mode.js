document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const switchElement = document.querySelector(".switch");
  const switchSound = document.getElementById("switchSound");

  function darkColors() {
    root.style.setProperty("--color-primary", "#16191d");
    root.style.setProperty("--color-second", "#aaaaaa");
    root.style.setProperty("--color-auxiliary", "#aaaaaa");
    root.style.setProperty("--color-third", "#333333");
    root.style.setProperty("--color-fourth", "#ffffff");
    root.style.setProperty("--color-fifth", "#464646");
    root.style.setProperty("--color-sixth", "#6abadf");
    root.style.setProperty("--color-switch", "#ffffff");
  }
  function lightColors() {
    root.style.setProperty("--color-primary", "#ffffff");
    root.style.setProperty("--color-second", "#333333");
    root.style.setProperty("--color-auxiliary", "#d6d6d6");
    root.style.setProperty("--color-third", "#d8d8d8");
    root.style.setProperty("--color-fourth", "#000000");
    root.style.setProperty("--color-fifth", "#bdbdbd");
    root.style.setProperty("--color-sixth", "#105688");
    root.style.setProperty("--color-switch", "#16191d");
  }

  const savedPreference = localStorage.getItem("color-mode");
  if (savedPreference === "dark" || savedPreference === null) {
    // dark mode for default
    darkColors();

    localStorage.setItem("color-mode", "dark");
  } else {
    // light mode
    switchElement.classList.toggle("active");
    lightColors();
  }
  //toggle: add or remove in this case the "active" class on click
  switchElement.addEventListener("click", (e) => {
    switchElement.classList.toggle("active");
    switchSound.play();

    if (switchElement.classList.contains("active")) {
      lightColors();

      localStorage.setItem("color-mode", "light");
    } else {
      darkColors();

      localStorage.setItem("color-mode", "dark");
    }
  });
});
