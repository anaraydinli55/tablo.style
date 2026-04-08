// ═══════════════════════════════════════════════════════
// Tablo Style Gallery – ARTWORK DATA: 001–020
// script.js-dəki generateArtworks() funksiyasını
// aşağıdakı ARTWORKS_DATA array ilə əvəz et
// ═══════════════════════════════════════════════════════

const ARTWORKS_DATA = [

  {
    num:'001', code:'VB-GAL-001',
    title:'Qızıl Xanım – Şlyapalı Gözəl',
    artist:'Naməlum rəssam',
    cat:'portret',
    size:'100×70 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'Qızıl-tünd qırmızı tonda şlyapalı qadın portreti. Brilyant boyunbağı, qolbaq və sırğalarla bəzənmiş zərif siluet. 100×70 sm kadife tablo.',
    emoDesc:'Zərif əlləri üzünü tutur, gözləri düşüncəlidir. Qızıl örtük altında gizlənmiş bir sirr var sanki. Evinizin ən görkəmli divarına layiq tablo.',
    interior:'Qonaq otağı, yataq otağı, ofis. Tünd tonlu interyerlərlə mükəmməl uyğunlaşır.',
    gift:'Doğum günü, toy ildönümü – zövqlü qadınlara ideal hədiyyə.',
    metaDesc:'Şlyapalı qızıl qadın portreti, 100×70 sm kadife tablo. Bakıda divar tablosu sifarişi – VəBo Gallery.'
  },

  {
    num:'002', code:'VB-GAL-002',
    title:'Mavi Tovuzquşu – Çiçəklər Arasında',
    artist:'Naməlum rəssam',
    cat:'menzere',
    size:'Ölçü soruşun',
    material:'Əl işi tablo',
    seoDesc:'Mavi tovuzquşu ağ çiçəklər arasında – relyef teksturlu, qızıl detallarla bəzədilmiş divar tablosu. Zəngin rəng palitrasında unikal əsər.',
    emoDesc:'Sehirli bir bağda sanki donub qalmış an. Mavinin min çaları, ağ ləçəklər – hər baxanda yeni bir detal kəşf edirsən.',
    interior:'Yaşayış otağı, koridor, otel lobbisi. Açıq rəngli divarlarda əsər son dərəcə effektlidir.',
    gift:'Ev açımı, toy hədiyyəsi – zəngin görünüşlü lüks hədiyyə.',
    metaDesc:'Mavi tovuzquşu çiçəkli divar tablosu. Əl işi relyef tablo Bakı – VəBo Gallery.'
  },

  {
    num:'003', code:'VB-GAL-003',
    title:'Paris – Payız Küçəsi',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'Paris küçəsinin payız mənzərəsi – Eyfel qülləsi, rəngli yarpaqlar, yol kənarında insanlar. 70×50 sm kadife tablo.',
    emoDesc:'Payız yağışının ritmi, Paris küçəsinin işığı. Bu tablo hər baxanda bir Paris gündüzünü yaşadır sizi.',
    interior:'Qonaq otağı, yemək otağı, restoran. İsti ton interyerlərə əla uyğun gəlir.',
    gift:'Paris sevgini hədiyyə et – romantik atmosfer yaratmaq istəyənlər üçün ideal seçim.',
    metaDesc:'Paris payız küçəsi Eyfel qülləsi tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'004', code:'VB-GAL-004',
    title:'Qız Qalası – Göy Səma',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'İstanbul Qız Qalası parlaq mavi göy fonunda, uçan qartallar ilə. 70×50 sm kadife divar tablosu.',
    emoDesc:'Boğazın ortasında əzəmətlə duran Qız Qalası, ağ buludlar arasında qanadlanan quşlar – azadlıq hissi verən əsər.',
    interior:'Qonaq otağı, kabinet, dəhliz. Mavi-ağ interyerlərə mükəmməl uyğun.',
    gift:'Türkiyəni sevənlərə, İstanbul xatirəsi kimi ideal hədiyyə.',
    metaDesc:'İstanbul Qız Qalası mavi göy tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'005', code:'VB-GAL-005',
    title:'Qara Qızıl – Düşüncəli Qadın',
    artist:'Naməlum rəssam',
    cat:'portret',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'Qara fonda qızıl tonlu düşüncəli qadın portreti. Müasir abstrakt-portret üslubunda 70×50 sm kadife tablo.',
    emoDesc:'Qara ilə qızılın ziddiyyəti – güclü, qərarlaşmış, dərinlikli bir qadın. Hər baxışda yeni bir hiss.',
    interior:'Müasir, minimalist interyerlər. Tünd rəngli divarlarda dramatik effekt yaradır.',
    gift:'Güclü, müstəqil qadınlara ən uyğun hədiyyə. Unudulmaz seçim.',
    metaDesc:'Qara qızıl qadın portreti tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'006', code:'VB-GAL-006',
    title:'Kapadokya – Hava Balonları',
    artist:'Naməlum rəssam',
    cat:'menzere',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'Kapadokya peri bacaları üzərində rəngli hava balonları. Türkiyənin ən məşhur mənzərəsi. 70×50 sm kadife tablo.',
    emoDesc:'Azadlıq, macəra, səyahət həvəsi. Bu tablo hər gün bir xəyal dünyasına qapı açır.',
    interior:'Uşaq otağı, qonaq otağı, səyahət mövzulu interyerlər üçün ideal.',
    gift:'Səyahətsevərlərə, Türkiyə həvəslilərə mükəmməl hədiyyə.',
    metaDesc:'Kapadokya hava balonları mənzərə tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'007', code:'VB-GAL-007',
    title:'Viktorian Balo – Əzəmətli Məclis',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'XIX əsr Avropa bal gecəsi – şən libashlar, böyük salon, elegantlıq. Tarixi üslubda 70×50 sm kadife tablo.',
    emoDesc:'Zamanı keçmiş bir əzəmət. Rəngarəng paltarlar, musikinin ritmi – bu tablo evi şüurla zənginləşdirir.',
    interior:'Klassik, barokko üslublu interyerlər, restoran, mehmanxana lobbisi.',
    gift:'Tarix və incəsənət həvəslisi dostlarınıza unikal hədiyyə.',
    metaDesc:'Viktorian balo əzəmətli məclis tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'008', code:'VB-GAL-008',
    title:'Sultan Əhməd Məscidi – İstanbul',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'İstanbul Sultan Əhməd (Mavi) Məscidi havadan mənzərəsi – yaşıl park, gəmilər, dəniz. 70×50 sm kadife tablo.',
    emoDesc:'Əsrlərin şahidi bir şəhər. Minarələrin göyə uzandığı bu mənzərə sakitlik və ehtiram hissi oyadır.',
    interior:'Qonaq otağı, dini məkanlara uyğun, ofis. İslam estetikasına müvafiq.',
    gift:'Dini duyğuları olan insanlara, İstanbul sevgini hədiyyə etmək üçün ideal.',
    metaDesc:'Sultan Əhməd Məscidi İstanbul tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'009', code:'VB-GAL-009',
    title:'Allah Kəlamı – Qızıl Xəttat',
    artist:'Naməlum rəssam',
    cat:'hediyye',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'Allah yazısı ərəb xəttatlığı ilə qızıl fonda, məscid silüeti. İslami divar tablosu. 70×50 sm kadife.',
    emoDesc:'Qızıl fon üzərində «Allah» kəlamı – evə bərəkət, sakitlik və ruhani atmosfer gətirir.',
    interior:'Qonaq otağı, yataq otağı, namaz otağı. İslami dekor üçün ən uyğun seçim.',
    gift:'Ramazan, Novruz, toy hədiyyəsi – dindar insanlara ən mənamlı hədiyyə.',
    metaDesc:'Allah xəttatlıq qızıl tablo 70×50 sm. İslami divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'010', code:'VB-GAL-010',
    title:'Payız Meşəsi – Leonid Afremov Üslubu',
    artist:'Leonid Afremov üslubu',
    cat:'menzere',
    size:'70×50 sm',
    material:'Kadife (Mexmer)',
    seoDesc:'Sarı-narıncı payız meşəsi, islaq yol, çətirli adam. Leonid Afremov üslubunda rəngarəng tablo. 70×50 sm kadife.',
    emoDesc:'Payızın isti rəng nəğməsi – sarı yarpaqlar, islaq asfalt, tənhalığın gözəlliyi. Hər baxanda şeir oxuyursun.',
    interior:'Qonaq otağı, yemək otağı, müasir interyerlər. Sarı-qəhvəyi tonlu dekorlara əla uyğun.',
    gift:'Doğum günü, ev açımı – payızı sevənlərə, incəsənət həvəslilərinə mükəmməl hədiyyə.',
    metaDesc:'Payız meşəsi Afremov üslubu tablo 70×50 sm. Kadife divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'011', code:'VB-GAL-011',
    title:'İstanbul Tramvayı – Taksim Küçəsi',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'100×70 sm',
    material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul qırmızı tramvayı Taksim küçəsində – qızıl parıltılı, vintaj üslubda 100×70 sm divar tablosu.',
    emoDesc:'Qırmızı tramvay, köhnə daş binalar, qızıl parıltı – İstanbulun ruhunu evinizdəki divara köçürən əsər.',
    interior:'Qonaq otağı, restoran, kafe, otel. Böyük divanlara ideal ölçü.',
    gift:'İstanbul sevgisi olan hər kəsə, yeni evə köçənlərə əla hədiyyə.',
    metaDesc:'İstanbul tramvay Taksim tablo 100×70 sm parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'012', code:'VB-GAL-012',
    title:'Ağ Geyimli Qız – Arxa Silüet',
    artist:'Naməlum rəssam',
    cat:'portret',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'Ağ baliklə geyimli qadın arxa silueti – portağal-mavi fon, parıltılı tekstura. Müasir portret tablo.',
    emoDesc:'Arxası bizə dönmüş – gedirmi, yoxsa qayıdırmu? Bir an donmuş, cavabsız bir hiss. Emosional gücü yüksək əsər.',
    interior:'Yataq otağı, qadın kabinetləri, butik interyerlər. Açıq rəngli divarlarda əsər.',
    gift:'Estetik zövqlü qadınlara, balerin sevərlərə, toy hədiyyəsi üçün ideal.',
    metaDesc:'Ağ geyimli qız arxa portret tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'013', code:'VB-GAL-013',
    title:'Bənövşəyi Küçə – Çiçəkli Cənnət',
    artist:'Naməlum rəssam',
    cat:'menzere',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'Bənövşəyi çiçəklərlə örtülü Aralıq dənizi küçəsi, daş evlər, vintaj avtomobil. Parıltılı divar tablosu.',
    emoDesc:'Yay istiləri, çiçəklərin ətrinin hiss edildiyi bir an. Bu tablo qışın ortasında belə evə bahar gətirir.',
    interior:'Qonaq otağı, yemək otağı, hamam. Rəngli, şən interyerlər üçün mükəmməl.',
    gift:'Çiçək sevənlərə, baharı hədiyyə etmək istəyənlərə – ən rəngarəng seçim.',
    metaDesc:'Bənövşəyi çiçəkli küçə tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'014', code:'VB-GAL-014',
    title:'Qız Qalası – Gecə Fırtınası',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul Qız Qalası dramatik bulud altında, yük gəmisi, parıltılı ulduzlu səma. Gecə mənzərəsi tablo.',
    emoDesc:'Fırtınalı göy, dənizin coşğusu, qüllənin əzəməti – dramatik gücü ilə insanı hipnoza salan tablo.',
    interior:'Qonaq otağı, ofis, restoran. Tünd divanlarda möhtəşəm kontrast.',
    gift:'Güclü estetik hissi olan insanlara, dəniz sevərlərə ideal hədiyyə.',
    metaDesc:'Qız Qalası gecə fırtına tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'015', code:'VB-GAL-015',
    title:'Ağ-Mavi Papatya Buketi',
    artist:'Leonid Afremov üslubu',
    cat:'menzere',
    size:'Ölçü soruşun',
    material:'Əl işi',
    seoDesc:'Ağ və mavi papatya buketi şüşə vazada – Leonid Afremov üslubunda rəngarəng fon, enerjili fırça zərbələri.',
    emoDesc:'Güllər solur, amma bu tablo əbədi qalır. Tazəlik, sevinc, bahar enerjisi – hər gün evə çiçək gətirir.',
    interior:'Mətbəx, yemək otağı, koridor, hamam. İstənilən interyerə uyğun gəlir.',
    gift:'Ən klassik hədiyyə – çiçək tablo. Doğum günü, Qadınlar Günü, ana günü üçün mükəmməl.',
    metaDesc:'Ağ mavi papatya buketi tablo Afremov üslubu. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'016', code:'VB-GAL-016',
    title:'Turna Quşu – Gün Batımı Silueti',
    artist:'Naməlum rəssam',
    cat:'menzere',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'Narıncı-sarı gün batımında turna quşunun qara silueti, uçan quşlar. Minimalist parıltılı divar tablosu.',
    emoDesc:'Günün son ışığında tək duran quş – azadlıq, sakitlik, heyranlıq hissi. Sadə amma dərin bir əsər.',
    interior:'Yataq otağı, meditasiya otağı, korridor. Narıncı-sarı interyerlərə əla uyğun.',
    gift:'Sakit, düşüncəli insanlara, təbiət sevərlərə uyğun hədiyyə.',
    metaDesc:'Turna gün batımı siluet tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'017', code:'VB-GAL-017',
    title:'Leylək Ailəsi – Yuva Sevinci',
    artist:'Naməlum rəssam',
    cat:'hediyye',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'Leyləklər yuvada – ana, ata və balacalar. Ailə sevgisini simvolizə edən parıltılı divar tablosu.',
    emoDesc:'Yuvanın isti qoynunda ailə sevgisi. Ata gəlir, balalar sevinir – evə hər baxanda ürək riqqətlənir.',
    interior:'Qonaq otağı, uşaq otağı, ailə otağı. İsti ton interyerlərə uyğun.',
    gift:'Yeni cütlüklərə, toy hədiyyəsi, körpə dünyaya gəldiyi ailələrə – mənamlı simvolik hədiyyə.',
    metaDesc:'Leylək ailəsi yuva tablo parıltılı. Hədiyyəlik divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'018', code:'VB-GAL-018',
    title:'Flaminqolar – Üç Gözəl',
    artist:'Naməlum rəssam',
    cat:'hediyye',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'Üç flaminqo – narıncı, ağ-gümüşü tonlarda su kənarında. Parıltılı teksturlu müasir divar tablosu.',
    emoDesc:'Zəriflik, estetika, harmoniya – bu üç flaminqo evinizə bir elegantlıq gətirir ki, sözlə ifadə etmək çətin.',
    interior:'Qonaq otağı, yataq otağı, spa, butik. Pastel rəngli interyerlərə əla uyğun.',
    gift:'Zərif qadınlara, modern ev sahiblərinə – ən estetik hədiyyə seçimlərdən biri.',
    metaDesc:'Flaminqo üç quş tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'019', code:'VB-GAL-019',
    title:'Boğaz Körpüsü – Gecə Panoraması',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul Boğaz körpüsü gecə işıqları panoraması – qızılı şəhər silüeti, parıltılı tekstura.',
    emoDesc:'Gecənin qaranlığında parlayan körpü – iki qitəni birləşdirən əzəmət. Bu tablo evinizi genişləndirir.',
    interior:'Qonaq otağı, yemək otağı, ofis. Uzun, yatay divanlara ideal panoramik ölçü.',
    gift:'Şəhər həyatını sevənlərə, İstanbullulara, müasir interyersevərlərə ideal hədiyyə.',
    metaDesc:'Boğaz körpüsü gecə panorama tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  },

  {
    num:'020', code:'VB-GAL-020',
    title:'Sarı Həyət – Rəngli Şəhər Küncü',
    artist:'Naməlum rəssam',
    cat:'sheher',
    size:'Ölçü soruşun',
    material:'Əl işi – Parıltılı',
    seoDesc:'Sarı binalar, rəngli pəncərələr, çiçəkli balkonlar, sarı VW avtomobil – şən Aralıq dənizi həyəti tablosu.',
    emoDesc:'Həyatın rəngarəng tərəfi – sarı, yaşıl, bənövşəyi. Bu tablo baxan hər kəsi təbəssüm etdirir.',
    interior:'Qonaq otağı, uşaq otağı, mətbəx. Açıq, şən atmosferli interyerlərə mükəmməl.',
    gift:'Optimist, həyat sevən insanlara, yeni evə köçənlərə ən rəngli hədiyyə.',
    metaDesc:'Sarı həyət rəngli küçə tablo parıltılı. Divar tablosu Bakı – VəBo Gallery.'
  }

];

// ═══════════════════════════════════════════════════════
// script.js-ə necə tətbiq etməli:
//
// 1. script.js-i aç
// 2. generateArtworks() funksiyasının içini tap:
//    function generateArtworks() { ... }
// 3. O funksiyanı TAM aşağıdakıla əvəz et:
//
// function generateArtworks() {
//   return ARTWORKS_DATA;
// }
//
// 4. ARTWORKS_DATA array-ini script.js-in yuxarısına əlavə et
// ═══════════════════════════════════════════════════════



/* ════════════════════════════════════════════════════════
   Tablo Style Gallery – script.js
   ════════════════════════════════════════════════════════ */

'use strict';

/* ── Config ─────────────────────────────────────────── */
const CONFIG = {
  waNumber:    '905540183188',
  waText:      (code) => `${code} haqqında məlumat almaq istəyirəm`,
  imageFolder: '/',           // prefix for image paths
  imageExt:    '.jpg',
  pageSize:    40,            // cards per load
  totalImages: 999            // max image count
};

/* ── ARTWORK DATA ───────────────────────────────────── */
// Each artwork: { num, title, cat, seoDesc, emoDesc, interior, gift, metaDesc }
// num is zero-padded 3 digits matching filename (001.jpg → 999.jpg)
// Add your real data here. Placeholders for now.

function generateArtworks() {
   return ARTWORKS_DATA;
   }
  const artworks = [];
  for (let i = 1; i <= CONFIG.totalImages; i++) {
    const num = String(i).padStart(3, '0');
    artworks.push({
      num,
      code:      `TS-GAL-${num}`,
      title:     '',          // ← Fill: artwork title (e.g. "Dağ mənzərəsi")
      artist:    '',          // ← Fill: artist name
      cat:       '',          // ← Fill: menzere | portret | abstrakt | sheher | hediyye
      seoDesc:   '',          // ← Fill: SEO description
      emoDesc:   '',          // ← Fill: emotional description
      interior:  '',          // ← Fill: interior usage suggestion
      gift:      '',          // ← Fill: gift scenario
      alt:       num,         // alt = image number per spec
      metaDesc:  ''           // ← Fill: meta description
    });
  }
  return artworks;
}

