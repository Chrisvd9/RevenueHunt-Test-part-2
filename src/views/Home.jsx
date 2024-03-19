import React from "react";
import Sidebar from "../components/Sidebar";
import RigthSidebar from "../components/RigthSidebar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-1 h-screen">
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <main className="col-span-5 md:col-span-3 overflow-y-auto">
        <div className="h-full overflow-y-auto">
          <Navbar />
          <HeroSection />
          <AboutSection />
        </div>
      </main>
      <div className="hidden md:block md:col-start-5">
        <RigthSidebar />
      </div>
    </div>
  );
};

export default Home;
