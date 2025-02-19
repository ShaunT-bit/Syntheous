import Image from "next/image";
import Link from "next/link"; // Add this import
import spons1 from "@/assets/spons1.jpeg"
import spons2 from "@/assets/spon2.jpeg"
import spons3 from "@/assets/spons3.png"

const testimonials = [
  {
    text: "Shaun takes charge as the team leader, coordinating efforts, fostering collaboration, and ensuring the team stays focused on its goals. He oversees all aspects of the team's strategy, driving innovation and unity to achieve success.",
    name: "Shaun Thomas Shibu",
    title: "Team Leader & Digital Strategist",
    avatarImg: spons1,
    link: "https://hospitalityce.com", // Add link for each testimonial
  },
  //{
  //  text: "Thanmay crafts the team's visual identity, delivering professional designs for logos, promotional materials, and car liveries.",
  //  name: "Thanmay Nair",
  //  title: "Brand & Visual Designer",
  //  avatarImg: spons2,
  //  link: "https://eliteprimecontrg.com",
  //},
  {
    text: "Thanmay crafts the team's visual identity, delivering professional designs for logos, promotional materials, and car liveries.",
    name: "Thanmay Nair",
    title: "Brand & Visual Designer",
    avatarImg: spons3,
    link: "https://www.f1bearings.com",
  },
];

export const Sponsers = () => {
  const hasThreeItems = testimonials.length === 3;

  return <section id="Sponsers" className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Meet Our Sponsers</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
        We are proud to be supported by an incredible group of sponsors who share our passion and drive for success.
      </p>

      <div className="mt-5">
        <div className={`grid grid-cols-1 ${hasThreeItems ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-6`}>
          {testimonials.map((testimonial, index) => (
              <div
                  key={testimonial.name}
                  className={`items-center border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(0,61,105,.4),black)] flex flex-col justify-between ${
                      hasThreeItems && index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
                  }`}
              >
                <div className="w-full">
                  <div className="relative w-full aspect-square">
                    <div className="absolute inset-0 rounded-lg border border-white/30">
                      <Link
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full h-full block cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <div className="relative w-full h-full">
                          <Image
                              src={testimonial.avatarImg}
                              alt={`Avatar for ${testimonial.name}`}
                              className="rounded-lg"
                              fill
                              style={{ objectFit: 'contain' }}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-[#204646] mix-blend-soft-light rounded-lg"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  </section>;
};