import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    slug: 'blank-ffme',
    title: 'Blank × FFME',
    type: 'PUBLICITÉ TÉLÉVISÉE',
    description: 'Une campagne publicitaire captivante mettant en vedette les athletes de la Federation Francaise de la Montagne et de l\'Escalade',
    mainImage: 'https://images.unsplash.com/photo-1522163182402-834f871fd851',
    gallery: [
      'https://images.unsplash.com/photo-1516592066400-86808fed0e9e',
      'https://images.unsplash.com/photo-1522163182402-834f871fd851',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e',
    ],
  },
  {
    slug: 'lune-de-miel',
    title: 'Lune de Miel',
    type: 'PUBLICITÉ TÉLÉVISÉE',
    description: 'Une publicite poetique et gourmande pour la marque de miel preferee des Francais',
    mainImage: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae',
    gallery: [
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae',
      'https://images.unsplash.com/photo-1471943311424-646960669fbc',
      'https://images.unsplash.com/photo-1562249004-8aa2c6bb5090',
    ],
  },
];

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const otherProjects = projects.filter(p => p.slug !== slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="h-[70vh] relative">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-['Montserrat'] text-4xl md:text-5xl font-medium tracking-[3.5px] text-white mb-4"
                style={{ textShadow: '1px -4px 11px #000000' }}>
              {project.title}
            </h1>
            <p className="text-white/80 text-xl">{project.type}</p>
          </motion.div>
        </div>
      </div>

      {/* Project Description */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-center leading-relaxed"
        >
          {project.description}
        </motion.p>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Carousel>
          <CarouselContent>
            {project.gallery.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Other Projects */}
      <div className="bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Autres Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                image={project.mainImage}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}