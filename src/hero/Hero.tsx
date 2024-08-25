import Slider from "./Slider";


const Hero = () => {
    return (
        <div>
            <div className=" bg-green-300 py-2">
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Hidden on small and medium devices, visible on large devices */}
                <div className="hidden lg:flex items-center gap-2">
                    <p>Bangladesh jatio totho</p>
                    <div className="ml-4">
                        <select
                            className="block w-full px-2 lg:text-[12px] py-[2px] border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option className="lg:text-[12px]" value="">Select</option>
                            <option value="option1">Option 1 Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                            <option value="option5">Option 5</option>
                        </select>
                    </div>
                    <div>
                        <button className="px-2 py-1 bg-red-400 rounded-md lg:text-[12px] font-bold">Go</button>
                    </div>
                </div>
                
                {/* Visible on small and medium devices, hidden on large devices */}
                <div className="flex flex-col items-center lg:hidden">
                    <div className="flex items-center gap-2">
                        <select
                            className="block w-full px-2 lg:text-[12px] py-[2px] border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option className="lg:text-[12px]" value="">Select</option>
                            <option value="option1">Option 1 Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                            <option value="option5">Option 5</option>
                        </select>
                        <button className="px-2 py-1 bg-red-400 rounded-md lg:text-[12px] font-bold">Go</button>
                    </div>
                </div>

                {/* Hidden on small and medium devices, visible on large devices */}
                <div className="hidden lg:flex gap-1 justify-center items-center">
                    <input className="border lg:w-24 h-6 rounded-md px-2" type="text" />
                    <button className="px-2 py-1 bg-red-400 rounded-md lg:text-[12px] font-bold">search</button>
                    <button className="px-2 py-1 bg-red-400 rounded-md lg:text-[12px] font-bold">Bangla </button>
                </div>
            </div>
        </div>
        <Slider />
        </div>
    );
};

export default Hero;
