import { ProjectList } from "@/components/ui/project-list";
import { projects } from "@/constants";
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