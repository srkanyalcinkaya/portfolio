import { MdArrowOutward } from "react-icons/md";

export const GithubRepoCard = ({ latestRepo, t }: { latestRepo: any, t: any }) => {
    return (
        <div className="">
            <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                {latestRepo.name}
            </h1>
            <p className="text-base font-normal my-4 text-gray-500">
                {latestRepo.description && latestRepo.description.length > 100
                    ? latestRepo.description.substring(0, 50) + '...'
                    : latestRepo.description}
            </p>
            <a
                href={latestRepo.clone_url}
                className="font-semibold group flex flex-row space-x-2 w-full items-center"
            >
                <p>{t("view-on-github")} </p>
                <div className="transform  group-hover:translate-x-2 transition duration-300">
                    <MdArrowOutward />
                </div>
            </a>
        </div>
    );
}