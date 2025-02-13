import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ProjectCard } from "@/components/ProjectCard";

import { BlurFade } from "@/components/ui/blur-fade";
import { fakeProjects } from "@/fakeProjects";
import { Footer } from "@/components/Footer";
import Marquee from "react-fast-marquee"; // <-- nouvel import

export function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "Publicité TV",
      image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae",
    },
    {
      title: "Film Corporate",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    },
    {
      title: "Snack Content",
      image: "https://images.unsplash.com/photo-1533063319369-0de118afe00a",
    },
    {
      title: "Film Événementiel",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    {
      title: "Tourisme",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    },
    {
      title: "Micro Documentaire",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    },
  ];

  const companies = [
    {
      name: "Hermes",
      image:
        "https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Herm%C3%A8s.svg",
    },
    {
      name: "Carrefour",
      image:
        "https://upload.wikimedia.org/wikipedia/fr/3/3b/Logo_Carrefour.svg",
    },

    {
      name: "Total",
      image:
        "https://companieslogo.com/img/orig/TTE_BIG-cf13cf30.png?t=1720244494",
    },
    {
      name: "Kitchen",
      image:
        "https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png",
    },
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
          <source
            src="https://videos.pexels.com/video-files/7689163/7689163-uhd_2732_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        {/* Marquee overlay */}
        <div className="absolute bottom-20 w-full">
          {companies.length < 6 && window.innerWidth > 768 ? (
            <div className="flex justify-center space-x-10">
              {companies.map((company) => (
                <img
                  key={company.name}
                  src={company.image}
                  alt={company.name}
                  className="h-16 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          ) : (
            <Marquee gradient={false} speed={30}>
              {companies.map((company) => (
                <img
                  key={company.name}
                  src={company.image}
                  alt={company.name}
                  className="h-16 mx-8 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </Marquee>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl mb-6 text-[#FFB84D] ">
            <strong>L'Amiral</strong>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto ">
            <strong>We create</strong> compelling visual narratives that{" "}
            <strong>captivate</strong> and <strong>inspire</strong>.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 px-6 md:px-12 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-[2000px] mx-auto"
        >
          <BlurFade delay={0.25} inView>
            <h2 className="text-4xl md:text-5xl mb-16 text-center text-[#FFB84D] ">
              <span>NOS </span> <span className="font-bold">RÉALISATIONS</span>
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {fakeProjects.map((project) => (
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
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-[2000px] mx-auto">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl md:text-4xl mb-16 text-center text-[#FFB84D] ">
              <span>SIX FAÇONS DE FAIRE </span>{" "}
              <span className="font-bold"> VIBRER</span> VOS{" "}
              <span className="font-bold">IDÉES</span>
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 justify-items-center">
            {categories.map((category) => (
              <div
                key={category.title}
                className="relative aspect-[16/9] overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover darken-on-hover-media"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/60 transition-all duration-300">
                  <h3 className="text-2xl font-medium text-white text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
