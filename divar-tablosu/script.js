/* ════════════════════════════════════════════════════════
   Tablo Style Gallery – script.js  (DÜZƏLDİLMİŞ)
   ════════════════════════════════════════════════════════ */

'use strict';

/* ── Config ─────────────────────────────────────────── */
const CONFIG = {
  waNumber:    '905540183188',
  waText:      (code) => `${code} haqqında məlumat almaq istəyirəm`,
  imageFolder: '/',
  imageExt:    '.jpg',
  pageSize:    40,
  totalImages: 999
};

/* ── ARTWORK DATA: 001–020 (real data) ──────────────── */
const ARTWORKS_DATA = [
  {
    num:'001', code:'VB-GAL-001', alt:'001',
    title:'Qızıl Xanım – Şlyapalı Gözəl',
    artist:'Naməlum rəssam', cat:'portret',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'Qızıl-tünd qırmızı tonda şlyapalı qadın portreti. Brilyant boyunbağı, qolbaq və sırğalarla bəzənmiş zərif siluet. 100×70 sm kadife tablo.',
    emoDesc:'Zərif əlləri üzünü tutur, gözləri düşüncəlidir. Qızıl örtük altında gizlənmiş bir sirr var sanki. Evinizin ən görkəmli divarına layiq tablo.',
    interior:'Qonaq otağı, yataq otağı, ofis. Tünd tonlu interyerlərlə mükəmməl uyğunlaşır.',
    gift:'Doğum günü, toy ildönümü – zövqlü qadınlara ideal hədiyyə.',
    metaDesc:'Şlyapalı qızıl qadın portreti, 100×70 sm kadife tablo. Bakıda divar tablosu sifarişi.'
  },
  {
    num:'002', code:'VB-GAL-002', alt:'002',
    title:'Mavi Tovuzquşu – Çiçəklər Arasında',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi tablo',
    seoDesc:'Mavi tovuzquşu ağ çiçəklər arasında – relyef teksturlu, qızıl detallarla bəzədilmiş divar tablosu.',
    emoDesc:'Sehirli bir bağda sanki donub qalmış an. Mavinin min çaları, ağ ləçəklər – hər baxanda yeni bir detal kəşf edirsən.',
    interior:'Yaşayış otağı, koridor, otel lobbisi. Açıq rəngli divarlarda əsər son dərəcə effektlidir.',
    gift:'Ev açımı, toy hədiyyəsi – zəngin görünüşlü lüks hədiyyə.',
    metaDesc:'Mavi tovuzquşu çiçəkli divar tablosu. Əl işi relyef tablo Bakı.'
  },
  {
    num:'003', code:'VB-GAL-003', alt:'003',
    title:'Qız Qalası – Göy Səma',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'İstanbul Qız Qalası parlaq mavi göy fonunda, uçan quşlar ilə. 70×50 sm kadife divar tablosu.',
    emoDesc:'Boğazın ortasında əzəmətlə duran Qız Qalası, ağ buludlar arasında qanadlanan quşlar – azadlıq hissi verən əsər.',
    interior:'Qonaq otağı, kabinet, dəhliz. Mavi-ağ interyerlərə mükəmməl uyğun.',
    gift:'Türkiyəni sevənlərə, İstanbul xatirəsi kimi ideal hədiyyə.',
    metaDesc:'İstanbul Qız Qalası mavi göy tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'004', code:'VB-GAL-004', alt:'004',
    title:'Paris – Payız Küçəsi',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Paris küçəsinin payız mənzərəsi – Eyfel qülləsi, rəngli yarpaqlar, yol kənarında insanlar. 70×50 sm kadife tablo.',
    emoDesc:'Payız yağışının ritmi, Paris küçəsinin işığı. Bu tablo hər baxanda bir Paris gündüzünü yaşadır sizi.',
    interior:'Qonaq otağı, yemək otağı, restoran. İsti ton interyerlərə əla uyğun gəlir.',
    gift:'Paris sevgini hədiyyə et – romantik atmosfer yaratmaq istəyənlər üçün ideal seçim.',
    metaDesc:'Paris payız küçəsi Eyfel qülləsi tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'005', code:'VB-GAL-005', alt:'005',
    title:'Sultan Əhməd Məscidi – İstanbul',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'İstanbul Sultan Əhməd Məscidi havadan mənzərəsi – yaşıl park, gəmilər, dəniz. 70×50 sm kadife tablo.',
    emoDesc:'Əsrlərin şahidi bir şəhər. Minarələrin göyə uzandığı bu mənzərə sakitlik və ehtiram hissi oyadır.',
    interior:'Qonaq otağı, dini məkanlara uyğun, ofis. İslam estetikasına müvafiq.',
    gift:'Dini duyğuları olan insanlara, İstanbul sevgini hədiyyə etmək üçün ideal.',
    metaDesc:'Sultan Əhməd Məscidi İstanbul tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'006', code:'VB-GAL-006', alt:'006',
    title:'Viktorian Balo – Əzəmətli Məclis',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'XIX əsr Avropa bal gecəsi – şən libaslar, böyük salon, elegantlıq. Tarixi üslubda 70×50 sm kadife tablo.',
    emoDesc:'Zamanı keçmiş bir əzəmət. Rəngarəng paltarlar, musikinin ritmi – bu tablo evi şüurla zənginləşdirir.',
    interior:'Klassik, barokko üslublu interyerlər, restoran, mehmanxana lobbisi.',
    gift:'Tarix və incəsənət həvəslisi dostlarınıza unikal hədiyyə.',
    metaDesc:'Viktorian balo əzəmətli məclis tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'007', code:'VB-GAL-007', alt:'007',
    title:'Allah Kəlamı – Qızıl Xəttat',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Allah yazısı ərəb xəttatlığı ilə qızıl fonda, məscid silüeti. İslami divar tablosu. 70×50 sm kadife.',
    emoDesc:'Qızıl fon üzərində «Allah» kəlamı – evə bərəkət, sakitlik və ruhani atmosfer gətirir.',
    interior:'Qonaq otağı, yataq otağı, namaz otağı. İslami dekor üçün ən uyğun seçim.',
    gift:'Ramazan, Novruz, toy hədiyyəsi – dindar insanlara ən mənamlı hədiyyə.',
    metaDesc:'Allah xəttatlıq qızıl tablo 70×50 sm. İslami divar tablosu Bakı.'
  },
  {
    num:'008', code:'VB-GAL-008', alt:'008',
    title:'Payız Meşəsi – Afremov Üslubu',
    artist:'Leonid Afremov üslubu', cat:'menzere',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Sarı-narıncı payız meşəsi, islaq yol, çətirli adam. Leonid Afremov üslubunda rəngarəng tablo. 70×50 sm kadife.',
    emoDesc:'Payızın isti rəng nəğməsi – sarı yarpaqlar, islaq asfalt, tənhalığın gözəlliyi. Hər baxanda şeir oxuyursun.',
    interior:'Qonaq otağı, yemək otağı, müasir interyerlər. Sarı-qəhvəyi tonlu dekorlara əla uyğun.',
    gift:'Doğum günü, ev açımı – payızı sevənlərə, incəsənət həvəslilərinə mükəmməl hədiyyə.',
    metaDesc:'Payız meşəsi Afremov üslubu tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'009', code:'VB-GAL-009', alt:'009',
    title:'Qara Qızıl – Düşüncəli Qadın',
    artist:'Naməlum rəssam', cat:'portret',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Qara fonda qızıl tonlu düşüncəli qadın portreti. Müasir abstrakt-portret üslubunda 70×50 sm kadife tablo.',
    emoDesc:'Qara ilə qızılın ziddiyyəti – güclü, qərarlaşmış, dərinlikli bir qadın. Hər baxışda yeni bir hiss.',
    interior:'Müasir, minimalist interyerlər. Tünd rəngli divarlarda dramatik effekt yaradır.',
    gift:'Güclü, müstəqil qadınlara ən uyğun hədiyyə. Unudulmaz seçim.',
    metaDesc:'Qara qızıl qadın portreti tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'010', code:'VB-GAL-010', alt:'010',
    title:'Kapadokya – Hava Balonları',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Kapadokya peri bacaları üzərində rəngli hava balonları. Türkiyənin ən məşhur mənzərəsi. 70×50 sm kadife tablo.',
    emoDesc:'Azadlıq, macəra, səyahət həvəsi. Bu tablo hər gün bir xəyal dünyasına qapı açır.',
    interior:'Uşaq otağı, qonaq otağı, səyahət mövzulu interyerlər üçün ideal.',
    gift:'Səyahətsevərlərə, Türkiyə həvəslilərə mükəmməl hədiyyə.',
    metaDesc:'Kapadokya hava balonları mənzərə tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'011', code:'VB-GAL-011', alt:'011',
    title:'İstanbul Tramvayı – Taksim Küçəsi',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'100×70 sm', material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul qırmızı tramvayı Taksim küçəsində – qızıl parıltılı, vintaj üslubda 100×70 sm divar tablosu.',
    emoDesc:'Qırmızı tramvay, köhnə daş binalar, qızıl parıltı – İstanbulun ruhunu evinizdəki divara köçürən əsər.',
    interior:'Qonaq otağı, restoran, kafe, otel. Böyük divanlara ideal ölçü.',
    gift:'İstanbul sevgisi olan hər kəsə, yeni evə köçənlərə əla hədiyyə.',
    metaDesc:'İstanbul tramvay Taksim tablo 100×70 sm parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'012', code:'VB-GAL-012', alt:'012',
    title:'Ağ Geyimli Qız – Arxa Silüet',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Ağ baliklə geyimli qadın arxa silueti – portağal-mavi fon, parıltılı tekstura. Müasir portret tablo.',
    emoDesc:'Arxası bizə dönmüş – gedirmi, yoxsa qayıdırmı? Bir an donmuş, cavabsız bir hiss. Emosional gücü yüksək əsər.',
    interior:'Yataq otağı, qadın kabinetləri, butik interyerlər. Açıq rəngli divanlarda əsər.',
    gift:'Estetik zövqlü qadınlara, balerin sevərlərə, toy hədiyyəsi üçün ideal.',
    metaDesc:'Ağ geyimli qız arxa portret tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'013', code:'VB-GAL-013', alt:'013',
    title:'Ağ-Mavi Papatya Buketi',
    artist:'Leonid Afremov üslubu', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Ağ və mavi papatya buketi şüşə vazada – Leonid Afremov üslubunda rəngarəng fon, enerjili fırça zərbələri.',
    emoDesc:'Güllər solur, amma bu tablo əbədi qalır. Tazəlik, sevinc, bahar enerjisi – hər gün evə çiçək gətirir.',
    interior:'Mətbəx, yemək otağı, koridor, hamam. İstənilən interyerə uyğun gəlir.',
    gift:'Doğum günü, Qadınlar Günü, ana günü üçün mükəmməl çiçək tablosu.',
    metaDesc:'Ağ mavi papatya buketi tablo Afremov üslubu. Divar tablosu Bakı.'
  },
  {
    num:'014', code:'VB-GAL-014', alt:'014',
    title:'Qız Qalası – Gecə Fırtınası',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul Qız Qalası dramatik bulud altında, gəmi, parıltılı ulduzlu səma. Gecə mənzərəsi tablo.',
    emoDesc:'Fırtınalı göy, dənizin coşğusu, qüllənin əzəməti – dramatik gücü ilə insanı heyran edən tablo.',
    interior:'Qonaq otağı, ofis, restoran. Tünd divanlarda möhtəşəm kontrast.',
    gift:'Güclü estetik hissi olan insanlara, dəniz sevərlərə ideal hədiyyə.',
    metaDesc:'Qız Qalası gecə fırtına tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'015', code:'VB-GAL-015', alt:'015',
    title:'Bənövşəyi Küçə – Çiçəkli Cənnət',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Bənövşəyi çiçəklərlə örtülü Aralıq dənizi küçəsi, daş evlər, vintaj avtomobil. Parıltılı divar tablosu.',
    emoDesc:'Yay istiləri, çiçəklərin ətrinin hiss edildiyi bir an. Bu tablo qışın ortasında belə evə bahar gətirir.',
    interior:'Qonaq otağı, yemək otağı, hamam. Rəngli, şən interyerlər üçün mükəmməl.',
    gift:'Çiçək sevənlərə, baharı hədiyyə etmək istəyənlərə – ən rəngarəng seçim.',
    metaDesc:'Bənövşəyi çiçəkli küçə tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'016', code:'VB-GAL-016', alt:'016',
    title:'Turna Quşu – Gün Batımı Silueti',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Narıncı-sarı gün batımında turna quşunun qara silueti, uçan quşlar. Minimalist parıltılı divar tablosu.',
    emoDesc:'Günün son ışığında tək duran quş – azadlıq, sakitlik, heyranlıq hissi. Sadə amma dərin bir əsər.',
    interior:'Yataq otağı, meditasiya otağı, koridor. Narıncı-sarı interyerlərə əla uyğun.',
    gift:'Sakit, düşüncəli insanlara, təbiət sevərlərə uyğun hədiyyə.',
    metaDesc:'Turna gün batımı siluet tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'017', code:'VB-GAL-017', alt:'017',
    title:'Leylək Ailəsi – Yuva Sevinci',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Leyləklər yuvada – ana, ata və balacalar. Ailə sevgisini simvolizə edən parıltılı divar tablosu.',
    emoDesc:'Yuvanın isti qoynunda ailə sevgisi. Ata gəlir, balalar sevinir – evə hər baxanda ürək riqqətlənir.',
    interior:'Qonaq otağı, uşaq otağı, ailə otağı. İsti ton interyerlərə uyğun.',
    gift:'Yeni cütlüklərə, toy hədiyyəsi, körpə dünyaya gəldiyi ailələrə – mənamlı simvolik hədiyyə.',
    metaDesc:'Leylək ailəsi yuva tablo parıltılı. Hədiyyəlik divar tablosu Bakı.'
  },
  {
    num:'018', code:'VB-GAL-018', alt:'018',
    title:'Flaminqolar – Üç Gözəl',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Üç flaminqo – narıncı, ağ-gümüşü tonlarda su kənarında. Parıltılı teksturlu müasir divar tablosu.',
    emoDesc:'Zəriflik, estetika, harmoniya – bu üç flaminqo evinizə bir elegantlıq gətirir ki, sözlə ifadə etmək çətin.',
    interior:'Qonaq otağı, yataq otağı, spa, butik. Pastel rəngli interyerlərə əla uyğun.',
    gift:'Zərif qadınlara, modern ev sahiblərinə – ən estetik hədiyyə seçimlərdən biri.',
    metaDesc:'Flaminqo üç quş tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'019', code:'VB-GAL-019', alt:'019',
    title:'Boğaz Körpüsü – Gecə Panoraması',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul Boğaz körpüsü gecə işıqları panoraması – qızılı şəhər silüeti, parıltılı tekstura.',
    emoDesc:'Gecənin qaranlığında parlayan körpü – iki qitəni birləşdirən əzəmət. Bu tablo evinizi genişləndirir.',
    interior:'Qonaq otağı, yemək otağı, ofis. Uzun, yatay divanlara ideal panoramik ölçü.',
    gift:'Şəhər həyatını sevənlərə, İstanbullulara, müasir interyersevərlərə ideal hədiyyə.',
    metaDesc:'Boğaz körpüsü gecə panorama tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'020', code:'VB-GAL-020', alt:'020',
    title:'Sarı Həyət – Rəngli Şəhər Küncü',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Sarı binalar, rəngli pəncərələr, çiçəkli balkonlar, sarı VW avtomobil – şən Aralıq dənizi həyəti tablosu.',
    emoDesc:'Həyatın rəngarəng tərəfi – sarı, yaşıl, bənövşəyi. Bu tablo baxan hər kəsi təbəssüm etdirir.',
    interior:'Qonaq otağı, uşaq otağı, mətbəx. Açıq, şən atmosferli interyerlərə mükəmməl.',
    gift:'Optimist, həyat sevən insanlara, yeni evə köçənlərə ən rəngli hədiyyə.',
    metaDesc:'Sarı həyət rəngli küçə tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'021', code:'VB-GAL-021', alt:'021',
    title:'Nağıl Kotteci – Çiçəkli Bağ',
    artist:'Thomas Kinkade üslubu', cat:'menzere',
    size:'100×70 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Işıqlı pəncərəli daş kottec, çiçəkli rəngarəng bağ, daş yol, köhnə quyu. 100×70 sm parıltılı tablo.',
    emoDesc:'Hər pəncərəsindən isti bir işıq süzülür bu nağıl evinə. Sanki içəridə sevdiklərin sizi gözləyir. Ürəyi ısıdan tablo.',
    interior:'Qonaq otağı, yataq otağı, uşaq otağı. İsti, romantik interyerlər üçün ideal.',
    gift:'Yeni evə köçənlərə, ailə həyatına başlayanlara – yuva sevgisini hədiyyə et.',
    metaDesc:'Nağıl kottec çiçəkli bağ tablo 100×70 sm. Parıltılı divar tablosu Bakı.'
  },
  {
    num:'022', code:'VB-GAL-022', alt:'022',
    title:'Mavi Ağac – Boz Dünyada Rəng',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Boz-ağ mənzərədə tək mavi parıltılı ağac, uzaqda kiçik ev. Kontrast effektli müasir divar tablosu.',
    emoDesc:'Bütün dünya boz olsa belə, o ağac mavi qalır. Ümid, fərqlilik, güc – bu tablo hər baxanda ilham verir.',
    interior:'Müasir, minimalist interyerlər. Ağ və boz divanlara dramatik kontrast effekti.',
    gift:'İlhamlı, həyatsevər insanlara – fərqli olmağı hədiyyə et.',
    metaDesc:'Mavi ağac boz mənzərə tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'023', code:'VB-GAL-023', alt:'023',
    title:'Qış Yolu – Ağ Meşə Panoraması',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Yarpaqsız ağaclar arasında uzanan düz yol – ağ-boz qış mənzərəsi, geniş panoramik format, parıltılı tekstura.',
    emoDesc:'Yolun sonu görünmür, amma ağaclar hər iki tərəfdən mühafizə edir. Sakitlik, sükut, meditasiya hissi.',
    interior:'Qonaq otağı, işgüzar ofis. Uzun, yatay divanlara uyğun panoramik ölçü.',
    gift:'Düşüncəli, introspektiv insanlara – sükut hədiyyə et.',
    metaDesc:'Qış yolu ağ meşə panorama tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'024', code:'VB-GAL-024', alt:'024',
    title:'Qızıl Baxış – Qara Gözəl Portreti',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qara fonda tünd dərili qadın üzü, qızıl parıltılı dırnaqlar, kaş və göz makiyajı. Güclü müasir portret tablosu.',
    emoDesc:'Əlləri arasından baxan o gözlər – müəmmalı, güclü, əzəmətli. Qızılın qara ilə dansı. Hər baxışda yeni bir hiss.',
    interior:'Müasir, glamur interyerlər, butik, restoran. Tünd divanlarda dramatik effekt.',
    gift:'Güclü, müstəqil, özünə inanan qadınlara ideal hədiyyə.',
    metaDesc:'Qızıl baxış portret tablo parıltılı. Müasir divar tablosu Bakı.'
  },
  {
    num:'025', code:'VB-GAL-025', alt:'025',
    title:'London Telefon Kabinəsi – Qırmızı Simvol',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qara-ağ London küçəsində ikonik qırmızı telefon kabinəsi – gümüş parıltılı kənarlı divar tablosu.',
    emoDesc:'Bütün dünya boz, yalnız o kabinə qırmızı. London əfsanəsinin simvolu – klassik, zamansız, unudulmaz.',
    interior:'Müasir, ingilis üslublu, ofis, kafe interyeri. Ağ divanlarda möhtəşəm görünür.',
    gift:'Londonu, Avropanı, ingilis mədəniyyətini sevənlərə ideal hədiyyə.',
    metaDesc:'London telefon kabinəsi qırmızı tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'026', code:'VB-GAL-026', alt:'026',
    title:'Kəbə – Qızıl Əzəmət',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Məkkə Kəbəsi dramatik qızıl-qara göy altında, həcc izdihamı. Parıltılı İslami divar tablosu.',
    emoDesc:'Ruhun titrəyən o an – minlərin bir araya toplandığı müqəddəs məkan. Bu tablo evə ilahi bir atmosfer gətirir.',
    interior:'Qonaq otağı, namaz otağı, dini məkanlara uyğun. İslami dekor üçün ən təsirli seçim.',
    gift:'Həcc, Ramazan, toy, bayram hədiyyəsi – dindar insanlara ən mənalı hədiyyə.',
    metaDesc:'Kəbə qızıl əzəmət İslami tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'027', code:'VB-GAL-027', alt:'027',
    title:'Qız Qalası – Bənövşəyi Gecə Yolu',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul Qız Qalası bənövşəyi-mavi ulduzlu gecədə, fənərli körpü yolu, atəkəs, vintaj avtomobil. Parıltılı tablo.',
    emoDesc:'Gecənin ən gözəl saatı – fənərlərin işığında bir körpü, uzaqda Qız Qalası. Romantizmin zirvəsi.',
    interior:'Qonaq otağı, yataq otağı, romantik restoran. Tünd, romantik interyerlərə mükəmməl.',
    gift:'Cütlüklərə, İstanbul sevgisi olan insanlara – romantizmi hədiyyə et.',
    metaDesc:'Qız Qalası bənövşəyi gecə yolu tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'028', code:'VB-GAL-028', alt:'028',
    title:'Məscidülhəram – Gecə Panoraması',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Məkkə Məscidülhəram gecə mavi ulduzlu göy altında havadan panorama – geniş format, parıltılı İslami tablo.',
    emoDesc:'Min il ərzində minarələrin səsi göylərə yüksəlmiş bu müqəddəs məkən. Hər baxışda huşunu alır insanı.',
    interior:'Qonaq otağı, namaz otağı, dini müəssisələr. İslami ev dekorunun tacı.',
    gift:'Həcc yolunda olan ya da getmiş insanlara, Ramazan hədiyyəsi – ən müqəddəs hədiyyə.',
    metaDesc:'Məscidülhəram gecə panorama İslami tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'029', code:'VB-GAL-029', alt:'029',
    title:'Qırmızı Yarpaqlar – Romantik Cüt',
    artist:'Leonid Afremov üslubu', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qırmızı-çəhrayı yarpaqlar arasında uzaqlaşan cüt silueti, parlaq islaq yol. Afremov üslubu parıltılı tablo.',
    emoDesc:'Həyatın ən gözəl anlarından biri – sevdiyinlə bir meşə yolunda addımlamaq. Bu tablo o hissi əbədiləşdirir.',
    interior:'Yataq otağı, qonaq otağı. Qırmızı-bordo tonlu interyerlərə mükəmməl uyğun.',
    gift:'Cütlüklərə, toy ildönümü hədiyyəsi – sevgini divarınıza asın.',
    metaDesc:'Qırmızı yarpaqlar romantik cüt tablo Afremov. Divar tablosu Bakı.'
  },
  {
    num:'030', code:'VB-GAL-030', alt:'030',
    title:'Həyat Ağacı – Qızıl Budaqlar',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'80×50 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Mavi fonda qızıl parıltılı həyat ağacı, quşlar, dalğavari qızıl zəmin. 80×50 sm parıltılı tablo.',
    emoDesc:'Kökləri yerə, budaqları göyə – həyatın simvolu. Evə bərəkət, sağlamlıq, uzunömürlülük gətirir inanışa görə.',
    interior:'Qonaq otağı, yataq otağı, giriş hollu. Mavi aksan rəngi olan interyerlərə ideal.',
    gift:'Yeni ev, toy, doğum günü – «həyat ağacı» hər mərasim üçün anlamlı hədiyyədir.',
    metaDesc:'Həyat ağacı qızıl budaqlar tablo 80×50 sm. Parıltılı divar tablosu Bakı.'
  },
  {
    num:'031', code:'VB-GAL-031', alt:'031',
    title:'Mavi Gecə – Uçan Maral',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'80×50 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Mavi gecə mənzərəsində ağ maral silueti, dağ əksi, quşlar, qızıl dalğa naxışı. 80×50 sm parıltılı tablo.',
    emoDesc:'Gecənin azadlığında sıçrayan maral – heç bir sınır tanımır. Bu tablo baxan hərə azadlıq hissi verir.',
    interior:'Yataq otağı, qonaq otağı. Mavi-gümüş tonlu interyerlərə mükəmməl uyğun.',
    gift:'Azadlığı sevənlərə, gənclərə, yeni başlanğıclar üçün – anlamlı hədiyyə.',
    metaDesc:'Mavi gecə uçan maral tablo 80×50 sm. Parıltılı divar tablosu Bakı.'
  },
  {
    num:'032', code:'VB-GAL-032', alt:'032',
    title:'Rəngarəng Maral Silueti – Şəfəq',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'80×50 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Narıncı-yaşıl-qırmızı şəfəq fonunda maral silueti, ağac, uçan quş. 80×50 sm parıltılı tablo.',
    emoDesc:'Rəngarəng şəfəqdə tək duran maral – cəsarət, azadlıq, güc. Hər sabah divarınızdan sizə enerji verir.',
    interior:'Qonaq otağı, uşaq otağı, oyun otağı. Açıq, enerjili interyerlər üçün ideal.',
    gift:'Enerji dolu, həyatsevər insanlara – rəngarəng bir hədiyyə.',
    metaDesc:'Rəngarəng maral siluet tablo 80×50 sm. Parıltılı divar tablosu Bakı.'
  },
  {
    num:'033', code:'VB-GAL-033', alt:'033',
    title:'Rəngarəng Ərəb Xəttatlığı – Allah',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Pembe-mavi-qırmızı fonda rəngarəng ərəb xəttatlığı – Allah adı, inci bəzəkli, əl işi İslami tablo.',
    emoDesc:'Cəlalət və gözəlliyin birliyi. Rəng var, həyat var, iman var. Evinizə bərəkət gətirən müasir İslami sənət.',
    interior:'Qonaq otağı, namaz otağı. Rəngli, dinamik interyerlərə uyğun müasir İslami dekor.',
    gift:'Müasir zövqlü dindar insanlara – ənənə ilə müasirliyin hədiyyəsi.',
    metaDesc:'Rəngarəng ərəb xəttatlığı Allah tablo əl işi. Divar tablosu Bakı.'
  },
  {
    num:'034', code:'VB-GAL-034', alt:'034',
    title:'Fənərbaxça – Stadion Əzəməti',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Fənərbaxça Spor Kulübü 1907 əzəmətli stadion görüntüsü – klubun simvolu, fan tablosu.',
    emoDesc:'Sarı-laciverdin eşqi – bu tablo otağını bir tribünaya çevirir. Hər baxanda o enerji canlanır.',
    interior:'Uşaq otağı, gənclik otağı, futbol sevərlərin kabineti.',
    gift:'Fənərbaxça fanlarına, futbol sevən gənclərə ən uyğun hədiyyə.',
    metaDesc:'Fənərbaxça stadion tablo fan hədiyyəsi. Divar tablosu Bakı.'
  },
  {
    num:'035', code:'VB-GAL-035', alt:'035',
    title:'Od Parkı – Gecə Neon Ağacları',
    artist:'Leonid Afremov üslubu', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Qırmızı-narıncı neon ağaclar arasında park yolu, uzaqda yalnız fiqur. Afremov üslubunda alovlu tablo.',
    emoDesc:'Sanki ağaclar yandı, lakin tək insan addımlayır bu alov arasında. Dramatik, güclü, unudulmaz bir əsər.',
    interior:'Qonaq otağı, restoran, ofis. Qırmızı-narıncı aksan tonlu interyerlərə ideal.',
    gift:'Enerjili, güclü ruha sahib insanlara – dramı hədiyyə et.',
    metaDesc:'Od parkı neon ağaclar Afremov tablo. Divar tablosu Bakı.'
  },
  {
    num:'036', code:'VB-GAL-036', alt:'036',
    title:'Mədinə – Peyğəmbər Məscidi Gecə',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Mədinə Peyğəmbər Məscidi gecə mavi ulduzlu göy altında – işıqlı minarələr, parıltılı İslami tablo.',
    emoDesc:'Minarələr gecəni aydınladır, ulduzlar isə səmada rəqs edir. Bu tablo evə ruhani hüzur gətirir.',
    interior:'Qonaq otağı, namaz otağı, dini məkanlara uyğun. İslami ev dekorunun ən gözəl nümunəsi.',
    gift:'Həcc-ümrə ziyarəti edənlərə, Ramazan hədiyyəsi, dindar dostlara – müqəddəs xatirə.',
    metaDesc:'Mədinə Peyğəmbər Məscidi gecə tablo parıltılı. İslami divar tablosu Bakı.'
  },
  {
    num:'037', code:'VB-GAL-037', alt:'037',
    title:'Hollandiya Buket – Klassik Natürmort',
    artist:'Ambrosius Bosschaert üslubu', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Tünd fonda klassik Hollandiya natürmort – lalə, gül, mavi çiçəklər, kəpənək, üzüm. XVII əsr üslubunda tablo.',
    emoDesc:'Çiçəklər ölür, amma sənətin içindəkilər əbədi qalır. Hər detala baxanda yeni bir şey kəşf edirsən.',
    interior:'Klassik, avropalı üslublu interyerlər, yemək otağı, konservatoriya.',
    gift:'İncəsənət bilicisi olanlara, klassik zövqə sahib insanlara – sənətin hədiyyəsi.',
    metaDesc:'Hollandiya buket klassik natürmort tablo. Divar tablosu Bakı.'
  },
  {
    num:'038', code:'VB-GAL-038', alt:'038',
    title:'Rəngarəng Mandala Pişiklər',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qara fonda iki rəngarəng mandala üslubunda pişik – mavi, narıncı, bənövşəyi nöqtə naxışları, parıltılı tablo.',
    emoDesc:'Şən, oynaqlı, rəngarəng – bu pişiklər otağa gülüş gətirir. Hər baxanda insanı təbəssüm etdirir.',
    interior:'Uşaq otağı, oyun otağı, gənc interyerlər. Rəngli, dinamik dekora uyğun.',
    gift:'Pişik sevənlərə, uşaqlara, şən insanlara – rəngarəng bir sürpriz.',
    metaDesc:'Rəngarəng mandala pişiklər tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'039', code:'VB-GAL-039', alt:'039',
    title:'Sarı Payız - Meşə Yolu',
    artist:'Leonid Afremov üslubu', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Sarı-narıncı payız ağacları arasında günəşə doğru uzanan yol, tənha fiqur. Afremov üslubunda tablo.',
    emoDesc:'Günəşə doğru addımlamaq – hər gün evdən çıxanda bu tablo sizi ilhamlandırır. Ümid, istilik, həyat.',
    interior:'Qonaq otağı, yemək otağı. Sarı-narıncı tonlu interyerlərə əla uyğun.',
    gift:'Optimist, həyatı sevən insanlara – işığı hədiyyə et.',
    metaDesc:'Sarı meşə yolu günəş ışığı Afremov tablo. Divar tablosu Bakı.'
  },
   {
    num:'040', code:'VB-GAL-040', alt:'040',
    title:'Payız Gecəsi – Ev, Göl, Ay',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Dolunay işığında payız ağacları arasında daş ev, sakit göl, kiçik qayıq. Romantik gecə mənzərəsi tablosu.',
    emoDesc:'Dolunay hər şeyi gümüşə boyayır – qırmızı yarpaqlar, sakin göl, pəncərədən süzülən sarı işıq. Ürəyi ısıdan mənzərə.',
    interior:'Qonaq otağı, yataq otağı. Tünd, romantik dekorlu interyerlərə mükəmməl uyğun.',
    gift:'Sakin, təbiətsevər insanlara; ev açımına – gecənin hüzurunu hədiyyə et.',
    metaDesc:'Payız gecəsi ev göl ay tablo. Divar tablosu Bakı – VəBo Gallery.'
  },
  {
    num:'041', code:'VB-GAL-041', alt:'041',
    title:'Çəhrayı Çiçəkli Tünel – Bahar Yolu',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Çəhrayı-pembe çiçəkli ağaclar arasında uzanan işıqlı yol – Yapon sakura üslubunda parıltılı tablo.',
    emoDesc:'Çiçəklər tünel yaratmış, ortada sonsuz bir işıq. Ümid, bahar, yenilənmə. Bu tablo evə sevinc gətirir.',
    interior:'Yataq otağı, qız otağı, koridor. Çəhrayı-bej tonlu interyerlərə ideal.',
    gift:'Qadınlara, uşaqlara, Qadınlar Günü hədiyyəsi – baharın özünü hədiyyə et.',
    metaDesc:'Çəhrayı çiçəkli tünel bahar yolu tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'042', code:'VB-GAL-042', alt:'042',
    title:'Kəbə – Gecə Qalaktikası',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Kəbə ətrafında izdiham, mavi ulduzlu qalaktika göy, parıltılı tekstura. İslami divar tablosu.',
    emoDesc:'Milyonların ürəyi bir yerdə döyünür. Ulduzların altında böyük dua – bu tablo ruhani bir hüzur gətirir.',
    interior:'Qonaq otağı, namaz otağı. İslami dekor üçün ən möhtəşəm seçim.',
    gift:'Həcc-ümrə ziyarətçilərinə, dindar insanlara – müqəddəs xatirə hədiyyəsi.',
    metaDesc:'Kəbə gecə qalaktika İslami tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'043', code:'VB-GAL-043', alt:'043',
    title:'Paris – Eyfel Qızıl Şəfəq',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Eyfel qülləsi qızıl-mis şəfəq göydə, Sena çayı, körpü, mavi parıltılı su. Romantik Paris gecəsi tablosu.',
    emoDesc:'Paris elə bir şəhərdir ki, hətta gecə şəfəqinin altında belə fərqlidir. Qızıl parıltı, mavi su – romantizmin şah əsəri.',
    interior:'Qonaq otağı, yataq otağı, restoran. Qızıl-bej aksan tonlu interyerlərə ideal.',
    gift:'Paris sevərlərə, romantik cütlüklərə, toy ildönümü hədiyyəsi kimi mükəmməl.',
    metaDesc:'Paris Eyfel qızıl şəfəq tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'044', code:'VB-GAL-044', alt:'044',
    title:'Good Morning – Çiçək və Saat',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Bənövşəyi limon çiçəkləri, çəhrayı köhnə saat, «Good Morning» yazısı. Şən sabah mövzulu tablo.',
    emoDesc:'Hər sabah divardan sizi selamlayan bu tablo – günə pozitiv başlamaq üçün ən yaxşı xatırlatma.',
    interior:'Mətbəx, yemək otağı, giriş hollu. Açıq, şən atmosferli interyerlərə mükəmməl.',
    gift:'Optimist, həyatsevər insanlara; yeni evə köçənlərə – şən sabahlar hədiyyə et.',
    metaDesc:'Good Morning çiçək saat tablo. Divar tablosu Bakı – VəBo Gallery.'
  },
  {
    num:'045', code:'VB-GAL-045', alt:'045',
    title:'Ərəb Atı Ağ – Şərq Naxışlı',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Mavi-qızıl Şərq naxışlı fonda ağ ərəb atının portret tablosu. Yaldızlı bəzəkli, parıltılı tekstura.',
    emoDesc:'Yalı yellənir, gözləri dərindir – bu at cəsarətin, azadlığın simvoludur. Şərq naxışları isə köklərə işarədir.',
    interior:'Qonaq otağı, kabinet, ən görkəmli divar üçün. Mavi-qızıl tonlu interyerlərə əla.',
    gift:'Ata sevər insanlara, cəsarəti sevənlərə, hədiyyəlik lüks əsər.',
    metaDesc:'Ərəb atı Şərq naxışlı mavi tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'046', code:'VB-GAL-046', alt:'046',
    title:'Çiçək Başlıqlı Qadın – Gümüşü',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Başında nəhəng ağ-gümüşü şəkofələr olan zərif qadın profil portreti. Parıltılı müasir tablo.',
    emoDesc:'Çiçəklər üzünü gizlətmişdir – amma gözəllik hər ləçəkdə görünür. Müəmmalı, zərif, unudulmaz bir portret.',
    interior:'Yataq otağı, qadın kabinetləri, butik. Bej-gümüşü interyerlərə mükəmməl.',
    gift:'Zərif qadınlara, estetik zövqlü insanlara – müasir incəsənətin hədiyyəsi.',
    metaDesc:'Çiçək başlıqlı qadın gümüşü portret tablo. Divar tablosu Bakı.'
  },
  {
    num:'047', code:'VB-GAL-047', alt:'047',
    title:'Qırmızı Şəmsiyəli Qız – İki Köpəklə',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qırmızı şemsiyəli moda qız, iki köpəklə paltarda yürüyüş. Qızıl parıltılı çərçivəli müasir tablo.',
    emoDesc:'Küləkli gündə belə stillidir, inamlıdır. Bu tablo enerjini, əzəmətini divarınıza köçürür.',
    interior:'Qadın kabinetləri, geyim mağazaları, müasir qonaq otaqları. Ağ-qızıl interyerlərə ideal.',
    gift:'Moda sevər qadınlara, şən ruha sahib insanlara – üslubun hədiyyəsi.',
    metaDesc:'Qırmızı şemsiyəli qız köpəklər tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'048', code:'VB-GAL-048', alt:'048',
    title:'Çiçək Başlıqlı Qadın – Gümüşü (Böyük)',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Başında nəhəng ağ-mavi parıltılı şəkofələr olan qadın profil portreti. Böyük format, parıltılı müasir tablo.',
    emoDesc:'Daha böyük formatta – daha güclü təsir. Çiçəklərin arxasında gizlənmiş zəriflik. Divarın ən görkəmli nöqtəsinə layiq.',
    interior:'Qonaq otağı, ana divar. Neytral, minimalist interyerlərə dramatik effekt.',
    gift:'Estetik zövqlü qadınlara lüks hədiyyə, toy hədiyyəsi kimi mükəmməl.',
    metaDesc:'Çiçək başlıqlı qadın böyük format tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'049', code:'VB-GAL-049', alt:'049',
    title:'Ayətəlkürsü – Sarı Qızıl Damla',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Sarı-qızıl fonda yaşıl parıltılı xəttatlıq ilə Ayətəlkürsü. Gümüş parıltılı kənarlı İslami tablo.',
    emoDesc:'Qızıl fonun üzərindəki yaşıl hərflər – bu Ayətəlkürsü evi hər növ bəladan qoruyur inanışa görə. Evə nur gətirir.',
    interior:'Qonaq otağı, namaz otağı. Sarı-qızıl tonlu interyerlərə ideal İslami dekor.',
    gift:'Ev açımı, toy, doğum günü – dindar insanlara ən xeyirli hədiyyə.',
    metaDesc:'Ayətəlkürsü sarı qızıl İslami tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'050', code:'VB-GAL-050', alt:'050',
    title:'Ayətəlkürsü – Yaşıl Qızıl Damla',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Yaşıl-boz fonda qızıl-firuzəyi parıltılı xəttatlıq ilə Ayətəlkürsü. Qızıl kənarlı İslami tablo.',
    emoDesc:'Yaşıl – cənnətin rəngi. Qızıl xərəkərlər isə gözü oxşayır, ruhu sakitləşdirir. Evə bərəkət gətirir.',
    interior:'Qonaq otağı, namaz otağı. Yaşıl-qızıl aksan tonlu interyerlərə ideal İslami dekor.',
    gift:'Ev açımı, toy, Ramazan hədiyyəsi – xeyirli İslami hədiyyə.',
    metaDesc:'Ayətəlkürsü yaşıl qızıl İslami tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'051', code:'VB-GAL-051', alt:'051',
    title:'Üç Ağ At – Rəngarəng Şəfəq',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'Rəngarəng şəfəq (qırmızı-sarı-mavi) fonunda üç ağ at koşur. 100×70 sm kadife tablo.',
    emoDesc:'Azadlığın üç simvolu – dağılmaz güc, sonsuz enerji. Rəngarəng şəfəq fonunda at – heç bir divardan daha güclü görüntü.',
    interior:'Qonaq otağı, kabinet, işgüzar ofis. Rəngarəng, enerjili interyerlərə mükəmməl.',
    gift:'Güclü, enerjili insanlara, at sevərlərə – azadlığı hədiyyə et.',
    metaDesc:'Üç ağ at rəngarəng şəfəq 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },
  {
    num:'052', code:'VB-GAL-052', alt:'052',
    title:'İki Ağ At – Qızıl Çöl',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'Qızıl-sarı çöl fonunda iki ağ at qoşur. 100×70 sm kadife tablo.',
    emoDesc:'Qızıl toz arasında qaçan iki at – güc, harmoniya, birlik. Bu tablo otağa müstəsna bir enerji verir.',
    interior:'Qonaq otağı, işgüzar kabinet. Qızıl-bej tonlu interyerlərə əla.',
    gift:'At sevərlərə, güclü insanlara, iş uğurunu simvolizə edən hədiyyə.',
    metaDesc:'İki ağ at qızıl çöl 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },
  {
    num:'053', code:'VB-GAL-053', alt:'053',
    title:'Napoleon At Üstündə – Tarixi Döyüş',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'XVII–XVIII əsr üslubunda ağ at üstündə qırmızı paltarlı general, arxa planda döyüş. 100×70 sm kadife tablo.',
    emoDesc:'Tarihin dönüm nöqtəsindəki o əzəmətli an – general, at, döyüşün tüstüsü. Güc və qürur dolu tarixi tablo.',
    interior:'Kabinet, ofis, kişi otağı. Klassik, tarixi dekorlu interyerlərə ideal.',
    gift:'Tarix sevər, lider ruha sahib insanlara – qüruru hədiyyə et.',
    metaDesc:'General at üstündə tarixi döyüş 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },
  {
    num:'054', code:'VB-GAL-054', alt:'054',
    title:'Şəki Xan Sarayı – Milli İrs',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Şəki Xan Sarayının rəngarəng şəbəkə pəncərəli, ornamentli fasadı. 70×50 sm kadife Azərbaycan milli irsi tablosu.',
    emoDesc:'Azərbaycanın şah əsəri – Şəki Xan Sarayı. Hər ornament, hər rəng bu xalqın böyüklüyünü danışır. Milli qürur tablosu.',
    interior:'Qonaq otağı, ofis, otel lobbisi. Şərq-Azərbaycan üslublu interyerlərə mükəmməl.',
    gift:'Azərbaycanlılara, vətən sevgisi olanlara, xarici qonaqlara – milli hədiyyə.',
    metaDesc:'Şəki Xan Sarayı Azərbaycan milli tablo 70×50 sm. Kadife divar tablosu Bakı.'
  },
  {
    num:'055', code:'VB-GAL-055', alt:'055',
    title:'Boğaz Körpüsü – Qızılı Şəfəq',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'İstanbul Boğaz körpüsü qızıl-mis şəfəq fonunda, gecə işıqları. 100×70 sm kadife divar tablosu.',
    emoDesc:'Gün batımının son işığında köprünün silueti – qızıl-qırmızı göy altında İstanbul. Hər baxışda nəfəs kəsilir.',
    interior:'Qonaq otağı, yemək otağı. Qızıl-mis tonlu interyerlərə mükəmməl panoramik tablo.',
    gift:'İstanbul sevgisi olan hər kəsə, yeni evə köçənlərə – möhtəşəm hədiyyə.',
    metaDesc:'Boğaz körpüsü qızılı şəfəq 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },
  {
    num:'056', code:'VB-GAL-056', alt:'056',
    title:'Dolomit Gölü – Dağ Macərası',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'100×70 sm', material:'Əl işi',
    seoDesc:'İtaliya Dolomit dağları önündə firuzəyi göl, taxta körpü, kiçik qayıq. 100×70 sm tablo.',
    emoDesc:'Havanın içindəki o sükut – dağların böyüklüyü, suyun saflığı. Bu tablo hər baxışda kəşfə çağırır.',
    interior:'Qonaq otağı, kabinet. Mavi-firuzəyi aksan tonlu interyerlərə ideal.',
    gift:'Səyahətsevərlərə, təbiətsevərlərə – dünyanın gözəlliyini hədiyyə et.',
    metaDesc:'Dolomit gölü dağ mənzərəsi 100×70 sm tablo. Divar tablosu Bakı.'
  },
  {
    num:'057', code:'VB-GAL-057', alt:'057',
    title:'Payız Parkı – Çətirli Cüt',
    artist:'Leonid Afremov üslubu', cat:'menzere',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'Sarı-narıncı payız parkında çətirli cüt silueti, sarı skamyalar, fənərlər. Afremov üslubunda 100×70 sm kadife tablo.',
    emoDesc:'Payız yağışında belə birlikdədirlər. Fənərlərin isti işığı, skamyalar, sarı yarpaqlar – romantizmin ən güclü tablosu.',
    interior:'Qonaq otağı, yataq otağı. Qızıl-sarı tonlu interyerlərə mükəmməl.',
    gift:'Cütlüklərə, toy ildönümü, sevgililer günü – sevgini hədiyyə et.',
    metaDesc:'Payız parkı çətirli cüt Afremov 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },
  {
    num:'058', code:'VB-GAL-058', alt:'058',
    title:'Mədinə – Peyğəmbər Məscidi Gündüz',
    artist:'Naməlum rəssam', cat:'hediyye',
    size:'70×50 sm', material:'Kadife (Mexmer)',
    seoDesc:'Mədinə Peyğəmbər Məscidi gündüz mavi göy altında havadan görüntü. 70×50 sm kadife İslami tablo.',
    emoDesc:'İslamın ikinci müqəddəs şəhəri. Ağ minarələr göyə yüksəlir, etraf isə sakit nur içindədir.',
    interior:'Qonaq otağı, namaz otağı, dini məkanlara uyğun. İslami dekorun klassik seçimi.',
    gift:'Həcc-ümrə edənlərə, dindar insanlara, Ramazan hədiyyəsi.',
    metaDesc:'Mədinə Peyğəmbər Məscidi gündüz 70×50 sm kadife tablo. İslami divar tablosu Bakı.'
  },
  {
    num:'059', code:'VB-GAL-059', alt:'059',
    title:'Mavi Gözəl – Brilyant Dodaqlar',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Mavi fonda gözləri yummuş qadın profili – mavi parıltılı göz kölgəsi, brilyant dodaqlar, kristal bəzəklər.',
    emoDesc:'Gözləri yummuş lakin hər şeyi hiss edən bir gözəl. Brilyant dodaqlar, mavi parıltı – lüksün tərifi bu tablodan başlayır.',
    interior:'Yataq otağı, qadın kabinetləri, spa, butik. Mavi-gümüşü interyerlərə ideal.',
    gift:'Zərif, müasir qadınlara – lüksü hədiyyə et.',
    metaDesc:'Mavi gözəl brilyant dodaqlar portret tablo parıltılı. Divar tablosu Bakı.'
  }
];

/* ── Generate full artwork list ─────────────────────── */
function generateArtworks() {
  const realNums = new Set(ARTWORKS_DATA.map(a => a.num));
  const placeholders = [];
  for (let i = 1; i <= CONFIG.totalImages; i++) {
    const num = String(i).padStart(3, '0');
    if (!realNums.has(num)) {
      placeholders.push({
        num, code:`VB-GAL-${num}`, alt:num,
        title:'', artist:'Naməlum rəssam', cat:'',
        size:'Ölçü soruşun', material:'',
        seoDesc:'', emoDesc:'', interior:'', gift:'', metaDesc:''
      });
    }
  }
  const all = [...ARTWORKS_DATA, ...placeholders];
  all.sort((a, b) => a.num.localeCompare(b.num));
  return all;
}

const ALL_ARTWORKS = generateArtworks();

/* ── State ──────────────────────────────────────────── */
let currentFilter = 'all';
let searchQuery   = '';
let visibleCount  = CONFIG.pageSize;
let modalIndex    = 0;
let filteredItems = [];

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
function initGallery() { applyFilter(); }

function applyFilter() {
  filteredItems = ALL_ARTWORKS.filter(a => {
    const showInCat = currentFilter === 'all' ? true : a.cat === currentFilter;
    const q = searchQuery.toLowerCase().trim();
    const searchOk = !q ||
      a.title.toLowerCase().includes(q) ||
      a.num.includes(q) ||
      a.code.toLowerCase().includes(q) ||
      a.cat.toLowerCase().includes(q);
    return showInCat && searchOk;
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
    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.classList.add('hidden');
    return;
  }
  slice.forEach((art, idx) => grid.appendChild(buildCard(art, idx)));
  const btn = document.getElementById('loadMoreBtn');
  if (btn) btn.classList.toggle('hidden', visibleCount >= filteredItems.length);
  observeFadeUps();
}

function buildCard(art, idx) {
  const card = document.createElement('article');
  card.className = 'art-card fade-up';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Tablo ${art.code}`);
  card.onclick   = () => openModal(idx);
  card.onkeydown = (e) => { if (e.key === 'Enter') openModal(idx); };
  const waMsg        = encodeURIComponent(CONFIG.waText(art.code));
  const displayTitle = art.title  || `Tablo #${art.num}`;
  const displayArt   = art.artist || 'Naməlum rəssam';
  card.innerHTML = `
    <div class="art-img-wrap">
      <img src="${CONFIG.imageFolder}${art.num}${CONFIG.imageExt}"
           alt="${art.alt || art.num}" loading="lazy" decoding="async" width="400" height="400">
      <div class="art-overlay" aria-hidden="true"><span class="art-overlay-icon">🔍</span></div>
    </div>
    <div class="art-info">
      <div class="art-code">${art.code}</div>
      <h3 class="art-title">${displayTitle}<br>
        <small style="font-size:.8rem;font-style:normal;color:#888">${displayArt}</small></h3>
      <a class="art-wa" href="https://wa.me/${CONFIG.waNumber}?text=${waMsg}"
         target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="WhatsApp sifariş">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#fff" d="M16 2C8.27 2 2 8.27 2 16c0 2.44.65 4.72 1.77 6.7L2 30l7.52-1.73A13.94 13.94 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2Zm7.6 19.4c-.32.9-1.87 1.73-2.56 1.84-.66.1-1.5.14-2.42-.15a22.2 22.2 0 0 1-2.19-.81C13.1 21.1 10.9 18.5 10.7 18.24c-.2-.26-1.62-2.15-1.62-4.1 0-1.94 1.02-2.9 1.38-3.3.36-.4.79-.5 1.05-.5l.75.01c.24.01.57-.09.89.68l1.14 2.78c.1.23.05.5-.06.7l-.44.57-.43.44c-.14.14-.29.3-.12.59.17.28.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.36 1.44.29.14.46.12.63-.07l1.02-1.16c.19-.22.38-.15.63-.06l2.91 1.37c.27.13.45.2.52.3.07.1.07.6-.25 1.5Z"/>
        </svg>
        Sifariş
      </a>
    </div>`;
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
  document.getElementById('galleryGrid')?.scrollIntoView({ behavior:'smooth', block:'end' });
};

/* ── Modal ───────────────────────────────────────────── */
window.openModal = function(idx) {
  modalIndex = idx;
  const art = filteredItems[idx];
  if (!art) return;
  const waMsg = encodeURIComponent(CONFIG.waText(art.code));
  const displayTitle = art.title  || `Tablo #${art.num}`;
  const displayDesc  = art.emoDesc || art.seoDesc || 'Bu əsər haqqında məlumat üçün WhatsApp ilə əlaqə saxlayın.';
  document.getElementById('modalImg').src           = `${CONFIG.imageFolder}${art.num}${CONFIG.imageExt}`;
  document.getElementById('modalImg').alt           = art.alt || art.num;
  document.getElementById('modalCode').textContent  = art.code;
  document.getElementById('modalTitle').textContent = displayTitle;
  document.getElementById('modalDesc').textContent  = displayDesc;
  document.getElementById('modalWA').href           = `https://wa.me/${CONFIG.waNumber}?text=${waMsg}`;
  document.getElementById('imgModal').classList.add('open');
  document.body.style.overflow = 'hidden';
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
  if (newIdx >= 0 && newIdx < filteredItems.length) openModal(newIdx);
};
function handleKeyboard(e) {
  const modal = document.getElementById('imgModal');
  if (!modal?.classList.contains('open')) return;
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowRight') modalNav(1);
  if (e.key === 'ArrowLeft')  modalNav(-1);
}

/* ── Blog Data ───────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id:'divar-tablosu-secimi', tag:'🎨 Dekor', icon:'🖼',
    title:'Eviniz Üçün Doğru Divar Tablosu Necə Seçilir?',
    preview:'Divar tablosu seçimi bir çox insan üçün çətin görünür. Ölçü, rəng, üslub – hər şey önəmlidir. Bu məqalədə sizə addım-addım mükəmməl tabloyu necə tapacağınızı izah edirik.',
    date:'2026-01-15', readMin:5,
    full:`<h2>Ölçünü Düzgün Seçin</h2><p>Tablo asacağınız divarın ölçüsünü əvvəlcədən ölçün. Ümumi qayda: tablonun eni divarın 2/3-nü tutmalıdır.</p>
    <h2>Rəng Uyumuna Diqqət Edin</h2><p>Otağın hakim rəngləri ilə tablonun rəng palitrasını uyğunlaşdırın.</p>
    <h2>Üslub Seçimi</h2><p>Müasir interyerlər üçün abstrakt; klassik interyerlər üçün mənzərə daha uyğundur.</p>`
  },
  {
    id:'dogum-gunu-hediyyesi', tag:'🎁 Hədiyyə', icon:'🎂',
    title:'Doğum Günü Hədiyyəsi: Niyə Tablo Mükəmməl Seçimdir?',
    preview:'"Doğum günü hədiyyəsi nə alım?" sualına ən gözəl cavab: əl işi tablo. Bu yazıda niyə tablonun unudulmaz hədiyyəyə çevrildiyini izah edirik.',
    date:'2026-02-03', readMin:4,
    full:`<h2>Şəxsi və Unikal</h2><p>Əl işi tablo heç bir başqa nüsxəsi olmayan bir əsərdir.</p>
    <h2>Ömürlük Xatirə</h2><p>Çiçək solar, lakin gözəl bir tablo on illər boyu divarında asılı qalar.</p>
    <h2>Ev Dekorasiyası Ehtiyacı</h2><p>Hər ev sahibi öz evini gözəlləşdirmək istəyir. Tablo bu ehtiyacı ən estetik şəkildə ödəyir.</p>`
  },
  {
    id:'ev-dekorasiyasi-fikirleri', tag:'🏠 İnteryer', icon:'✨',
    title:'Ev Dekorasiyası: 2026-cı İlin Ən Populyar Tablo Trendləri',
    preview:'Bu il ev dekorasiyasında nə populyardır? Botanik motivlər, abstrakt ekspressizm, yoxsa Şərq incəsənəti?',
    date:'2026-03-10', readMin:6,
    full:`<h2>Botanik Motivlər</h2><p>Yaşıl bitkilər, çiçəklər – 2026-cı ildə botanik tablolar hər interyerdə görünür.</p>
    <h2>Abstrakt Ekspressizm</h2><p>Rəngarəng fırça cizgiləri müasir evlərə enerji verir.</p>
    <h2>Şərq Estetikası</h2><p>Azərbaycan, İran, Osmanlı motivlərindən ilhamlanan tablolar populyarlaşır.</p>`
  }
];

function initBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  BLOG_POSTS.slice(0, 3).forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card fade-up';
    card.innerHTML = `
      <div class="blog-card-img" aria-hidden="true">${post.icon}</div>
      <div class="blog-card-body">
        <div class="blog-tag">${post.tag}</div>
        <h3>${post.title}</h3>
        <p>${post.preview.substring(0,140)}…</p>
        <a href="blog.html#${post.id}" class="blog-read-more">ardı →</a>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Visitor Counter ─────────────────────────────────── */
function initVisitorCounter() {
  const el = document.getElementById('visitorCount');
  if (!el) return;
  try {
    let count = parseInt(localStorage.getItem('ts_visitors') || '0', 10);
    const lastVisit = localStorage.getItem('ts_last_visit');
    const today = new Date().toDateString();
    if (lastVisit !== today) {
      count++;
      localStorage.setItem('ts_visitors', String(count));
      localStorage.setItem('ts_last_visit', today);
    }
    el.textContent = count.toLocaleString('az');
  } catch(e) { el.textContent = '—'; }
}

/* ── Scroll & Header ─────────────────────────────────── */
function initScrollEffects() { observeFadeUps(); }
function observeFadeUps() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
}
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 40), { passive:true });
}
window.toggleNav = function() {
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.nav-toggle');
  if (!nav) return;
  btn?.setAttribute('aria-expanded', String(nav.classList.toggle('open')));
};

/* ── Blog page ───────────────────────────────────────── */
window.renderBlogPage = function() {
  const container = document.getElementById('blogFullContainer');
  if (!container) return;
  BLOG_POSTS.forEach(post => {
    const article = document.createElement('article');
    article.className = 'blog-article';
    article.id = post.id;
    article.innerHTML = `
      <div class="blog-tag">${post.tag} · ${post.date} · ${post.readMin} dəq oxu</div>
      <h1>${post.title}</h1><p>${post.preview}</p>${post.full}
      <p style="margin-top:32px;padding-top:24px;border-top:1px solid #eee">
        <strong>Bu tablolardan birini almaq istəyirsiniz?</strong><br>
        <a href="/" style="color:var(--gold)">Kataloqa bax →</a> &nbsp;|&nbsp;
        <a href="https://wa.me/${CONFIG.waNumber}?text=Blog%20m%C9%99qal%C9%99sind%C9%99n%20ke%C3%A7dim"
           target="_blank" rel="noopener" style="color:var(--gold)">WhatsApp →</a>
      </p>`;
    container.appendChild(article);
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      "@context":"https://schema.org","@type":"BlogPosting",
      "headline":post.title,"description":post.preview,
      "datePublished":post.date,"dateModified":post.date,
      "url":`https://tablo-style.vercel.app/blog.html#${post.id}`,
      "publisher":{"@type":"Organization","name":"Tablo Style Gallery",
        "logo":{"@type":"ImageObject","url":"https://tablo-style.vercel.app/images/logo.png"}},
      "mainEntityOfPage":`https://tablo-style.vercel.app/blog.html#${post.id}`
    });
    document.head.appendChild(s);
  });
};
