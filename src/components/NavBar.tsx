"use client";

import React, { useState } from "react";
import HomepageBanner from "./HomepageBanner";
import { usePathname } from "next/navigation";
import NavLinkButton from "./NavLinkButton";
import Profile from "./Profile";
import IntroText from "./IntroText";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full z-50">
      <div className="relative">
        {!introDone && isHomePage && <IntroText setIntroDone={setIntroDone} />}
        {isHomePage && <HomepageBanner setShowProfile={setShowProfile} />}
      </div>
      <div className="w-full sm:flex sm:justify-between ">
        {/* Hamburger icon for smaller screens */}
        <div className="sm:hidden">
          <button
            className="flex w-full text-light text-xl pr-1 justify-end"
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
              href="/portfolio"
              label="Portfolio"
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
