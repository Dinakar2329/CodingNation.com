//Toggle menu
function toggleSidebar() {
  const sidebar = document.getElementById("myNav");
  if (sidebar.style.display === "none") {
    sidebar.classList.add("sidebar");
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
    sidebar.classList.remove("sidebar");
  }
}
const buttons = document.querySelectorAll(".fixed-sidebar button");
const divs = document.querySelectorAll(".content > div");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const prevButton1 = document.getElementById("previous1");
const nextButton1 = document.getElementById("next1");
const mainContent = document.querySelector(".main-content");
let currentDiv = 0;

function showDiv(index) {
  divs[currentDiv].style.display = "none";
  currentDiv = index;
  divs[currentDiv].style.display = "block";
  prevButton.disabled = currentDiv === 0;
  nextButton.disabled = currentDiv === divs.length - 1;
  prevButton1.disabled = currentDiv === 0;
  nextButton1.disabled = currentDiv === divs.length - 1;
  updateActive();
  mainContent.scrollTop = 0;

  const buttonId = buttons[index].id;
  const buttonIndex = buttonId.substring(buttonId.indexOf("-") + 1);
  const newUrl = window.location.href.split("?")[0] + "?button-" + buttonIndex;
  window.history.replaceState(null, "", newUrl);
}
function updateActive() {
  buttons.forEach((button, index) => {
    if (index === currentDiv) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function setup() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showDiv(index);
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentDiv > 0) {
      showDiv(currentDiv - 1);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentDiv < divs.length - 1) {
      showDiv(currentDiv + 1);
    }
  });

  prevButton1.addEventListener("click", () => {
    if (currentDiv > 0) {
      showDiv(currentDiv - 1);
    }
  });

  nextButton1.addEventListener("click", () => {
    if (currentDiv < divs.length - 1) {
      showDiv(currentDiv + 1);
    }
  });

  prevButton.disabled = true;
  prevButton1.disabled = true;
  updateActive();
}

setup();
// Show the first div by default
showDiv(currentDiv);
