import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const BASE = 'https://www.tablo-style.shop';
const TODAY = '2026-11-18';
const WA_NUM = '994552357380';

function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function writeOut(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
}

function gitDate(relPath) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${relPath}"`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return out || TODAY;
  } catch {
    return TODAY;
  }
}

// 1. script.js içindən ARTWORKS_DATA çıxar
let scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
const startIdx = scriptSrc.indexOf('const ARTWORKS_DATA =');
const endIdx = scriptSrc.indexOf('/* ── Generate full artwork list');
if (startIdx === -1 || endIdx === -1) {
  throw new Error('ARTWORKS_DATA bloku script.js-də tapılmadı');
}
const dataSlice = scriptSrc.slice(startIdx, endIdx).replace('const ARTWORKS_DATA', 'var ARTWORKS_DATA');
const artworksRaw = vm.runInNewContext(dataSlice + '; ARTWORKS_DATA;');
const byNum = new Map(artworksRaw.map(a => [a.num, a]));

// 2. Kök qovluqda həqiqətən mövcud olan JPG-ləri tap (001.jpg .. 999.jpg)
const products = [];
for (let i = 1; i <= 999; i++) {
  const num = String(i).padStart(3, '0');
  const jpg = `${num}.jpg`;
  if (!fs.existsSync(path.join(ROOT, jpg))) continue;
  const item = byNum.get(num) || {};
  const code = `TS-GAL-${num}`;
  const slug = `ts-gal-${num}`;
  const title = (item.title || '').trim() || `Divar Tablosu ${code}`;
  const cat = (item.cat || 'dekor').trim().toLowerCase();
  const seoDesc = (item.seoDesc || '').trim() || `${title} (${code}) — kanvas və məxmər materialda standart ölçülərdə divar tablosu. Qiymətlər 15 AZN-dən başlayır.`;
  const emoDesc = (item.emoDesc || '').trim();
  const interior = (item.interior || '').trim() || 'Qonaq otağı, yataq otağı, ofis və hədiyyə üçün uyğundur.';
  const gift = (item.gift || '').trim() || 'Doğum günü, ev açımı və toy hədiyyəsi üçün uyğundur.';
  const metaDesc = `${title} (${code}) – Kanvas 15–100 AZN, Məxmər 40–200 AZN. Şəkidən bütün Azərbaycana Azərpoçt, avtobus və karqo ilə çatdırılma.`;
  products.push({ num, jpg, code, slug, title, cat, seoDesc, emoDesc, interior, gift, metaDesc });
}

console.log(`Mövcud tablo sayı: ${products.length}`);

// Standart qiymət cədvəli
const PRICES_KANVAS = [
  ['45 × 30 sm', '15 AZN'],
  ['40 × 40 sm', '15 AZN'],
  ['45 × 75 sm', '25 AZN'],
  ['50 × 70 sm', '25 AZN'],
  ['70 × 100 sm', '50 AZN'],
  ['100 × 150 sm', '100 AZN'],
  ['60 × 180 sm (Kanvas Qalın)', '100 AZN'],
  ['45 × 75 sm (Kanvas 3-lü)', '70 AZN'],
];
const PRICES_MEXMER = [
  ['45 × 30 sm', '40 AZN'],
  ['40 × 40 sm', '40 AZN'],
  ['45 × 75 sm', '70 AZN'],
  ['50 × 70 sm', '70 AZN'],
  ['70 × 100 sm', '120 AZN'],
  ['100 × 150 sm', '200 AZN'],
];

const CAT_NAMES = {
  portret: 'Portret Tabloları',
  menzere: 'Mənzərə Tabloları',
  abstrakt: 'Abstrakt Tablolar',
  milli: 'Milli və Bakı Tabloları',
  dini: 'Dini Tablolar',
  cicek: 'Çiçək və Botanik Tablolar',
  heyvan: 'Heyvanlar Aləmi Tabloları',
  seher: 'Şəhər və Memarlıq Tabloları',
  musiqi: 'Musiqi və İncəsənət Tabloları',
  klasik: 'Klassik Tablolar',
  romantik: 'Romantik Tablolar',
  dekor: 'Dekorativ Tablolar',
};
const catLabel = c => CAT_NAMES[c] || (c.charAt(0).toUpperCase() + c.slice(1) + ' Tabloları');

