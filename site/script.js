// Navbar:
window.onscroll = function () {
  stickyNavbar();
};

let brasao = document.getElementById("brasao_nav");
let navbar = document.getElementById("nav_menu");
let sticky = navbar.offsetTop;

function stickyNavbar() {
  if (screen.width > 768) {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      brasao.style.display = "block";
    } else {
      navbar.classList.remove("sticky");
      brasao.style.display = "none";
    }
  }
}

// Botões História:
let seta = document.querySelectorAll(".fa-solid");
let ideologia = document.getElementById("ideologia");
let missao = document.getElementById("missao");

function exibirHistoria(i) {
  if (i === 0) {
    if (ideologia.style.display == "none") {
      ideologia.style.display = "block";
      seta[0].classList.replace("fa-caret-down", "fa-caret-up");
    } else {
      ideologia.style.display = "none";
      seta[0].classList.replace("fa-caret-up", "fa-caret-down");
    }
  } else {
    if (missao.style.display == "none") {
      missao.style.display = "block";
      seta[1].classList.replace("fa-caret-down", "fa-caret-up");
    } else {
      missao.style.display = "none";
      seta[1].classList.replace("fa-caret-up", "fa-caret-down");
    }
  }
}
