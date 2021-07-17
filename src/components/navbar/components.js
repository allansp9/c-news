import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BrandLogo } from "../logo";
import { DesktopNavLink, MobileMenuButton, UserAreaButton } from "../buttons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <nav className="bg-white fixed inset-x-0 top-0 border-b border-gray-400 z-50 min-width">
      <div className="h-14 flex container m-auto px-5">
        <div className="flex flex-1 justify-between ">
          <div className="flex flex-1 items-center desktop:justify-end">
            {/* mobile menu toggler */}
            <MobileMenuButton toggle={toggle} />
            {/* brand logo */}
            <BrandLogo close={close} />
          </div>
          {/* desktop nav links */}
          <div className="hidden desktop:flex flex-1 items-center justify-end space-x-8 uppercase text-sm text-gray-700">
            <DesktopNavLink location={"politics"}>politics</DesktopNavLink>
            <DesktopNavLink location={"business"}>business</DesktopNavLink>
            <DesktopNavLink location={"tech"}>tech</DesktopNavLink>
            <DesktopNavLink location={"science"}>science</DesktopNavLink>
            <DesktopNavLink location={"sports"}>sports</DesktopNavLink>
            <UserAreaButton close={close} />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          isOpen
            ? "desktop:hidden block fixed bottom-0 top-14 w-screen bg-white"
            : "hidden"
        }
      >
        <div className="uppercase text-sm leading-10 pl-10 pt-5">
          <Link className="block" to="/politics" onClick={close}>
            politics
          </Link>
          <Link className="block" to="/business" onClick={close}>
            business
          </Link>
          <Link className="block" to="/tech" onClick={close}>
            tech
          </Link>
          <Link className="block" to="/science" onClick={close}>
            science
          </Link>
          <Link className="block" to="/sports" onClick={close}>
            sports
          </Link>
          <UserAreaButton close={close} />
        </div>
      </div>
    </nav>
  );
};