const COMMON_CSS = `
*{box-sizing:border-box}
body{margin:0;font-family:'DM Sans',Arial,sans-serif;background:#141210;color:#f5f0e8;line-height:1.65}
a{color:#d4af37}
.wrap{max-width:1060px;margin:0 auto;padding:24px 18px 60px}
.top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding:14px 18px;background:#1c1916;border-bottom:1px solid rgba(212,175,55,.25)}
.brand{font-size:20px;font-weight:700;color:#f5f0e8;text-decoration:none}
.brand em{color:#d4af37;font-style:italic}
.navlinks{display:flex;flex-wrap:wrap;gap:14px;font-size:14px}
.navlinks a{text-decoration:none;color:#f5f0e8;opacity:.9}
.navlinks a:hover{color:#d4af37}
.crumb{font-size:13px;opacity:.75;margin-bottom:18px}
.crumb a{text-decoration:none}
.prod-grid{display:grid;grid-template-columns:1fr 1.15fr;gap:32px;align-items:start}
@media(max-width:780px){.prod-grid{grid-template-columns:1fr}}
.prod-img{width:100%;border-radius:14px;border:1px solid rgba(212,175,55,.28);background:#1c1916;display:block}
.badge{display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(212,175,55,.15);color:#d4af37;font-size:12px;font-weight:700;letter-spacing:.5px}
h1{font-size:clamp(24px,3.2vw,34px);margin:10px 0 12px;line-height:1.25}
.price-range{font-size:22px;font-weight:700;color:#d4af37;margin:8px 0 16px}
.wa-btn{display:inline-flex;align-items:center;gap:8px;background:#16a34a;color:#fff;padding:13px 22px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;margin:8px 0 18px}
.wa-btn:hover{background:#15803d}
.box{background:#1c1916;border:1px solid rgba(212,175,55,.22);border-radius:12px;padding:16px 18px;margin-top:16px}
.box h2,.box h3{margin:0 0 10px;font-size:17px;color:#d4af37}
table{width:100%;border-collapse:collapse;font-size:14px;margin-top:6px}
th,td{padding:8px 10px;border-bottom:1px solid rgba(255,255,255,.08);text-align:left}
th{color:#d4af37;font-weight:600}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:18px;margin-top:20px}
.card{display:block;background:#1c1916;border:1px solid rgba(212,175,55,.22);border-radius:12px;overflow:hidden;text-decoration:none;color:#f5f0e8;transition:transform .2s}
.card:hover{transform:translateY(-3px);border-color:#d4af37}
.card img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}
.card-b{padding:12px}
.card-code{font-size:12px;color:#d4af37;font-weight:700}
.card-title{font-size:14px;font-weight:600;margin:4px 0}
.card-price{font-size:13px;opacity:.85}
footer{margin-top:48px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);font-size:13px;opacity:.8;text-align:center}
`;

function layout({ title, desc, canonical, schema, body }) {
  return `<!DOCTYPE html>
<html lang="az">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(canonical)}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:site_name" content="TabloStyle">
<link rel="icon" type="image/png" href="/images/logo.png">
<link rel="apple-touch-icon" href="/images/logo.png">
<style>${COMMON_CSS}</style>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<header class="top">
  <a href="/" class="brand">◈ TabloStyle <em>Gallery</em></a>
  <nav class="navlinks">
    <a href="/">Ana Səhifə</a>
    <a href="/kateqoriya">Kateqoriyalar</a>
    <a href="/qiymetler">Qiymətlər</a>
    <a href="/blog">Bloq</a>
    <a href="/catdirilma/baki">Çatdırılma</a>
  </nav>
</header>
<main class="wrap">
${body}
<footer>© 2026 TabloStyle Gallery · Şəki şəhəri, Azərbaycan · WhatsApp: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a> · Əlaqə (TR): +90 554 018 31 88</footer>
</main>
</body>
</html>`;
}

