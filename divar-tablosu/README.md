# VəBo Gallery – Divar Tabloları Saytı

## 📁 Qovluq Strukturu

```
/
├── index.html          ← Ana səhifə
├── blog.html           ← Blog səhifəsi
├── style.css           ← Bütün CSS
├── script.js           ← Bütün JS + Data
├── sitemap.xml         ← Google Search Console
├── robots.txt          ← Crawler qaydaları
├── favicon.ico         ← Favicon
├── images/
│   ├── og.jpg          ← Open Graph şəkil (1200×630)
│   └── logo.png        ← Logo
├── 001.jpg             ← Tablo şəkilləri (001.jpg – 999.jpg)
├── 002.jpg
├── ...
└── 999.jpg
```

## 🚀 Başlamaq üçün

### 1. WhatsApp nömrəsini dəyişdir
`index.html`, `blog.html`, `script.js` fayllarında `994XXXXXXXXX` axtarıb öz nömrənlə əvəz et.

### 2. Şəkilləri yüklə
001.jpg – 999.jpg formatında şəkilləri kök qovluğa yüklə.
Əgər başqa format istəsən, `script.js`-də `CONFIG.imageExt` dəyərini dəyiş:
```js
imageExt: '.webp'  // ya .png, .jpg
```

### 3. Tablo datalarını doldur
`script.js`-dəki `generateArtworks()` funksiyası hazırda boş placeholder yaradır.
Şəkilləri Claude ilə analiz etdikdən sonra hər tablo üçün bu məlumatları doldur:

```js
{
  num:      '001',
  title:    'Dağ mənzərəsi – Qış',   // tablo adı
  artist:   'Elçin Məmmədov',          // rəssam
  cat:      'menzere',                  // menzere|portret|abstrakt|sheher|hediyye
  seoDesc:  'SEO description...',
  emoDesc:  'Emosional açıqlama...',
  interior: 'Qonaq otağı üçün ideal...',
  gift:     'Doğum günü hədiyyəsi kimi...',
  metaDesc: 'Meta description...'
}
```

### 4. Domain dəyişikliyi
`vebo-gallery.az` axtarıb öz domain adınla əvəz et (index.html, blog.html, sitemap.xml, script.js).

### 5. Google Search Console
- `sitemap.xml`-i Google Search Console-a əlavə et
- `robots.txt` avtomatik işləyir

## 🔧 Fərdiləşdirmə

### Kateqoriyalar
Filter tab-larını `index.html`-dəki `.filter-tabs` bölməsindən dəyiş.

### Rənglər
`style.css`-in yuxarısındakı `:root` CSS dəyişənlərini dəyiş:
```css
--gold:  #b8860b;   /* əsas vurğu rəngi */
--ink:   #1a1612;   /* tünd fon */
--cream: #faf8f4;   /* açıq fon */
```

### Məhsul başına yükləmə
`CONFIG.pageSize = 40` — hər "daha çox yüklə" klikdə neçə tablo göstərilsin.

## 📊 SEO Yoxlama Siyahısı
- [ ] WhatsApp nömrəsi dəyişildi
- [ ] Domain adı dəyişildi
- [ ] og.jpg şəkli yükləndi (1200×630)
- [ ] favicon.ico əlavə edildi
- [ ] Sitemap Search Console-a göndərildi
- [ ] Google Analytics kodu əlavə edildi (isteğe bağlı)
