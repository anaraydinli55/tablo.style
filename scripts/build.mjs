import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execSync, execFileSync } from 'node:child_process';

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

// 1. script.js-dən ARTWORKS_DATA oxu
const scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
const startIdx = scriptSrc.indexOf('const ARTWORKS_DATA =');
const endIdx = scriptSrc.indexOf('/* ── Generate full artwork list');
const dataSlice = scriptSrc.slice(startIdx, endIdx).replace('const ARTWORKS_DATA', 'var ARTWORKS_DATA');
const artworksRaw = vm.runInNewContext(dataSlice + '; ARTWORKS_DATA;');
const byNum = new Map(artworksRaw.map(a => [a.num, a]));

// 2. WebP qovluğunu yarat və JPG-ləri 450px WebP-yə çevir (mövcuddursa keç)
fs.mkdirSync(path.join(ROOT, 'webp'), { recursive: true });
let webpConverted = 0;

const products = [];
for (let i = 1; i <= 999; i++) {
  const num = String(i).padStart(3, '0');
  const jpg = `${num}.jpg`;
  const jpgFull = path.join(ROOT, jpg);
  if (!fs.existsSync(jpgFull)) continue;

  const webpRel = `webp/${num}.webp`;
  const webpFull = path.join(ROOT, webpRel);
  if (!fs.existsSync(webpFull)) {
    try {
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', jpgFull, '-vf', 'scale=450:-1', '-c:v', 'libwebp', '-q:v', '80', webpFull]);
      webpConverted++;
    } catch {
      // ffmpeg xətası olarsa jpg istifadə olunacaq
    }
  }

  const item = byNum.get(num) || {};
  const code = `TS-GAL-${num}`;
  const slug = `ts-gal-${num}`;
  const title = (item.title || '').trim() || `Divar Tablosu ${code}`;
  const cat = (item.cat || 'diger').trim().toLowerCase() || 'diger';
  const seoDesc = (item.seoDesc || '').trim() || `${title} (${code}) — standart ölçülərdə kanvas (15–100 AZN) və məxmər (40–200 AZN) divar tablosu.`;
  const emoDesc = (item.emoDesc || '').trim();
  const interior = (item.interior || '').trim() || 'Qonaq otağı, yataq otağı, ofis və iş otaqları üçün uyğundur.';
  const gift = (item.gift || '').trim() || 'Doğum günü, ev açımı və özəl günlər üçün uyğundur.';
  const metaDesc = `${title} (${code}) – Kanvas 15–100 AZN, Məxmər 40–200 AZN. Şəkidən bütün Azərbaycana Azərpoçt, avtobus və karqo ilə çatdırılma.`;
  products.push({ num, jpg, webp: fs.existsSync(webpFull) ? webpRel : jpg, code, slug, title, cat, seoDesc, emoDesc, interior, gift, metaDesc });
}
console.log(`Mövcud tablo: ${products.length}, Yeni yaradılan WebP: ${webpConverted}`);

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
  menzere: 'Mənzərə Tabloları',
  portret: 'Portret Tabloları',
  seher: 'Şəhər Tabloları',
  abstrakt: 'Abstrakt Tablolar',
  cicek: 'Çiçək Tabloları',
  hediyye: 'Hədiyyəlik Tablolar',
  tebiet: 'Təbiət Tabloları',
  romantik: 'Romantik Tablolar',
  diger: 'Digər Tablolar',
  klassik: 'Klassik Tablolar',
  heyvan: 'Heyvan Tabloları',
  milli: 'Milli və Bakı Tabloları',
  musiqi: 'Musiqi Tabloları',
  dini: 'Dini Tablolar',
  retro: 'Retro Tablolar',
};

