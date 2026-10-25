import { useEffect } from "react";
import { initLenis } from "./lib/lenis";
import { useReveal } from "./lib/reveal";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { FindYourWay } from "./sections/FindYourWay";
import { Style } from "./sections/Style";
import { Visuals } from "./sections/Visuals";
import { Gallery } from "./sections/Gallery";
import { Process } from "./sections/Process";
import { Nav } from "./components/Nav";
import { Cursor } from "./components/Cursor";
import { ThankYou } from "./sections/ThankYou";

export default function App() {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  useReveal();

  return (
    <>
      <Nav />
      <Cursor />
    <main>
      <Hero />
      <About />
      <FindYourWay />
      <Style />
      <Visuals />
      <Gallery />
      <Process />
      <ThankYou />
    </main>
    </>
  );
}
