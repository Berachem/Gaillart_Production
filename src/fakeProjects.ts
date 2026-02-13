import { Project } from "@/types/Project";
import { ProjectType } from "@/types/ProjectType";
import CampingBenBellecVideo from "@/assets/projects/camping_ben_bellec/videoLongue.mp4";
import AmazonGreeceeVideo from "@/assets/projects/amazon-greecee/amazon-greecee.mp4";
//const randomImage = (width: number, height: number) =>
// `https://random.imagecdn.app/${width}/${height}?random=${Math.random()}`;

export const fakeProjects: Project[] = [
  {
    slug: "amazon-greece",
    title: " Amazon x Greece",
    type: ProjectType.Realisation3D,
    description:
      "Une réalisation 3D immersive et spectaculaire, conçue pour donner vie à un univers visuel saisissant et mettre en valeur chaque détail avec un réalisme cinématographique.",
    thumbnail: AmazonGreeceeVideo,
    gallery: [],
    socialLinks: {
      /*    facebook: "https://facebook.com/blank-ffme",
      twitter: "https://twitter.com/blank-ffme",
      instagram: "https://instagram.com/blank-ffme",
      linkedin: "https://linkedin.com/company/blank-ffme", */
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
    slug: "camping-pen-bellec",
    title: "Camping Pen Bellec",
    type: ProjectType.Tourisme,
    description:
      "Un film promotionnel immersif pour le Camping Pen Bellec à Telgruc-sur-Mer en Bretagne.",
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
