// import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
export default function Home() {
  const t = useTranslations("home");
  return (
    <main>
      <p className="text-xl mb-5">
        {t("section-1")}
      </p>
      <p className="text-xl mb-5">
      {t("section-2")}
      </p>
      <div className="flex gap-2 items-center text-xl text-black dark:text-white">
      {t("section-3")}:
        <Link href="https://x.com/srkanyalcinkaya" target="_blank">
          <FiTwitter size={16} />
        </Link>
        <Link href="https://github.com/srkanyalcinkaya" target="_blank">
          <FiGithub size={16} />
        </Link>
        <Link href="https://www.linkedin.com/in/serkan-yalcinkaya/" target="_blank">
          <FiLinkedin size={16} />
        </Link>
        <Link href="https://t.me/srkanyalcinkaya" target="_blank">
          <LiaTelegram size={16} />
        </Link>
      </div>

    </main>
  );
}
