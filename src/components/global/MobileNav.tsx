"use client";

import { TableOfContents } from "lucide-react";
import Navlinks from "./navlinks";
import { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="flex items-center justify-end md:hidden h-full">
      <TableOfContents
        size={24}
        className="text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`flex flex-col shadow-2xl gap-3 border border-slate-800 px-2 py-3 rounded-lg bg-[#0f172c] absolute top-full transition-all duration-300 right-5 z-50 origin-top-right ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <Navlinks />
      </div>
    </ul>
  );
}
export default MobileNav;
