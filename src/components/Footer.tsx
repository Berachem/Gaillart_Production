import { DiscordLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";

export function Footer({
  showSocialNetworks = true,
}: {
  showSocialNetworks?: boolean;
}) {
  return (
    <footer className="px-6 md:px-12 ">
      <div className="container mx-auto"></div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/*         <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold">Contactez-nous</h2>
          <div className="flex items-center mt-4">
            <Mail className="mr-2" />
            <span>contact@agenceaudiovisuel.com</span>
          </div>
          <div className="flex items-center mt-2">
            <Phone className="mr-2" />
            <span>+33 1 23 45 67 89</span>
          </div>
        </div> */}
      </div>
      <div className="mt-12 text-center">
        {showSocialNetworks && (
          <div className="flex justify-center mb-4">
            <a
              href="https://www.snapchat.com/add/gaillart.pro"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <img
                src="https://img.icons8.com/m_sharp/512/FFFFFF/snapchat.png"
                alt="Snapchat"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.youtube.com/@Gaillart-Production"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <YoutubeIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@gaillartproduction"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <img
                src="https://img.icons8.com/win10/512/FFFFFF/tiktok.png"
                alt="TikTok"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/gaillart.production?igsh=b2VkOTIyNWJrbnR3"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <InstagramLogoIcon className="w-6 h-6" />
            </a>
            <a
              href="https://discord.gg/PbcNZsXyyb"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <DiscordLogoIcon className="w-6 h-6" />
            </a>
          </div>
        )}
        <p>
          &copy; {new Date().getFullYear()} Gaillart Production. Tous droits
          réservés.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 ">
          <a className="mb-4 md:mb-0 md:mr-4 text-gray-500">
            Conditions Générales
          </a>
          {/*       <a className="mb-4 md:mb-0 md:mr-4 text-gray-500">
            Politique de Confidentialité
          </a>
          <a className="mb-4 md:mb-0 md:mr-4 text-gray-500">Mentions Légales</a> */}
        </div>
      </div>
    </footer>
  );
}