// 3. Məhsul səhifələri (/tablo/ts-gal-XXX/index.html)
const categoriesMap = new Map();
for (const p of products) {
  if (!categoriesMap.has(p.cat)) categoriesMap.set(p.cat, []);
  categoriesMap.get(p.cat).push(p);

  const prodUrl = `${BASE}/tablo/${p.slug}`;
  const catUrl = `${BASE}/kateqoriya/${p.cat}`;
  const waHref = `https://wa.me/${WA_NUM}?text=${encodeURIComponent(`${p.code} haqqında məlumat almaq və sifariş vermək istəyirəm`)}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${prodUrl}#product`,
        name: `${p.title} (${p.code})`,
        sku: p.code,
        mpn: p.code,
        image: `${BASE}/${p.jpg}`,
        description: p.seoDesc,
        category: catLabel(p.cat),
        brand: { '@type': 'Brand', name: 'TabloStyle' },
        offers: {
          '@type': 'AggregateOffer',
          url: prodUrl,
          priceCurrency: 'AZN',
          lowPrice: '15',
          highPrice: '200',
          offerCount: '14',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'TabloStyle', url: BASE }
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Səhifə', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: catLabel(p.cat), item: catUrl },
          { '@type': 'ListItem', position: 3, name: p.code, item: prodUrl }
        ]
      }
    ]
  };

  const kanvasRows = PRICES_KANVAS.map(([s, pr]) => `<tr><td>Kanvas</td><td>${s}</td><td><strong>${pr}</strong></td></tr>`).join('');
  const mexmerRows = PRICES_MEXMER.map(([s, pr]) => `<tr><td>Məxmər (Kadife)</td><td>${s}</td><td><strong>${pr}</strong></td></tr>`).join('');

  const body = `
<div class="crumb"><a href="/">Ana Səhifə</a> › <a href="/kateqoriya/${esc(p.cat)}">${esc(catLabel(p.cat))}</a> › ${esc(p.code)}</div>
<div class="prod-grid">
  <div>
    <img class="prod-img" src="/${p.jpg}" alt="${esc(p.title)} – divar tablosu ${esc(p.code)}" width="600" height="600">
  </div>
  <div>
    <span class="badge">${esc(p.code)} · ${esc(catLabel(p.cat))}</span>
    <h1>${esc(p.title)}</h1>
    <div class="price-range">15 AZN – 200 AZN <span style="font-size:14px;font-weight:400;opacity:.85">(standart ölçüyə və materiala görə)</span></div>
    <p>${esc(p.seoDesc)}</p>
    ${p.emoDesc ? `<p style="opacity:.9">${esc(p.emoDesc)}</p>` : ''}
    <a class="wa-btn" href="${waHref}" target="_blank" rel="noopener">WhatsApp ilə Sifariş (${esc(p.code)})</a>
    <p style="font-size:13px;opacity:.8;margin-top:0">Yalnız kataloqdakı standart ölçülər mövcuddur (şəxsi şəkildən və fərdi ölçü hazırlanmır).</p>

    <div class="box">
      <h2>Standart Ölçülər və AZN Qiymətləri</h2>
      <table>
        <thead><tr><th>Material</th><th>Ölçü</th><th>Qiymət</th></tr></thead>
        <tbody>${kanvasRows}${mexmerRows}</tbody>
      </table>
    </div>

    <div class="box">
      <h3>Çatdırılma, Ödəniş və Zəmanət</h3>
      <p style="margin:6px 0"><strong>Ünvan:</strong> Şəki şəhəri, Azərbaycan</p>
      <p style="margin:6px 0"><strong>Azərpoçt:</strong> Bütün bölgələrə 3–10 AZN (Bakıya 3 iş günü, digər bölgələrə 4–5 iş günü).</p>
      <p style="margin:6px 0"><strong>Avtobus (5 AZN · 2–3 iş günü):</strong> Balakən, Zaqatala, Qax, Mingəçevir, Bərdə, Gəncə, Yevlax, Oğuz, Qəbələ, İsmayıllı, Şamaxı, Bakı, Sumqayıt, Ucar, Kürdəmir, Qobustan, Göyçay.</p>
      <p style="margin:6px 0"><strong>Karqo:</strong> Morex və Expargo ilə göndəriş mövcuddur.</p>
      <p style="margin:6px 0"><strong>Ödəniş və İadə:</strong> Sifariş veriləndə karta ödənilir. Yolda zədələnmə olarsa satıcı geri alır və ödənişi tam qaytarır (geri göndərmə yol xərci müştəriyə aiddir).</p>
      <p style="margin:6px 0 0"><strong>Uyğun məkan:</strong> ${esc(p.interior)} <strong>Hədiyyə:</strong> ${esc(p.gift)}</p>
    </div>
  </div>
</div>`;

  writeOut(`tablo/${p.slug}/index.html`, layout({
    title: `${p.title} (${p.code}) – 15–200 AZN | TabloStyle`,
    desc: p.metaDesc,
    canonical: prodUrl,
    schema,
    body
  }));
}

