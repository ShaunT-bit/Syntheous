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
    text: "Vishrut refines the car's structure, focusing on reducing drag and enhancing track performance with creative and engineering-driven solutions.",
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

export const Testimonials = () => {
  return <section id={"developers"} className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium ">Beyond Boundaries</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">Our team blends
        innovation and precision to excel in the F1 in Schools competition, pushing the limits of speed and
        teamwork.</p>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(testimonial => (
              <div
                  key={testimonial.name}
                  className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(0,61,105,.4),black)] flex flex-col justify-between h-full min-h-[306px]"
              >
                <div className="text-lg md:text-2xl tracking-tight">{testimonial.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div
                      className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#204646] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg"
                  >
                    <Image
                        src={testimonial.avatarImg}
                        alt={`Avatar for ${testimonial.name}`}
                        className="h-[52px] w-[52px] rounded-lg grayscale border"
                    />
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>


    </div>
  </section>;
};
