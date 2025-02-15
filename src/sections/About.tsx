import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import sarvesh from "@/assets/sarvesh.jpeg";
import shaun from "@/assets/shaun.jpeg";
import pranav from "@/assets/pranav.jpeg";
import vishrut from "@/assets/vishrut.jpeg";
import thanmay from "@/assets/thanmay.jpeg";
import rohit from "@/assets/rohit.jpeg";
import Image from "next/image";

const testimonials = [
  {
    text: "Shaun takes charge as the team leader, coordinating efforts, fostering collaboration, and ensuring the team stays focused on its goals. He oversees all aspects of the team’s strategy, driving innovation and unity to achieve success.",
    name: "Shaun Thomas Shibu",
    title: "Team Leader & Digital Strategist",
    avatarImg: shaun,
  },
  {
    text: "Thanmay crafts the team’s visual identity, delivering professional designs for logos, promotional materials, and car liveries.",
    name: "Thanmay Nair",
    title: "Brand & Visual Designer",
    avatarImg: thanmay,
  },
  {
    text: "Vishrut designs the car, focusing on the car's aerodynamics, reducing drag and enhancing track performance with creative and engineering-driven solutions.",
    name: "Vishrut Raju",
    title: "Structural Design Engineer",
    avatarImg: vishrut,
  },
  {
    text: "Pranav specializes in designing aerodynamic and innovative F1 car models, ensuring speed and compliance with technical regulations through expert CAD proficiency.",
    name: "Pranav Prakash",
    title: "Aerodynamic Design Specialist",
    avatarImg: pranav,
  },
  {
    text: "Rohit develops the pit wall display and 3D animations, illustrating the car’s mechanics and performance with captivating visuals.",
    name: "Rohit",
    title: "Visual Experience Engineer",
    avatarImg: rohit,
  },
  {
    text: "Sarveshwar drives the team’s marketing efforts, securing sponsorships and increasing visibility to ensure competitive success.",
    name: "Sarveshwar",
    title: "Marketing & Sponsorship Lead",
    avatarImg: sarvesh,
  }
];

export const About = () => {
  return <section id={"stem_racing"} className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium ">About Stem Racing</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-3xl mx-auto">STEM Racing
        (formerly F1 in Schools) is an international STEM competition endorsed by Formula 1 for students aged 9–19.</p>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-3xl mx-auto">STEM Racing
        Groups of 3–6 students have to design and manufacture a miniature F1 car using CAD/CAM and CAE design tools. The cars are powered by CO2 cartridges and are attached to a track by a nylon wire. They are timed from the moment they are launched to when they pass the finish line by a computer.</p>
    </div>
  </section>;
};
