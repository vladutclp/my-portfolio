import Link from "next/link";
import React from "react";

type NavigationLink = {
  name: string;
  href: string;
};

const LINKS: NavigationLink[] = [
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const NavBar = () => {
  return (
    <nav className="flex flex-row items-start justify-end w-full p-4 text-[#f9f2fb] gap-4">
      <div className=" flex  mr-auto">LOGO</div>
      {LINKS.map((link) => (
        <Link
          className="py-2 px-4 border rounded-lg"
          key={link.href}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
