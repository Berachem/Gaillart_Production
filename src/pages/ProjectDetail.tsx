import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";

import { fakeProjects } from "@/fakeProjects"; // <-- nouvel import
import { BlurFade } from "@/components/ui/blur-fade";
import { Footer } from "@/components/Footer"; // <-- nouvel import
import { Facebook, InstagramIcon, Twitter } from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = fakeProjects.find((p) => p.slug === slug);
  const otherProjects = fakeProjects.filter((p) => p.slug !== slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="overflow-x-hidden bg-black text-white pb-5">
      {/* Hero Image */}
      <div className="h-[70vh] relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1
              className="font-['Montserrat'] text-4xl md:text-8xl font-medium tracking-[3.5px] text-white mb-4"
              style={{ textShadow: "1px -4px 11px #000000" }}
            >
              {project.title}
            </h1>
            <p className="text-white/80 text-3xl">{project.type}</p>
          </motion.div>
        </div>
      </div>
      {/* Project Description */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-center leading-relaxed text-white"
        >
          {project.description}
        </motion.p>
      </div>
      {/* Section Réseaux Sociaux */}
      {project.socialLinks && Object.keys(project.socialLinks).length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Liens</h2>
          <div className="flex gap-4">
            {/* Affichage conditionnel sur chaque réseau */}
            {project.socialLinks?.facebook && (
              <a
                href={project.socialLinks.facebook}
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <Facebook className="w-6 h-6" /> Facebook
              </a>
            )}
            {project.socialLinks?.twitter && (
              <a
                href={project.socialLinks.twitter}
                className="text-blue-400 hover:underline flex items-center gap-2"
              >
                <Twitter className="w-6 h-6" /> Twitter
              </a>
            )}
            {project.socialLinks?.instagram && (
              <a
                href={project.socialLinks.instagram}
                className="text-pink-500 hover:underline flex items-center gap-2"
              >
                <InstagramIcon className="w-6 h-6" /> Instagram
              </a>
            )}
            {project.socialLinks?.linkedin && (
              <a
                href={project.socialLinks.linkedin}
                className="text-blue-600 hover:underline flex items-center gap-2"
              >
                <LinkedInLogoIcon className="w-6 h-6" /> LinkedIn
              </a>
            )}
          </div>
        </div>
      )}
      {/* Nouvelle Galerie d'images en ligne */}
      <div className="mx-auto px-6 py-16">
        <div className="flex gap-4 overflow-x-auto">
          {project.gallery.map((image, index) => (
            <div key={index} className="flex-none">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="h-96 w-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Projects Section */}
      <section className="py-24 px-6 md:px-12 ">
        <BlurFade delay={0.25} inView>
          <h2 className="text-4xl md:text-5xl mb-16 text-center text-gold ">
            <span>Autres </span> <span className="font-bold">RÉALISATIONS</span>
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {otherProjects.map((project) => (
            <div key={project.slug}>
              <ProjectCard
                title={project.title}
                image={project.image}
                slug={project.slug}
                type={project.type}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer /> {/* Insertion du Footer */}
    </div>
  );
}
