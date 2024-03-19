import React from "react";
import Sidebar from "../components/Sidebar";
import RigthSidebar from "../components/RigthSidebar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Navbar from "../components/Navbar";
import SidebarMobile from "../components/SidebarMobile";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-1 h-screen">
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <div className="hidden sm:block lg:hidden">
        <SidebarMobile />
      </div>
      <main className="col-span-5 sm:col-span-4 lg:col-span-3 overflow-y-auto">
        <div className="h-full overflow-y-auto">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <div className="block sm:hidden fixed bottom-0 w-full">
            <MobileMenu />
          </div>
        </div>
      </main>
      <div className="hidden lg:block lg:col-start-5">
        <RigthSidebar />
      </div>
    </div>
  );
};

export default Home;
