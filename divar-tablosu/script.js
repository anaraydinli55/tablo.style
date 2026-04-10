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
    artist:'Leonid Afremov üslubu', cat:'sheher',
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
    artist:'Leonid Afremov üslubu', cat:'portret',
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
    title:'Durna Quşu – Gün Batımı Silueti',
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
    artist:'Thomas Kinkade üslubu', cat:'menzere',
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
    size:'100×70 sm', material:'Kadife (Məxmər)',
    seoDesc:'Rəngarəng şəfəq (qırmızı-sarı-mavi) fonunda üç ağ at koşur. 100×70 sm kadife tablo.',
    emoDesc:'Azadlığın üç simvolu – dağılmaz güc, sonsuz enerji. Rəngarəng şəfəq fonunda at – heç bir divardan daha güclü görüntü.',
    interior:'Qonaq otağı, kabinet, işgüzar ofis. Rəngarəng, enerjili interyerlərə mükəmməl.',
    gift:'Güclü, enerjili insanlara, at sevərlərə – azadlığı hədiyyə et.',
    metaDesc:'Üç ağ at rəngarəng şəfəq 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },
  {
    num:'052', code:'VB-GAL-052', alt:'052',
    title:'Ağ Atlar – Qızıl Çöl',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'100×70 sm', material:'Kadife (Məxmər)',
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
  },
     {
    num:'061', code:'VB-GAL-061', alt:'061',
    title:'Çəhrayı Güllər – Çay Süfrəsi',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Çəhrayı-pembe güllər buketi kristal vazada, yanında çay fincanı. Parıltılı natürmort divar tablosu.',
    emoDesc:'Güllər çiçəkləmiş, çay dəmlənmiş – bu tablo evə həm gözəllik, həm istilik gətirir. Qonaqpərvərliyin simvolu.',
    interior:'Mətbəx, yemək otağı, qonaq otağı. Çəhrayı-bej tonlu interyerlərə mükəmməl.',
    gift:'Qadınlara, ana günü, doğum günü – çiçəkli bir hədiyyə ki, heç solmur.',
    metaDesc:'Çəhrayı güllər çay süfrəsi tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'062', code:'VB-GAL-062', alt:'062',
    title:'İngilis Kənd Evi – Tudor Üslubu',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Yaşıl çəmənlikdə payız ağacları arasında ağac-daş Tudor üslublu ingilis kənd evi. Parıltılı tablo.',
    emoDesc:'İngiltərənin o sakit, xoşbəxt guşəsi – ağacların əhatəsindəki köhnə ev. Hər baxanda sakitlik hiss edirsən.',
    interior:'Qonaq otağı, ofis, kafe. Klassik, ingilis üslublu interyerlərə ideal.',
    gift:'Təbiət sevən, sakin həyatı arzulayan insanlara – sakitliyi hədiyyə et.',
    metaDesc:'İngilis kənd evi Tudor üslubu tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'063', code:'VB-GAL-063', alt:'063',
    title:'London – Qırmızı Kabinə, Çiçəkli Ağac',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Çəhrayı çiçəkli ağac altında qırmızı telefon kabinəsi, qırmızı avtobus. Rəngarəng parıltılı London tablosu.',
    emoDesc:'Qırmızı kabinə, qırmızı avtobus, pembe çiçəklər – Londonun ən rəngli anı. Şəhəri sevənlərə xüsusi tablo.',
    interior:'Qonaq otağı, yeniyetmə otağı, kafe. Açıq, şən interyerlərə ideal.',
    gift:'Londonu, Avropanı, şəhər həyatını sevənlərə – rəngləri hədiyyə et.',
    metaDesc:'London qırmızı kabinə çiçəkli ağac tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'065', code:'VB-GAL-065', alt:'065',
    title:'Fantaziya Qız – Qara Bulud Saçlar',
    artist:'Hülya Özdemir üslubu', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Teal fonda qara bulud saçlı, sarı yarpaq tutan qırmızı libaslı qız. Sürrealist müasir portret tablosu.',
    emoDesc:'Saçları buluddan, əlindəki dal ümiddən yapılmış. Düşüncəli, dərin, müəmmalı – hər baxışda yeni bir hiss.',
    interior:'Müasir, kreativ interyerlər, yeniyetmə otağı. Teal-yaşıl aksan tonlu dekora ideal.',
    gift:'Kreativ, sənətsevər insanlara – müəmmanı hədiyyə et.',
    metaDesc:'Fantaziya qız qara saçlar sürrealist tablo. Divar tablosu Bakı.'
  },
  {
    num:'066', code:'VB-GAL-066', alt:'066',
    title:'Qalata Qülləsi – Gecə Panoraması',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'İstanbul Qalata qülləsi gecə havadan mavi-narıncı parıltılı şəhər işıqları panoraması. Parıltılı tablo.',
    emoDesc:'Gecənin zirvəsindən bütün İstanbul görünür – işıqlar, körpü, dəniz. Şəhərin ruhu bu tablodadır.',
    interior:'Qonaq otağı, ofis, restoran. Tünd interyerlərə möhtəşəm kontrast.',
    gift:'İstanbul sevgisi olan hər kəsə – şəhərin ən gözəl gecəsini hədiyyə et.',
    metaDesc:'Qalata qülləsi gecə panorama tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'067', code:'VB-GAL-067', alt:'067',
    title:'Qanadlı Pələng – Ağ Qaplan',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qırmızı bitkili tünd fonda qanadlı ağ qaplan – qızıl-gümüş parıltılı qanadlar, gümüş kənarlı tablo.',
    emoDesc:'Güc ilə azadlığın birliyi – qanadlı pələng həm əzəmətli, həm də azaddır. Müstəsna fantaziya əsəri.',
    interior:'Müasir, güclü effektli interyerlər. Tünd, dramatik dekorlu divanlara ideal.',
    gift:'Güclü, cəsarətli, unikal insanlara – nadir fantaziya hədiyyəsi.',
    metaDesc:'Qanadlı pələng ağ qaplan tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'068', code:'VB-GAL-068', alt:'068',
    title:'Parıltılı Maral – Gecə Çəmənliyi',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Tünd gecə göyündə qızıl-gümüş parıltılı maral, yaşıl nöqtəli fon. Parıltılı fantaziya divar tablosu.',
    emoDesc:'Gecənin qaranlığında parıldayan maral – sehirli, nağılvari, heyrətamiz. Hər baxanda xəyala dalar insan.',
    interior:'Uşaq otağı, yataq otağı, koridor. Tünd, sehirli atmosferli interyerlərə ideal.',
    gift:'Uşaqlara, nağıl sevən insanlara, yeni il hədiyyəsi – sehri hədiyyə et.',
    metaDesc:'Parıltılı maral gecə çəmənliyi tablo. Divar tablosu Bakı.'
  },
  {
    num:'069', code:'VB-GAL-069', alt:'069',
    title:'At – Gümüşü Əks Olunma',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qızıl şəfəqdə qaçan at, suda ağ at əksi – qızıl parıltılı kənarlı dramatik ikili tablo.',
    emoDesc:'Günəş kimi parlayan at yuxarıda, suda isə ağ ruhu var. Gerçəklik ilə xəyalın dansı – dərin, sehirli əsər.',
    interior:'Qonaq otağı, kabinet. Qızıl-tünd tonlu interyerlərə effektli kontrast.',
    gift:'At sevənlərə, dərin mənalı hədiyyə axtaranlara – sehrli bir əsər.',
    metaDesc:'At qızıl əks olunma tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'070', code:'VB-GAL-070', alt:'070',
    title:'Bəbir Yaxın Plan – Parıltılı Cəld Baxış',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Tünd fonda yaxın planda bəbir – qızıl-gümüş parıltılı nöqtə bəzəkləri. Dramatik müasir heyvan tablosu.',
    emoDesc:'Gözlərinin içindən baxır – düz sənə. Bəbirin o dərin, soyuq baxışı cəsarəti, gücü anladır.',
    interior:'Qonaq otağı, müasir ofis. Tünd, güclü effektli interyerlərə ideal.',
    gift:'Cəsarəti, gücü simvolizə edən hədiyyə – güclü insanlara uyğun.',
    metaDesc:'Bəbir yaxın plan parıltılı tablo. Divar tablosu Bakı.'
  },
  {
    num:'071', code:'VB-GAL-071', alt:'071',
    title:'Mavi Gözlü Pişik – Fantaziya Portret',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Tünd fonda mavi parıltılı gözlü tükendi pişik – mavi, qızıl, gümüş parıltılı fantaziya pişik tablosu.',
    emoDesc:'O gözlər sizi görür – məsum, dərin, sehirli. Bu pişik sıradan pişik deyil; o, gecənin gözüdür.',
    interior:'Yaşayış otağı, uşaq otağı, yaradıcı iş mühiti. Mavi-qara tonlu interyerlərə ideal.',
    gift:'Pişik sevənlərə, fantaziya həvəslilərə – sehri hədiyyə et.',
    metaDesc:'Mavi gözlü pişik fantaziya portret tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'072', code:'VB-GAL-072', alt:'072',
    title:'Qızıl Bəbir – Tam Boy, Qızıl Çərçivə',
    artist:'Naməlum rəssam', cat:'diger',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qara fonda tam boy qızıl-gümüş parıltılı bəbir – qızıl parıltılı çərçivəli müasir heyvan tablosu.',
    emoDesc:'Tək addımla gəlir – sakin, güclü, əzəmətli. Qızıl bəzəklər onu bir padşah kimi göstərir. Güc simvolu.',
    interior:'Kabinet, ofis, qonaq otağı. Qara-qızıl tonlu lüks interyerlərə mükəmməl.',
    gift:'Güclü, lider ruha sahib insanlara – əzəməti hədiyyə et.',
    metaDesc:'Qızıl bəbir tam boy qızıl çərçivə tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'073', code:'VB-GAL-073', alt:'073',
    title:'Qızıl Balıqlar – Sehirli Gecə',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'80×50 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Teal gecə göyündə qızıl balıq sürüsü, qızıl dalğalar, balıqlara baxan kiçik şəxs. 80×50 sm parıltılı tablo.',
    emoDesc:'Balıqlar göydə üzür – sehirli, nağılvari, xəyal dünyasından gəlmiş bir an. Hər baxanda uşaqlığa qayıdır insan.',
    interior:'Yataq otağı, uşaq otağı, yaradıcı iş otağı. Teal-qızıl tonlu interyerlərə ideal.',
    gift:'Xəyal quran, kreativ insanlara; uşaqlara – sehrli hədiyyə.',
    metaDesc:'Qızıl balıqlar sehirli gecə tablo 80×50 sm parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'074', code:'VB-GAL-074', alt:'074',
    title:'Böyük Ağac – İki Maral, Qırmızı Günəş',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'80×50 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Ağ-yaşıl fonda nəhəng ağac, iki qızıl maral, qırmızı günəş, uçan quşlar. 80×50 sm parıltılı tablo.',
    emoDesc:'Nəhəng ağacın kölgəsindəki iki maral – ailə, sevgi, sığınacaq. Sakit, harmonik, ümid dolu bir mənzərə.',
    interior:'Qonaq otağı, yataq otağı. Ağ-yaşıl tonlu minimalist interyerlərə ideal.',
    gift:'Ailə sevgisini simvolizə edən hədiyyə – ev açımı, toy üçün ideal.',
    metaDesc:'Böyük ağac iki maral qırmızı günəş tablo 80×50 sm. Parıltılı divar tablosu Bakı.'
  },
  {
    num:'075', code:'VB-GAL-075', alt:'075',
    title:'Sıçrayan Maral – Dalğalı Dağlar',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'80×50 sm', material:'Əl işi – Parıltılı',
    seoDesc:'Teal fonda qızıl dalğalı dağlar üzərindən sıçrayan narıncı maral, payız ağacı, quşlar. 80×50 sm parıltılı tablo.',
    emoDesc:'Dalğalar kimi dağlar, üzərindən azad sıçrayan maral – cəsarət, hərəkət, həyat sevinci. Dinamik, enerjili əsər.',
    interior:'Qonaq otağı, uşaq otağı. Teal-narıncı aksan tonlu interyerlərə ideal.',
    gift:'Enerjili, cəsarətli insanlara – azadlığı hədiyyə et.',
    metaDesc:'Sıçrayan maral dalğalı dağlar tablo 80×50 sm parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'076', code:'VB-GAL-076', alt:'076',
    title:'Qırmızı Payız – Çay Qırağı',
    artist:'Naməlum rəssam', cat:'menzere',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Qırmızı-narıncı payız yarpaqları, mavi-qızıl çay, daşlar, körpü. Parıltılı Kanada payız mənzərəsi tablosu.',
    emoDesc:'Qırmızı yarpaqlar suya düşür, daşlar parıldayır – payızın ən dramatik andan. Enerji, qüvvət, rəng dolu əsər.',
    interior:'Qonaq otağı, yemək otağı. Qırmızı-narıncı aksan tonlu interyerlərə ideal.',
    gift:'Payızı sevən, güclü rənklərə həvəsli insanlara – payızı hədiyyə et.',
    metaDesc:'Qırmızı payız çay qırağı tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'077', code:'VB-GAL-077', alt:'077',
    title:'Atəşli Kəpənək – Tünd Gözəl',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Tünd-yaşıl dərili qadın portreti – narıncı-qızıl boya, qızıl dırnaqlar, əllərindəki qırmızı kəpənək. Qızıl kənarlı.',
    emoDesc:'Əllərinin arasında bir kəpənək – incə, müəmmalı, güclü. Atəşin rəngi ilə tünd dərinin kontrastı unudulmaz.',
    interior:'Müasir, glamur interyerlər. Tünd rəngli divanlarda dramatik effekt.',
    gift:'Unikal, incəsənətsevər insanlara – nadir bir hədiyyə.',
    metaDesc:'Atəşli kəpənək tünd gözəl portret tablo parıltılı. Divar tablosu Bakı.'
  },
  {
    num:'078', code:'VB-GAL-078', alt:'078',
    title:'Qızıl Dodaqlar – Gözlər Örtülü',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
    seoDesc:'Tünd fonda qızıl parıltılı dırnaqlarla gözlərini örtən qadın, qızıl dodaqlar. Müasir dramatik portret.',
    emoDesc:'Görmək istemiyər, amma hiss edir hər şeyi. Qızıl dodaqlar gizli bir söz söyləyir. Güclü emosional tablo.',
    interior:'Müasir, minimalist interyerlər. Tünd divanlarda möhtəşəm effekt.',
    gift:'Müasir zövqlü insanlara, güclü qadınlara – dərinliyi hədiyyə et.',
    metaDesc:'Qızıl dodaqlar gözlər örtülü portret tablo. Divar tablosu Bakı.'
  },
  {
    num:'079', code:'VB-GAL-079', alt:'079',
    title:'Qırmızı Şlyapa – Ağ-Qara Gözəl',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Ağ-qara fonda qırmızı geniş şlyapa və qırmızı dodaqlı müəmmalı qadın portreti. Kontrast müasir tablo.',
    emoDesc:'Bütün dünya ağ-qaradır, yalnız dodaqlar və şlyapa qırmızıdır. Bu tablo gücü, elegantlığı, sirri anladır.',
    interior:'Qonaq otağı, qadın kabinetləri, boutique. Ağ-qara tonlu interyerlərə mükəmməl.',
    gift:'Güclü, elegantlığı sevən qadınlara – sirrli bir hədiyyə.',
    metaDesc:'Qırmızı şlyapa ağ-qara qadın portret tablo. Divar tablosu Bakı.'
  },
  {
    num:'080', code:'VB-GAL-080', alt:'080',
    title:'Afrika Gözəli – Rəngarəng Sarıq',
    artist:'Naməlum rəssam', cat:'portret',
    size:'Ölçü soruşun', material:'Əl işi',
    seoDesc:'Qara fonda rəngarəng naxışlı sarıqlı Afrika qadını profil portreti – mavi-bənövşəyi makiyaj, qürurlu duruş.',
    emoDesc:'Başındakı rəngarəng sarıq bir tacdır. Dik duruşu, soyuq baxışı – bu qadın özünə hörmət edir. Qürurun tablosu.',
    interior:'Müasir, rəngli interyerlər. Qara fon ilə istənilən rəngli divara mükəmməl uyğun.',
    gift:'Özünə güvənən, güclü qadınlara – qüruru hədiyyə et.',
    metaDesc:'Afrika gözəli rəngarəng sarıq portret tablo. Divar tablosu Bakı.'
  },
  {
    num:'081', code:'VB-GAL-081', alt:'081',
    title:'Buxar Lokomotivi – Güc Simvolu',
    artist:'Naməlum rəssam', cat:'sheher',
    size:'100×70 sm', material:'Kadife (Mexmer)',
    seoDesc:'Qara-boz tüstülü buxar lokomotivi – qırmızı ulduz, dramatik tüstü buludu. 100×70 sm kadife tablo.',
    emoDesc:'Tüstü buludunu yararaq gəlir – heç bir şey onu saxlaya bilməz. Güc, sürət, iradə – tarixi bir an.',
    interior:'Kabinet, kişi otağı, texniki mövzulu interyerlər. Tünd, güclü dekorlu divanlara ideal.',
    gift:'Tarix sevər, mühəndis ruha sahib insanlara, kişilərə – gücü hədiyyə et.',
    metaDesc:'Buxar lokomotivi güc simvolu 100×70 sm kadife tablo. Divar tablosu Bakı.'
  },  
   {
  num:'098', code:'VB-GAL-098', alt:'098',
  title:'Çiçəkli Ağac Altında Qayıq – Bahar Sakiti',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Çəhrayı çiçəkli ağac altında ağ qayıq – sakit göl mənzərəsi, kanvas tablo.',
  emoDesc:'Sükut, sakitlik, baharın ilk nəfəsi. Qayıq da gözləyir – sən də gözləyirsən bir şey. Bu tablo o hissi yaşadır.',
  interior:'Qonaq otağı, yataq otağı, spa, istirahət küncleri.',
  gift:'Romantik hədiyyə, ev açımı, ana günü – təbiəti sevənlər üçün ideal.',
  metaDesc:'Çiçəkli ağac altında qayıq bahar mənzərəsi kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'097', code:'VB-GAL-097', alt:'097',
  title:'Alov Rəngli Payız Meşəsi – Göl Üzərindəki Qayıq',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap – Böyük Format',
  seoDesc:'Qızıl-qırmızı payız meşəsi, gölün üzündə qayıq – parlaq rəngli böyük kanvas tablo.',
  emoDesc:'Alov kimi yanan ağaclar, sakit su, tənha qayıq. Payızın bütün əzəməti bir tabloda. Divarı isidər.',
  interior:'Geniş qonaq otaqları, ofis lobbisi, restoran, otel. Dominantlıq istəyən məkanlara.',
  gift:'Ev açımı, böyük hədiyyə, iş yeri bəzəyi – təsir bağışlamaq istəyənlər üçün.',
  metaDesc:'Payız meşəsi qayıq göl böyük kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'100', code:'VB-GAL-100', alt:'100',
  title:'Dantel Əlcəkli Qadın – Sirli Baxış Portreti',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Dantel əlcəkli, sirli baxışlı qadın portreti – qaranlıq fon, dramatik kanvas tablo.',
  emoDesc:'Gizli sirr var bu baxışda. Dantel, gözlər, dodaqlar – hamısı bir şey söyləyir. Güclü, müasir, unudulmaz.',
  interior:'Studio, yaradıcı ofis, butik, parfümeriya, müasir salon.',
  gift:'Sənətsevər dostlar, fotoqraflar, moda dünyasına yaxın insanlar üçün.',
  metaDesc:'Dantel əlcəkli sirli qadın portreti kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'099', code:'VB-GAL-099', alt:'099',
  title:'Bənövşəyi Kanyon – Firuzəyi Çay Mənzərəsi',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap – Şaquli Format',
  seoDesc:'Mor-bənövşəyi ağaclı kanyon, firuzəyi çay – fantastik rəngli şaquli kanvas tablo.',
  emoDesc:'Dünyada bu rənglər mövcuddur – hər yerdə görünmür. Bu tablo sizi başqa bir gerçəkliyə aparır.',
  interior:'Minimalist interyerlər, ağ divarlar, müasir qonaq otaqları. Şaquli darlığı geniş göstərər.',
  gift:'Macərasevərlər, səyahətçilər, təbiəti fərqli görmək istəyənlər üçün.',
  metaDesc:'Bənövşəyi kanyon firuzəyi çay fantastik mənzərə tablo. Divar tablosu Bakı.'
},
{
  num:'096', code:'VB-GAL-096', alt:'096',
  title:'Yapon Evi Payız Yarpaqlarında – Kadife Tablo',
  artist:'Thomas Kinkade üslubu', cat:'menzere',
  size:'70×100 sm', material:'Kadife (Məxmər) çap',
  seoDesc:'Qırmızı yarpaqlar içində yapon evi – 70x100 sm kadife məxmər teksturalı tablo.',
  emoDesc:'Yaponiyanın sakit köşəsi – qırmızı yarpaqlar, daş, köhnə ev. Sakitlik arayanlara bu tablo cavab verir.',
  interior:'Yataq otağı, meditasiya küncu, zen üslublu interyerlər. Məxmər toxuma dərinlik verir.',
  gift:'Yapon mədəniyyəti sevənlər, meditasiya edənlər, unikal hədiyyə axtaranlar üçün.',
  metaDesc:'Yapon evi payız yarpaqları kadife məxmər tablo 70x100. Divar tablosu Bakı.'
},
{
  num:'082', code:'VB-GAL-082', alt:'082',
  title:'Qızıl Balıqlı Maral – Rüzgar Axını Tablosu',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Maral, qızıl ağac, uçan balıqlar – mavi rüzgar axınlı 50x80 abstrakt parıltılı tablo.',
  emoDesc:'Rüzgar görünür burada. Maral zirvədə, balıqlar havada uçur. Sözsüz bir fantaziya – hər baxanda yeni bir şey görürsən.',
  interior:'Yataq otağı, uşaq otağı, meditasiya köşəsi, müasir salon.',
  gift:'Xüsusi, poetik, fantaziya sevənlər üçün – unutulmaz hədiyyə.',
  metaDesc:'Maral qızıl ağac uçan balıqlar abstrakt parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'083', code:'VB-GAL-083', alt:'083',
  title:'Firuzəyi Ağac – Qızıl Parıltılı Abstrakt Meşə',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'Əl işi – Parıltılı',
  seoDesc:'Mavi-firuzəyi abstrakt ağaclar, qızıl parıltı aksentləri – müasir kanvas tablo.',
  emoDesc:'Ağaclar mavi, qızıl parıltılar – bu meşə realdamı, yuxumdamı? Sülh və zəriflik.',
  interior:'Qonaq otağı, yataq otağı, ofis. Açıq rəngli interyerlərə mükəmməl uyğun.',
  gift:'Ev hədiyyəsi, toy hədiyyəsi – zövqlü interyerlər üçün universal seçim.',
  metaDesc:'Firuzəyi mavi ağaclar qızıl parıltılı abstrakt meşə tablo. Divar tablosu Bakı.'
},
{
  num:'084', code:'VB-GAL-084', alt:'084',
  title:'Qar Fırtınasında Buxar Lokomotivi – Qış Gücü',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Qar fırtınasında qara buxar lokomotivu – dramatik qış mənzərəsi kanvas tablo.',
  emoDesc:'Güc, sürət, qış. Lokomotiv bütün qarı yarıb gəlir. Bu tablo enerjini hiss etdirir – oturaq olmayan məkanlara.',
  interior:'İş otağı, ofis, qaraj, restoran, kafe, oğlan otağı.',
  gift:'Texnika sevənlər, tarix maraqlananllar, güclü xarakter sahibləri üçün.',
  metaDesc:'Buxar lokomotivu qar fırtınası qış mənzərəsi kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'085', code:'VB-GAL-085', alt:'085',
  title:'İşıqlı Qış Kəndi – Körpü və Qarlı Evlər',
  artist:'Thomas Kinkade üslubu', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Qarlı kənd, işıqlı evlər, daş körpü – nağıl havası yaradan rəngli kanvas tablo.',
  emoDesc:'Hər pəncərədən işıq süzülür. Soyuq havada isti ev. Bu tablo sizi içəriyə çəkir.',
  interior:'Qonaq otağı, yemək otağı, Milad dekorasiyası. İsti rəngli interyerlər üçün.',
  gift:'Ailə hədiyyəsi, ev açımı, Yeni il hədiyyəsi – nostaljik ab-hava sevənlər üçün.',
  metaDesc:'Qarlı kənd işıqlı evlər daş körpü nağıl tablo. Divar tablosu Bakı.'
},
{
  num:'086', code:'VB-GAL-086', alt:'086',
  title:'Azərbaycan Milli Alətləri – Saz, Nağara, Xalça',
  artist:'Naməlum rəssam', cat:'milli',
  size:'Ölçü soruşun', material:'Kanvas çap – Parıltılı',
  seoDesc:'Saz, nağara, xalça – Azərbaycan milli musiqi alətləri parıltılı kanvas tablo.',
  emoDesc:'Muğam, Novruz, kök. Bu tablo Azərbaycanı hiss etdirir – hər ayrıntısında torpaq var.',
  interior:'Ev qonaq otağı, milli üslublu interyerlər, mədəniyyət mərkəzləri, otellər.',
  gift:'Azərbaycanlılara ən mənalı hədiyyə – xaricə gedənlər üçün yurd xatirəsi.',
  metaDesc:'Saz nağara xalça Azərbaycan milli alətlər tablo parıltılı. Divar tablosu Bakı.'
},
{
  num:'087', code:'VB-GAL-087', alt:'087',
  title:'İstanbul Silueti – Süleymaniyyə və Boğaz',
  artist:'Naməlum rəssam', cat:'shehir',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'İstanbul panoraması – Süleymaniyyə məscidi, Boğaz ferryləri, ağ qağayılar kanvas tablo.',
  emoDesc:'Qağayılar uçur, gəmilər keçir, minarələr göyə yüksəlir. İstanbul eyni zamanda həm güclü, həm zərif.',
  interior:'Qonaq otağı, restoran, otel, ofis. Şəhər mənzərəli interyerlərə ideal.',
  gift:'İstanbul sevənlər, səyahətçilər, türk mədəniyyəti maraqlananllar üçün.',
  metaDesc:'İstanbul silueti Süleymaniyyə boğaz panorama kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'088', code:'VB-GAL-088', alt:'088',
  title:'London Telefon Kabinası – Çiçəkli Bahar Küçəsi',
  artist:'Naməlum rəssam', cat:'shehir',
  size:'Ölçü soruşun', material:'Kanvas çap – Şaquli Format',
  seoDesc:'London qırmızı telefon kabinası, çiçəkli ağac, ikimərtəbəli avtobus – şaquli kanvas tablo.',
  emoDesc:'İngiltərənin ikonu – qırmızı kabina, pembe çiçəklər, mavi göy. Köhnə ilə yeninin görüşü.',
  interior:'Müasir qonaq otağı, butik, kafe, ingilis üslublu interyerlər.',
  gift:'Londonsevərlər, səyahətçilər, gənclər – dünyaya açılan pəncərə.',
  metaDesc:'London telefon kabinası çiçəkli bahar küçəsi kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'089', code:'VB-GAL-089', alt:'089',
  title:'Qız Qalası Qarşısında Mavi Köynəkli Xanım',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Kanvas çap – Şaquli Format',
  seoDesc:'Bakı Qız Qalası qarşısında uzun mavi ətəkli qadın – dramatik göy Azərbaycan simvolu tablo.',
  emoDesc:'Qala tarixin şahidi, xanım isə həyatın simvolu. İki qüdrət bir tabloda. Bakılı ruhun ifadəsi.',
  interior:'Qonaq otağı, ofis, otel, milli mədəniyyəti vurğulayan məkanlara.',
  gift:'Vətən sevgisi, Bakı hədiyyəsi, xaricə gedənlər üçün mənalı suvenir tablo.',
  metaDesc:'Qız Qalası mavi ətəkli qadın Bakı simvolu kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'090', code:'VB-GAL-090', alt:'090',
  title:'Qızıl Papaq, Kəpənək – Parıltılı Qadın Portreti',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Əl işi – Parıltılı, Daş bəzəkli',
  seoDesc:'Qızıl papaq altında qadın, kəpənək, parıltılı daş bəzəkli portret tablo.',
  emoDesc:'Qızıl işıq, kristal dodaqlar, rəngli kəpənək – bu qadın bir yuxudan çıxmış kimi. Hər baxışda yeni detal tapırsın.',
  interior:'Bəzək otağı, geyim studiyası, lüks yaşayış, butik. Parıltı interyeri canlandırır.',
  gift:'Özünü ifadə edən qadınlara – unikal, cəsarətli, unudulmaz hədiyyə.',
  metaDesc:'Qızıl papaq kəpənək parıltılı daş bəzəkli qadın portreti tablo. Divar tablosu Bakı.'
},
{
  num:'092', code:'VB-GAL-092', alt:'092',
  title:'Bənövşəyi Lalə – Parıltılı Çiçək Tablosu',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap – Parıltılı',
  seoDesc:'Sarı lalələr arasında bənövşəyi lalə – parıltılı yaxın plan çiçək kanvas tablo.',
  emoDesc:'Hamı sarı, o isə bənövşəyi. Fərqli olmaq cəsarəti – bir çiçəyin dili ilə. Sevincli, canlı, enerjili.',
  interior:'Qadın otağı, mətbəx, koridor, yataq otağı. Parlaq rəng interyerə həyat verir.',
  gift:'Çiçəksevərlər, bahar hissi axtaranlar, xoş əhval hədiyyəsi üçün.',
  metaDesc:'Bənövşəyi lalə sarı çiçəklər parıltılı yaxın plan tablo. Divar tablosu Bakı.'
},
{
  num:'093', code:'VB-GAL-093', alt:'093',
  title:'Qırmızı Paltarlı Uşaq – Çiçəyə Uzanan Əl',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Kanvas çap – Qara-ağ',
  seoDesc:'Qara-ağ fonda qırmızı paltarlı uşaq çiçəyə uzanır – emosional sənət fotosu kanvas tablo.',
  emoDesc:'Qara-ağ dünyada yalnız o qırmızı – körpənin ümidi, həyat sevinci. Hər baxanda ürək isınır.',
  interior:'Uşaq otağı, qonaq otağı, ana-uşaq mərkəzləri, ofis. Emosional güclü kontrast.',
  gift:'Yeni doğulan, uşaq hədiyyəsi, valideynlərə, humanist ruhlu insanlara.',
  metaDesc:'Qara ağ qırmızı paltarlı uşaq çiçəyə uzanan emosional kanvas tablo. Divar tablosu Bakı.'
},
{
  num:'094', code:'VB-GAL-094', alt:'094',
  title:'Gecə Dənizində Yelkənli Gəmi – Parıltılı Kristal Bəzəkli',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'Ölçü soruşun', material:'Əl işi – Parıltılı, Kristal daş bəzəkli',
  seoDesc:'Gecə firuzəyi dənizidə yelkənli gəmi – parıltılı kristal daş bəzəkli kanvas tablo.',
  emoDesc:'Ulduzlar suda, yelkənlər işıqda. Bu gəmi hara gedir? Azadlıq, macəra, dəniz ruhu.',
  interior:'Qonaq otağı, kişi iş otağı, restoran, otel. Dərin mavi ton interyerə dərinlik verir.',
  gift:'Dənizçilər, macərasevənlər, azadlıq sevənlər – güclü simvolik hədiyyə.',
  metaDesc:'Gecə dənizdə yelkənli gəmi parıltılı kristal bəzəkli tablo. Divar tablosu Bakı.'
},
{
  num:'095', code:'VB-GAL-095', alt:'095',
  title:'Alov Payız Xiyabanı – Fənərli Park Yolu',
  artist:'Leonid Afremov üslubu', cat:'menzere',
  size:'Ölçü soruşun', material:'Kanvas çap – Əl boyası üslubu',
  seoDesc:'Qırmızı-narıncı payız ağacları, fənərli xiyaban – ekspressiv əl boyası üslublu kanvas tablo.',
  emoDesc:'Qızıl fənərlər, alov rəngli yarpaqlar, uzaqda bir siluet. Payızın ən gözəl anı – bu tabloda dondurulub.',
  interior:'Qonaq otağı, yemək otağı, otel koridoru. İsti-narıncı tonlu məkanlara mükəmməl.',
  gift:'Rəssam zövqlü hədiyyə, payız sevənlər, ekspressiv sənət maraqlananllar üçün.',
  metaDesc:'Payız xiyabanı fənərli park yolu alov rəngli ekspressiv tablo. Divar tablosu Bakı.'
},
{
  num:'101', code:'VB-GAL-101', alt:'101',
  title:'Kəmança Tutan Qadın – Mavi Işıqda Musiqi Ruhu',
  artist:'Leonid Afremov üslubu', cat:'musiqili',
  size:'Ölçü soruşun', material:'Kanvas çap – Parıltılı',
  seoDesc:'Ağ köynəkli qadın əlində kəmança, mavi dumanlı fon – parıltılı musiqili kanvas tablo.',
  emoDesc:'Musiqi görünür burada – parıltılar nota kimidi. Bu xanım çalmır, musiqini yaşayır.',
  interior:'Musiqi otağı, qonaq otağı, yaradıcı studiyalar, lüks interyerlər.',
  gift:'Musiqiçilərə, sənətsevərlərə, zərif ruha sahib qadınlara – mükəmməl hədiyyə.',
  metaDesc:'Kəmança tutan qadın mavi parıltılı musiqili tablo. Divar tablosu Bakı.'
},
{
  num:'102', code:'VB-GAL-102', alt:'102',
  title:'Violonçel Çalan Qadın – Rəngarəng Ekspressiv Portret',
  artist:'Leonid Afremov üslubu', cat:'musiqili',
  size:'Ölçü soruşun', material:'Kanvas çap – Şaquli Format',
  seoDesc:'Mavi ətəkli qadın violonçel çalır – narıncı-mavi ekspressiv rəngarəng kanvas tablo.',
  emoDesc:'Musiqi alovla su arasında – narıncı istilik, mavi azadlıq. Bu tablo bir simfoniyadır.',
  interior:'Musiqi otaqları, yaradıcı iş mühiti, incəsənət qalereyaları, premium qonaq otaqları.',
  gift:'Musiqiçilər, rəssamlar, sənətsevərlər – emosional dərinlik axtaranlara ideal.',
  metaDesc:'Violonçel çalan qadın ekspressiv rəngarəng musiqili tablo. Divar tablosu Bakı.'
},
   {
  num:'103', code:'VB-GAL-103', alt:'103',
  title:'Mərmər Fonda Maral – Parıltılı Silüet Tablo',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Ağ mərmər fonda qara maral silüeti – qalaktika parıltılı 50x80 sm kanvas tablo.',
  emoDesc:'Mərmər sükutu, maralın azadlığı. Buynuzlar ağaca çevrilir – təbiət və sənət birləşir. Zərif, güclü, unudulmaz.',
  interior:'Minimalist interyerlər, ağ-bej tonlu qonaq otaqları, yataq otağı, ofis.',
  gift:'Zövqlü ev hədiyyəsi, toy hədiyyəsi – müasir dekor axtaranlara ideal.',
  metaDesc:'Mərmər fonda maral silüeti parıltılı abstrakt tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'104', code:'VB-GAL-104', alt:'104',
  title:'Payız Meşəsində Üç Maral – Qızıl Quşlar',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı, 3D Quş bəzəkli',
  seoDesc:'Qızılı payız meşəsi, üç maral, uçan quşlar – 3D elementli parıltılı 50x80 sm tablo.',
  emoDesc:'Meşə yuxarı açılır, maralar aşağıda – quşlar azadlığa uçur. Hər baxanda hərəkət hiss olunur.',
  interior:'Qonaq otağı, yataq otağı, uşaq otağı. İsti-narıncı tonlu interyerlərə ideal.',
  gift:'Ailə üçün hədiyyə, ev açımı – canlı, enerjili, sevincli tablo.',
  metaDesc:'Payız meşəsi üç maral qızıl quşlar 3D parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'105', code:'VB-GAL-105', alt:'105',
  title:'Ağ Maqnoliya – Boz Fonda Parıltılı Çiçək',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Boz dumanlı fonda ağ maqnoliya çiçəkləri – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Boz dünya, ağ çiçək. Sükut içindən bahar qalxır. Bu tablo sakinləşdirir – içinizi yuyur.',
  interior:'Yataq otağı, spa, meditasiya küncu, minimalist salon. Boz-ağ interyerlərə mükəmməl.',
  gift:'Zərif qadınlara, ev açımı, ana günü – sakitlik hədiyyəsi.',
  metaDesc:'Ağ maqnoliya boz fon parıltılı çiçək tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'106', code:'VB-GAL-106', alt:'106',
  title:'Qızıl Dalğalar – Quşlar və Mavi Ağac Tablosu',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı, 3D Quş bəzəkli',
  seoDesc:'Rəngarəng qızıl dalğalar, mavi ağac, uçan quşlar – 3D elementli parıltılı 50x80 sm tablo.',
  emoDesc:'Torpaq, su, göy – üç aləm bir tabloda. Quşlar dalğaların üzərindən keçir. Azadlıq bu görünür.',
  interior:'Qonaq otağı, iş otağı, müasir minimalist interyerlər.',
  gift:'Macərasevər, azadlıqsevər ruhlara – dinamik, güclü hədiyyə.',
  metaDesc:'Qızıl dalğalar mavi ağac quşlar 3D parıltılı abstrakt tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'107', code:'VB-GAL-107', alt:'107',
  title:'Bənövşəyi Çiçək Buludu – Ağ Sakura Tablosu',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Bənövşəyi-çəhrayı fonda ağ sakura çiçəkləri – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Çiçəklər yağış kimi yağır. Bənövşəyi göy, ağ ləçəklər – sakit, romantik, zərif. Divarı nəfəs alır.',
  interior:'Qadın otağı, yataq otağı, koridor, geyinmə otağı. Çəhrayı-bej interyerlərə ideal.',
  gift:'Qadınlara, Qadınlar Günü, sevgiliyə – romantik bahar hədiyyəsi.',
  metaDesc:'Bənövşəyi fonda ağ sakura çiçək buludu parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'108', code:'VB-GAL-108', alt:'108',
  title:'Qırmızı Gerbera – Mavi Yarpaqlar, Parıltılı',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Ağ fonda iri qırmızı gerbera çiçəkləri, mavi yarpaqlar – parıltılı 50x80 sm kanvas tablo.',
  emoDesc:'Qırmızı güc, mavi soyuqluq – ziddiyyətlər cəlbedici olur. Canlı, enerjili, həyat dolu.',
  interior:'Mətbəx, qonaq otağı, ofis, kafe. Ağ interyerlərə rəng verir.',
  gift:'Cheerful hədiyyə, ev açımı, bayram hədiyyəsi – həyat sevinci bağışlayır.',
  metaDesc:'Qırmızı gerbera mavi yarpaqlar ağ fon parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'109', code:'VB-GAL-109', alt:'109',
  title:'Ağ Dəvəgözü – Boz Dumanlı Fon, Parıltılı',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Boz-teal dumanlı fonda böyük ağ dəvəgözü çiçəyi – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Tək çiçək, bütün divarı tutur. Ağ ləçəklər, sarı mərkəz – sadəlik içindəki əzəmət.',
  interior:'Yataq otağı, spa, minimalist salon. Hər rəng interyerinə uyğun – neytral dominant.',
  gift:'Universal hədiyyə – sadəliyi sevənlər, zövqlü ev sahibləri üçün.',
  metaDesc:'Ağ dəvəgözü boz dumanlı fon parıltılı çiçək tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'110', code:'VB-GAL-110', alt:'110',
  title:'Qırmızı Güllər, Gümüş Yarpaqlar – Parıltılı Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Bej fonda iki qırmızı gül, gümüş yarpaqlar – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Qırmızı ehtiras, gümüş zəriflik. Güllər divarınıza aşiq olur. Klassik, lakin fərqli.',
  interior:'Yataq otağı, qonaq otağı, romantik köşələr. Bej-qəhvəyi interyerlərə mükəmməl.',
  gift:'Sevgiliyə, toy ildönümü, Sevgililer Günü – romantik hədiyyə.',
  metaDesc:'Qırmızı güllər gümüş yarpaqlar bej fon parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'111', code:'VB-GAL-111', alt:'111',
  title:'Qızıl-Gümüş Tropik Yarpaqlar – Plumeria Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Ağ-gümüş fonda qızıl tropik xurma yarpaqları, sarı plumeria – parıltılı 50x80 sm tablo.',
  emoDesc:'Qızıl yarpaqlar, gümüş parıltı – lüksün dili belədir. Tropik zəriflik, müasir estetika.',
  interior:'Lüks qonaq otağı, hotel, ofis lobbisi, spa. Qızıl-bej tonlu interyerlərə ideal.',
  gift:'Prestijli hədiyyə, iş ortağına, ev açımı – zövq simvolu.',
  metaDesc:'Qızıl tropik yarpaqlar plumeria gümüş parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'112', code:'VB-GAL-112', alt:'112',
  title:'Qızıl Payız Ağacları – Mavi Ay Işığında Meşə',
  artist:'Naməlum rəssam', cat:'menzere',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Mavi-ağ ay işığında qızıl payız ağacları – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Payız qızılı, gecə mavisi – iki fəsil bir anda. Ağaclar rəqs edir, ay baxır. Sehrli, sakit, dərin.',
  interior:'Yataq otağı, qonaq otağı, meditasiya küncu. Mavi-qızıl tonlu interyerlərə ideal.',
  gift:'Poetik ruhlu insanlara, ev hədiyyəsi – sərgi keyfiyyətli tablo.',
  metaDesc:'Qızıl payız ağacları mavi ay işığı meşə parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'113', code:'VB-GAL-113', alt:'113',
  title:'Gecə Marali – Qızıl Ay, Uçan Quşlar',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı, 3D Quş bəzəkli',
  seoDesc:'Tünd mavi gecə, qızıl maral, böyük ay, uçan quşlar – 3D elementli parıltılı 50x80 sm tablo.',
  emoDesc:'Gecə hər şeyi gizlədir – yalnız maral görünür. Qızıl işıq, mavi dərinlik. Sirr var bu tabloda.',
  interior:'Yataq otağı, iş otağı, kişi köşəsi. Tünd tonlu interyerlərə güclü kontrast verir.',
  gift:'Güclü xarakter sahiblərinə, kişilərə, macərasevənlərə – dərin simvolik hədiyyə.',
  metaDesc:'Gecə marali qızıl ay uçan quşlar 3D parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'114', code:'VB-GAL-114', alt:'114',
  title:'Çəhrayı Sakura – Ay Işığında Budaqlar',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Çəhrayı-bənövşəyi fonda ağ sakura çiçəkli budaqlar, ay işığı – parıltılı 50x80 sm tablo.',
  emoDesc:'Ay arxada, çiçəklər önde. Yapon sükutu, çəhrayı bahar. Bu tablo gecə ən gözəl görünür.',
  interior:'Yataq otağı, qız otağı, koridor. Çəhrayı-bənövşəyi interyerlərə mükəmməl.',
  gift:'Qadınlara, gənclərə, Yapon estetikası sevənlərə – zərif romantik hədiyyə.',
  metaDesc:'Çəhrayı sakura ay işığı budaqlar parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'115', code:'VB-GAL-115', alt:'115',
  title:'Qızıl Maral – Mavi Dalğa, Fantastik Mənzərə',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Ağ fonda qızıl maral, mavi-firuzəyi dalğa axını, uçan quşlar – parıltılı 50x80 sm tablo.',
  emoDesc:'Maral çağırır, dalğa cavab verir, quşlar şahiddir. Sözsüz bir nağıl. Hər baxanda yeni bir hiss.',
  interior:'Qonaq otağı, yataq otağı, uşaq otağı. Açıq rəngli interyerlərə canlılıq verir.',
  gift:'Xəyal dünyasını sevənlərə, sənətsevərlərə – unikal, poetik hədiyyə.',
  metaDesc:'Qızıl maral mavi dalğa fantastik mənzərə parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'116', code:'VB-GAL-116', alt:'116',
  title:'Ağ Maral – Firuzəyi Kəpənək, Çiçəkli Fantaziya',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Tünd teal fonda ağ sehirli maral, firuzəyi kəpənək, qızıl çiçəklər – parıltılı 50x80 sm tablo.',
  emoDesc:'Bu maral gerçək deyil – o bir yuxudan gəlir. Kəpənəklər, mavi toplar, qızıl ağaclar. Sehrli dünya.',
  interior:'Yataq otağı, uşaq otağı, yaradıcı studiyalar. Tünd-teal interyerlərə işıq verir.',
  gift:'Romantik, xəyalpərəst ruhlara – möcüzəvi, unudulmaz hədiyyə.',
  metaDesc:'Ağ sehirli maral firuzəyi kəpənək çiçəkli fantaziya parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'117', code:'VB-GAL-117', alt:'117',
  title:'Qalaktika Lotosları – Bənövşəyi Kosmik Çiçək',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Bənövşəyi kosmik fonda iki böyük ağ lotos çiçəyi – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Lotos suda açır, bu isə kainatda açır. Ulduzlar arasında çiçək – sonsuzluğun simvolu.',
  interior:'Yataq otağı, meditasiya otağı, spa, müasir salon. Bənövşəyi-mavi interyerlərə ideal.',
  gift:'Mənəviyyat sevənlərə, lotosun simvolizminə inananlar üçün – dərin mənalı hədiyyə.',
  metaDesc:'Qalaktika kosmik lotos çiçəyi bənövşəyi parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'118', code:'VB-GAL-118', alt:'118',
  title:'Firuzəyi Burulğan – İki Qızıl Maral Tablosu',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Gümüş-boz fonda firuzəyi burulğan, iki qızıl maral, qızıl ağac – parıltılı 50x80 sm tablo.',
  emoDesc:'Burulğan göyə qalxır, maralar yerə bağlıdır. İki ziddiyyət, bir harmoniya. Nəfis, dərin, müasir.',
  interior:'Qonaq otağı, yataq otağı, ofis. Gümüş-boz interyerlərə rəng və həyat verir.',
  gift:'Cüt hədiyyə, toy hədiyyəsi, ev açımı – birlikdə güclü simvol.',
  metaDesc:'Firuzəyi burulğan iki qızıl maral parıltılı abstrakt tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'119', code:'VB-GAL-119', alt:'119',
  title:'Narıncı Gül – Boz Taxta Fon, Parıltılı Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Köhnə taxta fon üzərində narıncı-sarı böyük gül – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Köhnə taxta, canlı gül – keçmişlə həyat görüşür. Rustikal tekstura, müasir ruh. Güclü kontrast.',
  interior:'Rustikal, vintage, loft interyerlər. Qonaq otağı, kafe, restoran.',
  gift:'Fərqli zövqlü insanlara, rustikal ev sahiblərinə – originallıq axtaranlara.',
  metaDesc:'Narıncı gül boz taxta fon rustikal parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'120', code:'VB-GAL-120', alt:'120',
  title:'Ağ Güllər – Qırmızı-Gümüş Abstrakt Fon',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Qırmızı-gümüş abstrakt fonda ağ güllər – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Ağ güllər qırmızı fırtınada sakin dayanır. Güc və zəriflik bir anda. Dramatik, cəsarətli, gözəl.',
  interior:'Müasir qonaq otağı, yaradıcı ofis, butik, restoran. Cəsarətli interyerlərə ideal.',
  gift:'Güclü xarakter sahiblərinə – kontrast sevənlər, fərqli zövqlülər üçün.',
  metaDesc:'Ağ güllər qırmızı gümüş abstrakt fon parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'121', code:'VB-GAL-121', alt:'121',
  title:'Qırmızı Çiçək – Boz Daş Fon, Parıltılı Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Boz daş teksturalı fonda tək böyük qırmızı çiçək – parıltılı şaquli 50x80 sm kanvas tablo.',
  emoDesc:'Tək qırmızı çiçək – boz dünyada bir alov. Sadə, amma nə qədər güclü. Bu tablo divarı canlandırır.',
  interior:'Yataq otağı, qonaq otağı, ofis. Neytral boz interyerlərə canlılıq verir.',
  gift:'Minimalist zövqlü insanlara – az ilə çoxu ifadə edən tablo.',
  metaDesc:'Qırmızı çiçək boz daş fon parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'122', code:'VB-GAL-122', alt:'122',
  title:'Firuzəyi Dəhliya – Köhnə Taxta Fon, Böyük Format',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'70×200 sm', material:'Kanvas çap – Böyük Format',
  seoDesc:'Köhnə taxta fon üzərində böyük firuzəyi dəhliya çiçəyi – 70x200 sm böyük format kanvas tablo.',
  emoDesc:'İki metr boy – bu tablo otağı dəyişir. Firuzəyi çiçək, vintage taxta fon. Girişdə görürsən, yadda qalır.',
  interior:'Giriş hollu, böyük qonaq otağı, restoran, otel koridoru. Şaquli uzun divarlar üçün mükəmməl.',
  gift:'Böyük məkan sahiblərinə, otel/restoran üçün – əlamətdar hədiyyə.',
  metaDesc:'Firuzəyi dəhliya köhnə taxta fon böyük format 70x200 tablo. Divar tablosu Bakı.'
},
   {
  num:'060', code:'VB-GAL-060', alt:'060',
  title:'Qızıl Maral – Yaşıl Parıltılı Gecə Tablosu',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'Əl işi – Qızıl çərçivəli, Parıltılı',
  seoDesc:'Qara fonda qızıl parıltılı maral, yaşıl neon nöqtələr, qızıl çərçivə – əl işi parıltılı tablo.',
  emoDesc:'Gecənin qaranlığında qızıl maral durur – yaşıl ulduzlar onu izləyir. Sehirli, nağılvari, əzəmətli. Qızıl çərçivə lüksü tamamlayır.',
  interior:'Lüks qonaq otağı, yataq otağı, premium ofis. Qara-qızıl tonlu interyerlərə ideal.',
  gift:'Xüsusi hədiyyə – lüks zövqlü insanlar, prestijli ev sahibləri üçün unudulmaz seçim.',
  metaDesc:'Qızıl maral yaşıl parıltı qara fon qızıl çərçivəli əl işi tablo. Divar tablosu Bakı.'
},
{
  num:'064', code:'VB-GAL-064', alt:'064',
  title:'Dağlar və Quşlar – Qızıl Dalğalı Abstrakt Tablo',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'50×80 sm', material:'Kanvas çap – Parıltılı',
  seoDesc:'Boz dağlar, qızıl-narıncı üfüq, uçan quşlar – parıltılı minimalist abstrakt 50x80 sm tablo.',
  emoDesc:'Dağlar üzərindən quşlar keçir, qızıl üfüq hər şeyi isidır. Sakitlik, azadlıq, uzaqlara baxmaq hissi.',
  interior:'Minimalist qonaq otağı, iş otağı, ofis. Bej-qızıl-boz tonlu interyerlərə mükəmməl.',
  gift:'Həyatı sadə görmək istəyənlərə, meditasiya edənlərə – sakit, dərin hədiyyə.',
  metaDesc:'Dağlar quşlar qızıl üfüq abstrakt minimalist parıltılı tablo 50x80. Divar tablosu Bakı.'
},
{
  num:'048', code:'VB-GAL-048', alt:'048',
  title:'Tünd Lalələr – Böyük Format Parıltılı Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'70×200 sm', material:'Kanvas çap – Parıltılı, Böyük Format',
  seoDesc:'Narıncı-qəhvəyi fonda tünd bordo lalələr – rəngarəng parıltılı 70x200 sm böyük format tablo.',
  emoDesc:'İki lalə yuxarı uzanır – iki metr boy. Böyüklük, cəsarət, həyat sevinci. Bu tablo otağın simvoludur.',
  interior:'Giriş hollu, böyük qonaq otağı, restoran, otel koridoru. Uzun şaquli divarlar üçün yaradılmış.',
  gift:'Böyük məkan sahiblərinə, otel/restoran dizaynı üçün – diqqət çəkən əlamətdar tablo.',
  metaDesc:'Tünd bordo lalələr böyük format 70x200 parıltılı tablo. Divar tablosu Bakı.'
},
{ num:'123', code:'VB-GAL-123', alt:'123',
  title:'Mədinə Nuru – LED İşıqlı Məscid Tablosu',
  artist:'Naməlum rəssam', cat:'din',
  size:'Ölçü soruşun', material:'LED işıqlı kanvas çap',
  seoDesc:'Məscidi-Nəbəvi gecə görünüşü, minarələr, LED işıqlar – parıldayan islami divar tablosu.',
  emoDesc:'Gecənin qaranlığında parlayan bu müqəddəs məkan hər baxana hüzur və inam verir.',
  interior:'Qonaq otağı, yataq otağı, dua küncü. İslami dəkorlu interyerlərə ideal.',
  gift:'Həccə gedənlərə, dindar ailələrə, bayram hədiyyəsi olaraq mənalı seçim.',
  metaDesc:'Mədinə Məscid LED işıqlı tablo kanvas. Divar tablosu Bakı.' },

