"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkButtonProps {
  href: string;
  label: string;
  isHidden: boolean;
  setIsOpen: any;
}

const NavLink: React.FC<NavLinkButtonProps> = ({
  href,
  label,
  isHidden,
  setIsOpen,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={`${isHidden ? "hidden sm:block" : ""}`}>
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
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
