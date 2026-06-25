import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import SystemInfo from "../components/sections/system/SystemInfo";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fafafa]">

      <Navbar />

      <Hero />

      <SystemInfo />

    </main>
  );
}

export default Home;