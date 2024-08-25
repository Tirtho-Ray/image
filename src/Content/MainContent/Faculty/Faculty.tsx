import { Link } from 'react-router-dom';
import img1 from '../../../assets/contentImg/1 (6).png';
import { MdArrowRight } from "react-icons/md";

const Faculty = () => {
    return (
      <div className="h-40  w-[320px] md:w-[260px] lg:w-[315px] border p-2 bg-slate-300 cursor-pointer ">
        <div>
          <p className='md:text-sm lg:text-md'>অনুষদ</p>
          <div className="flex gap-2 mt-2">
            <div>
              <img className="h-20 md:h-12 lg:h-20" src={img1} alt="" />
            </div>

            <div className="text-[10px]">
              <Link to="/faculty-departments" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]">
                  <MdArrowRight />
                </span>
                <span>অনুষদ ভিত্তিক বিভাগসমূহ</span>
              </Link>
              <Link to="/department-heads" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]">
                  <MdArrowRight />
                </span>
                <span>বিভাগীয় প্রধানগণ</span>
              </Link>
              <Link to="/faculty-plans" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]">
                  <MdArrowRight />
                </span>
                <span>কর্মপরিকল্পনা</span>
              </Link>
              <Link to="/faculty-policies" className="flex items-center hover:underline ease-in-out">
                <span className="text-[20px]">
                  <MdArrowRight />
                </span>
                <span>নীতিমালা</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faculty;
