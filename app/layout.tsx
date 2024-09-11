import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: "About Serkan Yalçınkaya",
  description: "Serkan Yalçınkaya's personal website",
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
