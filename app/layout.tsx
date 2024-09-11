import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/footer";


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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" >
      <body
        className={`font-sans antialiased bg-white dark:bg-black text-[#6b7280] dark:text-white`}
      >

        <div className="max-w-screen-md mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
