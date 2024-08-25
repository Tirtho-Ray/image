import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OurInstitute from './OurInstitute/OurInstitute';
import Faculty from './Faculty/Faculty';
import Administration from './Administration/Administration';
import Admission from './Admission/Admission';
import Exam from './Exam-Content/Exam';
import Result from './Result/Result';
import Information from './Information/Information';
import EServices from './E-Service/EServices';
import React from 'react';

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2, // Adjust this to control the delay between items
        },
    },
    hidden: {
        transition: {
            staggerChildren: 0.2, // Same delay for hiding as well
        },
    },
};

const itemVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, // Duration for each item
        },
    },
    hidden: {
        opacity: 0,
        y: 50,
    },
};

const MainContent: React.FC = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    const items = [
        <OurInstitute />,
        <Administration />,
        <Faculty />,
        <Admission />,
        <Exam />,
        <Result />,
        <Information />,
        <EServices />
    ];

    return (
        <div className='flex relative justify-center md:flex-none'>
            <motion.div
                ref={ref}
                className='  grid md:grid-cols-2 justify-items-center gap-2 md:justify-items-stretch md:gap-4 lg:gap-3 mt-3 md:mt-4 '
                variants={containerVariants}
                initial='hidden'
                animate={controls}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                    >
                        {item}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MainContent;
