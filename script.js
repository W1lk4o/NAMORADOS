/* ═══════════════════════════════════════════
   NOSSA HISTÓRIA — Ana & Wilker
═══════════════════════════════════════════ */

const STORY = [
  {
    type:"text", chapter:"Nossa história",
    headline:"Tudo começou\nem <em>2016</em>",
    body:"Meu amor, quero te contar uma história. A nossa história. Cada capítulo foi escrito por Deus — e eu sou grato por cada um deles.",
    duration:9000
  },
  {
    type:"photo", photo:"photo1",
    chapter:"Capítulo I — O encontro",
    date:"Virada de Ano 2016/2017",
    headline:"O início de\n<em>tudo</em>",
    body:"Foi aqui que tudo começou. Nessa noite, eu olhei pra você e soube que minha vida nunca mais seria a mesma. Deus sabia exatamente o que estava fazendo.",
    duration:11000
  },
  {
    type:"photo", photo:"photo2",
    chapter:"Capítulo I — O encontro",
    date:"08 de maio de 2017",
    headline:"<em>Abençoados</em>\npor Deus",
    body:"Cada momento ao seu lado me fazia ter mais certeza: você era um presente de Deus para a minha vida. E eu nunca quis mais nada além de estar com você.",
    verse:"\"Toda dádiva boa e todo dom perfeito vêm do alto\" — Tiago 1:17",
    duration:11000
  },
  {
    type:"photo", photo:"photo3",
    chapter:"Capítulo II — Um novo capítulo",
    date:"16 de setembro de 2018",
    headline:"Chá Revelação\nda <em>Helena</em>",
    body:"Que noite foi essa! Com o Bernardo no colo, descobrimos juntos que uma menina estava a caminho. Meu coração transbordou de alegria e gratidão naquele momento.",
    duration:11000
  },
  {
    type:"photo", photo:"photo4",
    chapter:"Capítulo II — Um novo capítulo",
    date:"25 de dezembro de 2018",
    headline:"Natal aguardando\n<em>você, Helena</em>",
    body:"Nesse Natal, meu amor, o melhor presente ainda estava chegando. Mal conseguíamos esperar. A nossa família estava prestes a crescer mais uma vez.",
    verse:"\"Filhos são herança do Senhor\" — Salmos 127:3",
    duration:11000
  },
  {
    type:"photo", photo:"photo5",
    chapter:"Capítulo III — Helena chegou",
    date:"12 de fevereiro de 2019",
    headline:"Helena\n<em>chegou</em>",
    body:"Te ver assim, exausta e linda, segurando nossa filha pela primeira vez... foi o momento mais lindo que já vivi. Obrigado, meu amor. Obrigado por tanto.",
    duration:12000
  },
  {
    type:"photo", photo:"photo6",
    chapter:"Capítulo III — Helena chegou",
    date:"28 de março de 2019",
    headline:"Três\n<em>corações</em>",
    body:"Olhando pra você e pra Helena assim, eu entendi o que é graça. Você é a mãe mais incrível que eu já vi. E eu me sinto o homem mais abençoado do mundo.",
    verse:"\"Deus cuida de cada detalhe da nossa história.\"",
    duration:11000
  },
  {
    type:"photo", photo:"photo7",
    chapter:"Capítulo IV — Antes da tempestade",
    date:"03 de janeiro de 2020",
    headline:"Momentos de\n<em>leveza</em>",
    body:"Esse sorriso seu com o mar ao fundo... guardo essa imagem no coração. Não sabíamos o que viria pela frente, mas aproveitamos cada segundo juntos.",
    duration:11000
  },
  {
    type:"text",
    chapter:"Capítulo V — A pandemia",
    headline:"O mundo\n<em>parou</em>",
    body:"2020 foi difícil, meu amor. Enfrentamos dificuldades, desentendimentos, momentos muito duros. Mas Deus estava ali — nos moldando, nos fortalecendo, nos guardando.",
    verse:"\"O Senhor é o meu refúgio e a minha fortaleza\" — Salmos 91:2",
    duration:10000
  },
  {
    type:"photo", photo:"photo8",
    chapter:"Capítulo V — A pandemia",
    date:"10 de abril de 2021",
    headline:"Juntos em\n<em>tudo</em>",
    body:"Mesmo nos dias mais pesados, eu escolhia você. E você me escolhia. Esse abraço diz mais do que qualquer palavra que eu poderia escrever aqui.",
    duration:11000
  },
  {
    type:"photo", photo:"photo9",
    chapter:"Capítulo V — A pandemia",
    date:"10 de abril de 2021",
    headline:"O sorriso que\n<em>resistiu</em>",
    body:"Esse sorriso seu sobreviveu a tudo, meu amor. Nos dias em que eu mais precisei de força, era ele que me levantava. Obrigado por nunca ter desistido.",
    verse:"\"Deus fortaleceu o nosso casamento.\"",
    duration:11000
  },
  {
    type:"text",
    chapter:"Capítulo VI — O sim eterno",
    headline:"<em>15 de novembro</em>\nde 2020",
    body:"No meio de tudo, olhei nos seus olhos e disse sim. Sim pra vida, sim pros desafios, sim pra você — para sempre. Nenhuma circunstância no mundo mudaria isso.",
    verse:"\"O que Deus uniu, o homem não separe\" — Mateus 19:6",
    duration:11000
  },
  {
    type:"photo", photo:"photo10",
    chapter:"Capítulo VII — Oliver chegou",
    date:"28 de abril de 2025",
    headline:"Oliver\n<em>Ingrácio</em>",
    body:"Te ver com Oliver nos braços confirmou tudo que eu já sabia: Deus nunca parou de cuidar de nós. Você é guerreira, meu amor. Eu tenho muito orgulho de você.",
    verse:"\"Toda a glória a Deus.\"",
    duration:12000
  },
  {
    type:"photo", photo:"photo11",
    chapter:"Capítulo VIII — A família completa",
    date:"20 de julho de 2025",
    headline:"A nossa\n<em>família</em>",
    body:"Eu, você, Bernardo, Helena e Oliver. Quando olho pra essa foto, só consigo agradecer. Deus foi generoso demais. Essa família é a maior prova do amor Dele.",
    duration:13000
  },
  {
    type:"photo", photo:"photo12",
    chapter:"Capítulo IX — O presente",
    date:"31 de dezembro de 2025",
    headline:"Hoje e\n<em>sempre</em>",
    body:"Entramos em 2026 de mãos dadas, meu amor. É assim que quero envelhecer — ao seu lado, com Deus no centro. Acredito que o melhor ainda está por vir.",
    verse:"\"Porque eu sei os planos que tenho para vocês, planos de paz\" — Jeremias 29:11",
    duration:13000
  },
  {
    type:"letter",
    chapter:"Carta final",
    duration:20000
  },
];

