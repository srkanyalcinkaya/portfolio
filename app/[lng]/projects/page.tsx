import { ProjectList } from "@/components/ui/project-list";
import { projects } from "@/constants";
import { Metadata } from "next";
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: "Projelerim | Serkan Yalçınkaya",
    description: "Serkan Yalçınkaya'nın kişisel web sitesi",
    openGraph: {
      title: 'Projelerim | Serkan Yalçınkaya',
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
      title: 'Projelerim | Serkan Yalçınkaya',
      description: "Serkan Yalçınkaya'nın kişisel web sitesi",
      images: ['https://serkanyalcinkaya.vercel.app/images/2024-yazilim-dili.webp'],
    },
   
    alternates: {
        canonical: 'https://serkanyalcinkaya.vercel.app/projects',
    }
};

export default function Page() {
  const t = useTranslations("projects");
    return (
        <div>
            <p className="text-xl mb-5"> {t("my-projects")}:</p>
            {projects.map((project, index) => (
                <ProjectList key={index} {...project} />
            ))}
        </div>
    );
}