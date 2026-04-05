# Avukat Web Sitesi Şablonu — Teknik & Tasarım Spesifikasyonu v2

> Antigravity geliştirici ekibine teslim edilmek üzere hazırlanmıştır.  
> Tüm sayfa yapıları, bileşenler, özellikler, animasyonlar ve tasarım kararları eksiksiz tanımlanmıştır.  
> Ekte verilen interaktif UI önizlemesi referans alınacaktır.

---

## 1. Proje Genel Bakış

| Parametre | Değer |
|---|---|
| Proje Tipi | Satılabilir Web Sitesi Şablonu (Avukat / Hukuk Bürosu) |
| Dil | Türkçe |
| Hedef Kullanıcı | Bireysel avukatlar veya küçük/orta ölçekli hukuk büroları |
| Amaç | Kurumsal güven vermek, hizmetleri tanıtmak, online randevu almak |
| Cihaz Uyumu | Tam responsive — mobil öncelikli (Mobile-First), masaüstü tam optimize |
| Sayfa Sayısı | 6 sayfa |
| Tasarım Referansı | UI önizleme dosyası (ekte) |

---

## 2. Tasarım Sistemi

### 2.1 Renk Paleti (CSS Custom Properties)

```css
:root {
  --navy:         #0A1628;   /* Ana arka plan, Header, Footer */
  --navy-mid:     #1B2E4B;   /* Kart arka planları, secondary section */
  --navy-light:   #2A3F5F;   /* Border, ayraç rengi */
  --gold:         #C9A84C;   /* Ana vurgu — butonlar, başlıklar, ikonlar */
  --gold-light:   #E8C97A;   /* Hover durumu */
  --gold-muted:   rgba(201,168,76,0.15); /* Subtle arka planlar */
  --cream:        #F5F0E8;   /* Ana metin (koyu zemin üstünde) */
  --cream-muted:  #A8A090;   /* İkincil metin, alt başlıklar */
  --bg-light:     #F8F5EF;   /* Açık krem section arka planı */
  --white:        #FFFFFF;   /* Form alanları, kart içleri */
  --wa-green:     #25D366;   /* WhatsApp butonu */
  --success:      #1da851;   /* Başarı durumu */
}
```

### 2.2 Tipografi