// ── DOM ──────────────────────────────────
const splashEl    = document.getElementById("splash");
const expEl       = document.getElementById("experience");
const endingEl    = document.getElementById("ending");
const playBtn     = document.getElementById("playBtn");
const prevBtn     = document.getElementById("prevBtn");
const pauseBtn    = document.getElementById("pauseBtn");
const nextBtn     = document.getElementById("nextBtn");
const restartBtn  = document.getElementById("restartBtn");
const progressFill= document.getElementById("progressFill");
const chapterBadge= document.getElementById("chapterBadge");
const slideA      = document.getElementById("slideA");
const slideB      = document.getElementById("slideB");
const music       = document.getElementById("bgMusic");

let current = 0, paused = false, timer = null;
let timerStart = 0, timerRemaining = 0;
let activeSlide = slideA, inactiveSlide = slideB;

// ── Petals ───────────────────────────────
(function spawnPetals() {
  const c = document.getElementById("splashPetals");
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.style.cssText = `left:${Math.random()*100}%;animation-duration:${4+Math.random()*6}s;animation-delay:${Math.random()*8}s;opacity:${0.2+Math.random()*0.5}`;
    c.appendChild(p);
  }
})();

// ── Screen helpers ───────────────────────
function showScreen(el) {
  [splashEl, expEl, endingEl].forEach(s => {
    s.style.opacity = "0";
    s.style.pointerEvents = "none";
  });
  el.style.opacity = "1";
  el.style.pointerEvents = "all";
}

