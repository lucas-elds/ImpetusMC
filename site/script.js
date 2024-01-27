window.onscroll = function () {
  stickyNavbar();
};

addEventListener("resize", function () {
  menuResponsivo();
});

// Botão topo:
let botaoTopo = document.getElementById("botaoTopo");

function funcaoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Navbar:
let brasao = document.getElementById("brasao_nav");
let hamburger = document.getElementById("hamburger");
let itens = document.querySelectorAll(".itens");
let navbar = document.getElementById("nav_menu");
let menu_mobile = document.getElementById("menu_mobile");
let tamanhoTopo = document.getElementById("topo").offsetTop;

function stickyNavbar() {
  if (window.scrollY >= tamanhoTopo) {
    botaoTopo.style.display = "block";
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "black";
    brasao.style.display = "block";
    menuResponsivo();
  } else {
    botaoTopo.style.display = "none";
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = "#000000";
    brasao.style.display = "none";
    menu_mobile.style.display = "none";
    hamburger.style.display = "none";
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuResponsivo();
  }
}

function menuResponsivo() {
  if (window.innerWidth <= 480) {
    if (navbar.style.backgroundColor == "black") {
      itens[0].style.display = "none";
      itens[1].style.display = "none";
      hamburger.style.display = "block";
    } else {
      itens[0].style.display = "flex";
      itens[1].style.display = "flex";
      hamburger.style.display = "none";
    }
  } else {
    itens[0].style.display = "flex";
    itens[1].style.display = "flex";
    hamburger.style.display = "none";
  }
}

function clickHamburger() {
  if (menu_mobile.style.display == "block") {
    menu_mobile.style.display = "none";
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    menu_mobile.style.display = "block";
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}

function itemHamburger() {
  menu_mobile.style.display = "none";
  hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
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
