"use client";

import React, { useState } from "react";
import HomepageBanner from "./HomepageBanner";
import { usePathname } from "next/navigation";
import NavLinkButton from "./NavLinkButton";
import Profile from "./Profile";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full">
      {isHomePage && <HomepageBanner setShowProfile={setShowProfile} />}
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
              setShowProfile={setShowProfile}
            />
            <NavLinkButton
              href="/"
              label="Home"
              isHidden={false}
              setIsOpen={setIsOpen}
              setShowProfile={setShowProfile}
            />
            <NavLinkButton
              href="/index"
              label="Index"
              isHidden={false}
              setIsOpen={setIsOpen}
              setShowProfile={setShowProfile}
            />
            <NavLinkButton
              href="/contact"
              label="Contact"
              isHidden={false}
              setIsOpen={setIsOpen}
              setShowProfile={setShowProfile}
            />
          </ul>
        </nav>
      </div>
      {showProfile && <Profile setShowProfile={setShowProfile} />}
    </div>
  );
};

export default NavBar;
