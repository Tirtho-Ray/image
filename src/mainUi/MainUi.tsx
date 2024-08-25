import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import Hero from "../hero/Hero";

const MainUi = () => {
  return (
    <div className="lg:max-w-[926px] md:mx-w-[768px] xl:max-w-[926px] mx-auto ">
      <div className="border">
        <Hero />
        <div >
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainUi;