const CAT_TIPS = {
  menzere: 'Mənzərə tabloları qonaq otağı və istirahət künclərində məkanı daha geniş və işıqlı göstərir. Divanın eninin 60–75%-i qədər ölçü seçmək daha balanslı görünüş yaradır.',
  portret: 'Portret əsərlər yataq otağı, qonaq otağı və kabinet divarlarında güclü fokus nöqtəsi yaradır. Açıq və neytral divarlarda məxmər (kadife) material xüsusilə zəngin görünür.',
  seher: 'Şəhər və memarlıq tabloları modern mənzillər, ofislər və studiyalar üçün ən populyar seçimlərdəndir. İri divarlarda 70×100 sm və ya 100×150 sm ölçülər daha təsirli olur.',
  abstrakt: 'Abstrakt kompozisiyalar skandinav, loft və minimalist interyerlərlə asan uyğunlaşır. Mebeldəki aksent rəngləri tablo rəngləri ilə uzlaşdıra bilərsiniz.',
  cicek: 'Çiçək və botanik motivlər yataq otağı, dəhliz və mətbəx interyerinə təravət qatır. 45×30 sm və 50×70 sm ölçülər bu otaqlarda ideal yerləşir.',
  hediyye: 'Hədiyyəlik tablolar doğum günü, toy, nişan və ev açımı üçün uzunömürlü seçimdir. Bəyəndiyiniz kodu WhatsApp ilə göndərərək ölkədaxili çatdırılma sifariş edə bilərsiniz.',
  tebiet: 'Təbiət tabloları ev və iş mühitinə sakitlik və təbii enerji gətirir. Taxta və bej tonlu mebellərlə harmonik görünür.',
  romantik: 'Romantik mövzulu tablolar yataq otağı və cütlüklər üçün hədiyyə seçimində üstünlük təşkil edir.',
  heyvan: 'Heyvan fiqurlu tablolar güc, dinamika və xarakter vurğusu üçün salon və ofislərdə seçilir.',
  milli: 'Milli və Bakı motivli tablolar həm ev dekorasiyasında, həm də qonaqlara hədiyyə olaraq yüksək dəyər daşıyır.',
  dini: 'Dini mövzulu tablolar ev və ofislərdə mənəvi ab-hava yaratmaq üçün zərif çərçivəsiz kanvas və ya məxmər formatında təqdim olunur.',
  diger: 'Dekorativ divar tabloları müxtəlif otaq ölçülərinə uyğun standart kanvas və məxmər variantlarında mövcuddur.',
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

// Kateqoriya qrupları
const categoriesMap = new Map();
for (const p of products) {
  if (!categoriesMap.has(p.cat)) categoriesMap.set(p.cat, []);
  categoriesMap.get(p.cat).push(p);
}

// 3. Məhsul səhifələri (Product + Shipping + Return Policy Schema + oxşar məhsullar)
for (const p of products) {
  const prodUrl = `${BASE}/tablo/${p.slug}`;
  const catUrl = `${BASE}/kateqoriya/${p.cat}`;
  const waHref = `https://wa.me/${WA_NUM}?text=${encodeURIComponent(`${p.code} haqqında məlumat almaq və sifariş vermək istəyirəm`)}`;
  const sameCat = (categoriesMap.get(p.cat) || []).filter(x => x.num !== p.num).slice(0, 4);
  const tipText = CAT_TIPS[p.cat] || CAT_TIPS.diger;

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
          '@type': 'Offer',
          url: prodUrl,
          priceCurrency: 'AZN',
          price: '15.00',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@type': 'Organization', name: 'TabloStyle', url: BASE },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: { '@type': 'MonetaryAmount', value: '5.00', currency: 'AZN' },
            shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AZ' },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
              transitTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 5, unitCode: 'DAY' }
            }
          },
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'AZ',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 14,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/ReturnShippingFees'
          }
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
  const relatedHtml = sameCat.length
    ? `<h2 style="margin-top:34px">Eyni kateqoriyadan oxşar tablolar (${esc(catLabel(p.cat))})</h2><div class="cards">${sameCat.map(r => `<a class="card" href="/tablo/${r.slug}"><img src="/${r.webp}" onerror="this.onerror=null;this.src='/${r.jpg}'" alt="${esc(r.title)} – ${r.code}" loading="lazy"><div class="card-b"><div class="card-code">${r.code}</div><div class="card-title">${esc(r.title)}</div><div class="card-price">15 AZN – 200 AZN</div></div></a>`).join('')}</div>`
    : '';

  const body = `
<div class="crumb"><a href="/">Ana Səhifə</a> › <a href="/kateqoriya/${esc(p.cat)}">${esc(catLabel(p.cat))}</a> › ${esc(p.code)}</div>
<div class="prod-grid">
  <div>
    <img class="prod-img" src="/${p.webp}" onerror="this.onerror=null;this.src='/${p.jpg}'" alt="${esc(p.title)} – divar tablosu ${esc(p.code)}" width="600" height="600">
  </div>
  <div>
    <span class="badge">${esc(p.code)} · ${esc(catLabel(p.cat))}</span>
    <h1>${esc(p.title)}</h1>
    <div class="price-range">15 AZN – 200 AZN <span style="font-size:14px;font-weight:400;opacity:.85">(standart ölçüyə və materiala görə)</span></div>
    <p>${esc(p.seoDesc)}</p>
    ${p.emoDesc ? `<p style="opacity:.9">${esc(p.emoDesc)}</p>` : ''}
    <p style="opacity:.9">${esc(tipText)}</p>
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
</div>
${relatedHtml}`;

  writeOut(`tablo/${p.slug}/index.html`, layout({
    title: `${p.title} (${p.code}) – 15–200 AZN | TabloStyle`,
    desc: p.metaDesc,
    canonical: prodUrl,
    schema,
    body
  }));
}

