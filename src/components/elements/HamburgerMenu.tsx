type HamburgerMenuProps = {
  isOpen: boolean;
  hamburgerOpen: () => void;
};

const HamburgerMenu = ({ isOpen, hamburgerOpen }: HamburgerMenuProps) => {
  return (
    <button className="flex flex-col gap-y-2 md:hidden" onClick={hamburgerOpen}>
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
  );
};

export default HamburgerMenu;
