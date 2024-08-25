import img1 from '../../assets/contentImg/1 (6).png'

const Principal = () => {
    return (
        <div className='border '>
            <p className="bg-green-400 py-2 w-full text-center"> অধ্যক্ষ</p>
            <img className='h-20 mx-auto' src={img1} alt="" />
            <p className='px-2'>প্রকৌশলী .......</p>
            <p className='underline text-end px-2 mb-3'>বিস্তারিত</p>
        </div>
    );
};

export default Principal;