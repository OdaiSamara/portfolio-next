import Image from "next/image";
import Hero from "./component/Hero";
import About from "./component/About";
import Stats from "./component/Stats";
import Skills from "./component/Skills";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import Testimoneal from "./component/Testimoneal";
import Contact from "./component/Contact";
export default function Home() {
  return (
    <div className=" w-full">
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Resume />
      <Portfolio />
      <Service />
      <Testimoneal />
      <Contact />
    </div>
  );
}
