import { ProjectList } from "@/components/ui/project-list";
import { projects } from "@/constants";
import { Metadata } from "next";

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
};

export default function Page() {
    return (
        <div>
            <p className="text-xl mb-5">Projelerim:</p>
            {projects.map((project, index) => (
                <ProjectList key={index} {...project} />
            ))}
        </div>
    );
}