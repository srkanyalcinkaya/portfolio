import { writings } from "@/constants";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function Page() {
    return (
        <div>
            <p className="text-xl font-semibold mb-5">Bazı düşünceler ve öğrendiklerim:</p>
            {writings.map((writing: any) => (
                <div key={writing.title} className="gap-2 flex flex-col ">
                    <h2 className="text-xl font-bold text-black hover:underline">{writing.title}</h2>
                    <div className="flex gap-2 text-sm ">
                        <span>
                            {writing.date} -
                        </span>
                        <span className="text-black">
                            {writing.category}
                        </span>
                    </div>
                    <p className="text-base ">{writing.description}</p>
                    <Link href={writing.link} className="text-sm font-bold text-black hover:underline flex items-center gap-2 mt-4 ">Okumaya Devam Et <MdArrowForward color="black"/></Link>
                </div>
            ))}
        </div>
    );
}