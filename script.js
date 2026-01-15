const toggleButton = document.getElementById("switch-theme");
const bodyElement = document.body;
const icone = document.getElementById("icone");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  bodyElement.classList.add("lightmode");
  icone.classList.remove("fa-solid");
  icone.classList.add("fa-regular");
}

toggleButton.onclick = function () {
  bodyElement.classList.toggle("lightmode");

  if (bodyElement.classList.contains("lightmode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  document.getElementById("icone");
  if (icone.classList.contains("fa-sun")) {
    icone.classList.remove("fa-solid");
    icone.classList.add("fa-regular");
  } else {
    icone.classList.remove("fa-solid");
    icone.classList.add("fa-regular");
  }
};
