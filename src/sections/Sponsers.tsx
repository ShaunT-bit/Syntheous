import Image from "next/image";
import spons1 from "@/assets/spons1.jpeg"
import spons2 from "@/assets/spon2.jpeg"

const testimonials = [
  {
    text: "Shaun takes charge as the team leader, coordinating efforts, fostering collaboration, and ensuring the team stays focused on its goals. He oversees all aspects of the team’s strategy, driving innovation and unity to achieve success.",
    name: "Shaun Thomas Shibu",
    title: "Team Leader & Digital Strategist",
    avatarImg: spons1,

  },
  {
    text: "Thanmay crafts the team’s visual identity, delivering professional designs for logos, promotional materials, and car liveries.",
    name: "Thanmay Nair",
    title: "Brand & Visual Designer",
    avatarImg: spons2,
  }
];

export const Sponsers = () => {
  return <section id={"developers"} className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium ">Meet Our Sponsers</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">We are proud to
        be supported by an incredible group of sponsors who share our passion and drive for success.</p>

      <div className="mt-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 it">
          {testimonials.map(testimonial => (
              <div
                  key={testimonial.name}
                  className=" items-center border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(0,61,105,.4),black)] flex flex-col justify-between h-full min-h-[306px] "
              >
                <div className="flex justify-center items-center gap-3 mt-5">
                  <div
                      className=" relative  justify-center after:content-[''] after:absolute after:inset-0 after:bg-[#204646] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg"
                  >
                    <Image
                        src={testimonial.avatarImg}
                        alt={`Avatar for ${testimonial.name}`}
                        className="h-[426px] w-[426px] rounded-lg  border items-center justify-center"
                    />
                  </div>
                </div>
              </div>
          ))}
        </div>

      </div>

    </div>
  </section>;
};