{ num:'124', code:'VB-GAL-124', alt:'124',
  title:'Qış Quşu – Qırmızı Cardinal Tablo',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'70x100 sm', material:'Çərçivəli kanvas çap',
  seoDesc:'Qarlı quş evi üzərində oturmuş qırmızı cardinal quşu – qış mövzulu vertikal divar tablosu.',
  emoDesc:'Soyuq bir qış gününün sakitliyi – qırmızı quş, ağ qar, boz fon. Sakit və estetik.',
  interior:'Koridor, yataq otağı, oxu bucağı. Minimalist və skandinav üslublu interyerlərə uyğun.',
  gift:'Təbiət sevənlərə, quş sevənlərə, evə yeni köçənlərə gözəl hədiyyə.',
  metaDesc:'Qırmızı cardinal quş qış tablo 70x100 kanvas. Divar tablosu Bakı.' },

{ num:'125', code:'VB-GAL-125', alt:'125',
  title:'Dalğa Rəqsi – Maral və Yelkənli Abstrakt Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Şərab qədəhi, narıncı-mavi dalğalar, maral fiqurları, yelkənli gəmi – müasir abstrakt triptix tablo.',
  emoDesc:'Hərəkət, azadlıq, estetika. Bu üç panel birlikdə divara dinamik enerji verir.',
  interior:'Qonaq otağı, ofis, müasir üslublu interyerlər. Boz-ağ divarlarla mükəmməl.',
  gift:'Müasir zövqlü insanlara, ofis açılışına, evlilik hədiyyəsi kimi ideal.',
  metaDesc:'Abstrakt dalğa maral yelkənli triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'126', code:'VB-GAL-126', alt:'126',
  title:'Payız Nəfəsi – Qızıl Meşə və Rəngli Lent Triptix',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Qırmızı günəş, yaşıl ağac, sarı payız meşəsi, marallar, qızıl-firuzəyi lent – üç panelli tablo.',
  emoDesc:'Payızın zəngin rəng palitrasını evinizə gətirin. Hər panel ayrıca bir hiss, birlikdə tam bir şeir.',
  interior:'Qonaq otağı, yataq otağı. Ağ, bej, açıq rəngli divarlara əla uyğun.',
  gift:'Təbiət sevənlərə, sənətsevər dostlara, ev hədiyyəsi kimi sevindirir.',
  metaDesc:'Payız meşə maral qızıl triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'127', code:'VB-GAL-127', alt:'127',
  title:'Gecə Maralı – Tünd Göy-Qızıl Fantaziya Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Tünd göy fon, qızıl quşlar, tam ay, qızıl maral, çılpaq ağaclar, firuzəyi dalğalar – gecə triptix tablo.',
  emoDesc:'Gecənin mistik gözəlliyi – qızıl və firuzəyi rənglər divarda dərinlik yaradır.',
  interior:'Qonaq otağı, yataq otağı. Tünd, lüks üslublu interyerlərə mükəmməl uyğun.',
  gift:'Estetika sevənlərə, lüks ev dekorasiyası hədiyyəsi kimi əla seçim.',
  metaDesc:'Gecə maral ay qızıl firuzəyi triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'128', code:'VB-GAL-128', alt:'128',
  title:'Qızıl Ağac Cənnəti – Ay İşığında Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Qızıl çiçəkli ağaclar, zıplayan marallar, dolunay, firuzəyi-qızıl dalğalı dağlar – üç panelli lüks tablo.',
  emoDesc:'Nağıl kimi bir mənzərə – qızıl ağaclar, ay işığı, azad marallar. Divara sehr qatır.',
  interior:'Qonaq otağı, yataq otağı. Göy, tünd mavi, lacivert divarlar ilə əla görünür.',
  gift:'Ev açımına, toy hədiyyəsinə, dekorasiya sevənlərə ideal seçim.',
  metaDesc:'Qızıl ağac maral ay triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'129', code:'VB-GAL-129', alt:'129',
  title:'Firuzəyi Axın – Qızıl Balıq Mərməri Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli şüşəli/kanvas çap',
  seoDesc:'Firuzəyi mərməri axın, qızıl balıqlar, qızıl kəpənəklər, ağ fon – müasir lüks triptix tablo.',
  emoDesc:'Su kimi axan rənglər, qızılın parıltısı. Bu tablo otağa sakitlik və zənginlik enerjisi gətirir.',
  interior:'Qonaq otağı, yataq otağı, korporativ məkan. Ağ və açıq tonlu interyerlərə ideal.',
  gift:'Lüks ev hədiyyəsi, ofis açılışı, toy hədiyyəsi kimi seçilən əsər.',
  metaDesc:'Firuzəyi mərməri qızıl balıq triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'130', code:'VB-GAL-130', alt:'130',
  title:'Üç Dünya – Maral, Dağ və Burulğan Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Qızıl maral mavi burulğanda, rəngli qatlı dağ mənzərəsi, firuzəyi burulğan maral – müasir triptix.',
  emoDesc:'Hər panel fərqli bir dünya – üçü birləşdikdə heyrətamiz bir harmonia yaranır.',
  interior:'Qonaq otağı, yataq otağı, müasir minimalist interyerlərə uyğun.',
  gift:'Sənətsevərlərə, kreativ insanlara, ev dekorasiyası üçün unikal hədiyyə.',
  metaDesc:'Maral dağ burulğan abstrakt triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'131', code:'VB-GAL-131', alt:'131',
  title:'Şəffaf Yarpaqlar – Maral və Ağac Triptix',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Şəffaf qızıl-qəhvəyi-teal yarpaqlar, çılpaq qara ağac, qızıl maral, uçan quşlar – açıq tonda triptix.',
  emoDesc:'Yüngül, şəffaf, sakit. Bu triptix otağa işıq və zəriflik gətirir.',
  interior:'Qonaq otağı, yataq otağı, koridor. Bej, krem, açıq rəngli interyerlərə ideal.',
  gift:'Zərif zövqlü insanlara, ev hədiyyəsi, yeni evə köçənlərə mükəmməl.',
  metaDesc:'Şəffaf yarpaq maral ağac triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'132', code:'VB-GAL-132', alt:'132',
  title:'Gecə Gölü – Mavi Dağ və Qızıl Ağac Triptix',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Tam ay, tünd mavi dağ gölü, qızıl yarpaq ağacı, ağ atlayan maral – gecə mənzərəsi triptix tablo.',
  emoDesc:'Gecə sükutunda parıldayan göl və qızıl ağac – bu tablo hər axşam xəyala aparır.',
  interior:'Qonaq otağı, yataq otağı. Mavi, lacivert, tünd rəngli interyerlərə əla uyğun.',
  gift:'Romantik ruhlulara, gözəl mənzərə sevənlərə, ev açımı hədiyyəsi kimi ideal.',
  metaDesc:'Gecə gölü maral qızıl ağac triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'133', code:'VB-GAL-133', alt:'133',
  title:'Qızıl Balıq Yağışı – Parça Altında Maral Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Qızıl parça çətiri, sürü qızıl balıqlar, teal-mavi fon, qızıl marallar – lüks fantaziya triptix tablo.',
  emoDesc:'Qızılın axını, balıqların cərəyanı – bu tablo bolluq və həyat enerjisi ilə dolu.',
  interior:'Qonaq otağı, yemək otağı. Tünd yaşıl, zümrüd, qızıl aksentli interyerlərə ideal.',
  gift:'Uğur və bolluq istəyənlərə, iş yeri açılışına, toy hədiyyəsi kimi seçilir.',
  metaDesc:'Qızıl balıq parça maral triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'134', code:'VB-GAL-134', alt:'134',
  title:'Qızıl Günəş – Qara-Gümüş Dağ Triptix',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Gümüşü-ağ dağlar, qara fon, qızıl günəş, uçan maral silueti, quş sürüləri – kontrast triptix tablo.',
  emoDesc:'Qara ilə qızılın dramatik kontrastı – güclü, cəsarətli, lüks. Divarda güc simvolu.',
  interior:'Qonaq otağı, ofis, müasir lüks interyerlər. Qara, ağ, gümüşü tonlarla ideal.',
  gift:'Lider ruhlulara, iş adamlarına, müasir ofis dekorasiyası üçün prestijli seçim.',
  metaDesc:'Qızıl günəş qara dağ maral triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'135', code:'VB-GAL-135', alt:'135',
  title:'Rəngbərəng Gecə – Maral Siluetləri Triptix',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Narıncı-yaşıl göy, dolunay, qara maral siluetləri, şaxəli ağaclar – canlı rəngli gecə triptix tablo.',
  emoDesc:'Gecənin vəhşi gözəlliyi – yanıb sönən rənglər, əzəmətli marallar. Coşqun və enerjili.',
  interior:'Qonaq otağı, gənclər otağı. Yaşıl, narıncı, canlı rəngli interyerlərə uyğun.',
  gift:'Həyat sevənlərə, enerjik insanlara, gənclərə rəngarəng hədiyyə.',
  metaDesc:'Maral siluet rəngli gecə triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'136', code:'VB-GAL-136', alt:'136',
  title:'Qızıl Meşə Körpüsü – Firuzəyi Çay Triptix',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Qızıl yarpaq ağaclar, firuzəyi çay, tünd cizgili zemin, qızıl maral meşə içində – triptix tablo.',
  emoDesc:'Qızıl yarpaqların altında sakit axan çay. Bu tablo gözəllik və zənginliyi eyni anda verir.',
  interior:'Qonaq otağı, yataq otağı. Narıncı, qızılı, firuzəyi aksent rəngli interyerlərə mükəmməl.',
  gift:'Təbiət sevənlərə, ev açımına, yeni evlilərə gözəl hədiyyə.',
  metaDesc:'Qızıl meşə maral firuzəyi çay triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'137', code:'VB-GAL-137', alt:'137',
  title:'Venesiya Kanalı – İtaliya Şəhər Mənzərəsi',
  artist:'Naməlum rəssam', cat:'sheher',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Venesiya kanalı, qondola, körpü, rəngli binalar, çiçəkli kafe – italyan şəhər mənzərəsi tablo.',
  emoDesc:'Venesiyada bir gün – kanal, qondola, həyatın axışı. Bu tablo evə İtaliya ruhu gətirir.',
  interior:'Qonaq otağı, yemək otağı, kafe, restoran. Aralıq dənizi üslublu interyerlərə ideal.',
  gift:'Səyahətsevənlərə, İtaliya heyranlarına, restoran/kafe dekorasiyası üçün mükəmməl.',
  metaDesc:'Venesiya kanal qondola tablo kanvas. Divar tablosu Bakı.' },

