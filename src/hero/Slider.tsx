import  { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './slider.css';
import logo from '../assets/logopng.png';

const images: string[] = [
'https://i.ibb.co/2gqFVcv/comp.png',
'https://i.ibb.co/bry3byY/Civil-1024x577.png',
'https://i.ibb.co/1rsvyVp/ele-1024x577.jpg,',
'https://i.ibb.co/zGyZzjQ/mj-11433-2-1024x577.jpg',
'https://i.ibb.co/37M91SM/textile-banner-1024x577.jpg',
'https://i.ibb.co/F8mW4gj/textile-engineering-detail-1024x577.jpg',
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideInterval = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startSlideShow();
        return () => stopSlideShow();
    }, []);

    const startSlideShow = () => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000); // 4 seconds per slide
    };

    const stopSlideShow = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    const variants = {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <div className="relative w-full h-[250px]">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    className="absolute w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${images[currentSlide]})`, filter: 'blur(1px)' }}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            <div className="absolute top-1/2 transform -translate-y-1/2 ml-3 md:ml-12 flex justify-center items-center  bg-opacity-50 p-2 rounded">
                <img src={logo} alt="Logo" className="mr-2 w-20" />
                <p className='font-poppins text-white font-bold lg:text-xl text-sm'>Image Polytechnic Rangpur</p>
            </div>
        </div>
    );
};

export default Slider;
