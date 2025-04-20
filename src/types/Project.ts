import { ProjectType } from "./ProjectType";
import { SocialLinks } from "./SocialLinks";

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  thumbnail: string; // Remplace l'ancien attribut image
  description?: string;
  gallery: string[]; // Les URLs peuvent être des images ou des vidéos
  socialLinks?: SocialLinks;
  size?: "small" | "medium" | "large";
}