{ num:'138', code:'VB-GAL-138', alt:'138',
  title:'Liman Gecəsi – İmpressionist Yağlı Boya Tablo',
  artist:'Naməlum rəssam', cat:'sheher',
  size:'Ölçü soruşun', material:'Yağlı boya üslubu kanvas',
  seoDesc:'Gecə limanı, qayıqlar, küçə fənərləri, rəngli ağaclar, su əksi – impressionist üslub yağlı boya tablo.',
  emoDesc:'Van Gogh enerjisi – qalın fırça zərbələri, parıldayan su, gecənin sehri. Klassik və güclü.',
  interior:'Qonaq otağı, ofis, kafe, restoran. İstənilən interyer üslubuna uyğun universal tablo.',
  gift:'Sənətsevərlərə, klassik zövqlü insanlara, prestijli hədiyyə axtaranlara.',
  metaDesc:'Liman gecə qayıq impressionist yağlı boya tablo kanvas. Divar tablosu Bakı.' },

{ num:'139', code:'VB-GAL-139', alt:'139',
  title:'Mandala Pişik – Rəngli Ornamental Tablo',
  artist:'Naməlum rəssam', cat:'haivan',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Mavi fonda rəngarəng mandala naxışlı pişik üzü – gözəl gözlər, çiçəklər, ornamental divar tablosu.',
  emoDesc:'Mistik, rəngli, unikal. Bu pişik tablo baxanı hipnoz edir – incə naxışlar, canlı rənglər.',
  interior:'Uşaq otağı, gənclər otağı, yaradıcı iş məkanı. Canlı, bohem üslublu interyerlərə uyğun.',
  gift:'Pişik sevənlərə, uşaqlara, yaradıcı ruhlulara əyləncəli və rəngarəng hədiyyə.',
  metaDesc:'Mandala pişik rəngli ornament tablo kanvas. Divar tablosu Bakı.' },