// 4. Kateqoriya səhifələri
const catIndexCards = [];
for (const [cat, items] of [...categoriesMap.entries()].sort((a, b) => b[1].length - a[1].length)) {
  const cname = catLabel(cat);
  const cUrl = `${BASE}/kateqoriya/${cat}`;
  catIndexCards.push(`<a class="card" href="/kateqoriya/${esc(cat)}"><img src="/${items[0].webp}" onerror="this.onerror=null;this.src='/${items[0].jpg}'" alt="${esc(cname)}" loading="lazy"><div class="card-b"><div class="card-code">${items.length} əsər</div><div class="card-title">${esc(cname)}</div><div class="card-price">15 AZN – 200 AZN</div></div></a>`);

  const gridHtml = items.map(p => `<a class="card" href="/tablo/${p.slug}"><img src="/${p.webp}" onerror="this.onerror=null;this.src='/${p.jpg}'" alt="${esc(p.title)} – ${p.code}" loading="lazy"><div class="card-b"><div class="card-code">${p.code}</div><div class="card-title">${esc(p.title)}</div><div class="card-price">Kanvas 15–100 AZN · Məxmər 40–200 AZN</div></div></a>`).join('');

  writeOut(`kateqoriya/${cat}/index.html`, layout({
    title: `${cname} – 15–200 AZN | TabloStyle`,
    desc: `${cname} kolleksiyası (${items.length} dizayn). Standart ölçülərdə kanvas (15–100 AZN) və məxmər (40–200 AZN) divar tabloları.`,
    canonical: cUrl,
    schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: cname, url: cUrl, numberOfItems: items.length },
    body: `<div class="crumb"><a href="/">Ana Səhifə</a> › <a href="/kateqoriya">Kateqoriyalar</a> › ${esc(cname)}</div><h1>${esc(cname)}</h1><p>${esc(CAT_TIPS[cat] || '')} Bu bölmədə ${items.length} ədəd divar tablosu mövcuddur.</p><div class="cards">${gridHtml}</div>`
  }));
}

