import { Link } from "react-router-dom";
interface OurCollageProps {
  closeDropdown: () => void;
}

const OurCollage: React.FC<OurCollageProps> = ({ closeDropdown }) => {
  return (
    <div>
      <div className="flex flex-wrap px-4 py-4 gap-6">
        <div>
          <p className="text-sm ">প্রতিষ্ঠান সম্পর্কিত</p>
          <div className="w-48px mt-2 ">
            <Link
              to="/ourFeature"
              className="block text-[12px] hover:bg-slate-300"
              onClick={closeDropdown}
            >
              এক নজরে
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/about"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              পটভূমি ও ইতিহাস
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              উদ্দেশ্য অবকাঠামো
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              লক্ষ্য উদ্দেশ্য
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              সুবিধা সমূহ
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              সাফল্য সমূহ
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              পটভূমি ও ইতিহাস
            </Link>
            <div className="line border-t-2 border-black"></div>
          </div>
        </div>
        <div>
          <p className="text-sm ">প্রতিষ্ঠান সম্পর্কিত</p>
          <div className="w-48px mt-2 ">
            <Link
              to="/our-feature"
              className="block text-[12px] hover:bg-slate-300"
            >
              এক নজরে
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              পটভূমি ও ইতিহাস
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              উদ্দেশ্য অবকাঠামো
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              লক্ষ্য উদ্দেশ্য
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              সুবিধা সমূহ
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              সাফল্য সমূহ
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              পটভূমি ও ইতিহাস
            </Link>
            <div className="line border-t-2 border-black"></div>
          </div>
        </div>
        <div>
          <p className="text-sm ">প্রতিষ্ঠান সম্পর্কিত</p>
          <div className="w-48px mt-2 ">
            <Link
              to="/our-feature"
              className="block text-[12px] hover:bg-slate-300"
            >
              এক নজরে
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              পটভূমি ও ইতিহাস
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              উদ্দেশ্য অবকাঠামো
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              লক্ষ্য উদ্দেশ্য
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              সুবিধা সমূহ
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              সাফল্য সমূহ
            </Link>
            <div className="line border-t-2 border-black"></div>
            <Link
              to="/contact-us"
              className="block text-[12px] mt-2  hover:bg-slate-300"
            >
              পটভূমি ও ইতিহাস
            </Link>
            <div className="line border-t-2 border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollage;
