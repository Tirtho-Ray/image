import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import OurCollage from "./DropDownNavShared.tsx/OurCollage";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownStates, setDropdownStates] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false, // Added 'sixth' state for 'প্রাক্তন'
  });

  const dropdownRefs = {
    first: useRef<HTMLDivElement>(null),
    second: useRef<HTMLDivElement>(null),
    third: useRef<HTMLDivElement>(null),
    fourth: useRef<HTMLDivElement>(null),
    fifth: useRef<HTMLDivElement>(null),
    sixth: useRef<HTMLDivElement>(null), // Added 'sixth' ref for 'প্রাক্তন'
  };

  useEffect(() => {
    Object.entries(dropdownRefs).forEach(([key, ref]) => {
      if (ref.current) {
        if (dropdownStates[key as keyof typeof dropdownRefs]) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        } else {
          gsap.to(ref.current, { opacity: 0, y: 20, duration: 0.5 });
        }
      }
    });
  }, [dropdownStates]);

  const handleMouseEnter = (key: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const closeDropdown = (key: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <nav className="border-b border-l border-r p-4  cursor-pointer">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-red-400 "
        >
          <FaBars className="text-xl" />
        </button>
        <div className="hidden md:flex items-center ">
          {/* Dropdown for 'প্রতিষ্ঠান সম্পর্কিত' */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter("first")}
            onMouseLeave={() => handleMouseLeave("first")}
          >
            <div className="px-4 border-b border-l border-r text-sm py-2 dropDown flex items-center  hover:bg-red-400 transition-colors duration-200 ease-in-out">
              প্রতিষ্ঠান সম্পর্কিত
            </div>
            {dropdownStates.first && (
              <div
                className="absolute left-0 top-full w-max bg-white shadow-lg"
                ref={dropdownRefs.first}
              >
                <OurCollage closeDropdown={() => closeDropdown("first")} />
              </div>
            )}
          </div>

          {/* Dropdown for 'কাউন্সিল' */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter("fourth")}
            onMouseLeave={() => handleMouseLeave("fourth")}
          >
            <div className="px-4 border-b border-l border-r text-sm py-2 dropDown flex items-center">
              কাউন্সিল
            </div>
            {dropdownStates.fourth && (
              <div
                className="absolute left-0 top-full w-max bg-white shadow-lg"
                ref={dropdownRefs.fourth}
              >
                <OurCollage closeDropdown={() => closeDropdown("fourth")} />
              </div>
            )}
          </div>

          {/* Dropdown for 'অধিবৃন্দ' */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter("fifth")}
            onMouseLeave={() => handleMouseLeave("fifth")}
          >
            <div className="px-4 border-b border-l border-r text-sm py-2 dropDown flex items-center">
              অধিবৃন্দ 
            </div>
            {dropdownStates.fifth && (
              <div
                className="absolute left-0 top-full w-max bg-white shadow-lg"
                ref={dropdownRefs.fifth}
              >
                <OurCollage closeDropdown={() => closeDropdown("fifth")} />
              </div>
            )}
          </div>

          {/* Dropdown for 'প্রাক্তন' */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter("sixth")}
            onMouseLeave={() => handleMouseLeave("sixth")}
          >
            <div className="px-4 text-sm py-2 dropDown flex items-center">
              প্রাক্তন
            </div>
            {dropdownStates.sixth && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 top-full w-max bg-white shadow-lg"
                ref={dropdownRefs.sixth}
              >
                <OurCollage closeDropdown={() => closeDropdown("sixth")} />
              </div>
            )}
          </div>

          {/* Dropdown for 'শিক্ষার্থী' */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter("second")}
            onMouseLeave={() => handleMouseLeave("second")}
          >
            <div className="px-4 text-sm py-2 dropDown flex items-center">
              শিক্ষার্থী
              <FaChevronRight className="ml-2" />
            </div>
            {dropdownStates.second && (
              <div
                className="absolute right-0 top-full w-max bg-white shadow-lg"
                ref={dropdownRefs.second}
              >
                <OurCollage closeDropdown={() => closeDropdown("second")} />
              </div>
            )}
          </div>

          {/* Dropdown for 'প্রশিক্ষকবৃন্দ' */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter("third")}
            onMouseLeave={() => handleMouseLeave("third")}
          >
            <div className="px-4 text-sm py-2 dropDown flex items-center">
              প্রশিক্ষকবৃন্দ
              <FaChevronRight className="ml-2" />
            </div>
            {dropdownStates.third && (
              <div
                className="absolute right-0 top-full w-max bg-white shadow-lg"
                ref={dropdownRefs.third}
              >
                <OurCollage closeDropdown={() => closeDropdown("third")} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-800 text-white mt-2`}
      >
        <div
          className="relative"
          onClick={() =>
            setDropdownStates((prevState) => ({
              ...prevState,
              first: !prevState.first,
            }))
          }
        >
          <Link
            to="/"
            className="block px-4 py-2 border-b border-gray-600 hover:bg-gray-700 flex items-center justify-between"
            onClick={() => closeDropdown("first")}
          >
            About
            <FaChevronRight className="ml-2" />
          </Link>
          {dropdownStates.first && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg">
              <OurCollage closeDropdown={() => closeDropdown("first")} />
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="block px-4 py-2 border-t border-gray-600 hover:bg-gray-700"
          onClick={() => closeDropdown("first")}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
