window.onscroll = function () {
  stickyNavbar();
};

// addEventListener("resize", function () {
//   // menuResponsivo();
// });

// Botão topo:
let botaoTopo = document.getElementById("botaoTopo");

function funcaoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  fechaHamburger();
}

// Navbar:
let brasao = document.getElementById("brasao_nav");
let hamburger = document.getElementById("hamburger");
let itens = document.querySelectorAll(".itens");
let navbar = document.getElementById("nav_menu");
let navFixo = document.getElementById("nav_fixo");
let opcaoNavFixo = document.querySelectorAll(".opcao_navfixo li");
let tamanhoTopo = document.getElementById("topo").offsetTop;

function stickyNavbar() {
  if (window.scrollY >= tamanhoTopo) {
    botaoTopo.style.display = "block";
    navFixo.style.display = "flex";
    // navFixo.style.zIndex = "999";
  } else {
    botaoTopo.style.display = "none";
    navFixo.style.display = "none";
    // navFixo.style.zIndex = "-1";
    // fechaHamburger();
  }
}

function clickHamburger() {
  if (opcaoNavFixo[0].style.display == "block") {
    for (let i = 0; i < opcaoNavFixo.length; i++) {
      opcaoNavFixo[i].style.display = "none";
    }
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    for (let i = 0; i < opcaoNavFixo.length; i++) {
      opcaoNavFixo[i].style.display = "block";
    }
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}

function fechaHamburger() {
  for (let i = 0; i < opcaoNavFixo.length; i++) {
    opcaoNavFixo[i].style.display = "none";
  }
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
