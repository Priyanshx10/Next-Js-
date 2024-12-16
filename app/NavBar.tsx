"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { labels: "Dashboard", href: "/" },
    { labels: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>

      <ul className="flex space-x-6 hover:">
        {links.map((links) => (
          <Link
            key={links.href}
            className={classNames({
              "text-zinc-500": links.href === currentPath,
              "text-zinc-900": links.href !== currentPath,
              "hover:text-zinc-700 transition-colors": true,
            })}
            href={links.href}
          >
            {links.labels}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
