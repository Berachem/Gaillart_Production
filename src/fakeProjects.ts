import { Project } from "@/types/Project";
import { ProjectType } from "@/types/ProjectType";
import CampingBenBellecVideo from "@/assets/projects/camping_ben_bellec/videoLongue.mp4";
const randomImage = (width: number, height: number) =>
  `https://random.imagecdn.app/${width}/${height}?random=${Math.random()}`;

export const fakeProjects: Project[] = [
  {
    slug: "blank-ffme",
    title: "Blank × FFME",
    type: ProjectType.PubliciteTV,
    description:
      "Une campagne publicitaire captivante mettant en vedette les athletes de la Federation Francaise de la Montagne et de l'Escalade",
    thumbnail: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    gallery: [],
    socialLinks: {
      facebook: "https://facebook.com/blank-ffme",
      twitter: "https://twitter.com/blank-ffme",
      instagram: "https://instagram.com/blank-ffme",
      linkedin: "https://linkedin.com/company/blank-ffme",
    },
    size: "large",
  },
  {
    slug: "lune-de-miel",
    title: "Lune de Miel",
    type: ProjectType.PubliciteTV,
    description:
      "Une publicite poetique et gourmande pour la marque de miel preferee des Francais",
    thumbnail: "https://cache.marieclaire.fr/data/fichiers/4r/lune-de-miel.jpg",
    gallery: [],
    socialLinks: {
      facebook: "https://facebook.com/lune-de-miel",
      instagram: "https://instagram.com/lune-de-miel",
    },
    size: "medium",
  },
  {
    slug: "camping-ben-bellec",
    title: "Camping Ben Bellec",
    type: ProjectType.Tourisme,
    description:
      "Un film promotionnel immersif pour le Camping Ben Bellec à Telgruc-sur-Mer en Bretagne.",
    thumbnail: CampingBenBellecVideo,
    gallery: [],
    socialLinks: {},
    size: "medium",
  },
  {
    slug: "dji",
    title: "DJI",
    type: ProjectType.SnackContent,
    description: "Un contenu snack dynamique pour DJI",
    thumbnail: "https://images.unsplash.com/photo-1533063319369-0de118afe00a",
    gallery: [],
    socialLinks: {},
    size: "small",
  },
  {
    slug: "clubmed",
    title: "CLUBMED",
    type: ProjectType.FilmEvenementiel,
    description: "Un film événementiel captivant pour CLUBMED",
    thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    gallery: [],
    socialLinks: {},
    size: "large",
  },
  {
    slug: "guyane",
    title: "GUYANE",
    type: ProjectType.Tourisme,
    description: "Une aventure visuelle en Guyane",
    thumbnail: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    gallery: [],
    socialLinks: {},
    size: "medium",
  },
];
