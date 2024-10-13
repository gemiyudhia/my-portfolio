import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SosialMediaTablet = () => {
  return (
    <div className="md:flex md:items-center hidden lg:hidden md:font-bold md:text-xl md:gap-x-3 md:mt-7 md:text-primary">
      <p>Follow me on:</p>
      <span className="w-20 h-px bg-primary"></span>
      <a
        href="https://instagram.com/yuudhia"
        target="blank"
        className="bg-primary p-2 inline-block rounded-xl"
      >
        <FaInstagram className="text-white text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/gemiyudhia/"
        target="blank"
        className="bg-primary p-2 inline-block rounded-xl"
      >
        <FaLinkedinIn className="text-white text-3xl" />
      </a>
      <a
        href="https://github.com/gemiyudhia"
        target="blank"
        className="bg-primary p-2 inline-block rounded-xl"
      >
        <FiGithub className="text-white text-3xl" />
      </a>
    </div>
  );
}

export default SosialMediaTablet
