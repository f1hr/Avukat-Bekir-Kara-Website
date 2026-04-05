import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    template: "%s | Kara Hukuk Bürosu",
    default: "Kara Hukuk Bürosu | Av. Bekir Kara",
  },
  description:
    "Hatay'da profesyonel hukuki danışmanlık ve dava takibi. Ceza, aile, ticaret, gayrimenkul ve daha fazla alanda uzman avukat.",
  keywords:
    "avukat, hukuk bürosu, hatay avukat, dörtyol avukat, ceza hukuku, aile hukuku, ticaret hukuku, gayrimenkul hukuku",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://karahukuk.av.tr",
    siteName: "Kara Hukuk Bürosu",
    title: "Kara Hukuk Bürosu | Av. Bekir Kara",
    description:
      "Hatay'da profesyonel hukuki danışmanlık ve temsil hizmetleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Kara Hukuk Bürosu",
              description:
                "Hatay'da profesyonel hukuki danışmanlık ve temsil hizmetleri.",
              telephone: "+90 532 669 31 80",
              url: "https://karahukuk.av.tr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Yeşil Mah., Gazi İlkokul, 8",
                addressLocality: "Dörtyol",
                addressRegion: "Hatay",
                addressCountry: "TR",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-18:30",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
