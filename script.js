// =========================================
// CARTA
// =========================================

const envelope = document.querySelector(".envelope");

if (envelope) {

    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open");
    });

}

// =========================================
// MÚSICA
// =========================================

const button = document.getElementById("playMusic");
const audio = document.getElementById("audio");

if (button && audio) {

    button.addEventListener("click", () => {

        if (audio.paused) {

            audio.play();

            button.innerHTML =
                '<i class="fa-solid fa-pause"></i> Pausar Música';

        } else {

            audio.pause();

            button.innerHTML =
                '<i class="fa-solid fa-play"></i> Tocar Música';

        }

    });

}

// =========================================
// CONTADOR
// =========================================

// ALTERE PARA A DATA QUE VOCÊS COMEÇARAM
const dataNamoro = new Date("2025-07-03");

function atualizarContador() {

    const hoje = new Date();

    const diferenca = hoje - dataNamoro;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const contador = document.getElementById("contador");

    if (contador) {

        contador.innerHTML = `
            ${dias} Dias
            <br>
            <span style="font-size:25px;">
                ❤️ Juntos ❤️
            </span>
        `;

    }

}

atualizarContador();

// =========================================
// ANIMAÇÃO AO ROLAR
// =========================================

const elementos = document.querySelectorAll(

    ".about, .timeline, .gallery, .counter, .letter, .music, .final"

);

elementos.forEach((elemento) => {

    elemento.classList.add("reveal");

});

function revelarElementos() {

    const alturaTela = window.innerHeight;

    elementos.forEach((elemento) => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < alturaTela - 120) {

            elemento.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revelarElementos);

revelarElementos();

// =========================================
// EFEITO NO BOTÃO HERO
// =========================================

const heroButton = document.querySelector(".hero button");

if (heroButton) {

    heroButton.addEventListener("mouseenter", () => {

        heroButton.style.transform = "scale(1.08)";

    });

    heroButton.addEventListener("mouseleave", () => {

        heroButton.style.transform = "scale(1)";

    });

}
// =========================================
// CORAÇÕES FLUTUANDO
// =========================================

function criarCoracao() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(criarCoracao, 500);

// =========================================
// GALERIA (LIGHTBOX)
// =========================================

const imagens = document.querySelectorAll(".grid img");

const lightbox = document.createElement("div");

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,.95)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "99999";
lightbox.style.cursor = "zoom-out";

const imagem = document.createElement("img");

imagem.style.maxWidth = "90%";
imagem.style.maxHeight = "90%";
imagem.style.borderRadius = "15px";
imagem.style.boxShadow = "0 0 40px rgba(255,255,255,.2)";

lightbox.appendChild(imagem);

document.body.appendChild(lightbox);

imagens.forEach((img)=>{

    img.addEventListener("click",()=>{

        imagem.src = img.src;

        lightbox.style.display = "flex";

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

// =========================================
// EFEITO DIGITAÇÃO
// =========================================

const textoHero = document.querySelector(".hero p");

if(textoHero){

const textoOriginal = textoHero.innerText;

textoHero.innerText = "";

let i = 0;

function escrever(){

    if(i < textoOriginal.length){

        textoHero.innerHTML += textoOriginal.charAt(i);

        i++;

        setTimeout(escrever,40);

    }

}

escrever();

}

// =========================================
// PARALLAX
// =========================================

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    let valor = window.scrollY;

    hero.style.backgroundPositionY = valor * .5 + "px";

});

// =========================================
// BRILHO NAS IMAGENS
// =========================================

imagens.forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const x = e.offsetX;
const y = e.offsetY;

img.style.transform =
`perspective(900px)
 rotateY(${(x-img.clientWidth/2)/30}deg)
 rotateX(${-(y-img.clientHeight/2)/30}deg)
 scale(1.05)`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform="perspective(900px) rotateY(0) rotateX(0) scale(1)";

});

});

// =========================================
// MENSAGEM FINAL
// =========================================

console.log("%c❤️ Eu te amo ❤️",
"font-size:35px;color:#ff4d8d;font-weight:bold;");

console.log(
"%cSe você está vendo isso, significa que descobriu um pequeno segredo do site.",
"font-size:16px;color:white;"
);

// =========================================
// TÍTULO DA ABA
// =========================================

const tituloOriginal = document.title;

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="❤️ Volta pra mim ❤️";

}else{

document.title=tituloOriginal;

}

});

// =========================================
// CURSOR COM CORAÇÃO
// =========================================

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("span");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";
heart.style.color="#ff4d8d";
heart.style.fontSize="12px";

heart.style.opacity=".8";

heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-30px)";
heart.style.opacity="0";

},10);

setTimeout(()=>{

heart.remove();

},1000);

});

// =========================================
// FIM
// =========================================