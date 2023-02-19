import { useState } from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Friends from "@/components/Friends";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Services />
      <Portfolio />
      <Friends />

      <Contact />
    </>
  );
}

export default App;
