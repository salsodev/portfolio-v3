import { Terminal } from "lucide-react";
import Navlinks from "./navlinks";
import Link from "next/link";
import MobileNav from "./MobileNav";

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
        <MobileNav />
        <ul className="md:flex items-center gap-5 hidden">
          <Navlinks />
        </ul>
      </nav>
    </header>
  );
}
export default Header;