| Kullanım Alanı | Font | Ağırlık | Notlar |
|---|---|---|---|
| Ana Başlık (H1, H2) | Cormorant Garamond | 600–700 | Serif, prestijli; italik varyant vurgu için |
| Alt Başlık (H3, H4) | Cormorant Garamond | 500–600 | — |
| Gövde metni | Source Serif 4 | 400 | line-height: 1.7–1.8 |
| Buton, etiket, nav | Montserrat | 500–600 | letter-spacing: 0.08–0.15em; uppercase |
| Baro no, küçük etiket | Montserrat | 400–500 | font-size: 10–11px |

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@400;500;600&family=Source+Serif+4:wght@400;500&display=swap" rel="stylesheet">
```

**Boyut Skalası:** 10 / 11 / 12 / 13 / 14 / 16 / 17 / 18 / 22 / 24 / 26 / 28 / 32 / 36 / 42 / 48px

### 2.3 Spacing & Grid

- Container max-width: **1280px**
- Grid: 12 sütun, gutter 24px (mobil: 16px)
- Section dikey padding: **80–100px** (mobil: 48–60px)
- Bileşen iç padding: 20–40px (context'e göre)

### 2.4 Görsel Öğeler & Efektler

**Dekoratif Elementler:**
- Altın yatay ayraç çizgisi: `width: 40px; height: 1px; background: var(--gold);`
- Fotoğraf çerçevesi: Koyu lacivert kutu üzerine sağ-alta offset altın border (8px kaydırma)
- Daire süslemeler: Hero section'da yarı şeffaf altın circle border (`rgba(201,168,76,0.10–0.15)`)
- Section etiketi: Montserrat 10px, uppercase, gold, letter-spacing: 0.15em

**Hover & Geçiş Efektleri:**
- Kart hover: `translateY(-2px)` + border-color altına çekme, 0.2s ease
- Buton hover: background ton değişimi, 0.2s ease
- Nav link hover/active: renk altına çekim
- FAQ chevron: `rotate(180deg)`, 0.25s ease

**Animasyonlar:**
- Hero arka plan daireleri: statik dekoratif (animate edilmeyecek)
- Sayaçlar (istatistik bölümü): scroll trigger ile 0'dan hedefe count-up animasyonu (Intersection Observer)
- Sayfa içi fade-in: `opacity 0→1` + `translateY(20px→0)`, 400ms, staggered (Intersection Observer)
- WhatsApp float: `pulse` animasyonu, 3s döngü (`box-shadow` genişleme/daralma)

---

## 3. Sayfa Listesi

| # | Sayfa | Route | Açıklama |
|---|---|---|---|
| 1 | Ana Sayfa | `/` | Hero, istatistikler, tanıtım, uzmanlık önizleme, yorum, CTA |
| 2 | Hakkımda | `/hakkimda` | Biyografi, fotoğraf, timeline, sertifikalar |
| 3 | Uzmanlık Alanları | `/uzmanlik-alanlari` | 8 alan, kart grid, bullet listeler |
| 4 | Davalar & Başarılar | `/davalar` | Filtrelenebilir kart grid, istatistik şeridi |
| 5 | SSS | `/sss` | Kategorili accordion, CTA yönlendirme |
| 6 | İletişim & Randevu | `/iletisim` | 2 sütun: bilgi + form, harita, WhatsApp |

---

## 4. Sayfa Detayları

---

### 4.1 Ana Sayfa (`/`)

#### BÖLÜM 1 — Navbar (Global, Sticky)

**Yapı:**
- Sol: SVG logo ikonu (geometrik terazi/katman — 22px, gold) + `"Av. [Ad Soyad]"` (Cormorant Garamond 17px bold)
- Orta: Nav linkleri (6 adet, Montserrat 10px, letter-spacing 0.08em)
- Sağ: `"Randevu Al"` CTA butonu (Montserrat 10px bold, uppercase, gold bg, navy text)

**Davranış:**
- Default: `background: transparent`, `border-bottom: 1px solid rgba(201,168,76,0.0)` (görünmez)
- Scroll > 60px: `background: var(--navy)`, `border-bottom: 1px solid rgba(201,168,76,0.15)`, `box-shadow` eklenir — CSS transition 0.3s
- `position: sticky; top: 0; z-index: 100`

**Mobil (< 768px):**
- Hamburger ikonu (3 çizgi, gold)
- Tıklayınca: full-screen overlay, `background: var(--navy)`, linkler dikey sıralı, Cormorant Garamond 28px
- Overlay kapanma: X butonu veya link tıklaması

#### BÖLÜM 2 — Hero

**Layout:** `min-height: 100vh`, flex column center, padding 80px 32px

**Arkaplan:**
```css
background: linear-gradient(160deg, #0A1628 0%, #1B2E4B 100%);
position: relative; overflow: hidden;
```
Üzerine `::before` ve `::after` ile dekoratif circle'lar (sağ üst + sol alt, `border: 1px solid rgba(201,168,76,0.12)`, büyük radius, absolute)

**İçerik (z-index: 1):**
1. Etiket: `[Hukuki Danışmanlık]` — Montserrat 10px, uppercase, gold, flex + `::before` 24px gold line
2. H1: `"Haklarınızı Güvenle Savunuyoruz"` — Cormorant Garamond 42–72px (responsive), cream; `"Güvenle"` kelimesi `<em>` ile italic + gold renk
3. Alt metin: Source Serif 4 14px, cream-muted, max-width 400px, line-height 1.7
4. Buton grubu (flex, gap 12px):
   - **Birincil**: `background: var(--gold); color: var(--navy)` — `"Randevu Al"`
   - **İkincil outline**: `border: 1px solid rgba(245,240,232,0.4); color: var(--cream)` — `"Uzmanlık Alanlarımız"` → hover: border+text gold

**Scroll animasyonu:** Sol altta küçük ok + `"Aşağı Kaydır"` metni, yavaş bounce animasyonu

#### BÖLÜM 3 — İstatistikler

**Layout:** `display: grid; grid-template-columns: repeat(4, 1fr)` — `background: var(--navy)`, `border-top: 1px solid rgba(201,168,76,0.2)`

Her hücre:
- Dikey padding 20px, yatay 16px
- `border-right: 1px solid rgba(201,168,76,0.1)` (son hücre yok)
- Sayı: Cormorant Garamond 32–48px, bold, gold — **count-up animasyonlu** (Intersection Observer)
- Etiket: Montserrat 9px, uppercase, letter-spacing 0.1em, cream-muted

İçerik:
| Sayı | Etiket |
|---|---|
| 500+ | Başarılı Dava |
| 15+ | Yıllık Deneyim |
| 1200+ | Mutlu Müvekkil |
| 8 | Hukuk Alanı |

#### BÖLÜM 4 — Hızlı Tanıtım (About Snippet)

**Layout:** `background: var(--bg-light)`, `display: grid; grid-template-columns: 120px 1fr; gap: 28px; align-items: start`

Sol — Fotoğraf Çerçevesi:
- `width: 120px; height: 160px; background: var(--navy-mid)` — placeholder: orta SVG avukat ikonu
- `::after` pseudo: `bottom: -8px; right: -8px; border: 1.5px solid var(--gold); z-index: 0`
- Gerçek fotoğraf yerleşince `<img>` ile değiştirilecek

Sağ — İçerik:
- Section etiketi: `"Biz Kimiz"`
- 40px altın çizgi
- H2: Cormorant Garamond 22–28px (placeholder metin)
- 1–2 paragraf, Source Serif 4 13px
- `"Daha Fazla Bilgi →"` text link (Montserrat 11px, uppercase, gold) → `/hakkimda`

#### BÖLÜM 5 — Uzmanlık Alanları Önizleme

**Layout:** `background: var(--navy)`, padding 40–60px 32px

- Section etiketi + altın çizgi + H2 (cream)
- 3 sütunlu kart grid: `repeat(3, 1fr)`, gap 12px
- Kart: `background: var(--navy-mid); border: 1px solid rgba(201,168,76,0.15)`
  - SVG ikon 32px (gold stroke, no fill)
  - H3 Cormorant Garamond 16px (cream)
  - P 12px (cream-muted)
  - Hover: `border-color: rgba(201,168,76,0.5); transform: translateY(-2px)`
- Alt: `"Tüm Alanları Görüntüle →"` outline butonu

#### BÖLÜM 6 — Müvekkil Yorumları

**Layout:** `background: var(--bg-light)`, padding 40–60px 32px

- Section etiketi + altın çizgi + H2
- Slider/carousel (3 yorum, otomatik 5s + manuel ok)
- Yorum kartı: `background: white; border: 0.5px solid #E0D8CC`
  - Büyük tırnak işareti (Cormorant Garamond 48–64px, gold, 0.5 opacity, absolute)
  - Metin: Source Serif 4 14px, italic, koyu
  - Yıldızlar: 5 adet gold ★
  - İsim: Montserrat 11px bold
  - Şehir/rol: Montserrat 10px, cream-muted

#### BÖLÜM 7 — CTA Banner

**Layout:** `background: linear-gradient(135deg, var(--gold) 0%, #9A7A2A 100%)`, tam genişlik, text-align center

- H2: Cormorant Garamond 26–32px, navy (koyu metin altın üstünde)
- Buton: `background: var(--navy); color: var(--gold)` — `"Ücretsiz İlk Görüşme Talep Et"` → `/iletisim`

#### BÖLÜM 8 — Footer

**Üst alan:** `background: var(--navy)`, `border-top: 1px solid rgba(201,168,76,0.2)`, `padding: 48px 32px`, 3 sütunlu grid

| Sütun 1 | Sütun 2 | Sütun 3 |
|---|---|---|
| Logo + kısa açıklama | Hızlı Linkler | İletişim özeti |

**Alt şerit:** `background: #050D1A` — `"© [Yıl] Av. [Ad Soyad]"` sol, `"KVKK | Gizlilik Politikası"` sağ — Montserrat 10px, cream-muted

---

### 4.2 Hakkımda (`/hakkimda`)

#### Page Hero (Global bileşen — tüm iç sayfalarda)

```
background: var(--navy)
border-bottom: 1px solid rgba(201,168,76,0.2)
padding: 32px
```
- Breadcrumb: Montserrat 10px — `"Ana Sayfa > [Sayfa Adı]"` (aktif sayfa adı gold)
- H1: Cormorant Garamond 36px, cream

#### Biyografi Bölümü

`background: var(--bg-light)`, 2 sütunlu grid: `140px 1fr`, gap 32px

**Sol — Fotoğraf:**
- `width: 140px; height: 180px; background: var(--navy-mid)`
- `::after`: `bottom: -8px; right: -8px; border: 1.5px solid var(--gold)`

**Sağ — İçerik:**
- H2: İsim — Cormorant Garamond 26px bold, `#0A1628`
- Unvan satırı: Montserrat 11px, gold, uppercase, letter-spacing 0.1em
- 3–4 paragraf biyografi (placeholder)
- SVG imza alanı (placeholder)

#### Deneyim Zaman Çizelgesi (Timeline)

`background: white`, `padding: 40px 32px`

Yapı:
```css
.timeline {
  padding-left: 32px;
  border-left: 1px solid rgba(201,168,76,0.3);
  position: relative;
}
.tl-item::before {
  /* Gold circle bullet */
  content: '';
  position: absolute;
  left: -37px; top: 6px;
  width: 10px; height: 10px;
  background: var(--gold);
  border-radius: 50%;
}
```

Minimum 4 öğe (placeholder):
1. `20XX` — Üniversite mezuniyeti + baro kaydı
2. `20XX–20XX` — İlk hukuk bürosu deneyimi
3. `20XX–20XX` — Uzmanlaşma dönemi
4. `20XX – Günümüz` — Serbest avukatlık

#### Sertifikalar & Üyelikler

6 placeholder logo alanı, `display: grid; grid-template-columns: repeat(3, 1fr)`, beyaz arka plan, `border: 0.5px solid #E0D8CC`

---

### 4.3 Uzmanlık Alanları (`/uzmanlik-alanlari`)

**Grid:** `background: var(--bg-light)`, 2 sütunlu kart grid

**8 Hukuk Alanı:**

| Alan | SVG İkon | Örnek Bullet'lar |
|---|---|---|
| Ceza Hukuku | Scale/Gavel | Tutukluluk itirazı, Savcılık temsili, Yargıtay süreci |
| Aile Hukuku | Users/Heart | Boşanma (anlaşmalı/çekişmeli), Velayet, Nafaka |
| İş & Ticaret | Briefcase | Sözleşme hazırlama, Ticari uyuşmazlık, Şirket kuruluş |
| Gayrimenkul | Home | Tapu uyuşmazlığı, Kira sözleşmesi, İmar hukuku |
| Miras Hukuku | Scroll | Vasiyetname, Miras taksimi, Tenkis davası |
| Tüketici Hukuku | Shield | Tüketici şikayeti, Ürün ayıbı, İade hakları |
| İdare Hukuku | Building | İdari iptal, Tam yargı davası, İdari itiraz |
| Sigorta Hukuku | Umbrella | Sigorta tazminatı, Poliçe uyuşmazlığı, Rücu |

Her kart:
- `background: white; border: 0.5px solid #E0D8CC`
- Hover: `border-color: var(--gold)`
- İkon 24px gold SVG
- H3 Cormorant Garamond 17px bold, navy
- Kısa açıklama 12px, muted
- Bullet list: `::before` 4px gold dash
- `"Danışma Talebi →"` — Montserrat 10px, gold, uppercase

---

### 4.4 Davalar & Başarılar (`/davalar`)

#### Filtre Bar

`display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px`

Filtre butonları: Tümü / Ceza / Aile / Ticaret / Gayrimenkul / Diğer

Aktif buton: `background: var(--gold); color: var(--navy)` — pasif: `border: 1px solid var(--navy-light); background: transparent`

JavaScript: `data-category` attribute ile filtreleme, `display: none / block` geçişi

#### Dava Kartları (9 minimum placeholder)

`display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px`

Her kart:
- `background: white; border: 0.5px solid #E0D8CC; padding: 20px`
- Kategori rozeti: `background: var(--gold-muted); color: var(--gold)` — Montserrat 9px, uppercase
- Başlık: Cormorant Garamond 16px (anonim: "Ticari Uyuşmazlık Davası")
- Sonuç rozeti:
  - `Kazanıldı`: `background: #EAF3DE; color: #3B6D11`
  - `Uzlaşıldı`: `background: var(--gold-muted); color: var(--gold)`
- Açıklama: 2 satır, 12px
- Yıl: Montserrat 10px, muted

#### İstatistik Şeridi

4 sütun: `%94 Başarı Oranı` / `500+ Dava` / `15 Yıl` / `8 Alan`

`background: var(--navy)`, count-up animasyonu

---

### 4.5 SSS (`/sss`)

#### Accordion Yapısı

Kategorilere ayrılmış:

**Genel Sorular** (4 soru) — **Ücret & Ödeme** (3 soru) — **Süreç & Danışmanlık** (4 soru)

Kategori başlığı stili:
```css
.faq-cat {
  font-family: 'Montserrat';
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--gold);
  border-bottom: 1px solid rgba(201,168,76,0.2);
  padding-bottom: 8px; margin: 24px 0 12px;
}
```

Accordion davranışı:
- Aynı anda sadece 1 açık
- `max-height: 0` → `max-height: 200px` transition 0.3s ease
- Chevron: `rotate(0deg)` → `rotate(180deg)` transition 0.25s
- Soru: Source Serif 4 14px, hover gold

**Placeholder sorular:**
- İlk danışmanlık ücretsiz mi?
- Online danışmanlık yapıyor musunuz?
- Dava sürecim ne kadar sürer?
- Hangi belgelerle gelmeliyim?
- Vekalet ücreti nasıl belirlenir?
- Ödeme planı var mı?
- Süreç boyunca nasıl bilgilendirileceksiniz?
- Yurtdışı müvekkillere hizmet veriyor musunuz?
- Sonuç garantisi veriyor musunuz?
- İlk görüşme ne kadar sürer?
- Birden fazla avukatlık hizmeti alabilir miyim?

---

### 4.6 İletişim & Randevu (`/iletisim`)

#### 2 Sütunlu Layout

`display: grid; grid-template-columns: 1fr 1.4fr`

**Sol Sütun — İletişim Bilgileri** (`background: var(--navy)`, padding 36px 28px):

Her bilgi satırı: `display: flex; gap: 12px; margin-bottom: 20px`

İkon kutusu: `width: 32px; height: 32px; background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3); display: flex; align-items: center; justify-content: center`

Bilgiler:
- 📞 Telefon: tıklanabilir `tel:` linki
- ✉ E-posta: tıklanabilir `mailto:` linki
- 📍 Adres: 2 satır (placeholder)
- 🕐 Çalışma Saatleri: Pzt–Cum / Cmt ayrı

**WhatsApp Butonu (sol sütun, tam genişlik):**
```css
background: #25D366; color: white;
font-family: Montserrat; font-size: 11px;
width: 100%; padding: 12px;
display: flex; align-items: center; gap: 8px; justify-content: center;
```
Tıklanınca: `https://wa.me/90XXXXXXXXXX` yeni sekmede

**Google Maps (sol sütun alt):**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%" height="200px"
  style="border:0; filter: grayscale(30%) contrast(1.1);"
  allowfullscreen loading="lazy">
</iframe>
```
Config'den alınan URL dinamik olarak yerleştirilir.

**Sağ Sütun — Randevu Formu** (`background: var(--bg-light)`, padding 36px 28px):

Form alanları:

| Alan | Tip | Zorunlu | Notlar |
|---|---|---|---|
| Ad Soyad | text | ✅ | — |
| Telefon | tel | ✅ | +90 format |
| E-posta | email | ✅ | — |
| Hukuki Konu | select | — | Uzmanlık alanları listesi |
| Randevu Tarihi | date | — | Google Takvim entegrasyonu |
| Randevu Saati | select | — | 09:00–17:00, saat başları |
| Mesaj | textarea | — | rows: 3 |
| KVKK Onayı | checkbox | ✅ | Gönderim engeli |

Input stili:
```css
.form-input {
  width: 100%; border: 0.5px solid #D0C8BC;
  background: white; padding: 9px 12px;
  font-family: 'Source Serif 4'; font-size: 13px;
  border-radius: 0; outline: none;
  transition: border-color 0.2s;
}
.form-input:focus { border-color: var(--gold); }
```

**Gönder butonu:** Tam genişlik, gold bg, navy text, Montserrat 12px uppercase

**Başarı mesajı:** Form gönderimi sonrası inline (form alanları gizlenir) yeşil onay ikonu + metin

---

## 5. Global Bileşenler

### 5.1 WhatsApp Sabit Butonu

Tüm sayfalarda, tüm ekran boyutlarında görünür:

```css
.wa-float {
  position: fixed;
  bottom: 24px; right: 24px;
  width: 52px; height: 52px;
  background: #25D366;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  cursor: pointer;
  animation: waPulse 3s infinite;
}

@keyframes waPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
  50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
}
```

Tooltip (hover): `"WhatsApp'tan Yazın"`

### 5.2 Cookie Banner

Konum: alt orta, `position: fixed; bottom: 0`
Butonlar: `"Kabul Et"` (gold), `"Reddet"` (outline), `"Detaylar"` (text link)
KVKK uyumlu metin

### 5.3 Sayfa Yüklenme Animasyonu

Sayfa ilk açılışında: Logo fade-in → içerik staggered fade-up (Intersection Observer ile)

---

## 6. Google Takvim Entegrasyonu

**Tercih edilen yöntem:** Calendly embed (ücretsiz plan yeterli)

```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget"
  data-url="https://calendly.com/[kullanici-adi]/30min"
  style="min-width:320px;height:630px;">
