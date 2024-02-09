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
  if (screen.width <= 768) {
    for (let i = 0; i < opcaoNavFixo.length; i++) {
      opcaoNavFixo[i].style.display = "none";
    }
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    brasao.style.marginBottom = "-2.5rem";
  }
}

// Galeria:
let img1Galeria = document.getElementById("img1_galeria");
let img2Galeria = document.getElementById("img2_galeria");
let img3Galeria = document.getElementById("img3_galeria");
let img4Galeria = document.getElementById("img4_galeria");
let img5Galeria = document.getElementById("img5_galeria");
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

function attGaleria() {
  img1Galeria.style.backgroundImage = `url(${imagem[0]})`;
  img2Galeria.style.backgroundImage = `url(${imagem[1]})`;
  img3Galeria.style.backgroundImage = `url(${imagem[2]})`;
  img4Galeria.style.backgroundImage = `url(${imagem[3]})`;
  img5Galeria.style.backgroundImage = `url(${imagem[4]})`;
}
attGaleria();

function voltar() {
  let fim = `${imagem[imagem.length - 1]}`;
  imagem.pop();
  imagem.unshift(fim);
  attGaleria();
}

function passar() {
  let inicio = imagem[0];
  imagem.shift();
  imagem.push(inicio);
  attGaleria();
}

// Botões História:
let seta = document.querySelectorAll(".seta");
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

// Mapa:
const description = document.querySelector(".tooltip");

document.querySelectorAll("path").forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    if (el.classList == "divisao") {
      description.classList.add("active");
    }
  })
);

document.querySelectorAll("path").forEach((el) =>
  el.addEventListener("mouseout", () => {
    description.classList.remove("active");
  })
);

document.onmousemove = function (e) {
  description.style.left = e.pageX + "px";
  description.style.top = e.pageY - 70 + "px";
};

let mapa = document.getElementById("mapa");
let bandeira = document.querySelectorAll(".bandeira_cidades");
let estado = document.querySelectorAll("path");

//Paraíba
estado[15].addEventListener("mouseover", function () {
  description.innerHTML = `
  <img src="img/bandeiras/paraiba.webp" alt="Bandeira da Paraíba">
  <h1>Paraíba</h1>
  <h2><i class="fa-solid fa-house"></i>Matriz:</h2>
  <p>João Pessoa</p>
  <h2><i class="fa-solid fa-map-location-dot"></i>Divisão:</h2>
  <p>Campina Grande</p>
  <p>Solânea</p>`;
});

//Pernambuco
estado[17].addEventListener("mouseover", function () {
  description.innerHTML = `
  <img src="img/bandeiras/pernambuco.webp" alt="Bandeira de Pernambuco">
  <h1>Pernambuco</h1>
  <h2><i class="fa-solid fa-map-location-dot"></i>Divisão:</h2>
  <p>Garanhuns</p>
  <p>Olinda</p>`;
});

//Sergipe
estado[26].addEventListener("mouseover", function () {
  description.innerHTML = `
  <img src="img/bandeiras/sergipe.webp" alt="Bandeira de Sergipe">
  <h1>Sergipe</h1>
  <h2><i class="fa-solid fa-map-location-dot"></i>Divisão:</h2>
  <p>Aracajú</p>
  <h2><i class="fa-solid fa-handshake-angle"></i>Suporte:</h2>
  <p>Itabaiana</p>
  <p>Socorro</p>`;
});

//Maranhão
estado[10].addEventListener("mouseover", function () {
  description.innerHTML = `
  <img src="img/bandeiras/maranhao.webp" alt="Bandeira do Maranhão">
  <h1>Maranhão</h1>
  <h2><i class="fa-solid fa-map-location-dot"></i>Divisão:</h2>
  <p>Aracajú</p>`;
});

//Mundo
estado[0].addEventListener("mouseover", function () {
  description.innerHTML = `
  <h1>Exterior</h1>
  <img src="img/bandeiras/colombia.webp" alt="Bandeira da Colômbia">
  <h2>Colômbia</h2>
  <p>Medellín</p>`;
});

//Comando:

let cargos = document.querySelectorAll(".cargo_img");
cargos[0].style.backgroundImage = "url(img/comando/presidente.webp)";
cargos[1].style.backgroundImage = "url(img/comando/vicepresidente.webp)";
cargos[2].style.backgroundImage = "url(img/comando/secretario.webp)";
cargos[3].style.backgroundImage = "url(img/comando/tesoureiro.webp)";
cargos[4].style.backgroundImage = "url(img/comando/disciplinador.webp)";

//Contato:

function whatsapp() {
  let numero = document.getElementById("wppDivisao").value.trim();
  let nome = document.getElementById("wppNome").value.trim();
  let assunto = document.getElementById("wppAssunto").value.trim();
  let mensagem = document.getElementById("wppMensagem").value.trim();

  window.open(
    `https://wa.me/${numero}?text=Olá, eu me chamo *${nome}* e gostaria de falar a respeito do *Impetus M.C.* sobre: *${assunto}*%0A%0A${mensagem}`,
    '_blank rel="noopener noreferrer"'
  );
}

//Footer:

let imgFooter = document.querySelectorAll(".img_footer");
imgFooter[0].style.backgroundImage = "url(img/footer/footer1.webp)";
imgFooter[1].style.backgroundImage = "url(img/footer/footer2.webp)";
imgFooter[2].style.backgroundImage = "url(img/footer/footer3.webp)";
imgFooter[3].style.backgroundImage = "url(img/footer/footer4.webp)";
