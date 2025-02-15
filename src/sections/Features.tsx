"use client";
import {DotLottieCommonPlayer, DotLottiePlayer} from "@dotlottie/react-player";

import productImage from "@/assets/car.png";
import {ComponentPropsWithoutRef, useEffect, useRef, useState} from "react";

import {useMotionTemplate, motion, useMotionValue, animate, ValueAnimationTransition} from "framer-motion";


const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Aerodynamic Excellence",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 80,
    backgroundSizeX: 170,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Precision Engineering",
    isNew: false,
    backgroundPositionX: 60,
    backgroundPositionY: 60,
    backgroundSizeX: 200,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Cutting-Edge Materials",
    isNew: false,
    backgroundPositionX: 80,
    backgroundPositionY: 7,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props:typeof tabs[number] & ComponentPropsWithoutRef<'div'> & {selected:boolean}) => {

  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const {height,width} = tabRef.current?.getBoundingClientRect();
    const circumference = height*2 + width*2;

    const times = [0,width/circumference, (width+height)/circumference, (width*2 +height)/circumference, 1]
    const options:ValueAnimationTransition= {
      times,
      duration: 4,
      repeat: Infinity,
      ease:"linear",
      repeatType:"loop",
    }
    animate(xPercentage,[0,100,100,0,0],options);
    animate(yPercentage,[0,0,100,100,0],options);
  },[props.selected, xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) {
      return;
    }
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
      <div ref={
        tabRef} onMouseEnter={handleTabHover} key={props.title} onClick={props.onClick} className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">
        {props.selected && (
            <motion.div style={{
              maskImage,
            }} className="absolute inset-0 -m-px border border-[#00a362] rounded-xl "></motion.div>
        )}

        <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
          <DotLottiePlayer ref={dotLottieRef} src={props.icon} className="h-5 w-5" />
        </div>
        <div className="font-medium">{props.title}</div>
        {props.isNew && (
            <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">NEW</div>
        )}
      </div>);
}

export const Features = () => {


  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index:number) => {
    setSelectedTab(index);

    const animateOptions:ValueAnimationTransition = {
      duration: 2,
      ease:"easeInOut",
    }

    animate(backgroundSizeX,[backgroundSizeX.get(),100,tabs[index].backgroundSizeX],animateOptions);

    animate(backgroundPositionX,[backgroundPositionX.get(),tabs[index].backgroundPositionX],animateOptions);

    animate(backgroundPositionY,[backgroundPositionY.get(),tabs[index].backgroundPositionY],animateOptions);

  }

  return <section id="features" className="py-20 md:py-24 ">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter ">Explore the Engineering Excellence Behind Our Car.</h2>
      <p className="text-white/70 text-lg md:text-xl tracking-tight max-w-2xl mx-auto text-center mt-5">
        From aerodynamics to precision components, our design embodies speed, innovation, and performance. Click on the features below to discover the key elements that set us apart.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-3 ">
        {tabs.map((tab,tabIndex) => (
          <FeatureTab {...tab} selected ={selectedTab ===tabIndex} onClick={() => handleSelectTab(tabIndex)} key={tab.title} title={tab.title} isNew={tab.isNew} />
        ))}
      </div >
      <div className="border border-white/20 p-25 rounded-xl mt-3">
        <motion.div className="aspect-video bg-cover border border-white/20 rounded-lg"
             style={{
               backgroundPosition,
               backgroundSize,

               backgroundImage: `url(${productImage.src})`}}></motion.div>
      </div>
    </div>
  </section>;
};
