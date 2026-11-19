import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const BASE = 'https://www.tablo-style.shop';
const TODAY = '2026-11-19';
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

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

function writeOut(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
}

const scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
const startIdx = scriptSrc.indexOf('const ARTWORKS_DATA =');
const endIdx = scriptSrc.indexOf('/* ── Generate full artwork list');
const artworksRaw = vm.runInNewContext(
  scriptSrc.slice(startIdx, endIdx).replace('const ARTWORKS_DATA', 'var ARTWORKS_DATA') + '; ARTWORKS_DATA;'
);
const byNum = new Map(artworksRaw.map(a => [a.num, a]));

const products = [];
for (let i = 1; i <= 999; i++) {
  const num = String(i).padStart(3, '0');
  if (!fs.existsSync(path.join(ROOT, `${num}.jpg`))) continue;
  const item = byNum.get(num) || {};
  const code = `TS-GAL-${num}`;
  products.push({
    num,
    jpg: `${num}.jpg`,
    webp: fs.existsSync(path.join(ROOT, `webp/${num}.webp`)) ? `webp/${num}.webp` : `${num}.jpg`,
    code,
    slug: `ts-gal-${num}`,
    title: (item.title || '').trim() || `Divar Tablosu ${code}`,
    cat: (item.cat || 'diger').trim().toLowerCase(),
    interior: (item.interior || '').toLowerCase(),
    seoDesc: (item.seoDesc || '').toLowerCase(),
    material: (item.material || '').toLowerCase(),
    gift: (item.gift || '').toLowerCase(),
  });
}

const pick = (fn, limit = 24) => {
  const matched = products.filter(fn);
  if (matched.length >= limit) return matched.slice(0, limit);
  const seen = new Set(matched.map(x => x.num));
  const rest = products.filter(p => !seen.has(p.num));
  return [...matched, ...rest].slice(0, limit);
};

const BOLMELER = [
  {
    slug: 'salon-ucun-tablolar',
    name: 'Salon üçün tablolar',
    desc: 'Qonaq otağı və salon divarları üçün zövqlü kanvas (15–100 AZN) və məxmər (40–200 AZN) tablolar. Bakı və bütün Azərbaycana çatdırılma.',
    extra: 'Qonaq otağında divan üstündə 70×100 sm, 100×150 sm və ya 3-lü 45×75 sm (70 AZN) tablolar daha balanslı görünür.',
    items: pick(p => p.interior.includes('qonaq') || p.interior.includes('salon') || ['menzere', 'seher', 'abstrakt', 'milli'].includes(p.cat))
  },
  {
    slug: 'yataq-otagi-ucun-tablolar',
    name: 'Yataq otağı üçün tablolar',
    desc: 'Yataq otağında sakit və estetik atmosfer yaradan romantik, təbiət və çiçək mövzulu divar tabloları.',
    extra: 'Yataq başı üçün sakit tonlu mənzərə, çiçək və romantik tablolar (45×75 sm, 50×70 sm, 70×100 sm) tövsiyə olunur.',
    items: pick(p => p.interior.includes('yataq') || ['romantik', 'cicek', 'tebiet'].includes(p.cat))
  },
  {
    slug: 'metbex-ucun-tablolar',
    name: 'Mətbəx üçün tablolar',
    desc: 'Mətbəx və yemək guşəsi üçün kompakt 45×30 sm, 40×40 sm (15 AZN) və 50×70 sm (25 AZN) kanvas tablolar.',
    extra: 'Mətbəx divarları üçün yüngül, təmizlənməsi rahat kanvas modellər (15 AZN – 25 AZN) ideal seçimdir.',
    items: pick(p => p.interior.includes('mətbəx') || ['cicek', 'tebiet', 'diger'].includes(p.cat))
  },
  {
    slug: 'ofis-ve-is-otagi-ucun-tablolar',
    name: 'Ofis və iş otağı üçün tablolar',
    desc: 'Ofis, kabinet və iş otaqları üçün prestijli şəhər, abstrakt və klassik divar tabloları.',
    extra: 'İş məkanlarında şəhər memarlığı, abstrakt və klassik tablolar həm peşəkarlıq, həm də zövqlü ab-hava yaradır.',
    items: pick(p => p.interior.includes('ofis') || p.interior.includes('kabinet') || ['seher', 'abstrakt', 'klassik'].includes(p.cat))
  },
  {
    slug: '3d-ve-modern-tablolar',
    name: '3D və modern tablolar',
    desc: 'Müasir, minimalist və loft interyerlər üçün 3D effektli və modern abstrakt divar tabloları.',
    extra: 'Yeni tikili mənzillər və müasir interyerlər üçün dərinlik hissi verən abstrakt və modern dizaynlar.',
    items: pick(p => p.seoDesc.includes('modern') || p.seoDesc.includes('minimal') || p.seoDesc.includes('3d') || p.cat === 'abstrakt')
  },
  {
    slug: 'yagli-boya-tablolar',
    name: 'Yağlı boya tablolar',
    desc: 'Klassik yağlı boya fırça görünüşlü mənzərə, portret və tarixi divar tabloları kolleksiyası.',
    extra: 'Zəngin rəng keçidləri və klassik rəssam üslubunu sevənlər üçün seçilmiş kanvas və məxmər əsərlər.',
    items: pick(p => p.seoDesc.includes('yağlı') || p.material.includes('yağlı') || ['klassik', 'menzere', 'portret'].includes(p.cat))
  },
  {
    slug: 'mexmer-tablolar',
    name: 'Məxmər tablolar',
    desc: '40–200 AZN aralığında zəngin teksturalı, yumşaq səthli məxmər (kadife) divar tabloları. Standart ölçülərdə bütün Azərbaycana çatdırılma.',
    extra: 'Məxmər (kadife) qiymətləri: 45×30 / 40×40 sm (40 AZN), 45×75 / 50×70 sm (70 AZN), 70×100 sm (120 AZN), 100×150 sm (200 AZN).',
    items: pick(p => p.material.includes('kadife') || p.material.includes('mexmer') || p.material.includes('məxmər') || ['portret', 'milli', 'klassik'].includes(p.cat))
  },
  {
    slug: 'coxhisseli-tablolar',
    name: 'Çoxhissəli tablolar',
    desc: 'Geniş salon və dəhliz divarları üçün 3-lü (45×75 sm – 70 AZN) və iri ölçülü (60×180 sm – 100 AZN) divar tabloları.',
    extra: 'Geniş boş divarlarda 3-lü kanvas dəsti (70 AZN) və 60×180 sm Kanvas Qalın (100 AZN) modelləri möhtəşəm görünür.',
    items: pick(p => p.seoDesc.includes('3-lü') || p.seoDesc.includes('panoram') || p.seoDesc.includes('hissə') || ['menzere', 'seher', 'tebiet'].includes(p.cat))
  },
  {
    slug: 'premium-hediyyelik-tablolar',
    name: 'Premium hədiyyəlik tablolar',
    desc: 'Doğum günü, toy, nişan, ev açımı və özəl günlər üçün seçilmiş premium hədiyyəlik divar tabloları.',
    extra: 'Sevdikləriniz üçün unudulmaz hədiyyə — kataloq kodunu WhatsApp (+994 55 235 73 80) ilə göndərərək dərhal sifariş verə bilərsiniz.',
    items: pick(p => p.cat === 'hediyye' || p.gift.includes('hədiyyə') || p.cat === 'romantik')
  }
];

