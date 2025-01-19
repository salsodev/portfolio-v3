"use client";

import { GitMerge, Home, Phone, UserSearch } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
    Icon: Home,
  },
  {
    id: 2,
    title: "Projects",
    href: "/projects",
    Icon: GitMerge,
  },
  {
    id: 3,
    title: "Experience",
    href: "/experience",
    Icon: UserSearch,
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
    Icon: Phone,
  },
];

function Navlinks() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {navLinks.map((link) => {
        return (
          <li
            key={link.id}
            className={`flex items-center px-4 h-full transition-all ${
              isActive(link.href)
                ? "md:border-b-2 md:border-b-sky-400 text-sky-400 md:before:block md:before:w-full md:before:h-[1px] md:before:bg-sky-400 md:before:rounded-br-2xl md:before:rounded"
                : "text-gray-400"
            }
            }`}
          >
            <Link
              href={link.href}
              className={`flex items-center gap-2 hover:text-sky-400 transition-colors text-current`}
            >
              <link.Icon size={18} /> {link.title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
export default Navlinks;
