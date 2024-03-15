"use client";

import React, { useState } from "react";
import HomepageBanner from "./HomepageBanner";
import { usePathname } from "next/navigation";
import NavLinkButton from "./NavLinkButton";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full">
      {isHomePage && <HomepageBanner />}
      <div className="sm:flex sm:justify-between">
        {/* Hamburger icon for smaller screens */}
        <div className="sm:hidden">
          <button
            className="flex w-full text-light pr-1 justify-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
          </button>
        </div>
        {/* Links container */}
        <nav className={`${isOpen ? "block" : "hidden"} sm:block`}>
          <ul className="flex flex-col items-start text-vw text-2xl pl-2 sm:flex-row sm:space-x-4">
            <NavLinkButton
              href="/"
              label="Palmire MBU"
              isHidden={true}
              setIsOpen={setIsOpen}
            />
            <NavLinkButton
              href="/"
              label="Home"
              isHidden={false}
              setIsOpen={setIsOpen}
            />
            <NavLinkButton
              href="/index"
              label="Index"
              isHidden={false}
              setIsOpen={setIsOpen}
            />
            <NavLinkButton
              href="/contact"
              label="Contact"
              isHidden={false}
              setIsOpen={setIsOpen}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
