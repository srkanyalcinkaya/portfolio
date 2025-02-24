const projects = [
    {
        title: "Coolhub Bag",
        description: "Coolhub Bag orta ölçekli bir alışveriş sitesidir. Coolhub Bag çanta satışlarını sunduğu bir alışveriş sitesidir.",
        distribution: "Blockchain",
        businessModel: "Alışveriş Hizmetleri",
        technicalStack: "Typescript, Nextjs, TailwindCSS, PWA, Redux, İyzico, Geliver, NextAuth.js",
        link: "https://www.coolhub-bag.com/",
        img: "/images/projects/coolhub-logo.png",
        year: "2025",
        active: true
    },
    {
        title: "Genesis Hukuk Eğitim Platformu",
        description: "Blockchain Teknolojisi Okuryazarlığı ve Hukuk İlişkisi",
        distribution: "Eğitim",
        businessModel: "Ücretli Hizmet",
        technicalStack: "Typescript, Nextjs, TailwindCSS, Redux, AWS, NextAuth.js",
        link: "https://www.dijitalvarlikhukuku.com/",
        img: "/images/projects/digitalvarlıkhukuk-lgoo.webp",
        year: "2025",
        active: true
    },
    {
        title: "Turkic Digital",
        description: "Türk Devletleri için daha bağlantılı, verimli ve müreffeh bir dijital ekosistem oluşturmak için teknoloji ve inovasyon yoluyla köprüler kurmak.",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Typescript, Nextjs, TailwindCSS, Redux",
        link: "https://www.turkicdigital.org/",
        img: "/images/projects/turkicdigital-logo.svg",
        year: "2025",
        active: true
    },
    {
        title: "[upon]",
        description: "Merkezi olmayan, güvenli ve dinamik kiralama çözümleriyle Web3 aracılığıyla sanal ofislerin geleceğini güçlendirmek, NFT odaklı tokenizasyon ve modüler akıllı sözleşme entegrasyonu yoluyla gerçek dünya varlıklarını dijital fırsatlara dönüştürmek.",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Typescript, Nextjs, TailwindCSS, Redux, Solidity, Web3.js, NFT",
        link: "https://upon-fvrs-git-main-asims-projects-27b258d6.vercel.app/",
        img: "/images/projects/turkicdigital-logo.svg",
        year: "2025",
        active: true
    },
    {
        title: "Chavinci Network",
        description: "Modüler Defter Teknolojisi (MDT)'nin piyasaya sürülmesiyle, merkezsizleşme, özelleştirme ve verimliliğin yeni bir çağı burada",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, Three.js, TailwindCSS, PWA, Redux, DatoCMS",
        link: "https://chavinci.com/",
        img: "/images/projects/chavinci-icon.png",
        year: "2022",
        active: true
    },
    {
        title: "Chavinci Desktop Wallet",
        description: "Modüler Defter Teknolojisi (MDT)'nin piyasaya sürülmesiyle, merkezsizleşme, özelleştirme ve verimliliğin yeni bir çağın cüzdanları",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "React Native, Javascript, BitcoinJS, TailwindCSS, Redux",
        img: "/images/projects/chavinci-icon.png",
        year: "2022",
        active: true
    },
    {
        title: "Chavinci Mobil Cross Wallet",
        description: "Modüler Defter Teknolojisi (MDT)'nin piyasaya sürülmesiyle, merkezsizleşme, özelleştirme ve verimliliğin yeni bir çağın cüzdanları",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "React Native, Javascript, BitcoinJS, TailwindCSS, Redux",
        img: "/images/projects/chavinci-icon.png",
        year: "2022",
        active: true
    },
    {
        title: "Chavinci Web Wallet",
        description: "Modüler Defter Teknolojisi (MDT)'nin piyasaya sürülmesiyle, merkezsizleşme, özelleştirme ve verimliliğin yeni bir çağın cüzdanları",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, BitcoinJS, TailwindCSS, PWA, Redux",
        link: "https://wallet.cha.network/",
        img: "/images/projects/chavinci-icon.png",
        year: "2022",
        active: true
    },
    {
        title: "Bitcoin Luck",
        description: "Bugün şanslı günün! Bitcoin adresinizi bulun ve büyük ödüller kazanın. Şansınızı deneyin ve bir sonraki şanslı kazanan siz olun.",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, Vite, TailwindCSS",
        link: "https://guardbotwaitlist.vercel.app/",
        img: "/images/projects/bitcoinluck-logo.png",
        year: "2024",
        active: true
    },
    {
        title: "The Octopus Labs",
        description: "The Octopus Labs'te, Yazılım Mühendisliği, Blok Zinciri Geliştirme, Akıllı Sözleşme Entegrasyonu, Yapay Zeka Çözümleri, Mobil Uygulama Oluşturma, Hukuki Uzmanlık, Proje Yönetimi ve Kullanıcı Deneyimi (UX) Tasarımı'nın gücünü, tutku, özveri ve vizyonun üç kalbiyle birleştiriyoruz.",
        distribution: "Hizmet",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, Next.js, TailwindCSS, DatoCMS",
        link: "https://www.theoctopuslabs.com/",
        img: "/images/projects/theoctopuslabs-logo.avif",
        year: "2023",
        active: true
    },
    {
        title: "LawLinkGlobal",
        description: "Chavinci Ağı tarafından desteklenen güvenli sohbet kutuları aracılığıyla doğrulanmış avukatlarla küresel olarak bağlantı kurun - Kripto para birimiyle ödeme yapın - KYC olmayan modelimizle maksimum gizliliğin keyfini çıkarın - ve merkezi olmayan hukuka erişin",
        distribution: "Blockchain",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, Vite, TailwindCSS",
        link: "https://lawlinkglobal.com/",
        img: "/images/projects/lawlinkglobal-logo.png",
        year: "2022",
        active: true
    },
    {
        title: "Salt ve Ortaklar",
        description: "Salt & Partners, dünya çapındaki danışmanları ve avukatları bir araya getirerek kesintisiz sınır ötesi hukuk ve danışmanlık hizmetleri sunan, uluslararası bir ağ oluşturan benzersiz bir ortaklık modeli sunar.",
        distribution: "Sosyal medya",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Next.js, Typescript, TailwindCSS, DatoCMS, GraphQL",
        img: "/images/projects/salt&partners-logo.png",
        year: "2024",
        active: true
    },
    {
        title: "Genesis Hukuk",
        description: "Genesis Hukuk, blok zinciri teknolojisinde yasal danışmanlık ve destek sunan önde gelen bir firmadır. Hukuk, teknoloji ve proje yönetimi konusundaki uzmanlığımızı birleştirerek müşterilerin blok zinciri etkileşimlerini güvenli ve verimli bir şekilde yönetmelerine yardımcı oluyoruz.",
        distribution: "Sosyal medya",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Next.js, Typescript, TailwindCSS, DatoCMS, GraphQL",
        img: "/images/projects/genesislaw-logo.png",
        year: "2024",
        active: true
    },
    {
        title: "Arabcılar Pansiyon ve Hotel",
        description: "Arabcılar Pansiyon ve Hotel için geliştirdiğim QR menü sitesi, misafirlerin yiyecek ve içecek seçeneklerini kolayca görüntüleyebilmesini sağlayan kullanıcı dostu bir dijital çözümdür.",
        distribution: "Sosyal medya",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, Vite, TailwindCSS",
        link: "https://www.arabacilarpansiyon.com/",
        img: "/images/projects/arabcilarpansiyonlogo.png",
        year: "2024",
        active: true
    },
    {
        title: "CharacterCheck",
        description: "CharacterCheck, karakterleri hassas bir şekilde saymak için güçlü bir metin analiz aracıdır. Sezgisel arayüzümüzle metni kolayca analiz edin.",
        distribution: "Araçlar",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "Javascript, Vite, TailwindCSS",
        link: "https://charactercheck.vercel.app/",
        img: "/images/projects/charactercheck-logo.png",
        year: "2024",
        active: true
    },

    {
        title: "Tabirle",
        description: "Rüyanızı tarif edin ve Tabirle’nin yapay zekasının anlamını yorumlamasına izin verin. Yapay zeka ile kapsamlı rüya analizi ve görselleştirme sağlayarak rüyalarınızı hatırlamanıza ve paylaşmanıza yardımcı oluyoruz.",
        distribution: "Sosyal medya",
        businessModel: "Ücretsiz hizmet",
        technicalStack: "React Native, Javascript, TailwindCSS",
        img: "/images/projects/tabirle-logo.png",
        year: "2023",
        active: false
    },

]


const writingsTR = [
    {
        title: "2024 Yılında Hangi Yazılım Dilini Öğrenmeliyim?",
        description: "Bu makale, 2024 yılında hangi yazılım dilini öğrenmeniz gerektiği konusunda kapsamlı bilgiler sunar. Popüler diller, teknolojik trendler ve endüstri taleplerine dair detaylı bir inceleme yapabilirsiniz.",
        date: "Eylül 2024",
        category: "Yazılım",
        link: "/writings/s/2024-yilinda-hangi-yazilim-dilini-ogrenmeliyim",
    },
];


const writingsEN = [
    {
        title: "Which Programming Language Should I Learn in 2024?",
        description: "This article provides comprehensive information on which programming language you should learn in 2024. You can find detailed insights into popular languages, technological trends, and industry demands.",
        date: "September 2024",
        category: "Software",
        link: "/writings/s/2024-yilinda-hangi-yazilim-dilini-ogrenmeliyim",
    },
];
export { projects, writingsTR, writingsEN };