const CSS = `
*{box-sizing:border-box}
body{margin:0;font-family:'DM Sans',Arial,sans-serif;background:#141210;color:#f5f0e8;line-height:1.65}
a{color:#d4a017}
.top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding:14px 20px;background:#1c1916;border-bottom:1px solid rgba(212,160,23,.25)}
.brand{font-family:'Cormorant Garamond',Georgia,serif;font-size:21px;font-weight:600;color:#faf8f4;text-decoration:none}
.brand em{color:#d4a017;font-style:italic}
.navlinks{display:flex;flex-wrap:wrap;gap:14px;font-size:14px}
.navlinks a{text-decoration:none;color:#faf8f4;opacity:.9}
.navlinks a:hover{color:#d4a017}
.wrap{max-width:1120px;margin:0 auto;padding:28px 18px 60px}
.crumb{font-size:13px;opacity:.75;margin-bottom:16px}
.crumb a{text-decoration:none}
h1{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(28px,3.6vw,40px);margin:8px 0 12px;color:#faf8f4}
.lead{max-width:820px;opacity:.9;margin-bottom:10px}
.info-box{background:#1c1916;border:1px solid rgba(212,160,23,.28);border-radius:12px;padding:16px 18px;margin:18px 0 24px;font-size:14px}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:18px;margin-top:20px}
.card{display:block;background:#1c1916;border:1px solid rgba(212,160,23,.22);border-radius:12px;overflow:hidden;text-decoration:none;color:#f5f0e8;transition:transform .2s}
.card:hover{transform:translateY(-3px);border-color:#d4a017}
.card img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}
.card-b{padding:12px}
.card-code{font-size:12px;color:#d4a017;font-weight:700}
.card-title{font-size:14px;font-weight:600;margin:4px 0}
.card-price{font-size:13px;opacity:.85}
.pills{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}
.pill{background:#1c1916;border:1px solid rgba(212,160,23,.35);color:#f5f0e8;padding:6px 12px;border-radius:999px;font-size:13px;text-decoration:none}
.pill:hover{background:#b8860b;color:#1a1612}
footer{margin-top:48px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);font-size:13px;opacity:.8;text-align:center}
`;