</div>
<script async src="https://assets.calendly.com/assets/external/widget.js"></script>
```

**Alternatif:** Google Calendar Appointment Scheduling sayfası `<iframe>` ile embed

Config'den URL alınır, sabit kodlanmaz.

---

## 7. Teknik Gereksinimler

### 7.1 Teknoloji Stack

| Katman | Tercih | Alternatif |
|---|---|---|
| Framework | Next.js 14 (App Router) | HTML/CSS/JS (statik) |
| Stil | Tailwind CSS + CSS Variables | Sass + CSS Variables |
| Form | React Hook Form | Vanilla JS validation |
| Animasyon | Framer Motion | CSS Transitions + GSAP |
| Harita | Google Maps Embed (iframe) | — |
| Takvim | Calendly Embed | Google Calendar API |
| Font | Google Fonts | — |

### 7.2 SEO

Her sayfa için benzersiz:
- `<title>`: `"[Sayfa Adı] | Av. [Ad Soyad] — [Şehir] Hukuk Bürosu"`
- `<meta name="description">`: 150–160 karakter
- Open Graph etiketleri (Facebook/LinkedIn paylaşım)
- Twitter Card etiketleri

**Schema.org (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Av. [Ad Soyad]",
  "telephone": "+90-5XX-XXX-XX-XX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[İlçe]",
    "addressRegion": "[İl]",
    "addressCountry": "TR"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "url": "https://[domain].com"
}
```

