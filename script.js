// typing text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = [
  "PYTHON",
  "REACT JS",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "C",
  "JAVA",
  "PHP",
];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 200;
let textArrayIndex = 0;
let charIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Toggle menu
function toggleSidebar() {
  const sidebar = document.getElementById("myNav");
  sidebar.style.display === "none";
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
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