writeOut('kateqoriya/index.html', layout({
  title: 'Divar Tablosu Kateqoriyaları | TabloStyle',
  desc: `Mənzərə, portret, şəhər, abstrakt, çiçək, heyvan və digər ${categoriesMap.size} kateqoriyada ${products.length} divar tablosu.`,
  canonical: `${BASE}/kateqoriya`,
  schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Tablo Kateqoriyaları', url: `${BASE}/kateqoriya` },
  body: `<div class="crumb"><a href="/">Ana Səhifə</a> › Kateqoriyalar</div><h1>Tablo Kateqoriyaları</h1><p>Otaq və üslubunuza uyğun kateqoriyanı seçin. Standart ölçülər və AZN qiymətləri hər tablo səhifəsində göstərilib.</p><div class="cards">${catIndexCards.join('')}</div>`
}));

// 5. Şəhər çatdırılma səhifələri (WebP kartlarla)
const CITIES = [
  { slug: 'baki', name: 'Bakı', title: 'Bakıya Divar Tablosu Çatdırılması | 15–200 AZN | TabloStyle', desc: 'Şəkidən Bakıya avtobusla (5 AZN, 2–3 iş günü), Azərpoçtla (3–10 AZN, 3 iş günü), Morex və Expargo karqo ilə divar tablosu çatdırılması.', h1: 'Bakıya Divar Tablosu Çatdırılması', intro: 'Şəki şəhərində yerləşən TabloStyle mağazasından Bakı şəhərinin bütün rayonlarına etibarlı çatdırılma edilir.', methods: [['Avtobusla çatdırılma', '5 AZN', '2–3 iş günü'], ['Azərpoçt ilə çatdırılma', '3–10 AZN (ölçüyə görə)', '3 iş günü'], ['Morex / Expargo karqo', 'Karqo tarifinə uyğun', '2–4 iş günü']] },
  { slug: 'gence', name: 'Gəncə', title: 'Gəncəyə Divar Tablosu Çatdırılması | 15–200 AZN | TabloStyle', desc: 'Şəkidən Gəncəyə avtobusla (5 AZN, 2–3 iş günü), Azərpoçtla (3–10 AZN, 4–5 iş günü), Morex və Expargo karqo ilə divar tablosu çatdırılması.', h1: 'Gəncəyə Divar Tablosu Çatdırılması', intro: 'Şəki şəhərindən Gəncə şəhərinə kanvas (15–100 AZN) və məxmər (40–200 AZN) divar tabloları sürətlə göndərilir.', methods: [['Avtobusla çatdırılma', '5 AZN', '2–3 iş günü'], ['Azərpoçt ilə çatdırılma', '3–10 AZN (ölçüyə görə)', '4–5 iş günü'], ['Morex / Expargo karqo', 'Karqo tarifinə uyğun', '2–4 iş günü']] },
  { slug: 'sumqayit', name: 'Sumqayıt', title: 'Sumqayıta Divar Tablosu Çatdırılması | 15–200 AZN | TabloStyle', desc: 'Şəkidən Sumqayıta avtobusla (5 AZN, 2–3 iş günü), Azərpoçtla (3–10 AZN, 4–5 iş günü), Morex və Expargo karqo ilə divar tablosu çatdırılması.', h1: 'Sumqayıta Divar Tablosu Çatdırılması', intro: 'Sumqayıt şəhərinə 202+ dizayndan istənilən standart ölçülü divar tablosu birbaşa Şəkidən göndərilir.', methods: [['Avtobusla çatdırılma', '5 AZN', '2–3 iş günü'], ['Azərpoçt ilə çatdırılma', '3–10 AZN (ölçüyə görə)', '4–5 iş günü'], ['Morex / Expargo karqo', 'Karqo tarifinə uyğun', '2–4 iş günü']] },
  { slug: 'seki', name: 'Şəki', title: 'Şəkidə Divar Tabloları – Mərkəz | 15–200 AZN | TabloStyle', desc: 'TabloStyle Şəki şəhərində yerləşir. Şəki daxilində sifariş və bütün Azərbaycana Azərpoçt, avtobus (5 AZN), Morex və Expargo ilə göndəriş.', h1: 'Şəkidə Divar Tabloları (Əsas Mərkəz)', intro: 'TabloStyle Şəki şəhərində fəaliyyət göstərir. Buradan həm Şəki daxili sifarişlər qarşılanır, həm də 17 şəhər/rayona avtobusla (5 AZN) və bütün ölkəyə Azərpoçt / karqo ilə göndəriş edilir.', methods: [['Şəki mərkəzdən sifariş', 'Əlavə rayon xərci yoxdur', '1–2 iş günü'], ['17 şəhərə avtobusla göndəriş', '5 AZN', '2–3 iş günü'], ['Bütün ölkəyə Azərpoçt / Karqo', '3–10 AZN (Azərpoçt)', '3–5 iş günü']] }
];

