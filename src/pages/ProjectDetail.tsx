import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { MediaRenderer } from "@/components/MediaRenderer";

import { fakeProjects } from "@/fakeProjects";
import { BlurFade } from "@/components/ui/blur-fade";
import { Footer } from "@/components/Footer";
import {
  Facebook,
  InstagramIcon,
  Twitter,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

// Fonction pour déterminer si l'URL est une vidéo
function isVideo(url: string): boolean {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".wmv"];
  const lowerUrl = url.toLowerCase();
  return (
    videoExtensions.some((ext) => lowerUrl.endsWith(ext)) ||
    lowerUrl.includes("video")
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = fakeProjects.find((p) => p.slug === slug);
  const otherProjects = fakeProjects.filter((p) => p.slug !== slug);

  // États pour contrôler la vidéo
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFull, setIsFull] = useState(false);

  // écouteur changement fullscreen (supportant les préfixes navigateurs)
  useEffect(() => {
    const onFsChange = () => {
      setIsFull(
        !!(
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).mozFullScreenElement
        ),
      );
    };

    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("mozfullscreenchange", onFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("mozfullscreenchange", onFsChange);
    };
  }, []);

  // bascule le son et met à jour la vidéo
  const toggleMute = () => {
    console.log("Toggle mute");
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  // met en pause / reprend la vidéo et met à jour l'état
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // toggle fullscreen avec support mobile
  const toggleFull = () => {
    if (!containerRef.current) return;

    const elem = containerRef.current as any;
    const isCurrentlyFullscreen =
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).mozFullScreenElement;

    if (!isCurrentlyFullscreen) {
      // Entrer en fullscreen
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch((err: Error) => {
          console.log("Erreur fullscreen:", err);
          // Fallback webkit
          if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          }
        });
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      }
    } else {
      // Quitter le fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      }
    }
  };

  if (!project) return <div>Project not found</div>;

  const isHeroVideo = isVideo(project.thumbnail);

  return (
    <div className="overflow-x-hidden bg-black text-white pb-5">
      {/* Hero Media - Hauteur augmentée */}
      <div ref={containerRef} className="h-[85vh] relative">
        {isHeroVideo ? (
          <>
            <video
              ref={videoRef}
              src={project.thumbnail}
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />
            {/* Contrôles de la vidéo */}
            <div className="absolute bottom-8 right-8 flex space-x-3 z-10">
              <button
                onClick={toggleMute}
                className="bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
              <button
                onClick={togglePlay}
                className="bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              <button
                onClick={toggleFull}
                className="bg-black/60 hover:bg-black/80 p-3 rounded-full transition"
              >
                {isFull ? (
                  <Minimize2 className="w-6 h-6 text-white" />
                ) : (
                  <Maximize2 className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={toggleFull}
              className="absolute bottom-8 right-8 bg-black/60 hover:bg-black/80 p-3 rounded-full transition z-10"
            >
              {isFull ? (
                <Minimize2 className="w-6 h-6 text-white" />
              ) : (
                <Maximize2 className="w-6 h-6 text-white" />
              )}
            </button>
          </>
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl px-4"
          >
            <h1
              className="font-['Montserrat'] text-4xl md:text-8xl font-medium tracking-[3.5px] text-white mb-4"
              style={{ textShadow: "1px -4px 11px #000000" }}
            >
              {project.title}
            </h1>
            <p className="text-white/80 text-xl md:text-3xl">{project.type}</p>
          </motion.div>
        </div>
      </div>

      {/* Project Description - avec animation améliorée */}
      <div className="max-w-4xl mx-auto px-6 py-7 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-center leading-relaxed text-white">
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Section Réseaux Sociaux */}
      {project.socialLinks && Object.keys(project.socialLinks).length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Liens</h2>
            <div className="flex gap-4 flex-wrap">
              {project.socialLinks?.facebook && (
                <a
                  href={project.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-all"
                >
                  <Facebook className="w-6 h-6" /> Facebook
                </a>
              )}
              {project.socialLinks?.twitter && (
                <a
                  href={project.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-all"
                >
                  <Twitter className="w-6 h-6" /> Twitter
                </a>
              )}
              {project.socialLinks?.instagram && (
                <a
                  href={project.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-all"
                >
                  <InstagramIcon className="w-6 h-6" /> Instagram
                </a>
              )}
              {project.socialLinks?.linkedin && (
                <a
                  href={project.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition-all"
                >
                  <LinkedInLogoIcon className="w-6 h-6" /> LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Galerie d'images et vidéos - avec plus d'espace */}
      {project.gallery.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto px-6 py-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gold">
            Galerie
          </h2>
          <div className="flex gap-6 overflow-x-auto py-4 pb-8">
            {project.gallery.map((mediaUrl, index) => (
              <div key={index} className="flex-none">
                <MediaRenderer
                  src={mediaUrl}
                  alt={`${project.title} - Media ${index + 1}`}
                  className="h-[500px] w-auto object-cover rounded-lg shadow-lg"
                  videoOptions={{
                    autoplay: true,
                    muted: false, // Son activé dans la galerie
                    loop: true,
                    controls: true, // Contrôles visibles pour les vidéos
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Projects Section */}
      {otherProjects.length > 0 && (
        <section className="py-24 px-6 md:px-12">
          <BlurFade delay={0.25} inView>
            <h2 className="text-4xl md:text-5xl mb-16 text-center text-gold">
              <span>Autres </span>{" "}
              <span className="font-bold">RÉALISATIONS</span>
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.slice(0, 3).map((project) => (
              <div key={project.slug}>
                <ProjectCard
                  title={project.title}
                  thumbnail={project.thumbnail}
                  slug={project.slug}
                  type={project.type}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
