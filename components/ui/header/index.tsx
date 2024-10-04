"use client"
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguagePicker } from "../locale-switcher";
export const Header = () => {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    const t = useTranslations("header");
    return (
        <header className="flex gap-9 items-start justify-between  pt-16 pb-12 ">
            {/* <div className="md:hidden block absolute top-5 right-5 cursor-pointer" onClick={toggleTheme}>
                {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
            </div> */}
            <div className="flex md:flex-row flex-col justify-center items-center gap-9">
                <Image src="/serkan.jpeg" alt="Serkan Yalçınkaya" className="rounded-full" width={80} height={80} />
                <div className="flex flex-col justify-center md:items-start items-center  md:justify-start gap-5">
                    <h1 className="text-5xl pt-2 font-extrabold text-black dark:text-white text-center">Serkan Yalçınkaya</h1>
                    <nav className="mb-5">
                        <ul className="flex gap-6 uppercase font-medium   text-xs">
                            <li>
                                <Link href="/" className={`${pathname === '/' ? 'font-bold text-black dark:text-white' : ''}`}>{t("home")}</Link>
                            </li>
                            <li>
                                <Link href="/projects" className={`${pathname === '/projects' ? 'font-bold text-black dark:text-white' : ''}`}>{t("projects")}</Link>
                            </li>
                            <li>
                                <Link href="/writings" className={`${pathname === '/writings' ? 'font-bold text-black dark:text-white' : ''}`}>{t("writings")}</Link>
                            </li>
                            <li>
                                <Link href="/codes" className={`${pathname === '/codes' ? 'font-bold text-black dark:text-white' : ''}`}>{t("codes")}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div className="flex md:flex-row flex-col md:static absolute top-5 right-5  items-center gap-6">

                <LanguagePicker />
                <div className=" " onClick={toggleTheme}>
                    {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
                </div>
            </div>
        </header>
    );
};