// ── Build slide ──────────────────────────
function buildSlide(data, el) {
  el.innerHTML = "";
  el.className = "slide";

  if (data.type === "letter") {
    el.classList.add("letter-slide");
    el.innerHTML = `
      <div class="letter-deco"></div>
      <div class="letter-inner">
        <div class="letter-title">Para você,<br/>meu amor</div>
        <p>Ana Aressa, quando olho para tudo que vivemos juntos, só consigo sentir gratidão. Por você, pelos nossos filhos, e por Deus — que esteve em cada capítulo da nossa história.</p>
        <p>Passamos por momentos difíceis. Teve dificuldades, desentendimentos, dias em que a vida pesou. Mas Deus nunca nos largou. Ele moldou e fortaleceu o nosso amor — e eu saí de tudo isso com mais certeza do que nunca de que você é a mulher certa pra mim.</p>
        <p>Bernardo, Helena e Oliver são as bênçãos que Deus colocou nas nossas mãos. E você, meu amor, é quem cuida de tudo com tanto amor e dedicação. Você é incrível.</p>
        <p>Obrigado por cada dia. Obrigado por cada sorriso. Obrigado por não desistir de nós. <strong style="color:var(--gold2)">Eu te amo — hoje, amanhã e para sempre.</strong></p>
        <div class="letter-sign">Com todo o meu amor,<br/>Wilker ♥</div>
      </div>`;

  } else if (data.type === "text") {
    el.classList.add("text-slide");
    el.innerHTML = `
      <div class="slide-text">
        <div class="slide-chapter">${data.chapter}</div>
        <h2 class="slide-headline">${fmt(data.headline)}</h2>
        ${data.body  ? `<p class="slide-body">${data.body}</p>` : ""}
        ${data.verse ? `<p class="slide-verse">${data.verse}</p>` : ""}
      </div>`;

  } else {
    const src = (typeof PHOTOS !== "undefined" && PHOTOS[data.photo]) ? PHOTOS[data.photo] : "";
    el.innerHTML = `
      <div class="slide-photo" style="background-image:url('${src}')"></div>
      <div class="slide-grad"></div>
      <div class="slide-text">
        <div class="slide-chapter">${data.chapter}</div>
        ${data.date  ? `<div class="slide-date">${data.date}</div>` : ""}
        <h2 class="slide-headline">${fmt(data.headline)}</h2>
        ${data.body  ? `<p class="slide-body">${data.body}</p>` : ""}
        ${data.verse ? `<p class="slide-verse">${data.verse}</p>` : ""}
      </div>`;
  }
}

function fmt(t) { return t.replace(/\n/g, "<br/>"); }

// ── Cross-fade ───────────────────────────
function goTo(index) {
  if (index < 0) index = 0;
  if (index >= STORY.length) { showEnding(); return; }
  current = index;
  clearTimeout(timer);

  const data = STORY[index];

  buildSlide(data, inactiveSlide);
  inactiveSlide.style.transition = "none";
  inactiveSlide.style.opacity = "0";
  inactiveSlide.style.zIndex  = "2";
  activeSlide.style.zIndex    = "1";

  inactiveSlide.getBoundingClientRect();
  inactiveSlide.style.transition = "opacity 1s ease";
  inactiveSlide.style.opacity = "1";

  const outgoing = activeSlide;
  setTimeout(() => { outgoing.style.opacity = "0"; }, 1000);

  [activeSlide, inactiveSlide] = [inactiveSlide, activeSlide];

  progressFill.style.width = ((current + 1) / STORY.length * 100) + "%";

  chapterBadge.textContent = data.chapter;
  chapterBadge.classList.add("show");
  setTimeout(() => chapterBadge.classList.remove("show"), 2500);

  timerRemaining = data.duration;
  if (!paused) scheduleNext(data.duration);
}

function scheduleNext(ms) {
  clearTimeout(timer);
  timerStart = Date.now();
  timer = setTimeout(() => {
    if (current + 1 >= STORY.length) showEnding();
    else goTo(current + 1);
  }, ms);
}

// ── Música ───────────────────────────────
function fadeIn() {
  music.volume = 0;
  const iv = setInterval(() => {
    music.volume = Math.min(music.volume + 0.02, 0.5);
    if (music.volume >= 0.5) clearInterval(iv);
  }, 150);
}

function fadeOut() {
  const iv = setInterval(() => {
    music.volume = Math.max(music.volume - 0.02, 0);
    if (music.volume <= 0) { clearInterval(iv); music.pause(); }
  }, 150);
}