const ALL_ARTWORKS = generateArtworks();

/* ── State ──────────────────────────────────────────── */
let currentFilter   = 'all';
let searchQuery     = '';
let visibleCount    = CONFIG.pageSize;
let modalIndex      = 0;
let filteredItems   = [];

/* ── DOM Ready ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initBlog();
  initVisitorCounter();
  initScrollEffects();
  initHeaderScroll();
  document.addEventListener('keydown', handleKeyboard);
});

/* ── Gallery ─────────────────────────────────────────── */
function initGallery() {
  applyFilter();
}

function applyFilter() {
  filteredItems = ALL_ARTWORKS.filter(a => {
    const catOk   = currentFilter === 'all' || a.cat === currentFilter;
    const q       = searchQuery.toLowerCase().trim();
    const searchOk = !q || 
      a.title.toLowerCase().includes(q) ||
      a.num.includes(q) ||
      a.code.toLowerCase().includes(q) ||
      a.cat.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  visibleCount = CONFIG.pageSize;
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const slice = filteredItems.slice(0, visibleCount);
  grid.innerHTML = '';

  if (slice.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:60px;color:#888">Nəticə tapılmadı.</p>';
    document.getElementById('loadMoreBtn').classList.add('hidden');
    return;
  }

  slice.forEach((art, idx) => {
    grid.appendChild(buildCard(art, idx));
  });

  // load more button
  const btn = document.getElementById('loadMoreBtn');
  if (btn) {
    btn.classList.toggle('hidden', visibleCount >= filteredItems.length);
  }

  // fade-up observe
  observeFadeUps();
}

function buildCard(art, idx) {
  const card = document.createElement('article');
  card.className = 'art-card fade-up';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Tablo ${art.code} – böyüt`);
  card.setAttribute('data-idx', String(idx));
  card.onclick = () => openModal(idx);
  card.onkeydown = (e) => { if (e.key === 'Enter') openModal(idx); };

  const waMsg = encodeURIComponent(CONFIG.waText(art.code));
  const displayTitle = art.title || `Tablo #${art.num}`;
  const displayArtist = art.artist || 'Naməlum rəssam';

  card.innerHTML = `
    <div class="art-img-wrap">
      <img
        src="${CONFIG.imageFolder}${art.num}${CONFIG.imageExt}"
        alt="${art.alt}"
        loading="lazy"
        decoding="async"
        width="400"
        height="400"
      >
      <div class="art-overlay" aria-hidden="true">
        <span class="art-overlay-icon">🔍</span>
      </div>
    </div>
    <div class="art-info">
      <div class="art-code">${art.code}</div>
      <h3 class="art-title">${displayTitle}<br><small style="font-size:.8rem;font-style:normal;color:#888">${displayArtist}</small></h3>
      <a class="art-wa" href="https://wa.me/${CONFIG.waNumber}?text=${waMsg}" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="WhatsApp ilə sifariş">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#fff" d="M16 2C8.27 2 2 8.27 2 16c0 2.44.65 4.72 1.77 6.7L2 30l7.52-1.73A13.94 13.94 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2Zm7.6 19.4c-.32.9-1.87 1.73-2.56 1.84-.66.1-1.5.14-2.42-.15a22.2 22.2 0 0 1-2.19-.81C13.1 21.1 10.9 18.5 10.7 18.24c-.2-.26-1.62-2.15-1.62-4.1 0-1.94 1.02-2.9 1.38-3.3.36-.4.79-.5 1.05-.5l.75.01c.24.01.57-.09.89.68l1.14 2.78c.1.23.05.5-.06.7l-.44.57-.43.44c-.14.14-.29.3-.12.59.17.28.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.36 1.44.29.14.46.12.63-.07l1.02-1.16c.19-.22.38-.15.63-.06l2.91 1.37c.27.13.45.2.52.3.07.1.07.6-.25 1.5Z"/></svg>
        Sifariş
      </a>
    </div>
  `;
  return card;
}

/* ── Filter & Search ─────────────────────────────────── */
window.setFilter = function(btn, cat) {
  currentFilter = cat;
  document.querySelectorAll('.ftab').forEach(b => {
    b.classList.toggle('active', b === btn);
    b.setAttribute('aria-selected', String(b === btn));
  });
  applyFilter();
};

window.filterGallery = function() {
  searchQuery = document.getElementById('searchInput')?.value || '';
  applyFilter();
};

window.loadMore = function() {
  visibleCount += CONFIG.pageSize;
  renderGallery();
  // scroll smoothly to newly loaded
  const grid = document.getElementById('galleryGrid');
  if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'end' });
};