{ num:'140', code:'VB-GAL-140', alt:'140',
  title:'Afrika Gözəli – Çalmalı Qadın Portreti',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Qızılı fonda çəhrayı çalmalı Afrika qadını profil portreti, güclü siluet – divar tablo.',
  emoDesc:'Güc, qürur, zəriflik – bir anda. Bu portret otağa mədəniyyət və estetika gətirir.',
  interior:'Qonaq otağı, yataq otağı, ofis. Narıncı, qızılı, sarı aksentli interyerlərə mükəmməl.',
  gift:'Güclü qadınlara, sənətsevərlərə, etnik dekorasiya sevənlərə unikal hədiyyə.',
  metaDesc:'Afrika qadın portret çalma qızılı tablo kanvas. Divar tablosu Bakı.' },

{ num:'141', code:'VB-GAL-141', alt:'141',
  title:'Kəpənək Qadın – Qara-Ağ Portret Tablo',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Qara-ağ qadın üzü üzərindəki narıncı kəpənək, qızıl dırnaqlar – müasir pop-art portret tablo.',
  emoDesc:'Kontrast möcüzəsi – ağ-qara dərin sakitlik, narıncı kəpənək isə həyat. Heyrətamiz effekt.',
  interior:'Yataq otağı, koridor, gözəllik salonu. Müasir, stil sahibi interyerlərə ideal.',
  gift:'Müasir qadınlara, gözəllik salonuna, kreativ iş məkanına dekorasiya hədiyyəsi.',
  metaDesc:'Kəpənək qadın portret qara ağ tablo kanvas. Divar tablosu Bakı.' },

