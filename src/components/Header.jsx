import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { reefact } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-8 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <span class="flex items-center">
          <a className="block w-[5rem] xl:mr-0" href="#hero">
            <img src={reefact} width={90} height={40} alt="Star" />
          </a>
          <span class="mr-2 text-xl">Reefact</span>
        </span>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          }  bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >

          <HamburgerMenu />
        </nav>
        <a
          href="#features"
          className="button hidden mr-16 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Features
        </a>
        <a
          href="#roadmap"
          className="button hidden mr-16 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Roadmap
        </a>
        <a
          href="#pricing"
          className="button hidden mr-16 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Pricing
        </a>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;