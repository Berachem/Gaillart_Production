import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Film, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFB84D]">
              <strong>Get in Touch</strong>
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              <strong>Let's create</strong> something extraordinary together.
              Reach out to discuss your next project.
            </p>
            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span>hello@visualstories.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Film className="w-6 h-6" />
                <span>Available for worldwide projects</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" className=" border-neutral-800" />
                <Input
                  type="email"
                  placeholder="Email"
                  className=" border-neutral-800"
                />
              </div>
              <Input placeholder="Subject" className=" border-neutral-800" />
              <Textarea
                placeholder="Message"
                className=" border-neutral-800 min-h-[150px]"
              />
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
