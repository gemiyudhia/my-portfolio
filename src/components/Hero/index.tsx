import { FaProjectDiagram } from "react-icons/fa";
import CardPhoto from "../elements/CardPhoto";
import SosialMediaTablet from "../elements/SosialMediaTablet";

const HeroSection = () => {
  return (
    <section className="px-3 md:pt-28 pt-[100px]">
      <div className="md:flex md:items-center md:justify-between md:gap-x-20">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-secondary">
            I'm <span className="text-primary">Gemi Yudhia,</span>👋
          </h1>
          <h1 className="text-4xl lg:text-5xl font-black text-secondary">
            Frontend Developer
          </h1>
          <p className="text-xl font-semibold my-8 text-secondary max-w-xl">
            Passionate frontend developer with a focus on creating interactive
            and visually engaging user experiences.
          </p>
          <a
            href="#project"
            className="flex items-center gap-x-3 bg-secondary text-lg text-white lg:py-5 lg:px-8 md:py-3 md:px-5 py-5 px-8 rounded-xl font-semibold hover:bg-[#212134] w-52"
          >
            <FaProjectDiagram />
            My Projects
          </a>

          {/* social media tablet */}
          <SosialMediaTablet />
        </div>

        {/* Card Photo */}
        <CardPhoto />
      </div>
    </section>
  );
};

export default HeroSection;