// 4. Kateqoriya səhifələri (/kateqoriya/index.html və /kateqoriya/<cat>/index.html)
const catIndexCards = [];
for (const [cat, items] of [...categoriesMap.entries()].sort((a, b) => b[1].length - a[1].length)) {
  const cname = catLabel(cat);
  const cUrl = `${BASE}/kateqoriya/${cat}`;
  catIndexCards.push(`<a class="card" href="/kateqoriya/${esc(cat)}"><img src="/${items[0].jpg}" alt="${esc(cname)}" loading="lazy"><div class="card-b"><div class="card-code">${items.length} əsər</div><div class="card-title">${esc(cname)}</div><div class="card-price">15 AZN – 200 AZN</div></div></a>`);

  const gridHtml = items.map(p => `<a class="card" href="/tablo/${p.slug}"><img src="/${p.jpg}" alt="${esc(p.title)} – ${p.code}" loading="lazy"><div class="card-b"><div class="card-code">${p.code}</div><div class="card-title">${esc(p.title)}</div><div class="card-price">Kanvas 15–100 AZN · Məxmər 40–200 AZN</div></div></a>`).join('');

  writeOut(`kateqoriya/${cat}/index.html`, layout({
    title: `${cname} – 15–200 AZN | TabloStyle`,
    desc: `${cname} kolleksiyası (${items.length} dizayn). Standart ölçülərdə kanvas (15–100 AZN) və məxmər (40–200 AZN) divar tabloları.`,
    canonical: cUrl,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: cname,
      url: cUrl,
      numberOfItems: items.length
    },
    body: `<div class="crumb"><a href="/">Ana Səhifə</a> › <a href="/kateqoriya">Kateqoriyalar</a> › ${esc(cname)}</div><h1>${esc(cname)}</h1><p>Bu bölmədə ${items.length} ədəd divar tablosu mövcuddur. Bütün tablolar standart ölçülərdə (15–200 AZN) hazırlanır.</p><div class="cards">${gridHtml}</div>`
  }));
}

writeOut('kateqoriya/index.html', layout({
  title: 'Divar Tablosu Kateqoriyaları | TabloStyle',
  desc: `Mənzərə, portret, abstrakt, milli və digər ${categoriesMap.size} kateqoriyada ${products.length} divar tablosu.`,
  canonical: `${BASE}/kateqoriya`,
  schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Tablo Kateqoriyaları', url: `${BASE}/kateqoriya` },
  body: `<div class="crumb"><a href="/">Ana Səhifə</a> › Kateqoriyalar</div><h1>Tablo Kateqoriyaları</h1><p>Otaq və üslubunuza uyğun kateqoriyanı seçin. Standart ölçülər və AZN qiymətləri hər tablo səhifəsində göstərilib.</p><div class="cards">${catIndexCards.join('')}</div>`
}));

