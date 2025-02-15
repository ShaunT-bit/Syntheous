import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import {Features} from "@/sections/Features";
import {Testimonials} from "@/sections/Testimonials";
import {CallToAction} from "@/sections/CallToAction";
import {Footer} from "@/sections/Footer";
import {About} from "@/sections/About";
import {Sponsers} from "@/sections/Sponsers";

export default function Home() {
  return (
      <>
          <Header />
          <Hero/>
          <Sponsers/>
          <Features/>
          <Testimonials/>
          <About/>
          <CallToAction/>
          <Footer/>
      </>
  );
}
