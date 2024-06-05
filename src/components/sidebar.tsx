import { HomeIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
function Sidebar() {
  return (
    <section className="hidden text-xl bg-zinc-800 text-white rounded-2xl m-4">
      <div className="mt-8 mx-8 font-sofia-sans">ALL-IN-DORTMUND</div>
      <div className="flex flex-col">
        <a href="about:blank" className="mx-6 flex flex-row">
          <HomeIcon className="size-6" />
          Home
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
