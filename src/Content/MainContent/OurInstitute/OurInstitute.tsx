import { Link } from 'react-router-dom';
import img1 from '../../../assets/contentImg/1 (6).png';
import { MdArrowRight } from "react-icons/md";

const OurInstitute = () => {
  return (
    <div className="h-40 w-[320px] md:w-[260px] lg:w-[315px] border p-2 bg-slate-300 cursor-pointer">
      <div>
        <p className='md:text-sm lg:text-md'>আমাদের ইনস্টিটিউট</p>
        <div className="flex gap-2 mt-2">
          <div>
            <img className="h-20 md:h-12 lg:h-20" src={img1} alt="" />
          </div>

          <div className="text-[10px]">
            <Link to="/overview" className="flex items-center hover:underline ease-in-out">
              <span className="text-[20px]">
                <MdArrowRight />
              </span>
              <span>এক নজর</span>
            </Link>
            <Link to="/principal" className="flex items-center hover:underline ease-in-out">
              <span className="text-[20px]">
                <MdArrowRight />
              </span>
              <span>অধ্যক্ষ</span>
            </Link>
            <Link to="/vice-principal" className="flex items-center hover:underline ease-in-out">
              <span className="text-[20px]">
                <MdArrowRight />
              </span>
              <span>উপাধ্যক্ষ</span>
            </Link>
            <Link to="/achievements" className="flex items-center hover:underline ease-in-out">
              <span className="text-[20px]">
                <MdArrowRight />
              </span>
              <span>সাফল্য ও অর্জন</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInstitute;
