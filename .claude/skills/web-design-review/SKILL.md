---
name: web-design-review
description: Web arayüzünü analiz et, görsel kalitesini değerlendir ve geliştirme önerileri sun. Kullanıcı "tasarıma bak", "UI'ı değerlendir", "sayfa nasıl görünüyor", "tasarım önerileri ver", "UI iyileştirme", "arayüzü geliştir", "web tasarımını incele" veya benzer bir şey söylediğinde bu skill'i kullan. Mevcut TSX/CSS dosyalarını okur, tasarım sistemini analiz eder, görsel hiyerarşi/tipografi/renk/boşluk/bileşen kalitesini puanlar ve öncelikli bir geliştirme yol haritası çıkarır.
---

# Web Design Review Skill

Bu skill, mevcut Next.js / React web uygulamasının tasarımını bir kıdemli UI/UX danışmanı gözüyle analiz eder. Amacı: neyin iyi çalıştığını, neyin eksik olduğunu ve sıradaki adımların ne olması gerektiğini net biçimde ortaya koymaktır.

## Genel Yaklaşım

Kullanıcı bir sayfayı veya tüm arayüzü incelememeni istediğinde şu sırayı izle:

1. **Dosyaları oku** — İlgili TSX, CSS ve globals.css dosyalarını oku
2. **Tasarım sistemini çıkar** — Renkler, fontlar, spacing, border-radius, animasyonlar
3. **Her boyutu puanla** — 10 üzerinden, kısa gerekçeyle
4. **Güçlü yönleri say** — Neyin iyi çalıştığını teyit et
5. **Sorunları listele** — Öncelik sırasına göre, somut örneklerle
6. **Yol haritası sun** — "Şimdi yapılacaklar" ve "Sonra yapılacaklar" olarak iki katmanlı

---

## Analiz Boyutları

Her değerlendirmede bu 7 boyutu incele:

### 1. Görsel Hiyerarşi (Visual Hierarchy)
- Başlık → alt başlık → gövde metin boyut sıralaması mantıklı mı?
- Kullanıcının gözü doğal akışla nereye gidiyor?
- CTA (eylem çağrısı) butonları yeterince öne çıkıyor mu?

### 2. Renk Kullanımı (Color System)
- Marka renkleri tutarlı mı kullanılıyor?
- Kontrast oranları WCAG AA standardını karşılıyor mu? (metin/arka plan ≥ 4.5:1)
- Renk rolleri net mi? (vurgu, uyarı, başarı, hata)

### 3. Tipografi
- Font ailesi seçimi karakterli mi yoksa jenerik mi?
- Font ağırlıkları yeterli kontrast sağlıyor mu?
- Satır aralığı (line-height) ve harf aralığı (letter-spacing) okunabilirliği destekliyor mu?
- Mobilde başlık boyutları orantılı mı? (clamp kullanımı)

### 4. Boşluk ve Düzen (Spacing & Layout)
- Bileşenler arası boşluklar tutarlı mı? (8px grid sistemi)
- Sayfa genişliği sınırları makul mu? (max-width)
- Grid ve flex kullanımı düzenli mi?

### 5. Bileşen Kalitesi (Component Quality)
- Kart, buton, form elemanları gibi tekrar eden bileşenler tutarlı mı?
- Hover, focus, disabled durumları var mı?
- Border-radius ve shadow kullanımı uyumlu mu?

### 6. Animasyon ve Hareket (Motion)
- Geçiş animasyonları var mı, yoksa statik mi?
- Animasyonlar amaca uygun mu (giriş efektleri, hover feedback)?
- Performansı olumsuz etkileyecek ağır animasyon var mı?

### 7. Atmosfer ve Kimlik (Brand Atmosphere)
- Tasarım, markanın kimliğini (Clerk = terminal + premium editorial) yansıtıyor mu?
- Genel "his" — jenerik AI SaaS görünümünden kaçınılmış mı?
- Rakiplerden belirgin biçimde ayrışıyor mu?

---

## Çıktı Formatı

Her analizde şu yapıyı kullan:

```
## 🔍 [Sayfa Adı] — Tasarım Analizi

### Puan Kartı
| Boyut              | Puan  | Kısa Not                          |
|--------------------|-------|-----------------------------------|
| Görsel Hiyerarşi   | X/10  | ...                               |
| Renk Sistemi       | X/10  | ...                               |
| Tipografi          | X/10  | ...                               |
| Boşluk & Düzen     | X/10  | ...                               |
| Bileşen Kalitesi   | X/10  | ...                               |
| Animasyon          | X/10  | ...                               |
| Atmosfer & Kimlik  | X/10  | ...                               |
| **TOPLAM**         | **X/70** | Genel değerlendirme            |

---

### ✅ Güçlü Yönler
- [Somut örnek + neden iyi]
- ...

### ⚠️ İyileştirme Alanları (Öncelik Sırasına Göre)
#### 🔴 Kritik (Hemen Yapılmalı)
1. **[Sorun başlığı]** — [Hangi dosya, hangi satır/bölüm, neden sorunlu, nasıl düzeltilir]

#### 🟡 Önemli (Bu Hafta)
2. **[Sorun başlığı]** — ...

#### 🟢 İyileştirme (Sonraki Sprint)
3. **[Sorun başlığı]** — ...

---

### 🗺️ Geliştirme Yol Haritası

#### Şimdi Yapılacaklar (≤ 1 gün)
- [ ] [Somut, uygulanabilir görev — hangi dosyada ne değişecek]

#### Sonra Yapılacaklar (Bu Hafta)
- [ ] [Orta vadeli görev]

#### Gelecek Sprint
- [ ] [Büyük kapsamlı iyileştirme]
```

---

## Neyi Analiz Edeceğini Belirleme

Kullanıcı hangi sayfayı istediğini söylemediyse şu varsayılan listeyi kullan:

| Sayfa | Dosya Yolu |
|-------|-----------|
| Landing Page | `apps/web/app/page.tsx` |
| Login | `apps/web/app/auth/login/page.tsx` |
| Register | `apps/web/app/auth/register/page.tsx` |
| Dashboard | `apps/web/app/dashboard/page.tsx` |
| Tasarım Sistemi | `apps/web/app/globals.css` |

Kullanıcı "tümünü" veya "genel" diyorsa tüm dosyaları oku ve her sayfa için ayrı bir puan kartı yaz, ardından genel bir özet sun.

---

## Önemli İpuçları

**Somutluk:** "Butonlar iyi görünmüyor" gibi muğlak değil, "Login sayfasındaki `.btn-primary` butonun `border-radius: 10px` değeri, landing page hero butonundaki `rounded-xl` (~12px) ile tutarsız — ikisini `10px`'e eşitle" gibi dosya ve satır referanslı yaz.

**Pozitif ton:** Kullanıcı emek verdi. Güçlü yönleri gerçekten takdir et, eleştirileri yapıcı ve çözüm odaklı tut.

**Uygulama kolaylığı:** Yol haritasındaki her görev tek başına uygulanabilir olmalı. "UI'ı düzelt" değil, "globals.css'e `--radius-sm: 8px; --radius-md: 12px;` ekle ve tüm kartlarda `var(--radius-md)` kullan" gibi.

**Öncelik mantığı:** Kırmızı = kullanıcı deneyimini doğrudan etkileyen (kontrast sorunu, tutarsız buton, broken layout). Sarı = görsel tutarsızlıklar. Yeşil = güzelleştirme fırsatları.
