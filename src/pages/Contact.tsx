import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Film } from "lucide-react";
import React, { useState } from "react";
import { CourierClient } from "@trycourier/courier";
import BG_Contact from "../assets/videos/bg-contact.mp4";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const courier = new CourierClient({
      authorizationToken: "pk_prod_37BBNMH95Y4REJM6QH44Y9ZF3PJ0",
    });
    try {
      // Envoyer email vers le client
      const { requestId: clientRequestId } = await courier.send({
        message: {
          to: { email },
          template: "ZSX40NJRPD4NB2MC3T6X75SCS7AE",
          data: { name, subject, message },
        },
      });
      console.log("Email envoyé au client, requestId :", clientRequestId);

      // Envoyer email à gaillart.production@gmail.com
      const { requestId: prodRequestId } = await courier.send({
        message: {
          to: { email: "gaillart.production@gmail.com" },
          template: "ZSX40NJRPD4NB2MC3T6X75SCS7AE",
          data: { nom: name, email, sujet: subject, contenu: message },
        },
      });
      console.log("Email envoyé à la production, requestId :", prodRequestId);
      // ... éventuellement réinitialiser les états ...
    } catch (error) {
      console.error("Erreur lors de l'envoi du mail:", error);
    }
  };

  return (
    <div className="relative w-full h-screen text-white">
      {/* Vidéo de fond avec fond noir pendant le chargement */}
      <video
        style={{ backgroundColor: "black" }}
        className="absolute inset-0 -z-10 object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BG_Contact} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      {/* Overlay pour assombrir la vidéo */}
      <div className="absolute inset-0 -z-5 bg-black opacity-50" />

      {/* Contenu */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto pt-24 md:pt-64 pb-12 px-6 md:px-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFB84D]">
                <strong>Contactez-nous!</strong>
              </h2>
              <p className="text-white mb-8 text-lg">
                <strong>Créons</strong> quelque chose d'extraordinaire ensemble.
                Contactez-nous pour discuter de votre prochain projet.
              </p>
              <div className="space-y-4 text-white">
                {/*   <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <span>gaillart.production@gmail.com</span>
                </div> */}
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>+33 6 59 07 15 86</span>
                </div>
                <div className="flex items-center gap-4">
                  <Film className="w-6 h-6" />
                  <span>Disponible pour des projets dans le monde entier</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-white text-black bg-transparent placeholder-white bg-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-white text-black bg-transparent placeholder-white bg-white"
                  />
                </div>
                <Input
                  placeholder="Sujet"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border border-white text-black bg-transparent placeholder-white bg-white"
                />
                <Textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border border-white text-black bg-transparent placeholder-white min-h-[150px] bg-white"
                />
                <Button
                  type="submit"
                  disabled={!email.trim() || !subject.trim() || !message.trim()}
                  className="w-full bg-[#FFB84D] text-black hover:bg-[#FFB84D]/80 transition duration-300"
                >
                  Envoyer le Message 🚀
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
        <div className="bg-black sm:bg-transparent">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
