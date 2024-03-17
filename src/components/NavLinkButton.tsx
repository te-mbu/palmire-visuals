"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkButtonProps {
  href: string;
  label: string;
  isHidden: boolean;
  setIsOpen: (open: boolean) => void;
  setShowProfile: (show: boolean) => void;
}

const NavLink: React.FC<NavLinkButtonProps> = ({
  href,
  label,
  isHidden,
  setIsOpen,
  setShowProfile,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = () => {
    setIsOpen(false);
    if (label === "Palmire MBU" && isActive) setShowProfile(true);
  };

  return (
    <li className={`${isHidden ? "hidden" : ""} flex py-1`}>
      <Link
        href={href}
        onClick={handleClick}
        passHref
        className={`${
          isActive ? "text-grey-50" : "text-light"
        } hover:text-grey-50 sm:text-xs uppercase`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