// 5. Paket D: Şəhər çatdırılma səhifələri (Bakı, Gəncə, Sumqayıt, Şəki)
const CITIES = [
  {
    slug: 'baki',
    name: 'Bakı',
    title: 'Bakıya Divar Tablosu Çatdırılması | 15–200 AZN | TabloStyle',
    desc: 'Şəkidən Bakıya avtobusla (5 AZN, 2–3 iş günü), Azərpoçtla (3–10 AZN, 3 iş günü), Morex və Expargo karqo ilə divar tablosu çatdırılması.',
    h1: 'Bakıya Divar Tablosu Çatdırılması',
    intro: 'Şəki şəhərində yerləşən TabloStyle mağazasından Bakı şəhərinin bütün rayonlarına etibarlı çatdırılma edilir.',
    methods: [
      ['Avtobusla çatdırılma', '5 AZN', '2–3 iş günü'],
      ['Azərpoçt ilə çatdırılma', '3–10 AZN (ölçüyə görə)', '3 iş günü'],
      ['Morex / Expargo karqo', 'Karqo tarifinə uyğun', '2–4 iş günü'],
    ]
  },
  {
    slug: 'gence',
    name: 'Gəncə',
    title: 'Gəncəyə Divar Tablosu Çatdırılması | 15–200 AZN | TabloStyle',
    desc: 'Şəkidən Gəncəyə avtobusla (5 AZN, 2–3 iş günü), Azərpoçtla (3–10 AZN, 4–5 iş günü), Morex və Expargo karqo ilə divar tablosu çatdırılması.',
    h1: 'Gəncəyə Divar Tablosu Çatdırılması',
    intro: 'Şəki şəhərindən Gəncə şəhərinə kanvas (15–100 AZN) və məxmər (40–200 AZN) divar tabloları sürətlə göndərilir.',
    methods: [
      ['Avtobusla çatdırılma', '5 AZN', '2–3 iş günü'],
      ['Azərpoçt ilə çatdırılma', '3–10 AZN (ölçüyə görə)', '4–5 iş günü'],
      ['Morex / Expargo karqo', 'Karqo tarifinə uyğun', '2–4 iş günü'],
    ]
  },
  {
    slug: 'sumqayit',
    name: 'Sumqayıt',
    title: 'Sumqayıta Divar Tablosu Çatdırılması | 15–200 AZN | TabloStyle',
    desc: 'Şəkidən Sumqayıta avtobusla (5 AZN, 2–3 iş günü), Azərpoçtla (3–10 AZN, 4–5 iş günü), Morex və Expargo karqo ilə divar tablosu çatdırılması.',
    h1: 'Sumqayıta Divar Tablosu Çatdırılması',
    intro: 'Sumqayıt şəhərinə 202+ dizayndan istənilən standart ölçülü divar tablosu birbaşa Şəkidən göndərilir.',
    methods: [
      ['Avtobusla çatdırılma', '5 AZN', '2–3 iş günü'],
      ['Azərpoçt ilə çatdırılma', '3–10 AZN (ölçüyə görə)', '4–5 iş günü'],
      ['Morex / Expargo karqo', 'Karqo tarifinə uyğun', '2–4 iş günü'],
    ]
  },
  {
    slug: 'seki',
    name: 'Şəki',
    title: 'Şəkidə Divar Tabloları – Mərkəz | 15–200 AZN | TabloStyle',
    desc: 'TabloStyle Şəki şəhərində yerləşir. Şəki daxilində sifariş və bütün Azərbaycana Azərpoçt, avtobus (5 AZN), Morex və Expargo ilə göndəriş.',
    h1: 'Şəkidə Divar Tabloları (Əsas Mərkəz)',
    intro: 'TabloStyle Şəki şəhərində fəaliyyət göstərir. Buradan həm Şəki daxili sifarişlər qarşılanır, həm də 17 şəhər/rayona avtobusla (5 AZN) və bütün ölkəyə Azərpoçt / karqo ilə göndəriş edilir.',
    methods: [
      ['Şəki mərkəzdən sifariş', 'Əlavə rayon xərci yoxdur', '1–2 iş günü'],
      ['17 şəhərə avtobusla göndəriş', '5 AZN', '2–3 iş günü'],
      ['Bütün ölkəyə Azərpoçt / Karqo', '3–10 AZN (Azərpoçt)', '3–5 iş günü'],
    ]
  }
];

