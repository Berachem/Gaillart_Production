import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Film, Mail, Phone } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';

export function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "BLANK × FFME",
      slug: "blank-ffme",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      type: "Publicité TV",
      size: "large"
    },
    {
      title: "LUNE DE MIEL",
      slug: "lune-de-miel",
      image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae",
      type: "Publicité TV",
      size: "medium"
    },
    {
      title: "HERMÈS",
      slug: "hermes",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      type: "Film Corporate",
      size: "medium"
    },
    {
      title: "DJI",
      slug: "dji",
      image: "https://images.unsplash.com/photo-1533063319369-0de118afe00a",
      type: "Snack Content",
      size: "small"
    },
    {
      title: "CLUBMED",
      slug: "clubmed",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      type: "Film Événementiel",
      size: "large"
    },
    {
      title: "GUYANE",
      slug: "guyane",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      type: "Tourisme",
      size: "medium"
    },
  ];

  const categories = [
    { title: "Publicité TV", image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae" },
    { title: "Film Corporate", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738" },
    { title: "Snack Content", image: "https://images.unsplash.com/photo-1533063319369-0de118afe00a" },
    { title: "Film Événementiel", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
    { title: "Tourisme", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce" },
    { title: "Micro Documentaire", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1" },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Visual Stories</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            We create compelling visual narratives that captivate and inspire.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className="py-24 px-6 md:px-12 bg-neutral-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-[2000px] mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">NOS RÉALISATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {projects.map((project) => (
              <div key={project.slug} 
                className={`
                  ${project.size === 'large' ? 'md:col-span-8' : 
                    project.size === 'medium' ? 'md:col-span-6' : 
                    'md:col-span-4'}
                `}
              >
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  slug={project.slug}
                  type={project.type}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-[2000px] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#FFD700]">SIX FAÇONS DE FAIRE</h2>
          <h3 className="text-4xl font-bold text-center mb-16">VIBRER VOS IDÉES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-medium text-white text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-24 px-6 md:px-12 bg-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
              <p className="text-neutral-400 mb-8 text-lg">
                Let's create something extraordinary together. Reach out to discuss your next project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>hello@visualstories.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Film className="w-6 h-6" />
                  <span>Available for worldwide projects</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    className="bg-neutral-900 border-neutral-800"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-neutral-900 border-neutral-800"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-neutral-900 border-neutral-800"
                />
                <Textarea
                  placeholder="Message"
                  className="bg-neutral-900 border-neutral-800 min-h-[150px]"
                />
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}