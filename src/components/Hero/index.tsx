import { FaProjectDiagram } from "react-icons/fa";
import CardPhoto from "../elements/CardPhoto";
import SosialMediaTablet from "../elements/SosialMediaTablet";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const jobRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    if (jobRef.current) {
      gsap.fromTo(
        jobRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 2, ease: "power3.out" }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className=" md:pt-28 pt-[100px]">
      <div className="md:flex md:items-center md:justify-between md:gap-x-20">
        <div>
          <h1
            ref={heroRef}
            className="text-4xl lg:text-5xl font-black text-secondary"
          >
            I'm <span className="text-primary">Gemi Yudhia</span>,👋
          </h1>
          <TypeAnimation
            sequence={["Frontend Developer", 1000, "", 2000]}
            wrapper="span"
            speed={50}
            className="text-4xl lg:text-5xl font-black text-secondary"
            repeat={Infinity}
            ref={jobRef}
          />
          <p
            ref={descRef}
            className="text-xl font-semibold my-8 text-secondary max-w-xl"
          >
            Passionate frontend developer with a focus on creating interactive
            and visually engaging user experiences.
          </p>
          <a
            ref={buttonRef}
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