for (const c of CITIES) {
  const cUrl = `${BASE}/catdirilma/${c.slug}`;
  const mRows = c.methods.map(([m, pr, tm]) => `<tr><td>${esc(m)}</td><td><strong>${esc(pr)}</strong></td><td>${esc(tm)}</td></tr>`).join('');
  const sampleCards = products.slice(0, 8).map(p => `<a class="card" href="/tablo/${p.slug}"><img src="/${p.jpg}" alt="${esc(p.title)} – ${p.code}" loading="lazy"><div class="card-b"><div class="card-code">${p.code}</div><div class="card-title">${esc(p.title)}</div><div class="card-price">15 AZN – 200 AZN</div></div></a>`).join('');

  writeOut(`catdirilma/${c.slug}/index.html`, layout({
    title: c.title,
    desc: c.desc,
    canonical: cUrl,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: c.h1,
      provider: { '@type': 'LocalBusiness', name: 'TabloStyle', address: { '@type': 'PostalAddress', addressLocality: 'Şəki', addressCountry: 'AZ' } },
      areaServed: { '@type': 'City', name: c.name },
      url: cUrl
    },
    body: `<div class="crumb"><a href="/">Ana Səhifə</a> › ${esc(c.h1)}</div>
<h1>${esc(c.h1)}</h1>
<p>${esc(c.intro)}</p>
<div class="box">
  <h2>${esc(c.name)} üzrə Çatdırılma Seçimləri</h2>
  <table><thead><tr><th>Üsul</th><th>Qiymət</th><th>Müddət</th></tr></thead><tbody>${mRows}</tbody></table>
  <p style="margin-top:12px"><strong>Ödəniş və Zəmanət:</strong> Sifariş zamanı ödəniş bank kartına edilir. Yolda zədələnmə olarsa satıcı geri alır və ödənişi tam qaytarır (geri göndərmə xərci müştəriyə aiddir). WhatsApp: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a></p>
</div>
<h2 style="margin-top:30px">Seçilmiş Tablolar</h2>
<div class="cards">${sampleCards}</div>`
  }));
}

// 6. Paket E: Google Merchant Center feed.tsv
const tsvLines = [
  ['id', 'title', 'description', 'link', 'image_link', 'availability', 'price', 'brand', 'condition', 'google_product_category'].join('\t')
];
for (const p of products) {
  const cleanTitle = `${p.title} (${p.code})`.replace(/\s+/g, ' ').slice(0, 150);
  const cleanDesc = `${p.seoDesc} Standart ölçülər: Kanvas 15–100 AZN, Məxmər 40–200 AZN.`.replace(/\s+/g, ' ').slice(0, 5000);
  tsvLines.push([
    p.code,
    cleanTitle,
    cleanDesc,
    `${BASE}/tablo/${p.slug}`,
    `${BASE}/${p.jpg}`,
    'in_stock',
    '15.00 AZN',
    'TabloStyle',
    'new',
    'Home & Garden > Decor > Artwork > Posters, Prints, & Visual Artwork'
  ].join('\t'));
}
writeOut('feed.tsv', tsvLines.join('\n') + '\n');

// 7. script.js kartlarını real <a href="/tablo/ts-gal-XXX"> + "15 AZN-dən" + real alt ilə yenilə
if (!scriptSrc.includes('/tablo/${art.code.toLowerCase()}')) {
  scriptSrc = scriptSrc.replace(
    'alt="${art.alt || art.num}"',
    'alt="${displayTitle} – divar tablosu ${art.code}"'
  );
  scriptSrc = scriptSrc.replace(
    `<div class="art-code">\${art.code}</div>
      <h3 class="art-title">\${displayTitle}<br>
        <small style="font-size:.8rem;font-style:normal;color:#888">\${displayArt}</small></h3>`,
    `<div class="art-code">\${art.code} · <span style="color:#d4af37">15 AZN-dən</span></div>
      <h3 class="art-title"><a href="/tablo/\${art.code.toLowerCase()}" onclick="event.stopPropagation()" style="color:inherit;text-decoration:none;">\${displayTitle}</a><br>
        <small style="font-size:.8rem;font-style:normal;color:#888"><a href="/tablo/\${art.code.toLowerCase()}" onclick="event.stopPropagation()" style="color:#d4af37;text-decoration:underline;">Ölçü və qiymətlərə bax →</a></small></h3>`
  );
  fs.writeFileSync(path.join(ROOT, 'script.js'), scriptSrc, 'utf8');
  console.log('UPDATED: script.js kart linkləri');
}

