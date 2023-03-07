// pre-loader

document.addEventListener("DOMContentLoaded", function () {
  const backdrop = document.getElementById("backdrop");
  const preloader = document.getElementById("bars1");
  backdrop.style.display = "block";
  preloader.style.display = "flex";
});

window.addEventListener("load", function () {
  const backdrop = document.getElementById("backdrop");
  const preloader = document.getElementById("bars1");
  backdrop.style.display = "none";
  preloader.style.display = "none";
});

//show menu button
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//toggle menu
function toggleSidebar() {
  var sidebar = document.getElementById("myNav");

  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

// show and hide Divs function

const buttons = document.querySelectorAll(".fixed-sidebar button");
const divs = document.querySelectorAll(".content > div");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const prevButton1 = document.getElementById("previous1");
const nextButton1 = document.getElementById("next1");
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
  document.querySelector(".content").style.display = "block";
  divs[currentDiv].scrollTop = 0; // Scrolls to the top of the active div
  divs[currentDiv].scrollIntoView({ behavior: "smooth", block: "start" }); // Scrolls to the top of the active div
}

function updateActive() {
  for (let i = 0; i < buttons.length; i++) {
    if (i === currentDiv) {
      buttons[i].classList.add("active");
    } else {
      buttons[i].classList.remove("active");
    }
  }
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
showDiv(0);
