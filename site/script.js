window.onscroll = function () {
  stickyNavbar();
};

let botaoTopo = document.getElementById("botaoTopo");

function funcaoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  fechaHamburger();
}

// Navbar:
let brasao = document.querySelector("#brasao_nav img");
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
  } else {
    botaoTopo.style.display = "none";
    navFixo.style.display = "none";
  }
}

function clickHamburger() {
  if (opcaoNavFixo[0].style.display == "block") {
    fechaHamburger();
  } else {
    abreHamburguer();
  }

  function abreHamburguer() {
    for (let i = 0; i < opcaoNavFixo.length; i++) {
      opcaoNavFixo[i].style.display = "block";
    }
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    brasao.style.marginBottom = "-0.5rem";
  }
}

function fechaHamburger() {
  if (screen.width <= 480) {
    for (let i = 0; i < opcaoNavFixo.length; i++) {
      opcaoNavFixo[i].style.display = "none";
    }
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    brasao.style.marginBottom = "-3.5rem";
  }
}

// Galeria:
let galeria = document.getElementById("galeria");
let galeria1 = document.getElementById("galeria1");
let galeria2 = document.getElementById("galeria2");
let galeria3 = document.getElementById("galeria3");
let galeria4 = document.getElementById("galeria4");
let galeria5 = document.getElementById("galeria5");
let preCarregamento = document.getElementById("preCarregamento");

let imagem = [];
let qntdImg = 10; // Quantidade de imagens na pasta galeria
let galeriaCompleta = [];
for (let i = 1; i <= qntdImg; i++) {
  imagem.push("img/galeria/img" + i + ".webp");
  galeriaCompleta.push(`url(img/galeria/img${i}.webp)`);
}
galeriaCompleta.shift();
preCarregamento.style.backgroundImage = galeriaCompleta; // Faz um pré carregamento das imagens da galeria

function voltar() {
  let fim = `${imagem[imagem.length - 1]}`;
  imagem.pop();
  imagem.unshift(fim);
  galeria1.style.backgroundImage = `url(${imagem[0]})`;
  galeria2.style.backgroundImage = `url(${imagem[1]})`;
  galeria3.style.backgroundImage = `url(${imagem[2]})`;
  galeria4.style.backgroundImage = `url(${imagem[3]})`;
  galeria5.style.backgroundImage = `url(${imagem[4]})`;
}

function passar() {
  let inicio = imagem[0];
  imagem.shift();
  imagem.push(inicio);
  galeria1.style.backgroundImage = `url(${imagem[0]})`;
  galeria2.style.backgroundImage = `url(${imagem[1]})`;
  galeria3.style.backgroundImage = `url(${imagem[2]})`;
  galeria4.style.backgroundImage = `url(${imagem[3]})`;
  galeria5.style.backgroundImage = `url(${imagem[4]})`;
}

// Botões História:
// let seta = document.querySelectorAll(".fa-solid");
// let ideologia = document.getElementById("ideologia");
// let missao = document.getElementById("missao");

// function exibirHistoria(i) {
//   if (i === 0) {
//     if (ideologia.style.display == "none") {
//       ideologia.style.display = "block";
//       seta[0].classList.replace("fa-caret-down", "fa-caret-up");
//     } else {
//       ideologia.style.display = "none";
//       seta[0].classList.replace("fa-caret-up", "fa-caret-down");
//     }
//   } else {
//     if (missao.style.display == "none") {
//       missao.style.display = "block";
//       seta[1].classList.replace("fa-caret-down", "fa-caret-up");
//     } else {
//       missao.style.display = "none";
//       seta[1].classList.replace("fa-caret-up", "fa-caret-down");
//     }
//   }
// }