{ num:'142', code:'VB-GAL-142', alt:'142',
  title:'Tropik Tutuquşular – Mavi-Sarı Ara Tablo',
  artist:'Naməlum rəssam', cat:'haivan',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'İki mavi-sarı ara tutuquşusu xurma yarpaqları arasında – canlı tropik quş divar tablosu.',
  emoDesc:'Tropiklərin canlı rəngləri – mavi, sarı, yaşıl. Bu tablo evə ekzotik enerji və canlılıq gətirir.',
  interior:'Qonaq otağı, mətbəx, uşaq otağı, tropik üslublu interyerlər. Yaşıl bitkili mühitlərə ideal.',
  gift:'Quş sevənlərə, uşaqlara, tropik dekorasiya sevənlərə rəngarəng hədiyyə.',
  metaDesc:'Tropik tutuquş mavi sarı quş tablo kanvas. Divar tablosu Bakı.' },
{ num:'143', code:'VB-GAL-143', alt:'143',
  title:'Çiçək Dəsti – Firuzəyi Vazada Rəngli Buket',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Firuzəyi vazada çoxrəngli çiçək buketi – çəhrayı, sarı, ağ gülər, dəniz qabığı, klassik natürmort tablo.',
  emoDesc:'Baharın bütün rəngləri bir tabloda – canlı, sevincli, təzə. Evinizə çiçəkli enerji gətirir.',
  interior:'Qonaq otağı, mətbəx, yataq otağı. Açıq rəngli, romantik üslublu interyerlərə ideal.',
  gift:'Çiçək sevənlərə, qadınlara, doğum günü hədiyyəsi kimi sevindirir.',
  metaDesc:'Firuzəyi vaza rəngli çiçək buket natürmort tablo kanvas. Divar tablosu Bakı.' },

