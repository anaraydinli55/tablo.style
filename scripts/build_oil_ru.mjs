import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BASE = 'https://www.tablo-style.shop';
const TODAY = '2026-11-20';
const WA_NUM = '994552357380';

const GTM_SNIPPET = `<!-- Google Tag Manager -->
<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-NXKBVFHJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  document.addEventListener('click', function(e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
    if (a) {
      gtag('event', 'whatsapp_click', {
        link_url: a.href,
        page_path: location.pathname
      });
    }
  });
</script>
<!-- End Google Tag Manager -->`;

function findMp4(num) {
  const candidates = [`images/yagli-boya/${num}.mp4`, `images/${num}.mp4`, `${num}.mp4`, `yagli-boya/${num}.mp4`];
  for (const c of candidates) {
    if (fs.existsSync(path.join(ROOT, c))) return `/${c}`;
  }
  return `/images/yagli-boya/${num}.mp4`;
}

const PAINTINGS_RU = [
  { num: 1, slug: 'deyirman-payiz-menzeresi-yagli-boya', title: 'Мельница и река в осеннем лесу', size: '', price: '', desc: 'Оригинальная картина маслом на холсте ручной работы от азербайджанского художника. Деревянная водяная мельница, лесная речка и тёплые золотые краски осени.', interior: 'Идеально дополнит гостиную, дачу, зону отдыха или классический интерьер.' },
  { num: 2, slug: 'mavi-gozlu-peleng-yagli-boya', title: 'Портрет голубоглазого тигра', size: '', price: '', desc: 'Картина маслом ручной работы с выразительным портретом тигра с ярко-голубыми глазами на тёмном фоне. Символ силы, уверенности и характера.', interior: 'Отличный акцент для офиса, кабинета и современной гостиной.' },
  { num: 3, slug: 'cehrayi-agac-ve-gol-yagli-boya', title: 'Цветущее розовое дерево у озера', size: '', price: '', desc: 'Нежный весенний пейзаж маслом на холсте: розовое цветущее дерево у спокойного озера, каменная тропинка и зелень.', interior: 'Создаёт ощущение уюта и спокойствия в спальне, гостиной и светлой квартире.' },
  { num: 4, slug: 'payiz-cayi-ve-selale-yagli-boya', title: 'Осенний лес, река и водопад', size: '', price: '', desc: 'Насыщенный осенний пейзаж маслом: горный туман, золотисто-красный лес и бурная речка с водопадом.', interior: 'Подходит для просторной гостиной, зала и интерьеров в природных тонах.' },
  { num: 5, slug: 'qacan-ag-at-yagli-boya', title: 'Бегущий белый конь', size: '', price: '', desc: 'Динамичная картина маслом ручной работы с белым конём на тёмном фоне — символ свободы, энергии и благородства.', interior: 'Прекрасный выбор для рабочего кабинета, гостиной и статусного подарка.' },
  { num: 6, slug: 'paris-eyfel-payiz-yagli-boya', title: 'Париж: Эйфелева башня и осенний мост', size: '', price: '', desc: 'Яркий городской пейзаж маслом: Эйфелева башня, мост через Сену, красные зонтики кафе и осенние деревья.', interior: 'Украсит гостиную, кафе, студию и романтичный интерьер.' },
  { num: 7, slug: 'mavi-tovuzqusu-yagli-boya', title: 'Голубой павлин среди белых цветов', size: '', price: '', desc: 'Изящная картина маслом ручной работы с королевским синим павлином среди нежных белых цветов на тёмном фоне.', interior: 'Подходит для спальни, прихожей, гостиной и изысканного подарка.' }
];

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function writeOut(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
}

