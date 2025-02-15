import Logo  from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg"
import Instasocial from "@/assets/social-instagram.svg"
import Ytsocial from "@/assets/social-youtube.svg"
import {Testimonials} from "@/sections/Testimonials";
export const Footer = () => {
  return <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex gap-2 items-center lg:flex-1">
          <Logo className="h-6 w-6" />
          <div className="font-medium">
            Syntheous
          </div>
        </div>
        <div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1 lg:justify-center">
            <a href="#features" className="text-white/70 hover:text-white text-xs md:text-sm transition">Car</a>
            <a href="#developers" className="text-white/70 hover:text-white text-xs md:text-sm transition">Meet the team</a>
            <a href="#stem_racing" className="text-white/70 hover:text-white text-xs md:text-sm transition">About Stem Racing</a>
          </nav>
        </div>

        <div className="flex gap-5 lg:flex-1 lg:justify-end">
          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:justify-end">
            <a href="https://x.com/Syntheous_f1"><Xsocial className="text-white/40 hover:text-white text-xs md:text-sm transition"/></a>
            <a href="https://www.instagram.com/syntheous_stemracing/"><Instasocial className="text-white/40 hover:text-white text-xs md:text-sm transition"/></a>
            <a href="https://www.youtube.com/@Syntheous_F1"><Ytsocial className="text-white/40 hover:text-white text-xs md:text-sm transition"/></a>
          </nav>

        </div>
      </div>

    </div>
  </footer>;
};
