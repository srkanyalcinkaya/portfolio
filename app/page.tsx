import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <p className="text-xl mb-5">
        Ben, profesyonel bir editör ve yazılım geliştiricisiyim. Topluluk yönetimi ve geliştirme konusunda profesyonel olarak 5 yıldır ilgileniyorum, alanlarında yüksek düzeyde bilgi ve deneyime sahip olduğum.
      </p>
      <p className="text-xl mb-5">
        Bu, benim sayısal evim, burada paylaşıyorum
        <Link href="/projects" className="text-black"> projeler</Link>, 
        <Link href="/writings" className="text-black"> yazılar</Link>, ve 
        <Link href="/codes" className="text-black"> kodlar</Link>.
      </p>
      <div className="flex gap-2 items-center text-xl">
        İletişime geçmek için:
        <Link href="https://x.com/srkanyalcinkaya" target="_blank">
          <FiTwitter size={16} color="black" />
        </Link>
        <Link href="https://github.com/srkanyalcinkaya" target="_blank">
          <FiGithub size={16} color="black" />
        </Link>
        <Link href="https://www.linkedin.com/in/serkan-yalcinkaya/" target="_blank">
          <FiLinkedin size={16} color="black" />
        </Link>
      </div>

    </main>
  );
}
