import { TiTick } from "react-icons/ti";

const Portal = () => {
    return (
        <div>
             <p className="bg-green-400 py-2 w-full text-center mt-2"> অধ্যক্ষ</p>
             <p className="flex items-center gap-3 mt-4"><span className="text-blue-700  font-bold"><TiTick /></span> শিক্ষক পোর্টাল<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
             <p className="flex items-center  gap-3 mt-2"><span className="text-blue-700  font-bold"><TiTick /></span> শিক্ষার্থী পোর্টাল<span></span></p>
             <div className="line border-t-2 border-gray-300 mt-2"></div>
        </div>
    );
};

export default Portal;