// ── Controls ─────────────────────────────
playBtn.addEventListener("click", () => {
  showScreen(expEl);
  goTo(0);
  music.currentTime = 0;
  music.play().then(() => fadeIn()).catch(() => {});
});

prevBtn.addEventListener("click", () => goTo(current - 1));

nextBtn.addEventListener("click", () => {
  clearTimeout(timer);
  if (current + 1 >= STORY.length) showEnding();
  else goTo(current + 1);
});

pauseBtn.addEventListener("click", () => {
  paused = !paused;
  pauseBtn.textContent = paused ? "▶" : "⏸";
  if (paused) {
    clearTimeout(timer);
    timerRemaining -= (Date.now() - timerStart);
    music.pause();
  } else {
    scheduleNext(Math.max(timerRemaining, 800));
    music.play().catch(() => {});
  }
});

restartBtn.addEventListener("click", () => {
  stopHearts();
  showScreen(expEl);
  goTo(0);
  music.currentTime = 0;
  music.play().catch(() => {});
});

// ── Ending ───────────────────────────────
function showEnding() {
  clearTimeout(timer);
  showScreen(endingEl);
  startHearts();
  drawQR();
  fadeOut();
}

// ── Hearts ───────────────────────────────
let heartsAnim = null;
const hearts = [];

function startHearts() {
  const canvas = document.getElementById("heartsCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  hearts.length = 0;
  for (let i = 0; i < 45; i++) {
    hearts.push({
      x: Math.random()*canvas.width,
      y: canvas.height + Math.random()*200,
      size: 10 + Math.random()*18,
      speed: 1.2 + Math.random()*2.5,
      sway: Math.random()*2 - 1,
      alpha: 0.4 + Math.random()*0.5,
      color: Math.random() > .5 ? "#C9A84C" : "#E8D08A"
    });
  }
  function drawHeart(ctx,x,y,s,a,c){
    ctx.save(); ctx.globalAlpha=a; ctx.fillStyle=c;
    ctx.beginPath(); ctx.moveTo(x,y);
    ctx.bezierCurveTo(x,y-s*.3,x-s*.5,y-s*.8,x-s*.5,y-s*.5);
    ctx.bezierCurveTo(x-s*.5,y-s*1.1,x,y-s*1.1,x,y-s*.7);
    ctx.bezierCurveTo(x,y-s*1.1,x+s*.5,y-s*1.1,x+s*.5,y-s*.5);
    ctx.bezierCurveTo(x+s*.5,y-s*.8,x,y-s*.3,x,y);
    ctx.fill(); ctx.restore();
  }
  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    hearts.forEach(h=>{
      h.y -= h.speed;
      h.x += Math.sin(h.y/40)*h.sway;
      if(h.y < -40){ h.y=canvas.height+20; h.x=Math.random()*canvas.width; }
      drawHeart(ctx,h.x,h.y,h.size,h.alpha,h.color);
    });
    heartsAnim = requestAnimationFrame(loop);
  }
  loop();
}

function stopHearts(){
  if(heartsAnim) cancelAnimationFrame(heartsAnim);
  hearts.length = 0;
}

// ── QR ───────────────────────────────────
function drawQR() {
  const url = window.location.href.split("?")[0];
  document.getElementById("qrUrl").textContent = url;
  const canvas = document.getElementById("qrCanvas");
  const ctx = canvas.getContext("2d");
  const sz = 160; canvas.width = canvas.height = sz;
  ctx.fillStyle = "#F7F2E8"; ctx.fillRect(0,0,sz,sz);
  if (typeof QRCode !== "undefined") {
    canvas.style.display = "none";
    if (!document.getElementById("qrDiv")) {
      const d = document.createElement("div"); d.id="qrDiv";
      canvas.parentNode.insertBefore(d, canvas);
      new QRCode(d,{text:url,width:160,height:160,colorDark:"#1A1208",colorLight:"#F7F2E8"});
    }
  }
}
(function(){
  const s = document.createElement("script");
  s.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
  document.head.appendChild(s);
})();

window.addEventListener("resize",()=>{
  const c = document.getElementById("heartsCanvas");
  if(c){ c.width=window.innerWidth; c.height=window.innerHeight; }
});