/* ── Modal ───────────────────────────────────────────── */
window.openModal = function(idx) {
  modalIndex = idx;
  const art = filteredItems[idx];
  if (!art) return;

  const waMsg = encodeURIComponent(CONFIG.waText(art.code));
  const displayTitle = art.title || `Tablo #${art.num}`;
  const displayDesc  = art.emoDesc || art.seoDesc || 'Bu əsər haqqında ətraflı məlumat üçün bizimlə əlaqə saxlayın.';

  document.getElementById('modalImg').src = `${CONFIG.imageFolder}${art.num}${CONFIG.imageExt}`;
  document.getElementById('modalImg').alt  = art.alt;
  document.getElementById('modalCode').textContent  = art.code;
  document.getElementById('modalTitle').textContent = displayTitle;
  document.getElementById('modalDesc').textContent  = displayDesc;
  document.getElementById('modalWA').href = `https://wa.me/${CONFIG.waNumber}?text=${waMsg}`;

  const modal = document.getElementById('imgModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.focus();
};

window.closeModal = function() {
  document.getElementById('imgModal').classList.remove('open');
  document.body.style.overflow = '';
};

window.closeModalOnBg = function(e) {
  if (e.target === document.getElementById('imgModal')) closeModal();
};

window.modalNav = function(dir) {
  const newIdx = modalIndex + dir;
  if (newIdx >= 0 && newIdx < filteredItems.length) {
    openModal(newIdx);
  }
};

function handleKeyboard(e) {
  const modal = document.getElementById('imgModal');
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape')       closeModal();
  if (e.key === 'ArrowRight')   modalNav(1);
  if (e.key === 'ArrowLeft')    modalNav(-1);
}

/* ── Blog Data ───────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 'divar-tablosu-secimi',
    tag: '🎨 Dekor',
    icon: '🖼',
    title: 'Eviniz Üçün Doğru Divar Tablosu Necə Seçilir?',
    preview: 'Divar tablosu seçimi bir çox insan üçün çətin görünür. Ölçü, rəng, üslub – hər şey önəmlidir. Bu məqalədə sizə addım-addım mükəmməl tabloyu necə tapacağınızı izah edirik.',
    date: '2026-01-15',
    readMin: 5,
    schema: true,
    full: `
      <h2>Ölçünü Düzgün Seçin</h2>
      <p>Tablo asacağınız divarın ölçüsünü əvvəlcədən ölçün. Böyük divar üçün kiçik tablo görsel balansı pozur. Ümumi qayda: tablonun eni divarın 2/3-nü tutmalıdır.</p>
      <h2>Rəng Uyumuna Diqqət Edin</h2>
      <p>Otağın hakim rəngləri ilə tablonun rəng palitrasını uyğunlaşdırın. Neytral interyerlərə parlaq tablolar, rəngli interyerlərə isə monoton əsərlər daha yaxşı görünür.</p>
      <h2>Üslub Seçimi</h2>
      <p>Müasir interyerlər üçün abstrakt və minimalist əsərlər; klassik interyerlər üçün mənzərə və portret əsərləri daha uyğundur.</p>
    `
  },
  {
    id: 'dogum-gunu-hediyyesi',
    tag: '🎁 Hədiyyə',
    icon: '🎂',
    title: 'Doğum Günü Hədiyyəsi: Niyə Tablo Mükəmməl Seçimdir?',
    preview: '"Doğum günü hədiyyəsi nə alım?" sualına ən gözəl cavab: əl işi tablo. Bu yazıda sizə niyə tablonun unudulmaz hədiyyəyə çevrildiyini izah edirik.',
    date: '2026-02-03',
    readMin: 4,
    schema: true,
    full: `
      <h2>Şəxsi və Unikal</h2>
      <p>Əl işi tablo heç bir başqa nüsxəsi olmayan bir əsərdir. Sevdiyinizə belə bir hədiyyə vermək ona dəyər verdiyinizi göstərir.</p>
      <h2>Ömürlük Xatirə</h2>
      <p>Çiçək solar, şirniyyat yeyilər, lakin gözəl bir tablo on illər boyu divarında asılı qalar. Hər baxanda sizi xatırlayacaq.</p>
      <h2>Ev Dekorasiyası Ehtiyacı</h2>
      <p>Hər ev sahibi öz evini gözəlləşdirmək istəyir. Tablo bu ehtiyacı ən estetik şəkildə ödəyir.</p>
    `
  },
  {
    id: 'ev-dekorasiyasi-fikirleri',
    tag: '🏠 İnterver',
    icon: '✨',
    title: 'Ev Dekorasiyası: 2026-cı İlin Ən Populyar Tablo Trendləri',
    preview: 'Bu il ev dekorasiyasında nə populyardır? Botanik motivlər, abstrakt ekspressizm, yoxsa Şərq incəsənəti? Bütün trendlər bu məqalədədir.',
    date: '2026-03-10',
    readMin: 6,
    schema: true,
    full: `
      <h2>Botanik Motivlər</h2>
      <p>Yaşıl bitkilər, çiçəklər, tropik yarpaqlar – 2026-cı ildə botanik tablolar hər interyerdə görünür. Təbiəti evə gətirin.</p>
      <h2>Abstrakt Ekspressizm</h2>
      <p>Rəngarəng fırça cizgiləri, dinamik formalar – abstrakt tablolar müasir evlərə müstəsna enerjia verir.</p>
      <h2>Şərq Estetikası</h2>
      <p>Azərbaycan, İran, Osmanlı motivlərindən ilhamlanan tablolar 2026-cı ildə beynəlxalq dekor arenasında öz yerini möhkəmləndirir.</p>
    `
  }
];

function initBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  // show first 3 on homepage
  const posts = BLOG_POSTS.slice(0, 3);
  posts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card fade-up';
    card.innerHTML = `
      <div class="blog-card-img" aria-hidden="true">${post.icon}</div>
      <div class="blog-card-body">
        <div class="blog-tag">${post.tag}</div>
        <h3>${post.title}</h3>
        <p>${post.preview.substring(0, 140)}…</p>
        <a href="blog.html#${post.id}" class="blog-read-more">ardı →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── Visitor Counter ─────────────────────────────────── */
function initVisitorCounter() {
  const el = document.getElementById('visitorCount');
  if (!el) return;
  try {
    let count = parseInt(localStorage.getItem('vebo_visitors') || '0', 10);
    const lastVisit = localStorage.getItem('vebo_last_visit');
    const today = new Date().toDateString();
    if (lastVisit !== today) {
      count++;
      localStorage.setItem('vebo_visitors', String(count));
      localStorage.setItem('vebo_last_visit', today);
    }
    el.textContent = count.toLocaleString('az');
  } catch(e) {
    el.textContent = '—';
  }
}

/* ── Scroll Effects ──────────────────────────────────── */
function initScrollEffects() {
  observeFadeUps();
}

function observeFadeUps() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}

