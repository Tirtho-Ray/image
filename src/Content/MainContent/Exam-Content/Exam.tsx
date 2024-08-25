import { Link } from 'react-router-dom';
import img1 from '../../../assets/contentImg/1 (6).png';
import { MdArrowRight } from 'react-icons/md';
const Exam = () => {
    return (
        <div>
               <div className="h-40 w-[320px] md:w-[260px] lg:w-[315px] border p-2 bg-slate-300 cursor-pointer">
            <div>
                <p className='md:text-sm lg:text-md'>পরীক্ষা বিষয়ক</p>
                <div className="flex gap-2 mt-2">
                    <div>
                        <img className="h-20 md:h-12 lg:h-20" src={img1} alt="Admission" />
                    </div>

                    <div className="text-[10px]">
                        <Link to='/admission-notice'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span>পরীক্ষা বিজ্ঞপ্তি</span>
                            </p>
                        </Link>
                        <Link to='/admission-exam-info'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span>পরীক্ষা ফরম পূরণ </span>
                            </p>
                        </Link>
                        <Link to='/admission-exam-results'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span>পরীক্ষার সম্ভাব্য তারিখ</span>
                            </p>
                        </Link>
                        <Link to='/focal-point'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span>ফোকাল প্রকাল</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Exam;