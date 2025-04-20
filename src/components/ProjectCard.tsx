import { motion } from "framer-motion";
import { Project } from "@/types/Project";

export interface ProjectCardProps
  extends Pick<Project, "title" | "image" | "slug" | "type"> {}

export function ProjectCard({ title, image, slug, type }: ProjectCardProps) {
  return (
    <a href={`/project/${slug}`}>
      <motion.div
        className="relative aspect-video overflow-hidden rounded-lg"
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center hover:bg-black/60 transition-all duration-300">
          <h3
            className="font-['Montserrat'] text-[25px]  tracking-[3.5px] text-white text-center mb-2"
            style={{ textShadow: "1px -4px 11px #000000", fontWeight: 500 }}
          >
            {title}
          </h3>
          <p className="text-white/80 uppercase tracking-wider text-sm">
            {type}
          </p>
        </div>
      </motion.div>
    </a>
  );
}
