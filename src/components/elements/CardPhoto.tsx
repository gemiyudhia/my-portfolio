import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const CardPhoto = () => {
  return (
    <div className="mt-12 mb-20 lg:flex lg:items-center">
      <div className="bg-primary rounded-3xl w-full md:w-[300px] h-[400px] overflow-hidden">
        <img src="" alt="foto" className="object-cover w-full h-full" />
      </div>

      {/* Social Media */}
      <div className="lg:flex hidden justify-center items-center">
        <div className="rotate-90 flex items-center">
          <h3 className="text-lg font-semibold w-32 text-primary">
            Follow me on:
          </h3>
          <span className="w-10 lg:w-20 h-px bg-primary mr-7"></span>
          <div className="ml-6 flex flex-col items-center transform rotate-90">
            <a
              href="https://instagram.com/yuudhia"
              target="blank"
              className="bg-primary p-2 inline-block rounded-xl mb-2 hover:translate-x-1 hover:translate-y-1 duration-300 transition-all"
            >
              <FaInstagram className="text-white text-2xl -rotate-180" />
            </a>
            <a
              href="https://www.linkedin.com/in/gemiyudhia/"
              target="blank"
              className="bg-primary p-2 inline-block rounded-xl mb-2 hover:translate-x-1 hover:translate-y-1 duration-300 transition-all"
            >
              <FaLinkedinIn className="text-white text-2xl -rotate-180" />
            </a>
            <a
              href="https://github.com/gemiyudhia"
              target="blank"
              className="bg-primary p-2 inline-block rounded-xl hover:translate-x-1 hover:translate-y-1 duration-300 transition-all"
            >
              <FiGithub className="text-white text-2xl -rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPhoto
