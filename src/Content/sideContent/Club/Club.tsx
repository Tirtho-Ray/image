import { TiTick } from "react-icons/ti";

const Club = () => {
    return (
        <div>
            <div>
             <p className="bg-green-400 py-2 w-full text-center mt-2">  ক্লাব</p>
             <p className="flex items-center gap-3 mt-4"><span className="text-blue-700 font-bold"><TiTick /></span> ডিজিটাল ক্লাব<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div> 
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700 font-bold"><TiTick /></span>সাইন্স ক্লাব <span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700 font-bold"><TiTick /></span> কম্পিউটার ক্লাব<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700 font-bold"><TiTick /></span> সাংস্কৃতিক ক্লাব<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
        </div>
        </div>
    );
};

export default Club;