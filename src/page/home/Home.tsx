import MainContent from "../../Content/MainContent/MainContant";
import SideContent from "../../Content/sideContent/SideContent";
import Map from "../../Map/Map";
import Notice from "../../Notice/Notice";

const Home = () => {
    return (
        <div className="font-poppins">
            <div className="flex flex-col md:flex-row lg:w-[926px] md:w-[768px] md:gap-1 gap-4 mt-3 md:mt-4 ">
            <div className="lg:w-[80%] md:w-[80%] pr-2 border">
              <Notice />
              <MainContent />

              <Map />
            </div>
            <div className="lg:w-[30%] md:w-[30%]  border">
              <SideContent />
            </div>
          </div>
        </div>
    );
};

export default Home;