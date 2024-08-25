import { TiTick} from "react-icons/ti";


const AdmissionInfo = () => {
    return (
        <div>
            <div>
             <p className="bg-green-400 py-2 w-full text-center mt-2"> ভর্তি ও ফরম ফিলাপ</p>
             <p className="flex items-center gap-3 mt-4"><span className="text-blue-700 font-bold"><TiTick /></span> ভর্তি প্রক্রিয়া<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div> 
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700 font-bold"><TiTick /></span>ভর্তি প্রক্রিয়া<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700 font-bold"><TiTick /></span> অন্যান্য তথ্য<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700 font-bold"><TiTick /></span> Hello<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
        </div>
        </div>
    );
};

export default AdmissionInfo;