const CSS = `
*{box-sizing:border-box}
body{margin:0;font-family:'DM Sans',Arial,sans-serif;background:#141210;color:#f5f0e8;line-height:1.65}
a{color:#d4a017}
.top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding:14px 20px;background:#1c1916;border-bottom:1px solid rgba(212,160,23,.25)}
.brand{font-family:'Cormorant Garamond',Georgia,serif;font-size:21px;font-weight:600;color:#faf8f4;text-decoration:none}
.brand em{color:#d4a017;font-style:italic}
.navlinks{display:flex;flex-wrap:wrap;align-items:center;gap:14px;font-size:14px}
.navlinks a{text-decoration:none;color:#faf8f4;opacity:.9}
.navlinks a:hover{color:#d4a017}
.lang-switch{display:inline-flex;align-items:center;background:#2a2520;border:1px solid rgba(212,160,23,.4);border-radius:999px;padding:2px;gap:2px}
.lang-btn{padding:4px 9px;border-radius:999px;font-size:12px;font-weight:700;color:#f5f0e8;line-height:1.2;text-decoration:none}
.lang-btn.active{background:linear-gradient(135deg,#b8860b,#d4a017);color:#1a1612}
.wrap{max-width:1120px;margin:0 auto;padding:28px 18px 60px}
.crumb{font-size:13px;opacity:.78;margin-bottom:16px}
.crumb a{text-decoration:none}
h1{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(26px,3.6vw,38px);margin:8px 0 12px;color:#faf8f4;line-height:1.25}
.lead{max-width:850px;opacity:.9;margin-bottom:20px}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-top:20px}
.card{display:flex;flex-direction:column;background:#1c1916;border:1px solid rgba(212,160,23,.28);border-radius:14px;overflow:hidden;text-decoration:none;color:#f5f0e8;transition:transform .2s,border-color .2s}
.card:hover{transform:translateY(-3px);border-color:#d4a017}
.card video{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#0e0c0a}
.card-b{padding:14px 16px;display:flex;flex-direction:column;gap:6px}
.card-tag{font-size:12px;color:#d4a017;font-weight:700;text-transform:uppercase;letter-spacing:.4px}
.card-title{font-size:16px;font-weight:700;color:#faf8f4}
.meta-line{font-size:14px;color:rgba(245,240,232,.9)}
.meta-line strong{color:#d4a017}
.prod-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:30px;align-items:start}
@media(max-width:780px){.prod-grid{grid-template-columns:1fr}}
.prod-media{width:100%;border-radius:14px;border:1px solid rgba(212,160,23,.32);background:#0e0c0a;display:block}
.specs-box{background:#1c1916;border:1px solid rgba(212,160,23,.28);border-radius:12px;padding:16px 18px;margin:16px 0}
.specs-box p{margin:6px 0;font-size:15px}
.wa-btn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#b8860b,#d4a017);color:#1a1612;padding:13px 22px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;margin:10px 0 14px}
.back-btn{display:inline-block;margin-top:8px;font-size:14px;text-decoration:none;color:#d4a017}
footer{margin-top:48px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);font-size:13px;opacity:.8;text-align:center}
`;

function pageHtml({ title, desc, azPath, ruPath, schema, body }) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
${GTM_SNIPPET}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${BASE}${ruPath}">
<link rel="alternate" hreflang="az" href="${BASE}${azPath}">
<link rel="alternate" hreflang="ru" href="${BASE}${ruPath}">
<link rel="alternate" hreflang="x-default" href="${BASE}${azPath}">
<meta name="robots" content="index, follow">
<link rel="icon" type="image/png" href="/images/logo.png">
<link rel="apple-touch-icon" href="/images/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<header class="top">
  <a href="/ru" class="brand">◈ TabloStyle <em>Gallery</em></a>
  <nav class="navlinks">
    <a href="/ru">Главная</a>
    <a href="/ru/el-isi-yagli-boya">Картины маслом</a>
    <a href="/ru/qiymetler">Цены</a>
    <a href="/blog">Блог</a>
    <div class="lang-switch"><a href="${azPath}" class="lang-btn">AZ</a><a href="${ruPath}" class="lang-btn active">RU</a></div>
  </nav>
</header>
<main class="wrap">
${body}
<footer>© 2026 Tablo Style Gallery · г. Шеки, Азербайджан · WhatsApp: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a> · Тел (TR): +90 554 018 31 88</footer>
</main>
</body>
</html>`;
}

for (const p of PAINTINGS_RU) p.videoSrc = findMp4(p.num);

const cardsHtml = PAINTINGS_RU.map(p => `
  <a class="card" href="/ru/${p.slug}">
    <video autoplay loop muted playsinline preload="metadata"><source src="${esc(p.videoSrc)}#t=0.1" type="video/mp4"></video>
    <div class="card-b">
      <div class="card-tag">Ручная работа маслом</div>
      <div class="card-title">${esc(p.title)}</div>
      <div class="meta-line"><strong>Размер :</strong> ${esc(p.size)}</div>
      <div class="meta-line"><strong>Цена :</strong> ${esc(p.price)}</div>
    </div>
  </a>`).join('');

writeOut('ru/el-isi-yagli-boya/index.html', pageHtml({
  title: 'Картины маслом ручной работы азербайджанских художников | Tablo Style Gallery',
  desc: '7 оригинальных картин маслом на холсте ручной работы от азербайджанских художников. Доставка по всему Азербайджану.',
  azPath: '/el-isi-yagli-boya',
  ruPath: '/ru/el-isi-yagli-boya',
  schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Картины маслом ручной работы', url: `${BASE}/ru/el-isi-yagli-boya`, numberOfItems: PAINTINGS_RU.length },
  body: `<div class="crumb"><a href="/ru">Главная</a> › Картины маслом ручной работы</div>
