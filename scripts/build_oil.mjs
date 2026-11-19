import fs from 'node:fs';
import path from 'node:path';

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

function findMp4(num) {
  const candidates = [
    `images/yagli-boya/${num}.mp4`,
    `images/${num}.mp4`,
    `${num}.mp4`,
    `yagli-boya/${num}.mp4`,
  ];
  for (const c of candidates) {
    if (fs.existsSync(path.join(ROOT, c))) return `/${c}`;
  }
  // Bütün alt qovluqlarda axtar (depth 3)
  function walk(dir, depth = 0) {
    if (depth > 3) return null;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ent.name === '.git' || ent.name === 'node_modules') continue;
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        const res = walk(full, depth + 1);
        if (res) return res;
      } else if (ent.name === `${num}.mp4`) {
        return '/' + path.relative(ROOT, full).replace(/\\/g, '/');
      }
    }
    return null;
  }
  return walk(ROOT) || `/images/yagli-boya/${num}.mp4`;
}

// Buradakı size və price sahələrini istədiyiniz vaxt doldurub `node scripts/build_oil.mjs` işə sala bilərsiniz (və ya birbaşa HTML-də yazın)
const PAINTINGS = [
  {
    num: 1,
    slug: 'deyirman-payiz-menzeresi-yagli-boya',
    title: 'Payız Meşəsində Dəyirman və Çay',
    size: '',
    price: '',
    desc: 'Azərbaycanlı rəssam tərəfindən kətan üzərində yağlı boya ilə çəkilmiş orijinal əl işi tablo. Payızın qızılı və narıncı rəngləri arasında taxta su dəyirmanı, daşlı çay axını və sakit təbiət mənzərəsi təsvir olunub.',
    interior: 'Qonaq otağı, bağ evi, istirahət otağı və klassik interyerlər üçün isti atmosfer yaradır.'
  },
  {
    num: 2,
    slug: 'mavi-gozlu-peleng-yagli-boya',
    title: 'Mavi Gözlü Pələng Portreti',
    size: '',
    price: '',
    desc: 'Azərbaycanlı rəssamın əl işi olan bu yağlı boya tablosunda qaranlıq fon üzərində kəskin mavi gözlü pələng portreti detallı fırça toxunuşları ilə işlənib. Güc, özünəinam və dinamika simvoludur.',
    interior: 'Ofis, kabinet, kişi otağı və müasir qonaq otaqları üçün güclü fokus əsəridir.'
  },
  {
    num: 3,
    slug: 'cehrayi-agac-ve-gol-yagli-boya',
    title: 'Çəhrayı Çiçəkli Ağac və Göl Mənzərəsi',
    size: '',
    price: '',
    desc: 'Kətan üzərində əl işi yağlı boya ilə çəkilmiş zərif bahar mənzərəsi. Göl kənarında çəhrayı çiçəklənmiş ağac, daş cığır və yaşıl təbiət sakitlik və təravət hissi bəxş edir.',
    interior: 'Yataq otağı, qonaq otağı və işıqlı mənzil interyerləri üçün ideal seçimdir.'
  },
  {
    num: 4,
    slug: 'payiz-cayi-ve-selale-yagli-boya',
    title: 'Payız Meşəsi, Çay və Şəlalə',
    size: '',
    price: '',
    desc: 'Azərbaycanlı rəssam tərəfindən yağlı boya texnikası ilə yaradılmış zəngin rəngli payız mənzərəsi. Dumanlı dağlar, qızılı-qırmızı meşə və qayaların arasından axan şəlaləli çay təsvir olunub.',
    interior: 'Geniş qonaq otaqları, salonlar və təbiət mövzulu dekorasiyalar üçün uyğundur.'
  },
  {
    num: 5,
    slug: 'qacan-ag-at-yagli-boya',
    title: 'Qaçan Ağ At',
    size: '',
    price: '',
    desc: 'Tünd fon üzərində sürətlə irəliləyən ağ atın dinamik təsviri. Yağlı boya ilə çəkilmiş bu orijinal əl işi tablo enerji, azadlıq və zəriflik rəmzi kimi seçilir.',
    interior: 'Ofis, iş otağı, salon və premium hədiyyə seçimi üçün mükəmməldir.'
  },
  {
    num: 6,
    slug: 'paris-eyfel-payiz-yagli-boya',
    title: 'Paris Eyfel Qülləsi və Payız Körpüsü',
    size: '',
    price: '',
    desc: 'Rəngarəng payız ağacları, Sena çayı üzərində körpü, qırmızı kafe çətirləri və fonda Eyfel qülləsi ilə işlənmiş canlı əl işi yağlı boya tablosu.',
    interior: 'Qonaq otağı, kafe, studiya və romantik interyer dekorasiyaları üçün cəlbedici əsərdir.'
  },
  {
    num: 7,
    slug: 'mavi-tovuzqusu-yagli-boya',
    title: 'Ağ Çiçəklər Arasında Mavi Tovuzquşu',
    size: '',
    price: '',
    desc: 'Zərif ağ çiçək budaqları arasında dayanmış kral mavisi tovuzquşunun yağlı boya ilə işlənmiş əl işi rəsmi. Gözəllik, zəriflik və lüks görünüş təqdim edir.',
    interior: 'Yataq otağı, salon, dəhliz və xüsusi günlər üçün dəyərli hədiyyə seçimidir.'
  }
];

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

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
.navlinks{display:flex;flex-wrap:wrap;gap:14px;font-size:14px}
.navlinks a{text-decoration:none;color:#faf8f4;opacity:.9}
.navlinks a:hover{color:#d4a017}
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
.wa-btn:hover{transform:translateY(-2px)}
.back-btn{display:inline-block;margin-top:8px;font-size:14px;text-decoration:none;color:#d4a017}
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
    <a href="/el-isi-yagli-boya">Əl İşi Yağlı Boya</a>
    <a href="/qiymetler">Qiymətlər</a>
    <a href="/blog">Bloq</a>
    <a href="/hareketli">Estetik Qalereya</a>
  </nav>
</header>
<main class="wrap">
${body}
<footer>© 2026 Tablo Style Gallery · Şəki şəhəri, Azərbaycan · WhatsApp: <a href="https://wa.me/${WA_NUM}">+994 55 235 73 80</a> · Əlaqə (TR): +90 554 018 31 88</footer>
</main>
</body>
</html>`;
}

// Video yollarını tap
for (const p of PAINTINGS) {
  p.videoSrc = findMp4(p.num);
  console.log(`Tablo #${p.num} video -> ${p.videoSrc}`);
}

// 1. Ümumi səhifə: /el-isi-yagli-boya/index.html
const listCards = PAINTINGS.map(p => `
  <a class="card" href="/${p.slug}">
    <video autoplay loop muted playsinline preload="metadata">
      <source src="${esc(p.videoSrc)}#t=0.1" type="video/mp4">
    </video>
    <div class="card-b">
      <div class="card-tag">Əl işi yağlı boya</div>
      <div class="card-title">${esc(p.title)}</div>
      <div class="meta-line"><strong>Ölçüsü :</strong> ${esc(p.size)}</div>
      <div class="meta-line"><strong>Qiyməti :</strong> ${esc(p.price)}</div>
    </div>
  </a>`).join('');

writeOut('el-isi-yagli-boya/index.html', pageHtml({
  title: 'Azərbaycanlı Rəssamların Əl İşi Yağlı Boya Tabloları | Tablo Style Gallery',
  desc: 'Azərbaycanlı rəssamların kətan üzərində əl işi yağlı boya ilə çəkdiyi 7 orijinal divar tablosu. Bütün Azərbaycana çatdırılma.',
  canonical: `${BASE}/el-isi-yagli-boya`,
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Azərbaycanlı Rəssamların Əl İşi Yağlı Boya Tabloları',
    url: `${BASE}/el-isi-yagli-boya`,
    numberOfItems: PAINTINGS.length
  },
  body: `<div class="crumb"><a href="/">Ana Səhifə</a> › Azərbaycanlı Rəssamların Əl İşi Yağlı Boya Tabloları</div>
<h1>Azərbaycanlı Rəssamların Əl İşi Yağlı Boya Tabloları</h1>
<p class="lead">Kətan üzərində yağlı boya ilə əl işi olaraq çəkilmiş 7 orijinal əsər. İstənilən tablonun üzərinə klikləyərək ətraflı məlumata baxa və WhatsApp ilə sifariş verə bilərsiniz.</p>
<div class="cards">${listCards}</div>`
}));

// 2. 7 ayrı tablo səhifəsi (/<slug>/index.html)
for (const p of PAINTINGS) {
  const pUrl = `${BASE}/${p.slug}`;
  const waText = encodeURIComponent(`Salam, əl işi yağlı boya tablo (${p.title}) haqqında məlumat almaq istəyirəm`);
  const others = PAINTINGS.filter(x => x.num !== p.num).slice(0, 3);
  const otherCards = others.map(o => `
    <a class="card" href="/${o.slug}">
      <video autoplay loop muted playsinline preload="metadata">
        <source src="${esc(o.videoSrc)}#t=0.1" type="video/mp4">
      </video>
      <div class="card-b">
        <div class="card-tag">Əl işi yağlı boya</div>
        <div class="card-title">${esc(o.title)}</div>
        <div class="meta-line"><strong>Ölçüsü :</strong> ${esc(o.size)}</div>
        <div class="meta-line"><strong>Qiyməti :</strong> ${esc(o.price)}</div>
      </div>
    </a>`).join('');

  writeOut(`${p.slug}/index.html`, pageHtml({
    title: `${p.title} – Əl İşi Yağlı Boya | Tablo Style Gallery`,
    desc: p.desc,
    canonical: pUrl,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: `${p.title} – Əl İşi Yağlı Boya`,
          description: p.desc,
          material: 'Yağlı boya (kətan üzərində əl işi)',
          brand: { '@type': 'Brand', name: 'Tablo Style Gallery' },
          url: pUrl
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ana Səhifə', item: `${BASE}/` },
            { '@type': 'ListItem', position: 2, name: 'Əl İşi Yağlı Boya', item: `${BASE}/el-isi-yagli-boya` },
            { '@type': 'ListItem', position: 3, name: p.title, item: pUrl }
          ]
        }
      ]
    },
    body: `<div class="crumb"><a href="/">Ana Səhifə</a> › <a href="/el-isi-yagli-boya">Əl İşi Yağlı Boya Tabloları</a> › ${esc(p.title)}</div>
<div class="prod-grid">
  <div>
    <video class="prod-media" autoplay loop muted playsinline controls preload="auto">
      <source src="${esc(p.videoSrc)}#t=0.1" type="video/mp4">
    </video>
    <div class="specs-box">
      <p><strong>Növ :</strong> Əl işi yağlı boya</p>
      <p><strong>Ölçüsü :</strong> ${esc(p.size)}</p>
      <p><strong>Qiyməti :</strong> ${esc(p.price)}</p>
    </div>
  </div>
  <div>
    <span class="card-tag">Azərbaycanlı Rəssamların Əl İşi</span>
    <h1>${esc(p.title)}</h1>
    <p>${esc(p.desc)}</p>
    <p>${esc(p.interior)}</p>
    <a class="wa-btn" href="https://wa.me/${WA_NUM}?text=${waText}" target="_blank" rel="noopener">WhatsApp ilə Sifariş</a>
    <div class="specs-box">
      <p><strong>Çatdırılma (Şəki mərkəzli):</strong> Bütün Azərbaycana Azərpoçt (3–10 AZN), 17 şəhərə avtobusla (5 AZN, 2–3 iş günü), Morex və Expargo karqo.</p>
      <p><strong>Ödəniş & Zəmanət:</strong> Sifariş veriləndə karta ödənilir. Yolda zədələnmə olarsa satıcı geri alır və ödənişi tam qaytarır.</p>
    </div>
    <a class="back-btn" href="/el-isi-yagli-boya">← Bütün əl işi yağlı boya tablolarına qayıt</a>
  </div>
</div>
<h2 style="margin-top:42px;font-family:'Cormorant Garamond',Georgia,serif;font-size:26px;">Digər Əl İşi Yağlı Boya Tabloları</h2>
<div class="cards">${otherCards}</div>`
  }));
}