function pageHtml({ title, desc, canonical, schema, body }) {
  return `<!DOCTYPE html>
<html lang="az">
<head>
${GTM_SNIPPET}
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
<meta property="og:site_name" content="Tablo Style Gallery">
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
  <a href="/" class="brand">◈ TabloStyle <em>Gallery</em></a>
  <nav class="navlinks">
    <a href="/">Ana Səhifə</a>
    <a href="/bolme">Əsas Bölmələr</a>
    <a href="/kateqoriya">Kateqoriyalar</a>
    <a href="/qiymetler">Qiymətlər</a>
    <a href="/blog">Bloq</a>
  </nav>
</header>
<main class="wrap">
${body}
<footer>© 2026 Tablo Style Gallery · Şəki şəhəri, Azərbaycan · WhatsApp: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a> · Əlaqə (TR): +90 554 018 31 88</footer>
</main>
</body>
</html>`;
}

const navPills = BOLMELER.map(b => `<a class="pill" href="/bolme/${b.slug}">${esc(b.name)}</a>`).join('');

for (const b of BOLMELER) {
  const bUrl = `${BASE}/bolme/${b.slug}`;
  const cards = b.items.map(p => `<a class="card" href="/tablo/${p.slug}"><img src="/${p.webp}" onerror="this.onerror=null;this.src='/${p.jpg}'" alt="${esc(p.title)} – ${p.code}" loading="lazy"><div class="card-b"><div class="card-code">${p.code}</div><div class="card-title">${esc(p.title)}</div><div class="card-price">Kanvas 15–100 AZN · Məxmər 40–200 AZN</div></div></a>`).join('');
  writeOut(`bolme/${b.slug}/index.html`, pageHtml({
    title: `${b.name} | 15–200 AZN – Tablo Style Gallery`,
    desc: b.desc,
    canonical: bUrl,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: b.name,
      description: b.desc,
      url: bUrl,
      numberOfItems: b.items.length
    },
    body: `<div class="crumb"><a href="/">Ana Səhifə</a> › <a href="/bolme">Əsas Bölmələr</a> › ${esc(b.name)}</div>
<h1>${esc(b.name)}</h1>
<p class="lead">${esc(b.desc)}</p>
<div class="info-box"><strong>Məsləhət & Şərtlər:</strong> ${esc(b.extra)} Çatdırılma: Azərpoçt (3–10 AZN), avtobus (5 AZN), Morex və Expargo. Sifariş: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a></div>
<div class="pills">${navPills}</div>
<div class="cards">${cards}</div>`
  }));
}

const hubCards = BOLMELER.map(b => `<a class="card" href="/bolme/${b.slug}"><img src="/${b.items[0].webp}" onerror="this.onerror=null;this.src='/${b.items[0].jpg}'" alt="${esc(b.name)}" loading="lazy"><div class="card-b"><div class="card-code">${b.items.length} seçilmiş əsər</div><div class="card-title">${esc(b.name)}</div><div class="card-price">15 AZN – 200 AZN</div></div></a>`).join('');
writeOut('bolme/index.html', pageHtml({
  title: 'Saytın Əsas Bölmələri – Otaq və Növ üzrə Tablolar | Tablo Style Gallery',
  desc: 'Salon, yataq otağı, mətbəx, ofis, 3D modern, yağlı boya, məxmər, çoxhissəli və premium hədiyyəlik divar tabloları.',
  canonical: `${BASE}/bolme`,
  schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Saytın Əsas Bölmələri', url: `${BASE}/bolme` },
  body: `<div class="crumb"><a href="/">Ana Səhifə</a> › Saytın Əsas Bölmələri</div>
<h1>Saytın Əsas Bölmələri</h1>
<p class="lead">Məkanınıza və zövqünüzə uyğun bölməni seçin. Bütün tablolar standart ölçülərdə (15–200 AZN) bütün Azərbaycana çatdırılır.</p>
<div class="cards">${hubCards}</div>`
}));

// sitemap.xml-ə /bolme və 9 bölmə URL-ni əlavə et (təkrar etmədən)
let sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const newUrls = ['/bolme', ...BOLMELER.map(b => `/bolme/${b.slug}`)];
const additions = newUrls
  .filter(u => !sm.includes(`<loc>${BASE}${u}</loc>`))
  .map(u => `  <url><loc>${BASE}${u}</loc><lastmod>${TODAY}</lastmod><changefreq>weekly</changefreq><priority>0.85</priority></url>`)
  .join('\n');

if (additions) {
  sm = sm.replace('</urlset>', `${additions}\n</urlset>`);
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm, 'utf8');
}

console.log(`HAZIRDIR: /bolme və ${BOLMELER.length} bölmə yaradıldı, sitemap.xml yeniləndi.`);
