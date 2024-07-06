import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
import { PresentationChartLineIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`text-white transition-all duration-1000 ease-in-out ${
        isOpen ? "w-96" : "w-18"
      } text-wrap bg-zinc-700 sm:hidden`}
    >
      {
        <div
          className={`flex flex-col ${
            isOpen ? "items-start" : "items-center"
          } gap-4 my-2`}
        >
          <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent">
            {!isOpen ? (
              <Bars3Icon className="w-6"></Bars3Icon>
            ) : (
              <XMarkIcon className="w-6"></XMarkIcon>
            )}
          </button>
          <Link to="/" className="flex">
            <HomeIcon className="w-6" />
            {isOpen && <span className="mx-1">Home</span>}
          </Link>
          <Link to="/stats" className="flex">
            <PresentationChartLineIcon className="w-6" />
            {isOpen && <span className="mx-1">Statistics</span>}
          </Link>
        </div>
      }
    </div>
  );
}

export default Drawer;
