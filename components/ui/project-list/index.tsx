import Image from "next/image";
// import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
interface ProjectListProps {
    title: string;
    year: string;
    description: string;
    distribution: string;
    businessModel: string;
    technicalStack: string;
    link?: string;
    img: string;
    active: boolean;
}

export const ProjectList = ({ title, year, description, distribution, businessModel, technicalStack, link, img, active }: ProjectListProps) => {
    const t = useTranslations("projects.cards");
    return (
        <div className="p-6 rounded-lg shadow dark:shadow-white shadaow-black w-full mb-5">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4">
                    <Image src={img} alt={title} width={48} height={48} className="rounded-full" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-black dark:text-white">{title}</h2>
                    <div className="flex items-center gap-2 font-semibold">{year} <div className={`w-2 h-2 rounded-full ${active ? "bg-green-500" : "bg-red-500"}`} /> <span className={`${active ? "text-green-500" : "text-red-500"}`}> {active ? t("active") : t("passive")}</span></div>
                </div>
            </div>
            <p className="mb-4">
                {description}
            </p>
            <div className="text-gray-400 mb-2">
                <div>{t("distribution")}: <span className="font-semibold text-black dark:text-white">{distribution}</span></div>
                <div>{t("business-model")}: <span className="font-semibold text-black dark:text-white">{businessModel}</span></div>
                <div>{t("tech-stack")}: <span className="font-semibold text-black dark:text-white">{technicalStack}</span></div>
            </div>
            {link && (
                <Link href={link} className="text-black dark:text-white hover:underline flex items-center gap-2 font-semibold">
                   {t("visit-website")} <MdArrowOutward />
                </Link>
            )}
        </div>
    );
}