<h1>Картины маслом ручной работы азербайджанских художников</h1>
<p class="lead">7 оригинальных картин, написанных маслом на холсте вручную. Нажмите на любую работу, чтобы посмотреть детали и заказать через WhatsApp.</p>
<div class="cards">${cardsHtml}</div>`
}));

for (const p of PAINTINGS_RU) {
  const azPath = `/${p.slug}`;
  const ruPath = `/ru/${p.slug}`;
  const waText = encodeURIComponent(`Здравствуйте, хочу узнать о картине маслом ручной работы (${p.title})`);
  const others = PAINTINGS_RU.filter(x => x.num !== p.num).slice(0, 3).map(o => `
    <a class="card" href="/ru/${o.slug}">
      <video autoplay loop muted playsinline preload="metadata"><source src="${esc(o.videoSrc)}#t=0.1" type="video/mp4"></video>
      <div class="card-b">
        <div class="card-tag">Ручная работа маслом</div>
        <div class="card-title">${esc(o.title)}</div>
        <div class="meta-line"><strong>Размер :</strong> ${esc(o.size)}</div>
        <div class="meta-line"><strong>Цена :</strong> ${esc(o.price)}</div>
      </div>
    </a>`).join('');

  writeOut(`ru/${p.slug}/index.html`, pageHtml({
    title: `${p.title} – Картина маслом ручной работы | Tablo Style Gallery`,
    desc: p.desc,
    azPath,
    ruPath,
    schema: { '@context': 'https://schema.org', '@type': 'Product', name: `${p.title} – Картина маслом ручной работы`, description: p.desc, brand: { '@type': 'Brand', name: 'Tablo Style Gallery' }, url: `${BASE}${ruPath}` },
    body: `<div class="crumb"><a href="/ru">Главная</a> › <a href="/ru/el-isi-yagli-boya">Картины маслом</a> › ${esc(p.title)}</div>
<div class="prod-grid">
  <div>
    <video class="prod-media" autoplay loop muted playsinline controls preload="auto"><source src="${esc(p.videoSrc)}#t=0.1" type="video/mp4"></video>
    <div class="specs-box">
      <p><strong>Вид :</strong> Ручная работа маслом</p>
      <p><strong>Размер :</strong> ${esc(p.size)}</p>
      <p><strong>Цена :</strong> ${esc(p.price)}</p>
    </div>
  </div>
  <div>
    <span class="card-tag">Азербайджанские художники · Ручная работа</span>
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.desc)}</p>
    <p>${esc(p.interior)}</p>
    <a class="wa-btn" href="https://wa.me/${WA_NUM}?text=${waText}" target="_blank" rel="noopener">Заказать в WhatsApp</a>
    <div class="specs-box">
      <p><strong>Доставка (из г. Шеки):</strong> По всему Азербайджану — Azərpoçt (3–10 AZN), автобус в 17 городов (5 AZN, 2–3 раб. дня), Morex и Expargo.</p>
      <p><strong>Оплата и гарантия:</strong> Оплата на карту при заказе. При повреждении при доставке продавец принимает возврат и возвращает 100% суммы.</p>
    </div>
    <a class="back-btn" href="/ru/el-isi-yagli-boya">← Вернуться ко всем картинам маслом</a>
  </div>
</div>
<h2 style="margin-top:42px;font-family:'Cormorant Garamond',Georgia,serif;font-size:26px;">Другие картины маслом ручной работы</h2>
<div class="cards">${others}</div>`
  }));
}

// sitemap.xml-ə /ru/el-isi-yagli-boya və 7 rusca səhifəni əlavə et
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
const urls = ['/ru/el-isi-yagli-boya', ...PAINTINGS_RU.map(p => `/ru/${p.slug}`)];
const adds = urls.filter(u => !sm.includes(`<loc>${BASE}${u}</loc>`)).map(u => `  <url><loc>${BASE}${u}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('\n');
if (adds) {
  sm = sm.replace('</urlset>', `${adds}\n</urlset>`);
  fs.writeFileSync(smPath, sm, 'utf8');
}
console.log('CREATED: /ru/el-isi-yagli-boya və 7 rusca məhsul səhifəsi');
