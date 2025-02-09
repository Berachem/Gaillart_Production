import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  image: string;
  slug: string;
  type: string;
}

export function ProjectCard({ title, image, slug, type }: ProjectCardProps) {
  return (
    <Link to={`/project/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative aspect-video overflow-hidden rounded-lg"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h3 
            className="font-['Montserrat'] text-[25px] font-medium tracking-[3.5px] text-white text-center mb-2"
            style={{ textShadow: '1px -4px 11px #000000' }}
          >
            {title}
          </h3>
          <p className="text-white/80 uppercase tracking-wider text-sm">
            {type}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}