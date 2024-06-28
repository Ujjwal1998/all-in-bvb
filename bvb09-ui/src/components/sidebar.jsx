import { HomeIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
import { PresentationChartLineIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section className="hidden text-xl bg-zinc-800 text-white rounded-2xl m-2 sm:inline sm:w-fit">
      <div className="mt-8 mx-8 font-chakra text-4xl text-yellow-400 bg-zinc-800">
        ALL-IN-DORTMUND
      </div>
      <div className="flex flex-col my-10 text-2xl">
        <Link to="/" className="flex mx-6">
          <HomeIcon className="w-6" />
          <span className="mx-2">Home</span>
        </Link>
        <Link to="/stats" className="flex mx-6">
          <PresentationChartLineIcon className="w-6" />
          <span className="mx-2">Statistics</span>
        </Link>
        <Link to="/stats" className="flex mx-6">
          <CalendarDaysIcon className="w-6" />
          <span className="mx-2">Schedule</span>
        </Link>
        <a href="about:blank" className="mx-6">
          link 4
        </a>
      </div>
      <div className="flex flex-col mt-7">
        <a href="about:blank" className="mx-6">
          link 1
        </a>
        <a href="about:blank" className="mx-6">
          link 2
        </a>
        <a href="about:blank" className="mx-6">
          link 3
        </a>
        <a href="about:blank" className="mx-6">
          link 4
        </a>
      </div>
      <div>
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
      </div>
    </section>
  );
}

export default Sidebar;
