import Navbar from "@/scenes/navbar";
import Home from "@/scenes/Home";
import Benefits from "@/scenes/Benefits";
import ContactUs from "@/scenes/ContactUs"
import Location from "@/scenes/Location";
import Footer from "@/scenes/Footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Testimonials from "./scenes/Testimonials";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      };
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Testimonials setSelectedPage={setSelectedPage}/>
      {/* <Location setSelectedPage={setSelectedPage}/> */}
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App