{ num:'144', code:'VB-GAL-144', alt:'144',
  title:'Tısbağa Ustası – Osmanlı Klassik Tablo',
  artist:'Osman Hamdi Bəy üslubu', cat:'klassik',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Qırmızı paltarlı sərban, tısbağalar, Osmanlı memarlığı, çini mozaika – klassik Şərq üslubu tablo.',
  emoDesc:'Tarix, zaman və səbr. Bu tablo Şərqin dərin fəlsəfəsini evinizə gətirir.',
  interior:'Qonaq otağı, kitabxana, ofis. Klassik, Osmanlı, Şərq üslublu interyerlərə mükəmməl.',
  gift:'Tarix sevənlərə, incəsənət bilicilərinə, prestijli hədiyyə axtaranlara.',
  metaDesc:'Osmanlı tısbağa ustası klassik Şərq tablo kanvas. Divar tablosu Bakı.' },

{ num:'145', code:'VB-GAL-145', alt:'145',
  title:'Bahar Nəğməsi – Sarı Quşlar Çiçəkli Budaqda',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Mavi fonda çiçəkli budaqlarda üç sarı quş – bahar mənzərəsi, zərif divar tablosu.',
  emoDesc:'Baharın ilk səsi – sarı quşlar, çiçəklər, mavi asiman. Yüngül, təzə, nəfəs alan tablo.',
  interior:'Qonaq otağı, yataq otağı, uşaq otağı. Açıq mavi, ağ, bej rəngli interyerlərə ideal.',
  gift:'Quş sevənlərə, zərif zövqlü qadınlara, bahar hədiyyəsi kimi mükəmməl.',
  metaDesc:'Sarı quş çiçəkli budaq bahar tablo kanvas. Divar tablosu Bakı.' },

