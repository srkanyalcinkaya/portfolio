import { GithubRepoCard } from "@/components/ui/github-repo-card";
import getLatestRepos from "@/lib/getLatestRepos";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'En Son Kodlar | Serkan Yalçınkaya',
    description: 'Serkan Yalçınkaya\'nın en son GitHub projeleri ve kod örnekleri.',
    openGraph: {
        title: 'En Son Kodlar | Serkan Yalçınkaya',
        description: 'Serkan Yalçınkaya\'nın en son GitHub projeleri ve kod örnekleri.',
        type: 'website',
        url: 'https://serkanyalcinkaya.vercel.app/codes',
        siteName: 'Serkan Yalçınkaya',
        images: [
            {
                url: 'https://serkanyalcinkaya.vercel.app/images/codes-preview.webp',
                width: 1200,
                height: 630,
                alt: 'Serkan Yalçınkaya\'nın Kod Örnekleri',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'En Son Kodlar | Serkan Yalçınkaya',
        description: 'Serkan Yalçınkaya\'nın en son GitHub projeleri ve kod örnekleri.',
        images: ['https://serkanyalcinkaya.vercel.app/images/codes-preview.webp'],
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
        canonical: 'https://serkanyalcinkaya.vercel.app/codes',
    }
};

async function getRepos() {
    const token = process.env.GITHUB_TOKEN;
    return getLatestRepos(token);
}

export default async function Page() {
    const repos = await getRepos();

    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-bold text-center">
                    En Son Kodlar
                </h1>

                <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://github.com/srkanyalcinkaya`}
                    className="rounded-md bg-black dark:bg-white shadow-lg flex flex-row gap-2 items-center dark:text-black text-white p-2"
                >
                    <p>GitHub'da Gör</p>
                    <MdArrowOutward />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {repos && repos.map((latestRepo: any, index: number) => (
                    <GithubRepoCard latestRepo={latestRepo} key={index} />
                ))}
            </div>
        </div>
    );
}

