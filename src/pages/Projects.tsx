import { fakeProjects } from "@/fakeProjects";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/Project";
import { ProjectType } from "@/types/ProjectType";
import { Footer } from "@/components/Footer";

const categoryNames: Record<string, string> = {
  [ProjectType.PubliciteTV]: "Publicité TV",
  [ProjectType.FilmCorporate]: "Film Corporate",
  [ProjectType.SnackContent]: "Snack Content",
  [ProjectType.FilmEvenementiel]: "Film Événementiel",
  [ProjectType.Tourisme]: "Tourisme",
  // ...ajouter d'autres mappings si nécessaire...
};

export function Projects() {
  // Regrouper les projets par catégorie (type)
  const projectsByCategory = fakeProjects.reduce(
    (acc: Record<string, Project[]>, project) => {
      const key = project.type;
      if (!acc[key]) acc[key] = [];
      acc[key].push(project);
      return acc;
    },
    {}
  );

  return (
    <div className="w-full min-h-screen bg-black text-white p-12 md:p-24">
      <h1 className="text-4xl font-bold mb-8 pt-5">Projets</h1>
      {Object.keys(projectsByCategory).map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {categoryNames[category] || category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsByCategory[category].map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}
