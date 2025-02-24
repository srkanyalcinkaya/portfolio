import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Serkan Yalçınkaya",
  description: "Serkan Yalçınkaya'nın kişisel web sitesi",
  openGraph: {
    title: 'Serkan Yalçınkaya',
    description: "Serkan Yalçınkaya'nın kişisel web sitesi",
    type: 'website',
    url: 'https://serkanyalcinkaya.vercel.app/',
    siteName: 'Serkan Yalçınkaya',
    images: [
      {
        url: 'https://serkanyalcinkaya.vercel.app/images/2024-yazilim-dilleri.webp',
        width: 1200,
        height: 630,
        alt: 'Serkan Yalçınkaya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serkan Yalçınkaya',
    description: "Serkan Yalçınkaya'nın kişisel web sitesi",
    images: ['https://serkanyalcinkaya.vercel.app/images/2024-yazilim-dili.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://serkanyalcinkaya.vercel.app/',
  }
};


export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`font-sans antialiased bg-white dark:bg-black text-[#6b7280] dark:text-white px-4`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-screen-lg  mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
