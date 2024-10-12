import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("home");

  const hamburgerOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: string, event: React.MouseEvent<HTMLAnchorElement>) => {
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
          <div className="hidden md:flex items-center font-semibold text-lg text-white md:ml-auto lg:ml-0 lg:justify-center lg:w-full">
            <ul className="flex items-center md:gap-x-4 lg:gap-x-32 lg:text-xl">
              <li>
                <a
                  href="/"
                  className={`hover:text-gray-300 lg:py-5 lg:px-8 md:py-4 md:px-5 rounded-full ${
                    activeMenu === "home" ? " hover:text-secondary bg-white" : ""
                  }`}
                  onClick={(event) => handleMenuClick("home", event)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`hover:text-gray-300 lg:py-6 lg:px-8 md:py-4 md:px-5 rounded-full  ${
                    activeMenu === "about" ? "hover:text-secondary bg-white" : ""
                  }`}
                  onClick={(event) => handleMenuClick("about", event)}
                >
                  About
                </a>
              </li>

              {/* Logo di tengah untuk layar besar */}
              <li>
                <h1 className="hidden lg:block bg-white text-secondary font-black p-4 text-2xl rounded-full">
                  GY
                </h1>
              </li>

              <li>
                <a
                  href="/"
                  className={`hover:text-gray-300 lg:py-6 lg:px-8 md:py-4 md:px-5 rounded-full ${
                    activeMenu === "myworks" ? "hover:text-secondary bg-white" : ""
                  }`}
                  onClick={(event) => handleMenuClick("myworks", event)}
                >
                  My Works
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={`hover:text-gray-300 lg:py-6 lg:px-8 md:py-4 md:px-5 rounded-full  ${
                    activeMenu === "contact" ? "hover:text-secondary bg-white" : ""
                  }`}
                  onClick={(event) => handleMenuClick("contact", event)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <button
          className="flex flex-col gap-y-2 md:hidden"
          onClick={hamburgerOpen}
        >
          <span
            className={`hamburger-line duration-300 ease-in-out transition origin-top-left ${
              isOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line duration-300 ease-in-out transition ${
              isOpen ? "scale-0" : "translate-x-[-6px]"
            }`}
          ></span>
          <span
            className={`hamburger-line duration-300 ease-in-out transition origin-bottom-left ${
              isOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute bg-secondary-0 w-[93%] right-4 top-24 py-4 px-3 rounded-lg transition-all duration-300 ease-in-out transform md:hidden ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="block bg-primary mt-5 py-7 px-4 text-white text-lg font-semibold rounded-xl space-y-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">My Works</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
