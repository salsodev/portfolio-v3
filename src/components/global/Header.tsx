import { TableOfContents, Terminal } from "lucide-react";
import Navlinks from "./navlinks";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center bg-[#0b1121] shadow-xl border-r-slate-400 sm:px-10 px-5 h-[64px]">
      <Link
        href={"/"}
        className="flex items-center gap-2 text-slate-300 font-semibold"
      >
        <Terminal size={24} />
        Salsodev
      </Link>
      <nav className="flex justify-center h-full relative">
        <ul className="flex items-center justify-end md:hidden h-full">
          <TableOfContents size={24} className="text-white cursor-pointer" />
          <div className="flex flex-col shadow-2xl gap-3 border border-slate-800 px-2 py-3 rounded-lg bg-[#0f172c] absolute top-full right-5 z-50">
            <Navlinks />
          </div>
        </ul>
        <ul className="md:flex items-center gap-5 hidden">
          <Navlinks />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