/* ── Header scroll ───────────────────────────────────── */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Mobile nav ──────────────────────────────────────── */
window.toggleNav = function() {
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.nav-toggle');
  if (!nav) return;
  const isOpen = nav.classList.toggle('open');
  btn?.setAttribute('aria-expanded', String(isOpen));
};

/* ── Blog page helper ────────────────────────────────── */
// Call this on blog.html to render full articles
window.renderBlogPage = function() {
  const container = document.getElementById('blogFullContainer');
  if (!container) return;

  BLOG_POSTS.forEach(post => {
    const article = document.createElement('article');
    article.className = 'blog-article';
    article.id = post.id;
    article.innerHTML = `
      <div class="blog-tag">${post.tag} · ${post.date} · ${post.readMin} dəq oxu</div>
      <h1>${post.title}</h1>
      <p>${post.preview}</p>
      ${post.full}
      <p style="margin-top:32px;padding-top:24px;border-top:1px solid #eee">
        <strong>Hər hansı bu tablolardan birini hədiyyə olaraq almaq istəyirsiniz?</strong><br>
        <a href="/" style="color:var(--gold)">Kataloqa bax →</a> &nbsp;|&nbsp;
        <a href="https://wa.me/${CONFIG.waNumber}?text=Blog%20məqaləsindən%20keçdim%2C%20tablo%20haqda%20soruşmaq%20istəyirəm" target="_blank" rel="noopener" style="color:var(--gold)">WhatsApp ilə əlaqə →</a>
      </p>
    `;
    container.appendChild(article);

    // Schema for each blog post
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.preview,
      "datePublished": post.date,
      "dateModified": post.date,
      "url": `https://vebo-gallery.az/blog.html#${post.id}`,
      "publisher": {
        "@type": "Organization",
        "name": "VəBo Gallery",
        "logo": { "@type": "ImageObject", "url": "https://vebo-gallery.az/images/logo.png" }
      },
      "mainEntityOfPage": `https://vebo-gallery.az/blog.html#${post.id}`
    });
    document.head.appendChild(schema);
  });
};

/* ── Product Schema injector ─────────────────────────── */
// Injects individual product schema when modal opens
window.injectProductSchema = function(art) {
  const existing = document.getElementById('productSchema');
  if (existing) existing.remove();

  const s = document.createElement('script');
  s.id   = 'productSchema';
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": art.title || `Tablo #${art.num}`,
    "description": art.seoDesc || art.emoDesc || '',
    "image": `https://vebo-gallery.az/${art.num}.jpg`,
    "sku": art.code,
    "brand": { "@type": "Brand", "name": "VəBo Gallery" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AZN",
      "price": "0",
      "priceSpecification": { "@type": "PriceSpecification", "description": "Qiymət soruşun" },
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "VəBo Gallery" },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "AZ",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "AZN" },
        "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "AZ" },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" }
        }
      }
    }
  });
  document.head.appendChild(s);
};