// 8. index.html: FAQ kontrast təminatı + Kateqoriya/Şəhər keçidləri footerə
let idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
idx = idx.replace(
  /\.faq-list\{.*?\.faq-item p\{[^}]*\}/s,
  `.faq-list{max-width:900px;margin:32px auto 0;display:flex;flex-direction:column;gap:10px}
.faq-item{background:rgba(255,255,255,0.06);border:1px solid rgba(212,175,55,0.38);border-radius:10px;padding:14px 18px;text-align:left;color:#f5f0e8}
.faq-item summary{cursor:pointer;font-weight:600;font-size:15px;color:#f5f0e8;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px}
.faq-item summary::-webkit-details-marker{display:none}
.faq-item summary::after{content:"+";font-size:18px;color:#d4af37;flex-shrink:0}
.faq-item[open] summary::after{content:"−"}
.faq-item p{margin:10px 0 0;font-size:14px;line-height:1.65;color:rgba(245,240,232,0.88)}`
);
if (!idx.includes('/kateqoriya')) {
  idx = idx.replace(
    '<a href="/qiymetler">Qiymətlər</a>',
    '<a href="/kateqoriya">Kateqoriyalar</a>\n        <a href="/qiymetler">Qiymətlər</a>'
  );
}
if (!idx.includes('/catdirilma/baki')) {
  idx = idx.replace(
    '<a href="sitemap.xml">Sayt xəritəsi</a>',
    '<a href="/catdirilma/baki">Bakıya çatdırılma</a>\n        <a href="/catdirilma/gence">Gəncəyə çatdırılma</a>\n        <a href="/catdirilma/sumqayit">Sumqayıta çatdırılma</a>\n        <a href="/catdirilma/seki">Şəki mərkəz</a>\n        <a href="/sitemap.xml">Sayt xəritəsi</a>'
  );
}
fs.writeFileSync(path.join(ROOT, 'index.html'), idx, 'utf8');

// 9. Real lastmod ilə sitemap.xml generasiyası
const staticUrls = [
  ['/', gitDate('index.html'), 'weekly', '1.0'],
  ['/qiymetler', gitDate('qiymetler/index.html'), 'weekly', '0.9'],
  ['/kateqoriya', TODAY, 'weekly', '0.9'],
  ['/blog', gitDate('blog/index.html'), 'weekly', '0.9'],
  ['/blog/ev-dekorasiyasi-fikirleri', gitDate('blog/ev-dekorasiyasi-fikirleri/index.html'), 'monthly', '0.8'],
  ['/blog/ev-ucun-divar-tablosu-nece-secilmelidir', gitDate('blog/ev-ucun-divar-tablosu-nece-secilmelidir/index.html'), 'monthly', '0.8'],
  ['/blog/minimalist-tablo-nedir', gitDate('blog/minimalist-tablo-nedir/index.html'), 'monthly', '0.8'],
  ['/blog/dogum-gunu-hediyyesi', gitDate('blog/dogum-gunu-hediyyesi/index.html'), 'monthly', '0.8'],
  ['/divar-tablosu-olcusu-nece-secilir', gitDate('divar-tablosu-olcusu-nece-secilir/index.html'), 'monthly', '0.8'],
  ['/bloq4', gitDate('bloq4/index.html'), 'monthly', '0.7'],
  ['/hareketli', gitDate('hareketli/index.html'), 'monthly', '0.7'],
  ...CITIES.map(c => [`/catdirilma/${c.slug}`, TODAY, 'monthly', '0.8']),
  ...[...categoriesMap.keys()].map(cat => [`/kateqoriya/${cat}`, TODAY, 'weekly', '0.8']),
  ...products.map(p => [`/tablo/${p.slug}`, gitDate(p.jpg), 'monthly', '0.8']),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map(([u, lm, cf, pr]) => `  <url><loc>${BASE}${u}</loc><lastmod>${lm}</lastmod><changefreq>${cf}</changefreq><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`;
writeOut('sitemap.xml', sitemapXml);
console.log(`DONE! Ümumi sitemap URL sayı: ${staticUrls.length}`);
