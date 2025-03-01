import LogoIcon from "@/assets/logo.svg"
import MenuIcon from "@/assets/icon-menu.svg"
import {Button} from "@/components/Button"
import syntheous from "@/assets/syntheous.png"
import Image from "next/image";
export const Header = () => {
    return (

      <header className = "py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">

          <div className="absolute inset-0 bg-black/15 backdrop-blur -z-10 md:hidden"></div>
          <div className="container">
              <div className="flex justify-between   items-center md:border border-white/15 rounded-xl max-w-2xl mx-auto relative">
                  <div className="absolute inset-0 rounded-xl bg-black/15 backdrop-blur -z-10 hidden md:block"></div>
                  <div>
                      <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
                          {/*<LogoIcon className="h-8 w-8"/>*/}
                          <Image
                              src={syntheous}
                              alt={"logo"}
                              className="h-8 w-8"
                          />
                      </div>
                  </div>
                  <div className="hidden md:block">
                      <nav className="flex gap-8 text-sm">
                          <a href="#features" className="text-white/70 hover:text-white transition">Car</a>
                          <a href="#developers" className="text-white/70 hover:text-white transition">Meet the team</a>
                          <a href="#stem_racing" className="text-white/70 hover:text-white transition">About Stem Racing</a>
                      </nav>
                  </div>
                  <div className="flex gap-4 items-center">
                      <MenuIcon className="md:hidden"/>
                  </div>
              </div>
          </div>
      </header>
    );
};