{ num:'146', code:'VB-GAL-146', alt:'146',
  title:'Bakı Üfüqü – Alov Qüllələri Gün Batımı Tablosu',
  artist:'Naməlum rəssam', cat:'sheher',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Bakı şəhəri, Alov Qüllələri, Heydər Əliyev Mərkəzi, drammatik gün batımı – Azərbaycan mənzərəsi tablo.',
  emoDesc:'Vətən sevgisi, qürur, Bakının əzəməti. Bu tablo hər Azərbaycanlının qəlbinə toxunur.',
  interior:'Qonaq otağı, ofis, yataq otağı. İstənilən interyerə millı qürur gətirir.',
  gift:'Vətənsevərlərə, Bakı həsrəti çəkənlərə, xarici qonaqlara ən mənalı hədiyyə.',
  metaDesc:'Bakı Alov Qüllələri gün batımı tablo kanvas. Divar tablosu Bakı.' },

{ num:'147', code:'VB-GAL-147', alt:'147',
  title:'Qız Qülləsi – İstanbul Fənər və Martılar Tablosu',
  artist:'Naməlum rəssam', cat:'sheher',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'İstanbul Qız Qülləsi, Boğaz, qızıl fənər, uçan martılar, dramatik gün batımı – türk şəhər tablosu.',
  emoDesc:'İstanbulun romantik silueti – Qız Qülləsi, martılar, fənər işığı. Nostaljik və heyrətamiz.',
  interior:'Qonaq otağı, yataq otağı, koridor. İstənilən üslublu interyerlərə uyğun universal tablo.',
  gift:'Türkiyə sevənlərə, səyahətsevərlərə, romantik ruhlulara ideal hədiyyə.',
  metaDesc:'Qız Qülləsi İstanbul Boğaz martı tablo kanvas. Divar tablosu Bakı.' },

{ num:'148', code:'VB-GAL-148', alt:'148',
  title:'Meşə Yolu – Sevgililər İmpressionist Tablo',
  artist:'Leonid Afremov üslubu', cat:'romantik',
  size:'Ölçü soruşun', material:'Yağlı boya üslubu kanvas',
  seoDesc:'Yaşıl-mavi meşə yolunda cütlük silueti – qalın fırça, canlı rənglər, Afremov üslubu impressionist tablo.',
  emoDesc:'Sevginin sehri – iki insan, rəngli meşə, sonsuz yol. Bu tablo evinizə romantizm gətirir.',
  interior:'Qonaq otağı, yataq otağı. Yaşıl, mavi, canlı rəngli interyerlərə mükəmməl.',
  gift:'Cütlüklərə, toy hədiyyəsinə, romantik ruhlulara ən mənalı seçim.',
  metaDesc:'Meşə yolu sevgililər impressionist tablo kanvas. Divar tablosu Bakı.' },

{ num:'149', code:'VB-GAL-149', alt:'149',
  title:'Sarı Günəş – Dəniz Sahili İmpressionist Tablo',
  artist:'Naməlum rəssam', cat:'tebiet',
  size:'70x100 sm', material:'Yağlı boya üslubu kanvas',
  seoDesc:'Sarı spiralvari günəş, qızılı ağac, firuzəyi dəniz, qayalıq sahil – 70x100sm impressionist tablo.',
  emoDesc:'Günəşin enerji dövrü, dənizin sakitliyi – bu tablo otağa işıq və həyat enerjisi verir.',
  interior:'Qonaq otağı, yataq otağı. Firuzəyi, sarı, qızılı aksentli interyerlərə ideal.',
  gift:'Dəniz sevənlərə, enerjik insanlara, ev açımı hədiyyəsi kimi mükəmməl.',
  metaDesc:'Sarı günəş dəniz sahil impressionist tablo 70x100 kanvas. Divar tablosu Bakı.' },

{ num:'150', code:'VB-GAL-150', alt:'150',
  title:'Bənövşəyi VW – Çiçəkli Meşədə Retro Avtomobil',
  artist:'Naməlum rəssam', cat:'retro',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Bənövşəyi VW Beetle, çiçəkli ağaclar, velosiped, dökülen ləçəklər – retro romantik divar tablosu.',
  emoDesc:'Köhnə günlər, sevimli avtomobil, çiçəkli bahar – nostaljik və şən. Hər baxanda gülümsədir.',
  interior:'Qonaq otağı, gənclər otağı, qaraj, kafe. Retro, bohem üslublu interyerlərə ideal.',
  gift:'Avtomobil sevənlərə, retro üslub heyranlarına, gənclərə rəngarəng hədiyyə.',
  metaDesc:'Bənövşəyi VW Beetle çiçəkli meşə retro tablo kanvas. Divar tablosu Bakı.' },

