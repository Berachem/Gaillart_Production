"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  inView?: boolean;
}

export function BlurFade({
  children,
  delay = 0,
  inView: parentInView,
}: BlurFadeProps) {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mounted, setMounted] = useState(false);

  // Utilisons useEffect pour mettre à jour l'état après le montage du composant
  useEffect(() => {
    setMounted(true);
  }, []);

  // Si inView est fourni comme prop, utilisez-le, sinon utilisez l'état interne isInView
  const elementIsInView = parentInView !== undefined ? parentInView : isInView;

  return (
    <motion.div
      ref={ref}
      initial={
        mounted
          ? { opacity: 0, filter: "blur(10px)" }
          : { opacity: 1, filter: "blur(0px)" }
      }
      animate={
        elementIsInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
