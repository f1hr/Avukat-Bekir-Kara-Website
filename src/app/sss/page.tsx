'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    title: 'Genel Sorular',
    items: [
      { q: 'İlk görüşme ücretli mi?', a: 'Hayır, ilk görüşme tamamen ücretsizdir. Davanızı dinliyor, hukuki durumunuzu değerlendiriyor ve size en uygun çözüm yolunu belirliyoruz.' },
      { q: 'Avukatınızla nasıl iletişim kurabilirsiniz?', a: 'Telefon, e-posta, WhatsApp veya ofisimizden randevu alarak yüz yüze görüşme yapabilirsiniz. 24 saat içinde dönüş garantisi veriyoruz.' },
      { q: 'Hangi şehirlerde hizmet veriyorsunuz?', a: 'Büromuz İstanbul\'da faaliyet göstermekle birlikte, yurt genelindeki davalarda da temsil hizmeti sunmaktayız. Uzak şehirlerdeki müvekkillere çevrim içi danışmanlık da sağlıyoruz.' },
      { q: 'Dava süreçleri ne kadar sürer?', a: 'Dava süreleri hukuki konuya, mahkeme yoğunluğuna ve davanın karmaşıklığına göre değişir. Basit davalar birkaç ay içinde sonuçlanabilirken, ağır ceza davaları yıllar sürebilir.' },
    ],
  },
  {
    title: 'Ücret & Ödeme',
    items: [
      { q: 'Vekalet ücretleri nasıl belirlenir?', a: 'Ücretler, davanın türüne, karmaşıklığına ve süresine göre belirlenmektedir. Türkiye Barolar Birliği\'nin asgari ücret tarifesi esas alınmakta olup her müvekkille şeffaf bir ücret görüşmesi yapılmaktadır.' },
      { q: 'Taksitli ödeme imkanı var mı?', a: 'Evet, müvekkillerimizin ihtiyaçlarına göre esnek ödeme planları oluşturabiliyoruz. Ödeme seçenekleri hakkında görüşmek için bizimle iletişime geçebilirsiniz.' },
      { q: 'Kazanılmayan davalarda ücret iadesi yapılıyor mu?', a: 'Hukuki danışmanlık ve temsil hizmetleri için yapılan ödemeler iade edilmez; ancak bazı özel durumlarda taraflar arasında ön görüşme yapılmaktadır. Şartlar için büromuzla iletişime geçiniz.' },
      { q: 'Fatura alabilir miyim?', a: 'Evet, verilen tüm hizmetler için yasal fatura düzenlenmektedir.' },
    ],
  },
  {
    title: 'Süreç & Danışmanlık',
    items: [
      { q: 'Danışmanlık randevusu nasıl alınır?', a: 'Telefon, e-posta, WhatsApp veya web sitemizin iletişim formunu kullanarak randevu alabilirsiniz. Uygun saatlerde sizinle iletişime geçeceğiz.' },
      { q: 'Belgelerimi nasıl iletebilirim?', a: 'Belgelerinizi ofisimize bizzat getirebilir, e-posta ile gönderebilir veya şifreli dijital platform üzerinden paylaşabilirsiniz. Gizlilik ve güvenlik önceliğimizdir.' },
      { q: 'Dava dosyamı çevrim içi takip edebilir miyim?', a: 'Evet, müvekkillerimiz dava süreçlerini takip edebildikleri dijital platforma erişim sağlayabilmektedir. Sisteme giriş bilgileri kayıt sırasında tarafınıza iletilir.' },
      { q: 'Acil durumlarda nasıl ulaşabilirim?', a: 'Acil hukuki durumlarda 7/24 ulaşabileceğiniz acil hattımızı arayabilirsiniz. WhatsApp üzerinden de anlık iletişim kurulabilmektedir.' },
    ],
  },
];

export default function SSSPage() {
  return (
    <>
      <PageHero
        title="Sık Sorulan Sorular"
        subtitle="Merak ettiğiniz soruların yanıtlarını burada bulabilirsiniz"
        breadcrumb={[{ label: 'SSS' }]}
      />

      {/* ─── FAQ Section ─── */}
      <section className="sec-pad" style={{ background: 'var(--parchment)', padding: '96px 0' }}>
        <div className="container-max" style={{ padding: '0 32px', maxWidth: '900px' }}>
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              style={{ marginBottom: '56px' }}
            >
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '32px', fontWeight: 700, color: 'var(--ink)', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
                {cat.title}
              </h2>
              <Accordion className="w-full">
                {cat.items.map((item, ii) => (
                  <AccordionItem
                    key={ii}
                    value={String(ii)}
                    style={{ borderBottom: '1px solid rgba(201,168,76,0.15)', paddingBottom: 0 }}
                  >
                    <AccordionTrigger
                      style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        textAlign: 'left',
                        padding: '20px 0',
                        textDecoration: 'none',
                      }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: '#4a3f34',
                        lineHeight: 1.8,
                        paddingBottom: '20px',
                      }}
                    >
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: 'var(--ink)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container-max" style={{ padding: '0 32px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--ivory)', marginBottom: '12px' }}>
            Sorunuzu bulamadınız mı?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'var(--ivory-dim)', marginBottom: '36px', maxWidth: '420px', margin: '0 auto 36px' }}>
            Daha fazla sorunuz varsa doğrudan bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="btn-primary">Bize Yazın</Link>
        </div>
      </section>
    </>
  );
}
