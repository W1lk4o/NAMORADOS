/* ═══════════════════════════════════════════
   NOSSA HISTÓRIA — Ana & Wilker
═══════════════════════════════════════════ */

const STORY = [
  { type:"text", chapter:"Nossa história", headline:"Tudo começou\nem <em>2016</em>", body:"Dois caminhos que Deus conduziu até o mesmo lugar. O que parecia acaso era, na verdade, um plano.", duration:6000 },
  { type:"photo", photo:"photo1", chapter:"Capítulo I — O encontro", date:"Virada de Ano 2016/2017", headline:"O início de\n<em>tudo</em>", body:"Deus uniu dois corações numa noite que ficaria para sempre na memória.", duration:7000 },
  { type:"photo", photo:"photo2", chapter:"Capítulo I — O encontro", date:"08 de maio de 2017", headline:"<em>Abençoados</em>\npor Deus", body:"Cada sorriso, cada momento juntos — marcado pela graça de Deus sobre a vida do casal.", verse:"\u201cToda dádiva boa e todo dom perfeito vêm do alto\u201d — Tiago 1:17", duration:7000 },
  { type:"photo", photo:"photo3", chapter:"Capítulo II — Um novo capítulo", date:"16 de setembro de 2018", headline:"Chá Revelação\nda <em>Helena</em>", body:"Uma menina estava a caminho. Bernardo já fazia parte da família, e juntos esperavam Helena com o coração cheio de alegria.", duration:7000 },
  { type:"photo", photo:"photo4", chapter:"Capítulo II — Um novo capítulo", date:"25 de dezembro de 2018", headline:"Natal aguardando\n<em>Helena</em>", body:"A melhor expectativa de Natal: o presente que já crescia dentro do ventre de Ana Aressa.", verse:"\u201cFilhos são herança do Senhor\u201d — Salmos 127:3", duration:7000 },
  { type:"photo", photo:"photo5", chapter:"Capítulo III — Helena chegou", date:"12 de fevereiro de 2019", headline:"Helena\n<em>chegou</em>", body:"No dia 12 de fevereiro de 2019, Deus presenteou a família com Helena. O choro dela foi a mais bela música que os dois já ouviram.", duration:7500 },
  { type:"photo", photo:"photo6", chapter:"Capítulo III — Helena chegou", date:"28 de março de 2019", headline:"Três\n<em>corações</em>", body:"O ensaio que eternizou o olhar dos pais sobre a filha. Silêncio, gratidão e amor que transborda.", verse:"\u201cDeus cuida de cada detalhe da sua história.\u201d", duration:7000 },
  { type:"photo", photo:"photo7", chapter:"Capítulo IV — Antes da tempestade", date:"03 de janeiro de 2020", headline:"Momentos de\n<em>leveza</em>", body:"Ainda sem saber o que 2020 traria, o casal aproveitava cada instante de alegria. Deus os preparava para o que viria.", duration:7000 },
  { type:"text", chapter:"Capítulo V — A pandemia", headline:"O mundo\n<em>parou</em>", body:"2020. O mundo fechou as portas. Mas dentro de casa, Deus abriu janelas. A pandemia testou, moldou e fortaleceu o casamento de Ana e Wilker.", verse:"\u201cO Senhor é o meu refúgio e a minha fortaleza\u201d — Salmos 91:2", duration:6500 },
  { type:"photo", photo:"photo8", chapter:"Capítulo V — A pandemia", date:"10 de abril de 2021", headline:"Juntos em\n<em>tudo</em>", body:"Entre as dificuldades, o amor resistiu. Deus estava presente em cada dia difícil, em cada conversa, em cada abraço.", duration:7000 },
  { type:"photo", photo:"photo9", chapter:"Capítulo V — A pandemia", date:"10 de abril de 2021", headline:"O sorriso que\n<em>sobreviveu</em>", body:"Depois de tudo que passaram juntos, o sorriso continuou. Essa é a prova de que Deus estava cuidando.", verse:"\u201cDeus fortaleceu nosso casamento.\u201d", duration:7000 },
  { type:"text", chapter:"Capítulo VI — O sim eterno", headline:"<em>15 de novembro</em>\nde 2020", body:"No meio da pandemia, Ana e Wilker disseram sim diante de Deus. Nenhuma circunstância foi capaz de adiar o que Ele já tinha escrito.", verse:"\u201cO que Deus uniu, o homem não separe\u201d — Mateus 19:6", duration:7000 },
  { type:"photo", photo:"photo10", chapter:"Capítulo VII — Oliver chegou", date:"28 de abril de 2025", headline:"Oliver\n<em>Ingrácio</em>", body:"Em 28 de abril de 2025, Oliver chegou. Mais uma vez, Deus disse: 'Eu nunca deixei de cuidar de vocês.'", verse:"\u201cToda a glória a Deus.\u201d", duration:7500 },
  { type:"photo", photo:"photo11", chapter:"Capítulo VIII — A família completa", date:"20 de julho de 2025", headline:"A família que\n<em>Deus nos deu</em>", body:"Ana Aressa. Wilker. Bernardo. Helena. Oliver. Cinco vidas, uma história, um Deus. Tudo isso é graça.", duration:8000 },
  { type:"photo", photo:"photo12", chapter:"Capítulo IX — O presente", date:"31 de dezembro de 2025", headline:"Hoje e\n<em>sempre</em>", body:"Com o futuro à frente e Deus no centro, o casal entrou em 2026 de mãos dadas. A história continua — e o melhor ainda está por vir.", verse:"\u201cPorque eu sei os planos que tenho para vocês, planos de paz e não de mal\u201d — Jeremias 29:11", duration:8000 },
  { type:"letter", chapter:"Carta final", duration:14000 },
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
  document.querySelectorAll(".screen").forEach(s => {
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
        <div class="letter-title">Para Ana Aressa,<br/>meu amor</div>
        <p>Meu amor, quando olho para tudo que vivemos, eu só consigo sentir gratidão. Gratidão por você, pela nossa família, e principalmente por Deus — que esteve presente em cada capítulo desta história.</p>
        <p>Passamos pela pandemia juntos. Enfrentamos dificuldades que testaram tudo que tínhamos. Mas Deus nunca nos largou. Ele moldou, fortaleceu e fez do nosso amor algo muito maior do que eu poderia imaginar.</p>
        <p>Helena e Oliver são presentes de Deus colocados nas nossas mãos. Bernardo também faz parte desta história linda. E você, Ana Aressa, é a mulher que Deus escolheu para caminhar ao meu lado.</p>
        <p>Obrigado por cada dia. Obrigado por cada sorriso. Obrigado por não desistir. <strong style="color:var(--gold2)">Eu te amo — hoje, amanhã e para sempre.</strong></p>
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

// ── Cross-fade between slides ────────────
function goTo(index) {
  if (index < 0) index = 0;
  if (index >= STORY.length) { showEnding(); return; }
  current = index;
  clearTimeout(timer);

  const data = STORY[index];

  // Prepare new slide off-screen (opacity 0)
  buildSlide(data, inactiveSlide);
  inactiveSlide.style.transition = "none";
  inactiveSlide.style.opacity = "0";
  inactiveSlide.style.zIndex  = "2";
  activeSlide.style.zIndex    = "1";

  // Force reflow then fade in
  inactiveSlide.getBoundingClientRect();
  inactiveSlide.style.transition = "opacity 1s ease";
  inactiveSlide.style.opacity = "1";

  // After fade, retire old
  const outgoing = activeSlide;
  setTimeout(() => { outgoing.style.opacity = "0"; }, 1000);

  // Swap
  [activeSlide, inactiveSlide] = [inactiveSlide, activeSlide];

  // Progress
  progressFill.style.width = ((current + 1) / STORY.length * 100) + "%";

  // Chapter badge
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

// ── Controls ─────────────────────────────
playBtn.addEventListener("click", () => {
  showScreen(expEl);
  goTo(0);
  music.volume = 0;
  music.play().catch(() => {});
  fadeIn();
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
  } else {
    scheduleNext(Math.max(timerRemaining, 800));
  }
});

restartBtn.addEventListener("click", () => {
  stopHearts();
  showScreen(expEl);
  goTo(0);
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

function fadeIn() {
  let v = 0;
  const iv = setInterval(() => { v = Math.min(v + 0.02, 0.45); music.volume = v; if (v >= 0.45) clearInterval(iv); }, 120);
}
function fadeOut() {
  let v = music.volume;
  const iv = setInterval(() => { v = Math.max(v - 0.015, 0); music.volume = v; if (v <= 0) clearInterval(iv); }, 120);
}

// ── Hearts ───────────────────────────────
let heartsAnim = null;
const hearts = [];

function startHearts() {
  const canvas = document.getElementById("heartsCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < 45; i++) {
    hearts.push({ x: Math.random()*canvas.width, y: canvas.height+Math.random()*200, size: 10+Math.random()*18, speed: 1.2+Math.random()*2.5, sway: Math.random()*2-1, alpha: 0.4+Math.random()*0.5, color: Math.random()>.5?"#C9A84C":"#E8D08A" });
  }
  function drawHeart(ctx,x,y,s,a,c){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x,y-s*.3,x-s*.5,y-s*.8,x-s*.5,y-s*.5);ctx.bezierCurveTo(x-s*.5,y-s*1.1,x,y-s*1.1,x,y-s*.7);ctx.bezierCurveTo(x,y-s*1.1,x+s*.5,y-s*1.1,x+s*.5,y-s*.5);ctx.bezierCurveTo(x+s*.5,y-s*.8,x,y-s*.3,x,y);ctx.fill();ctx.restore();}
  function loop(){ctx.clearRect(0,0,canvas.width,canvas.height);hearts.forEach(h=>{h.y-=h.speed;h.x+=Math.sin(h.y/40)*h.sway;if(h.y<-40){h.y=canvas.height+20;h.x=Math.random()*canvas.width;}drawHeart(ctx,h.x,h.y,h.size,h.alpha,h.color);});heartsAnim=requestAnimationFrame(loop);}
  loop();
}
function stopHearts(){ if(heartsAnim)cancelAnimationFrame(heartsAnim); hearts.length=0; }

// ── QR Code ───────────────────────────────
function drawQR() {
  const url = window.location.href.split("?")[0];
  document.getElementById("qrUrl").textContent = url;
  const canvas = document.getElementById("qrCanvas");
  const ctx = canvas.getContext("2d");
  const sz = 160; canvas.width = canvas.height = sz;
  ctx.fillStyle = "#F7F2E8"; ctx.fillRect(0,0,sz,sz);
  if (typeof QRCode !== "undefined") {
    canvas.style.display = "none";
    const d = document.createElement("div"); d.id="qrDiv";
    canvas.parentNode.insertBefore(d, canvas);
    new QRCode(d,{text:url,width:160,height:160,colorDark:"#1A1208",colorLight:"#F7F2E8"});
  } else {
    ctx.fillStyle="#C9A84C"; ctx.font="bold 9px monospace"; ctx.textAlign="center";
    ctx.fillText("Escaneie para",sz/2,sz/2-8); ctx.fillText("compartilhar",sz/2,sz/2+8);
    function finder(x,y){ctx.fillStyle="#1A1208";ctx.fillRect(x,y,30,30);ctx.fillStyle="#F7F2E8";ctx.fillRect(x+4,y+4,22,22);ctx.fillStyle="#1A1208";ctx.fillRect(x+8,y+8,14,14);}
    finder(8,8);finder(122,8);finder(8,122);
  }
}
(function(){const s=document.createElement("script");s.src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";s.onload=drawQR;document.head.appendChild(s);})();

window.addEventListener("resize",()=>{const c=document.getElementById("heartsCanvas");if(c){c.width=window.innerWidth;c.height=window.innerHeight;}});
