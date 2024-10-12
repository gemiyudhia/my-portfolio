import { useState } from "react";
import HamburgerMenu from "../elements/HamburgerMenu";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("home");

  const hamburgerOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (
    menu: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setActiveMenu(menu);
  };

  return (
    <nav className="bg-primary py-3 px-3 pr-7 rounded-full">
      <div className="flex items-center">
        <div className="flex items-center w-full">
          {/* Logo untuk Mobile */}
          <h1 className="bg-white text-secondary font-black p-4 text-2xl rounded-full lg:hidden">
            GY
          </h1>

          {/* Menu Desktop */}
          <MenuDesktop activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <HamburgerMenu isOpen={isOpen} hamburgerOpen={hamburgerOpen} />

        {/* Mobile Menu */}
       <MenuMobile isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Header;
