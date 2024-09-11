"use client"
import { GithubRepoCard } from "@/components/ui/github-repo-card";
import getLatestRepos from "@/lib/getLatestRepos";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";


export const metadata: Metadata = {
    title: "Kodlarım | Serkan Yalçınkaya",
    description: "Serkan Yalçınkaya'nın kişisel web sitesi",
    openGraph: {
      title: 'Kodlarım | Serkan Yalçınkaya',
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
      title: 'Kodlarım | Serkan Yalçınkaya',
      description: "Serkan Yalçınkaya'nın kişisel web sitesi",
      images: ['https://serkanyalcinkaya.vercel.app/images/2024-yazilim-dili.webp'],
    },
};
export default function Page() {
    const [repos, setRepos] = useState<any>([]);

    let token = process.env.GITHUB_TOKEN;
    const repositories = async () => {
        await getLatestRepos(token).then((data: any) => setRepos(data))
    };

    useEffect(() => {
        repositories()
    }, [])

    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl  font-bold   text-center ">
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
            {!repos && <div className="w-full flex items-center justify-center mt-20">
                <svg className="animate-spin  mr-3 h-20  w-20 text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-10">


                {repos &&
                    repos.map((latestRepo: any, index: any) => (
                        <GithubRepoCard latestRepo={latestRepo} key={index} />
                    ))}
            </div>
        </div>
    );
}

