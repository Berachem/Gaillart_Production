import { Project } from "@/types/Project";
import { ProjectType } from "@/types/ProjectType";

const randomImage = (width: number, height: number) =>
  `https://random.imagecdn.app/${width}/${height}?random=${Math.random()}`;

export const fakeProjects: Project[] = [
  {
    slug: "blank-ffme",
    title: "Blank × FFME",
    type: ProjectType.PubliciteTV,
    description:
      "Une campagne publicitaire captivante mettant en vedette les athletes de la Federation Francaise de la Montagne et de l'Escalade",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    gallery: [
      randomImage(600, 400),
      randomImage(600, 400),
      randomImage(600, 400),
    ],
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
    image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae",
    gallery: [
      randomImage(600, 400),
      randomImage(600, 400),
      randomImage(600, 400),
    ],
    socialLinks: {
      facebook: "https://facebook.com/lune-de-miel",
      instagram: "https://instagram.com/lune-de-miel",
    },
    size: "medium",
  },
  {
    slug: "hermes",
    title: "HERMÈS",
    type: ProjectType.FilmCorporate,
    description: "Une réalisation de film corporate pour Hermès",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    gallery: [randomImage(600, 400)],
    socialLinks: {},
    size: "medium",
  },
  {
    slug: "dji",
    title: "DJI",
    type: ProjectType.SnackContent,
    description: "Un contenu snack dynamique pour DJI",
    image: "https://images.unsplash.com/photo-1533063319369-0de118afe00a",
    gallery: [randomImage(600, 400)],
    socialLinks: {},
    size: "small",
  },
  {
    slug: "clubmed",
    title: "CLUBMED",
    type: ProjectType.FilmEvenementiel,
    description: "Un film événementiel captivant pour CLUBMED",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    gallery: [randomImage(600, 400)],
    socialLinks: {},
    size: "large",
  },
  {
    slug: "guyane",
    title: "GUYANE",
    type: ProjectType.Tourisme,
    description: "Une aventure visuelle en Guyane",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    gallery: [randomImage(600, 400)],
    socialLinks: {},
    size: "medium",
  },
];
