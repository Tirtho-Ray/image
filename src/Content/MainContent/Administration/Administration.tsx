import { Link } from 'react-router-dom';
import img1 from '../../../assets/contentImg/1 (6).png';
import { MdArrowRight } from 'react-icons/md';

const Administration = () => {
    return (
      <div className="h-40 w-[320px] md:w-[260px] lg:w-[315px] border p-2 bg-slate-300 cursor-pointer ">
        <div>
          <p className='md:text-sm lg:text-md'>প্রশাসন </p>
          <div className="flex gap-2 mt-2 ">
            <div>
              <img className="h-20 md:h-12 lg:h-20" src={img1} alt="" />
            </div>

            <div className="text-[10px]">
              <Link to="/administrative-structure" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]"><MdArrowRight /></span>
                <span>প্রশাসনিক কাঠামো</span>
              </Link>
              <Link to="/teachers" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]"><MdArrowRight /></span>
                <span>শিক্ষকবৃন্দ</span>
              </Link>
              <Link to="/staff" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]"><MdArrowRight /></span>
                <span>কর্মচারীবৃন্দ</span>
              </Link>
              <Link to="/office-orders" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]"><MdArrowRight /></span>
                <span>অফিস আদেশ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>   
    );
};

export default Administration;
