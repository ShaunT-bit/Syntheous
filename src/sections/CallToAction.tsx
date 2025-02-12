"use client";
import {Button} from "@/components/Button";
import starsBg from "@/assets/stars.png"
import gridLine from "@/assets/grid-lines.png"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export const CallToAction = () => {

  const sectionRef = useRef<HTMLElement>(null);

  const {scrollYProgress}= useScroll({
    target:sectionRef,
    offset:['start end','end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300])

  return <section className="py-20 md:py-24" ref={sectionRef}>
    <div className="container">
      <motion.div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" animate={{
        backgroundPositionX:starsBg.width,
      }} transition={{
        repeat:Infinity,
        duration:60,
        easing:"linear",
      }} style={{
        backgroundPositionY,
        backgroundImage: `url(${starsBg.src})`,
      }}>
        <div className="absolute inset-0 bg-[#003d69] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
          backgroundImage: `url(${gridLine.src}`
        }}></div>
        <div className="relative">
          <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">Interested in sponsoring us?</h2>
          <p className="text-lg md:text-xl max-w-xs mx-auto tracking tight text-center text-white/70 px-4 mt-5 ">Click the button below to get started and explore impactful opportunities.</p>
          <div className="flex justify-center mt-8">
            <Button url="https://docs.google.com/forms/d/e/1FAIpQLSeEPsRsYKtFEFWDW-jL6IqsiV3ptOZqnZ-ZoQAetl9RVgGN2Q/viewform?usp=dialog">Click Here to Sponsor us!</Button>
          </div>
        </div>

      </motion.div>

    </div>
  </section>;
};
