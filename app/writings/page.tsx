import { writings } from "@/constants";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Yazılarım | Serkan Yalçınkaya",
    description: "Serkan Yalçınkaya'nın kişisel web sitesi",
    openGraph: {
      title: 'Yazılarım | Serkan Yalçınkaya',
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
      title: 'Yazılarım | Serkan Yalçınkaya',
      description: "Serkan Yalçınkaya'nın kişisel web sitesi",
      images: ['https://serkanyalcinkaya.vercel.app/images/2024-yazilim-dili.webp'],
    },
};

export default function Page() {
    return (
        <div>
            <p className="text-xl font-semibold mb-5">Bazı düşünceler ve öğrendiklerim:</p>
            {writings.map((writing: any) => (
                <div key={writing.title} className="gap-2 flex flex-col ">
                    <h2 className="text-xl font-bold text-black hover:underline">{writing.title}</h2>
                    <div className="flex gap-2 text-sm ">
                        <span>
                            {writing.date} -
                        </span>
                        <span className="text-black">
                            {writing.category}
                        </span>
                    </div>
                    <p className="text-base ">{writing.description}</p>
                    <Link href={writing.link} className="text-sm font-bold text-black hover:underline flex items-center gap-2 mt-4 ">Okumaya Devam Et <MdArrowForward color="black"/></Link>
                </div>
            ))}
        </div>
    );
}