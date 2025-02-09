import { ProjectType } from "./ProjectType";
import { SocialLinks } from "./SocialLinks"; // si SocialLinks est défini dans ce fichier

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  image: string;
  description?: string;
  gallery: string[];
  socialLinks?: SocialLinks;
  size?: "small" | "medium" | "large";
}
