import { HomeIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
import { PresentationChartLineIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section className="hidden text-xl bg-zinc-800 text-white rounded-2xl m-2 sm:block md:w-1/3">
      <div className="text-center mt-8 font-chakra text-xl text-yellow-400 lg:text-2xl">
        ALL-IN-DORTMUND
      </div>
      <nav className="flex flex-col my-4 text-lg">
        <Link to="/" className="flex mx-6 my-4">
          <HomeIcon className="w-5" />
          <span className="mx-2">Home</span>
        </Link>
        <Link to="/stats" className="flex mx-6 my-4">
          <PresentationChartLineIcon className="w-5" />
          <span className="mx-2">Statistics</span>
        </Link>
        <Link to="/stats" className="flex mx-6 my-4">
          <CalendarDaysIcon className="w-5" />
          <span className="mx-2">Schedule</span>
        </Link>
      </nav>

      {/* <div>
        <div className="bg-zinc-700 rounded-xl p-1 flex space-x-4 text-white m-1 justify-between mx-5 items-center">
          <a href="" className="p-1 flex flex-row space-x-3">
            <SunIcon className="size-6"></SunIcon>
            <span className="">Light</span>
          </a>
          <a
            href=""
            className="bg-zinc-800 p-2 rounded-xl flex flex-row space-x-3"
          >
            <MoonIcon className="size-6"></MoonIcon>
            <span>Dark</span>
          </a>
        </div>
      </div> */}
    </section>
  );
}

export default Sidebar;