// 3. index.html: filtr düymələrinin (menzere, portret, abstrakt, seher, hediyyelik) düz altına yeni düymə əlavə et
const idxPath = Path_join(ROOT, 'index.html');
function Path_join(a, b) { return path.join(a, b); }
let idx = fs.readFileSync(idxPath, 'utf8');
if (!idx.includes('/el-isi-yagli-boya')) {
  const oilBtn = `\n    <div style="text-align:center;margin:14px 0 6px;">\n      <a href="/el-isi-yagli-boya" class="ftab" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#b8860b,#d4a017);color:#1a1612;border-color:#d4a017;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:999px;">🎨 Azərbaycanlı Rəssamların Əl İşi Yağlı Boya Tabloları (7 əsər) →</a>\n    </div>`;
  const replaced = idx.replace(
    /(onclick="setFilter\(this,'hediyye'\)"[^>]*>[^<]*<\/button>\s*<\/div>)/,
    `$1${oilBtn}`
  );
  if (replaced === idx) {
    throw new Error('index.html-də hediyyelik filtr düyməsi tapılmadı!');
  }
  fs.writeFileSync(idxPath, replaced, 'utf8');
  console.log('UPDATED: index.html (əl işi yağlı boya düyməsi əlavə edildi)');
}

// 4. sitemap.xml yenilə
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
const oilUrls = ['/el-isi-yagli-boya', ...PAINTINGS.map(p => `/${p.slug}`)];
const adds = oilUrls
  .filter(u => !sm.includes(`<loc>${BASE}${u}</loc>`))
  .map(u => `  <url><loc>${BASE}${u}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>`)
  .join('\n');
if (adds) {
  sm = sm.replace('</urlset>', `${adds}\n</urlset>`);
  fs.writeFileSync(smPath, sm, 'utf8');
  console.log('UPDATED: sitemap.xml');
}
