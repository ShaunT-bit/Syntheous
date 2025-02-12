"use client";
import {Button} from "@/components/Button";
import starsBg from "@/assets/stars.png"
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export const Hero = () => {
    const sectionref = useRef(null);
    const {scrollYProgress}= useScroll({
        target: sectionref,
        offset: ['start end', 'end start'],
    })

    const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300])
  return (
      <motion.section ref={sectionref} animate={{
          backgroundPositionX: starsBg.width,
      }} transition={{
          repeat:Infinity,
          duration:120,
          ease:"linear",
      }}style={{
          backgroundImage: `url(${starsBg.src})`,
          backgroundPositionY
      }} className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">

          <div className={"absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,#003d69_15%,rgb(7,26,33,.5)_78%,transparent)]"}></div>
          {/*Planet */}
          <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-[#071a21] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.7%_18.3%,white,rgb(0,163,98)_37.7%,rgb(7,26,33))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(17,26,33)]"></div>
          {/* inner ring */}
          <motion.div style={{
              translateY :"-50%",
              translateX:"-50%",
          }} animate={{
              rotate:"1turn",
          }} transition={{
              repeat:Infinity,
              duration:60,
              ease:"linear",
          }} className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
          </motion.div>
          {/* middle ring */}
          <motion.div style={{
              translateY :"-50%",
              translateX:"-50%",
          }} animate={{
              rotate:"-1turn",
          }} transition={{
              repeat:Infinity,
              duration:60,
              ease:"linear",
          }} className={"absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"}></motion.div>
          {/* Outer ring */}
          <motion.div style={{
              translateY :"-50%",
              translateX:"-50%",
          }} animate={{
              rotate:"1turn",
          }} transition={{
              repeat:Infinity,
              duration:90,
              ease:"linear",
          }} className={"absolute h-[544px] w-[544px] md:h-[880px] md:w-[880px] rounded-full opacity-20  border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
              <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <div className="container relative mt-16">
              <h1 className={"text-[50px] md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(32,70,70,.5))] text-transparent bg-clip-text text-center"}>SYNTHEOUS</h1>
              <p className={"text-md md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto"}>
                  Engineering Precision, Driving Innovation.
              </p>
          </div>
      </motion.section>
  );
};
