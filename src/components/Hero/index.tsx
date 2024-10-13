import { FaProjectDiagram } from "react-icons/fa";
import CardPhoto from "../elements/CardPhoto";
import SosialMediaTablet from "../elements/SosialMediaTablet";

const HeroSection = () => {
  return (
    <section className="mt-20 mb-8 px-3">
      <div className="md:flex md:items-center md:justify-between md:gap-x-20">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black text-secondary">
            I'm <span className="text-primary">Gemi Yudhia,</span>👋
          </h1>
          <h1 className="text-4xl lg:text-5xl font-black text-secondary">
            Frontend Developer
          </h1>
          <p className="text-xl font-semibold my-8 text-secondary max-w-xl">
            I enjoy turning imagination into reality by creating visually
            appealing websites that are both engaging and functional, with a
            focus on delivering a great user experience.
          </p>
          <button className="flex items-center gap-x-3 bg-secondary text-lg text-white lg:py-5 lg:px-8 md:py-3 md:px-5 py-5 px-8 rounded-xl font-semibold hover:bg-[#212134]">
            <FaProjectDiagram />
            My Works
          </button>

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
