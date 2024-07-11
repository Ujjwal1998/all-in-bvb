import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Drawer from "./drawer";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex text-yellow-400 bg-zinc-800 border-solid border-yellow-400 border-y-2 fixed w-full border sm:hidden">
        <button
          className="bg-transparent flex-none"
          onClick={() => setIsOpen(true)}
        >
          <Bars3Icon className="w-6"></Bars3Icon>
        </button>
        <span className="grow font-chakra  text-3xl w-6 justify-center content-center">
          ALL-IN-BVB09
        </span>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}></Drawer>
    </>
  );
}

export default Header;
