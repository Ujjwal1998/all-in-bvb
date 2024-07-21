import {
  CalendarDaysIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
import { PresentationChartLineIcon } from "@heroicons/react/20/solid";
function Drawer({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <div
        className={`text-white fixed transition ease-in duration-1000 transform h-full z-10 backdrop-blur overflow-visible bg-zinc-800 border-2 sm:hidden ${
          isOpen ? "w-1/2" : "w-0"
        }`}
      >
        {
          <div
            className={`flex flex-col ${
              isOpen ? "items-start" : "items-center"
            } gap-4 my-2`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent"
            >
              <XMarkIcon className="w-6"></XMarkIcon>
            </button>
            <aside className="mx-4 space-y-8 border-white">
              <Link
                to="/"
                className="flex gap-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <HomeIcon className="w-6" />
                <span className="">Home</span>
              </Link>
              <Link
                to="/stats"
                className="flex gap-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <PresentationChartLineIcon className="w-6" />
                {isOpen && <span className="">Statistics</span>}
              </Link>
              <Link
                to="/schedule"
                className="flex gap-4 "
                onClick={() => setIsOpen(!isOpen)}
              >
                <CalendarDaysIcon className="w-6" />
                {isOpen && <span className="">Schedule</span>}
              </Link>
            </aside>
          </div>
        }
      </div>
    )
  );
}
export default Drawer;
