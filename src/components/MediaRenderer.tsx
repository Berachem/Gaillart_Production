import { useRef, useEffect } from "react";

interface MediaRendererProps {
  src: string;
  className?: string;
  alt?: string;
  videoOptions?: {
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
  };
}

// Fonction pour déterminer si l'URL est une vidéo en fonction de l'extension
function isVideo(url: string): boolean {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".wmv"];
  const lowerUrl = url.toLowerCase();
  return (
    videoExtensions.some((ext) => lowerUrl.endsWith(ext)) ||
    lowerUrl.includes("video")
  );
}

export function MediaRenderer({
  src,
  className = "",
  alt = "",
  videoOptions = {
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
  },
}: MediaRendererProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // S'assurer que les options sont appliquées après le montage
    if (videoRef.current && isVideo(src)) {
      if (videoOptions.autoplay) {
        // Tentative de lecture automatique après le chargement complet
        videoRef.current.addEventListener("loadeddata", () => {
          videoRef.current?.play().catch((err) => {
            console.warn("Lecture automatique bloquée:", err);
            // En cas d'échec, mettre en sourdine et réessayer (politique des navigateurs)
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .catch((e) => console.error("Impossible de lire la vidéo:", e));
            }
          });
        });
      }
    }
  }, [src, videoOptions.autoplay]);

  if (isVideo(src)) {
    return (
      <div className={`relative ${className} video-container`}>
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          autoPlay={videoOptions.autoplay}
          muted={videoOptions.muted}
          loop={videoOptions.loop}
          controls={videoOptions.controls}
          playsInline
        />
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="eager" />;
}
