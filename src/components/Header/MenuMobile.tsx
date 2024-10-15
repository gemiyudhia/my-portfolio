type MenuMobileProps = {
  isOpen: boolean;
}

const MenuMobile = ({isOpen}: MenuMobileProps) => {
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
  );
}

export default MenuMobile
