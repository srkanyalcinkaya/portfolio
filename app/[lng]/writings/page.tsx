import { writings } from "@/constants";
// import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

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
    alternates: {
        canonical: 'https://serkanyalcinkaya.vercel.app/writings',
    }
};

export default function Page() {
    const t = useTranslations("writings");
    return (
        <div>
            <p className="text-xl font-semibold mb-5">{t("some-thoughts-and-learnings")}:</p>
            {writings.map((writing: any) => (
                <div key={writing.title} className="gap-2 flex flex-col ">
                    <h2 className="text-xl font-bold text-black dark:text-white hover:underline">{writing.title}</h2>
                    <div className="flex gap-2 text-sm ">
                        <span>
                            {writing.date} -
                        </span>
                        <span className="text-black dark:text-white">
                            {writing.category}
                        </span>
                    </div>
                    <p className="text-base ">{writing.description}</p>
                    <Link href={writing.link} className="text-sm font-bold text-black dark:text-white hover:underline flex items-center gap-2 mt-4 ">{t("continue-reading")}<MdArrowForward /></Link>
                </div>
            ))}
        </div>
    );
}