for (const c of CITIES) {
  const cUrl = `${BASE}/catdirilma/${c.slug}`;
  const mRows = c.methods.map(([m, pr, tm]) => `<tr><td>${esc(m)}</td><td><strong>${esc(pr)}</strong></td><td>${esc(tm)}</td></tr>`).join('');
  const sampleCards = products.slice(0, 8).map(p => `<a class="card" href="/tablo/${p.slug}"><img src="/${p.webp}" onerror="this.onerror=null;this.src='/${p.jpg}'" alt="${esc(p.title)} – ${p.code}" loading="lazy"><div class="card-b"><div class="card-code">${p.code}</div><div class="card-title">${esc(p.title)}</div><div class="card-price">15 AZN – 200 AZN</div></div></a>`).join('');
  writeOut(`catdirilma/${c.slug}/index.html`, layout({
    title: c.title,
    desc: c.desc,
    canonical: cUrl,
    schema: { '@context': 'https://schema.org', '@type': 'Service', name: c.h1, provider: { '@type': 'LocalBusiness', name: 'TabloStyle', address: { '@type': 'PostalAddress', addressLocality: 'Şəki', addressCountry: 'AZ' } }, areaServed: { '@type': 'City', name: c.name }, url: cUrl },
    body: `<div class="crumb"><a href="/">Ana Səhifə</a> › ${esc(c.h1)}</div><h1>${esc(c.h1)}</h1><p>${esc(c.intro)}</p><div class="box"><h2>${esc(c.name)} üzrə Çatdırılma Seçimləri</h2><table><thead><tr><th>Üsul</th><th>Qiymət</th><th>Müddət</th></tr></thead><tbody>${mRows}</tbody></table><p style="margin-top:12px"><strong>Ödəniş və Zəmanət:</strong> Sifariş zamanı ödəniş bank kartına edilir. Yolda zədələnmə olarsa satıcı geri alır və ödənişi tam qaytarır (geri göndərmə xərci müştəriyə aiddir). WhatsApp: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a></p></div><h2 style="margin-top:30px">Seçilmiş Tablolar</h2><div class="cards">${sampleCards}</div>`
  }));
}

// 6. Merchant Center feed.tsv
const tsvLines = [['id', 'title', 'description', 'link', 'image_link', 'availability', 'price', 'brand', 'condition', 'google_product_category'].join('\t')];
for (const p of products) {
  tsvLines.push([
    p.code,
    `${p.title} (${p.code})`.replace(/\s+/g, ' ').slice(0, 150),
    `${p.seoDesc} Standart ölçülər: Kanvas 15–100 AZN, Məxmər 40–200 AZN.`.replace(/\s+/g, ' ').slice(0, 5000),
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

// 7. sitemap.xml
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
writeOut('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticUrls.map(([u, lm, cf, pr]) => `  <url><loc>${BASE}${u}</loc><lastmod>${lm}</lastmod><changefreq>${cf}</changefreq><priority>${pr}</priority></url>`).join('\n')}\n</urlset>\n`);
console.log(`DONE! Kateqoriyalar: ${[...categoriesMap.keys()].join(', ')} | Sitemap URL: ${staticUrls.length}`);