{ num:'151', code:'VB-GAL-151', alt:'151',
  title:'Tropik Cənnət – Strelitzia və Anthurium Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Strelitzia, anthurium, monstera yarpaqları – narıncı, sarı, qırmızı, çəhrayı tropik çiçək divar tablosu.',
  emoDesc:'Tropiklərin coşqun gözəlliyi – canlı rənglər, ekzotik çiçəklər. Otağa yay enerjisi gətirir.',
  interior:'Qonaq otağı, koridor, restoran, otel. Müasir, ekzotik üslublu geniş mekanlara ideal.',
  gift:'Çiçək sevənlərə, tropik dekorasiya istəyənlərə, restoran/otel üçün əla seçim.',
  metaDesc:'Tropik strelitzia anthurium çiçək tablo kanvas. Divar tablosu Bakı.' },

{ num:'152', code:'VB-GAL-152', alt:'152',
  title:'Rəngli Papatyalar – Canlı Çiçək Makro Tablo',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Makro çəkilmiş narıncı, mavi, sarı, çəhrayı papatya çiçəkləri – canlı rəngli yaxın plan divar tablosu.',
  emoDesc:'Həyatın rəngarəng tərəfi – hər ləçək başqa bir rəng, başqa bir hiss. Coşqun və enerjili.',
  interior:'Qonaq otağı, mətbəx, gənclər otağı. Canlı, rəngarəng, müasir interyerlərə mükəmməl.',
  gift:'Optimist insanlara, çiçək sevənlərə, şən ev dekorasiyası istəyənlərə.',
  metaDesc:'Rəngli papatya makro çiçək tablo kanvas. Divar tablosu Bakı.' },

{ num:'153', code:'VB-GAL-153', alt:'153',
  title:'Şərq Antikası – Milli Qab-Qacaq Triptix',
  artist:'Naməlum rəssam', cat:'klassik',
  size:'Ölçü soruşun', material:'3 hissəli çərçivəli kanvas',
  seoDesc:'Milli-Şərq çaynikləri, naxışlı boşqablar, qırmızı parça, gəmi tüfəngi – antik qab triptix tablo.',
  emoDesc:'Tarixin əşyaları, Şərqin zənginliyi – bu triptix otağa köklü mədəniyyət enerjisi gətirir.',
  interior:'Qonaq otağı, yemək otağı, kitabxana. Klassik, antik, Osmanlı üslublu interyerlərə ideal.',
  gift:'Tarix sevənlərə, koleksiyonerlərə, antik zövqlü insanlara prestijli hədiyyə.',
  metaDesc:'Milli Şərq çaynik antik qab triptix tablo kanvas. Divar tablosu Bakı.' },

{ num:'154', code:'VB-GAL-154', alt:'154',
  title:'Rəngli Park Gecəsi – İmpressionist Meşə Yolu',
  artist:'Leonid Afremov üslubu', cat:'romantik',
  size:'Ölçü soruşun', material:'Yağlı boya üslubu kanvas',
  seoDesc:'Gecə park yolu, fənərlər, payız ağacları, siluetlər – mavi-sarı-narıncı impressionist geniş tablo.',
  emoDesc:'Park fənərlərinin altında rəngarəng gecə yürüşü – bu tablo divara canlılıq və dramatizm verir.',
  interior:'Qonaq otağı, koridor. Canlı, rəngarəng, müasir istənilən interyerə uyğun.',
  gift:'Sənətsevərlərə, impressionist üslub heyranlarına, ev açımı hədiyyəsi kimi.',
  metaDesc:'Rəngli park gecəsi impressionist meşə yolu tablo kanvas. Divar tablosu Bakı.' },

{ num:'155', code:'VB-GAL-155', alt:'155',
  title:'Rokoko Musiqisi – Sarayda Fortepiano Cütlüyü',
  artist:'Naməlum rəssam', cat:'klassik',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'18. əsr rokoko sarayında fortepiano çalan cənab, not oxuyan xanım – Fransız saray üslubu klassik tablo.',
  emoDesc:'Zarif, köklü, aristokratik. Bu tablo otağa Avropanın qızıl dövrünün elegantlığını gətirir.',
  interior:'Qonaq otağı, yemək otağı, musiqi otağı. Klassik, antik, barokko üslublu interyerlərə ideal.',
  gift:'Musiqi sevənlərə, klassik zövqlü insanlara, prestijli ev hədiyyəsi kimi.',
  metaDesc:'Rokoko fortepiano saray cütlük klassik tablo kanvas. Divar tablosu Bakı.' },

{ num:'156', code:'VB-GAL-156', alt:'156',
  title:'Hörüklü Gözəl – Müasir Afrika Qadın Portreti',
  artist:'Naməlum rəssam', cat:'portret',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Hörüklü topuz saç, çəhrayı baş bandı, halqa sırğa – bej fonda müasir Afrika qadın profil portreti.',
  emoDesc:'Zəriflik, özgüvən, gözəllik. Bu portret hər baxana ilham verir – sadə amma güclü.',
  interior:'Qonaq otağı, yataq otağı, gözəllik salonu. Bej, krem, nude tonlu interyerlərə mükəmməl.',
  gift:'Müasir qadınlara, gözəllik salonuna, zərif zövqlü insanlara ideal hədiyyə.',
  metaDesc:'Hörüklü qadın portret çəhrayı baş bandı tablo kanvas. Divar tablosu Bakı.' },

{ num:'157', code:'VB-GAL-157', alt:'157',
  title:'Rəngli Çiçək – Abstrakt Kolaj Tablo',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Narıncı-tünd qırmızı çiçək, rəngli həndəsi formalar, yaşıl yarpaqlar – abstrakt folk üslubu tablo.',
  emoDesc:'Rəngarəng, şən, yaradıcı. Bu tablo unikal estetikası ilə hər otağa fərqli bir enerji gətirir.',
  interior:'Uşaq otağı, gənclər otağı, yaradıcı iş məkanı. Canlı, bohem interyerlərə ideal.',
  gift:'Kreativ insanlara, uşaqlara, rəngarəng dekorasiya sevənlərə sevindirir.',
  metaDesc:'Abstrakt rəngli çiçək kolaj folk tablo kanvas. Divar tablosu Bakı.' },

{ num:'158', code:'VB-GAL-158', alt:'158',
  title:'Sehrli Maral – Psixedelik Fantaziya Tablo',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Qızıl maskalı maral, rəngli kəpənəklər, qırmızı balıq, çiçəklər, dalğalar – psixedelik fantaziya tablo.',
  emoDesc:'Mistik, heyrətamiz, unikal. Bu tablo baxana başqa bir dünyanın qapısını açır.',
  interior:'Gənclər otağı, yaradıcı iş məkanı, qonaq otağı. Tünd, ekzotik interyerlərə uyğun.',
  gift:'Fantaziya sevənlərə, yaradıcı ruhlulara, unikal hədiyyə axtaranlara.',
  metaDesc:'Psixedelik sehrli maral fantaziya tablo kanvas. Divar tablosu Bakı.' },

{ num:'159', code:'VB-GAL-159', alt:'159',
  title:'Mavi Maral – Mistik Meşə Fantaziya Tablosu',
  artist:'Naməlum rəssam', cat:'abstrakt',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Mavi-bənövşəyi maral, buynuzlarda ağaclar, şəlalə, gecə meşəsi – mistik fantaziya divar tablosu.',
  emoDesc:'Nağıldan çıxmış mavi maral – güclü, mistik, heyrətamiz. Divara sonsuz dərinlik verir.',
  interior:'Gənclər otağı, yataq otağı, qonaq otağı. Tünd mavi, bənövşəyi interyerlərə ideal.',
  gift:'Fantaziya sevənlərə, gənclərə, mistik dünya heyranlarına unikal hədiyyə.',
  metaDesc:'Mavi maral mistik meşə fantaziya tablo kanvas. Divar tablosu Bakı.' },

{ num:'160', code:'VB-GAL-160', alt:'160',
  title:'Şam İşığı – Dəmir Şamdanda Yanan Şamlar Tablosu',
  artist:'Naməlum rəssam', cat:'romantik',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Dəmir şamdanda yanan yeddi şam, isti qızılı işıq, kərpic fon – romantik atmosfer divar tablosu.',
  emoDesc:'İsti, rahat, nəfəs alan. Bu tablo yataq otağına axşam sakitliyini və romantizmi gətirir.',
  interior:'Yataq otağı, qonaq otağı, restoran. Kərpic, industrial, rustik üslublu interyerlərə ideal.',
  gift:'Romantik cütlüklərə, ev açımına, sakit atmosfer istəyənlərə isti hədiyyə.',
  metaDesc:'Şam işığı dəmir şamdan romantik tablo kanvas. Divar tablosu Bakı.' },

{ num:'161', code:'VB-GAL-161', alt:'161',
  title:'Mavi Lotus – Qızıl Xətli Çiçək Tablosu',
  artist:'Naməlum rəssam', cat:'cicek',
  size:'Ölçü soruşun', material:'Kanvas çap',
  seoDesc:'Tünd mavi fonda ağ-rəngli lotus çiçəkləri, qızıl saplar, narıncı-qırmızı yarpaqlar – müasir lotus tablo.',
  emoDesc:'Saf, sakit, dərin. Lotus sülhün simvoludur – bu tablo otağa meditasiya enerjisi gətirir.',
  interior:'Qonaq otağı, yataq otağı, spa, meditasiya bucağı. Mavi, lacivert interyerlərə mükəmməl.',
  gift:'Sakitlik axtaranlara, meditasiya sevənlərə, zərif zövqlü insanlara mənalı hədiyyə.',
  metaDesc:'Mavi lotus qızıl xətli çiçək tablo kanvas. Divar tablosu Bakı.' },

{ num:'162', code:'VB-GAL-162', alt:'162',
  title:'Payız Körpüsü – Çətirli Qadın İmpressionist Tablo',
  artist:'Naməlum rəssam', cat:'romantik',
  size:'Ölçü soruşun', material:'Yağlı boya üslubu kanvas',
  seoDesc:'Sarı-narıncı payız meşəsində körpüdə çətirli qadın silueti – impressionist yağlı boya üslubu tablo.',
  emoDesc:'Payızın qızıl gözəlliyi – körpü, çətir, sarı yarpaqlar. Bu tablo baxana nostaljik bir xəyal yaşadır.',
  interior:'Qonaq otağı, yataq otağı, koridor. Sarı, narıncı, payız tonlu interyerlərə ideal.',
  gift:'Romantik ruhlulara, payız sevənlərə, sənətsevərlərə gözəl hədiyyə.',
  metaDesc:'Payız körpü çətirli qadın impressionist tablo kanvas. Divar tablosu Bakı.' },
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
