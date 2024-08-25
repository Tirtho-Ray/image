import { Link } from 'react-router-dom';
import img1 from '../../../assets/contentImg/1 (6).png';
import { MdArrowRight } from 'react-icons/md';

const Information = () => {
    return (
        <div>
               <div className="h-40  w-[320px] md:w-[260px] lg:w-[315px] border p-2 bg-slate-300 cursor-pointer">
            <div>
                <p className='md:text-sm lg:text-md'>তথ্য অধিকার</p>
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
                                <span>তথ্য প্রদানকারী কর্মকর্তা</span>
                            </p>
                        </Link>
                        <Link to='/admission-exam-info'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span>তথ্য অধিকার আইন ও বিধিমালা</span>
                            </p>
                        </Link>
                        <Link to='/admission-exam-results'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span> নির্দেশিকা</span>
                            </p>
                        </Link>
                        <Link to='/focal-point'>
                            <p className="flex items-center hover:underline ease-in-out">
                                <span className="text-[20px]">
                                    <MdArrowRight />
                                </span>
                                <span>তথ্য আবেদন আপিল ফরম</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Information;