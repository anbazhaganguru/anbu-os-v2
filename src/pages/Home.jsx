import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import SystemInfo from "../components/sections/system/SystemInfo";


import InstalledApps from "../components/sections/projects/InstalledApps";


import Packages from "../components/sections/packages/Packages";


import Experience from "../components/sections/experience/Experience";


import Terminal from "../components/terminal/Terminal";


import Contact from "../components/sections/contact/Contact";


import Footer from "../components/footer/Footer";



function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fafafa]">

      <Navbar />

      <Hero />

      <SystemInfo />

      <InstalledApps />

      <Packages />

      <Experience />

      <Terminal />

      <Contact />

      <Footer />

    </main>
  );
}

export default Home;