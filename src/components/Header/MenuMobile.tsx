type MenuMobileProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const MenuMobile = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  return (
    <div
      className={`absolute bg-secondary-0 w-[93%] right-5 top-14 py-4 px-3 rounded-lg transition-all duration-300 ease-in-out transform md:hidden ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <ul className="block bg-primary mt-5 py-7 px-4 text-white text-lg font-semibold rounded-xl space-y-4">
        <li>
          <a onClick={() => setIsOpen(false)} href="#home">
            Home
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#about">
            About
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#project">
            Projects
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