`robots.txt` + `sitemap.xml` üretilecek

### 7.3 Performans Hedefleri

| Metrik | Hedef |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID | < 100ms |
| PageSpeed (Mobile) | > 85 |
| PageSpeed (Desktop) | > 95 |

**Optimizasyon:**
- Görseller: WebP, `loading="lazy"`, `width` + `height` attribute
- Fontlar: `display=swap`, preload critical font
- JS: code splitting, lazy load (Calendly, Maps)

### 7.4 KVKK Uyumu

- Tüm formlarda checkbox (zorunlu, gönderim engeli)
- Gizlilik Politikası sayfası (`/gizlilik-politikasi`) — footer linki
- KVKK Aydınlatma Metni sayfası (`/kvkk`) — footer linki
- Cookie consent banner (ilk yükleme)
- Form verileri e-posta ile iletiliyorsa SSL zorunlu

### 7.5 Erişilebilirlik (WCAG 2.1 AA)

- Tüm `<img>` için `alt` metni
- Semantic HTML5 (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`)
- Klavye navigasyonu: Tab sırası, Focus ring görünür
- Renk kontrast oranı min 4.5:1 (body metin)
- ARIA etiketleri: hamburger menü, accordion, slider

---

## 8. Şablon Config Dosyası

Tüm özelleştirilebilir değerler tek merkezi dosyadan yönetilir:

```typescript
// config/site.ts

export const siteConfig = {
  lawyer: {
    name: "Av. [Ad Soyad]",
    firstName: "[Ad]",
    lastName: "[Soyad]",
    title: "Avukat",
    barName: "[Şehir] Barosu",
    barNo: "Baro Sicil No: XXXXX",
    phone: "+90 5XX XXX XX XX",
    email: "info@[domain].com",
    address: {
      line1: "[Sokak] No:[X], Daire:[X]",
      district: "[İlçe]",
      city: "[İl]",
      zip: "XXXXX"
    },
    workingHours: {
      weekdays: "Pzt–Cum: 09:00–18:00",
      saturday: "Cmt: 10:00–14:00"
    },
    whatsapp: "905XXXXXXXXX", // Başında + olmadan
    experience: "15",
    successfulCases: "500",
    happyClients: "1200",
    practiceAreaCount: "8"
  },
  seo: {
    siteTitle: "Av. [Ad Soyad] — [Şehir] Hukuk Bürosu",
    defaultDescription: "...",
    ogImage: "/og-image.jpg",
    canonicalUrl: "https://[domain].com"
  },
  integrations: {
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
    calendlyUrl: "https://calendly.com/[kullanici-adi]/30min",
    googleAnalyticsId: "G-XXXXXXXXXX"
  },
  socialMedia: {
    linkedin: "https://linkedin.com/in/[profil]",
    twitter: "https://twitter.com/[kullanici]"
  },
  practiceAreas: [
    {
      id: "ceza",
      name: "Ceza Hukuku",
      icon: "scale",
      shortDesc: "Ceza davalarında güçlü savunma.",
      bullets: ["Tutukluluk itirazları", "Savcılık temsili", "İstinaf & Yargıtay"]
    }
    // ... 7 alan daha
  ],
  testimonials: [
    {
      text: "[Müvekkil yorumu placeholder]",
      author: "[İsim] [Soyad baş harfi].",
      location: "[Şehir]",
      caseType: "[Dava Türü] Müvekkili",
      rating: 5
    }
    // ... 2 yorum daha
  ]
}
```

---

## 9. Mobil Responsive Breakpoints

| Breakpoint | Genişlik | Değişiklikler |
|---|---|---|
| Mobile | < 480px | Tek sütun, küçük font, gizli nav |
| Tablet | 480–768px | Bazı grid'ler 2 sütun |
| Desktop S | 768–1024px | Full nav görünür |
| Desktop L | 1024–1280px | Standart layout |
| Desktop XL | > 1280px | Container max-width: 1280px, ortalar |

**Kritik mobil değişiklikleri:**
- Navbar: hamburger menü (< 768px)
- Hero H1: 42px → 28px
- Stats grid: 4 sütun → 2x2 grid
- About section: 2 sütun → tek sütun (fotoğraf üstte)
- Kart grid'ler: 3 sütun → 1 sütun (< 480px), 2 sütun (480–768px)
- İletişim: 2 sütun → tek sütun (form altta)
- Footer: 3 sütun → tek sütun

---

## 10. Teslim Edilecekler (Deliverables)

| # | Teslim | Format | Notlar |
|---|---|---|---|
| 1 | Tüm sayfa kaynak kodları | Next.js `.tsx` / HTML | 6 sayfa |
| 2 | Global stil sistemi | `globals.css` / Tailwind | CSS değişkenleri dahil |
| 3 | Site config dosyası | `config/site.ts` | Tüm değiştirilebilir değerler |
| 4 | SVG ikon seti | `.svg` | 8 hukuk alanı ikonu + UI ikonları |
| 5 | Placeholder görseller | `.webp` | Avukat fotoğrafı, hero bg (royalty-free) |
| 6 | README — kurulum & özelleştirme | `README.md` | Deploy + config değiştirme rehberi |
| 7 | KVKK & Gizlilik Politikası şablonu | `.md` | Avukata özel doldurulacak |
| 8 | `robots.txt` + `sitemap.xml` | — | Otomatik üretim veya statik |

---

## 11. Test Kontrol Listesi

Teslim öncesi doğrulanacaklar:

- [ ] 6 sayfa tüm breakpoint'lerde görsel hata yok
- [ ] Randevu formu validasyonu çalışıyor (zorunlu alanlar, KVKK)
- [ ] WhatsApp butonu doğru numarayı açıyor
- [ ] Google Maps iframe yükleniyor
- [ ] Accordion açılıp kapanıyor, aynı anda tek açık
- [ ] Sayaçlar scroll'da çalışıyor
- [ ] Navbar scroll'da renk değişiyor
- [ ] Mobil hamburger menü çalışıyor
- [ ] Tüm CTA butonları doğru sayfalara yönlendiriyor
- [ ] Config dosyasındaki tek bir değer değişince ilgili tüm yerler güncelleniyor
- [ ] PageSpeed Insights: mobil > 85, masaüstü > 95
- [ ] KVKK onayı olmadan form gönderilemiyor
- [ ] Cookie banner görünüyor ve kabul/ret çalışıyor

---

*Doküman versiyonu: 2.0 — Hazırlayan: OtoBeyni / Sir Monster — Mart 2026*
