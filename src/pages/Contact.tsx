import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, Film } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto pt-24 md:pt-64 pb-12 px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFB84D]">
              <strong>Contactez-nous!</strong>
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              <strong>Créons</strong> quelque chose d'extraordinaire ensemble.
              Contactez-nous pour discuter de votre prochain projet.
            </p>
            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span>bonjour@visualstories.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Film className="w-6 h-6" />
                <span>Disponible pour des projets dans le monde entier</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nom" className=" border-neutral-800" />
                <Input
                  type="email"
                  placeholder="Email"
                  className=" border-neutral-800"
                />
              </div>
              <Input placeholder="Sujet" className=" border-neutral-800" />
              <Textarea
                placeholder="Message"
                className=" border-neutral-800 min-h-[150px]"
              />
              <Button className="w-full" size="lg">
                Envoyer le Message
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
