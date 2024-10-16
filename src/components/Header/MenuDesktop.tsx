type MenuDesktopProps = {
  activeMenu: string;
  handleMenuClick: (
    menu: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;
};

const MenuDesktop = ({ activeMenu, handleMenuClick }: MenuDesktopProps) => {
  return (
    <div className="hidden md:flex items-center font-semibold text-lg text-white md:ml-auto lg:ml-0 lg:justify-center lg:w-full">
      <ul className="flex items-center md:gap-x-4 lg:gap-x-32 lg:text-xl">
        <li>
          <a
            href="#home"
            className={`hover:text-gray-300 lg:py-5 lg:px-8 md:py-4 md:px-5 rounded-full transition-all duration-300 ease-in-out ${
              activeMenu === "home"
                ? " hover:text-secondary text-secondary bg-white"
                : ""
            }`}
            onClick={(event) => handleMenuClick("home", event)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`hover:text-gray-300 lg:py-5 lg:px-8 md:py-4 md:px-5 rounded-full transition-all duration-300 ease-in-out ${
              activeMenu === "about"
                ? "hover:text-secondary text-secondary bg-white"
                : ""
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
            href="#project"
            className={`hover:text-gray-300 lg:py-5 lg:px-8 md:py-4 md:px-5 rounded-full transition-all duration-300 ease-in-out ${
              activeMenu === "myworks"
                ? "hover:text-secondary text-secondary bg-white"
                : ""
            }`}
            onClick={(event) => handleMenuClick("myworks", event)}
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`hover:text-gray-300 lg:py-5 lg:px-8 md:py-4 md:px-5 rounded-full transition-all duration-300 ease-in-out ${
              activeMenu === "contact"
                ? "hover:text-secondary text-secondary bg-white"
                : ""
            }`}
            onClick={(event) => handleMenuClick("contact", event)}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDesktop;
