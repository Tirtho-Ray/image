import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './slider.css';

const images: string[] = [
    'https://i.ibb.co/Qr5qVGS/All-Weather-Tent-2.png',
    'https://i.ibb.co/gjvYN6Q/Camping-Knifepng.png',
    'https://i.ibb.co/rQtN4sk/First-Aid-Kitpng.png',
    'https://i.ibb.co/dtHq9TW/Hiking-Backpack1png.png'
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
        }, 3000); // 3 seconds per slide
    };

    const stopSlideShow = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    return (
        <div className="relative overflow-hidden w-full h-[600px]">
            <AnimatePresence initial={false} custom={currentSlide}>
                <motion.div
                    key={currentSlide}
                    className="absolute w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${images[currentSlide]})` }}
                    custom={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Optional: Add navigation controls or indicators here */}
        </div>
    );
};

export default Slider;
