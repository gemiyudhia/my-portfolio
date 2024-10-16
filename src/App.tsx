import About from "./components/About";
import Footer from "./components/Footer/Footer";
import FormContact from "./components/FormContact";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="scrollbar overflow-y-scroll h-screen">
        <div className="container mx-auto px-5 py-8">
          <Header />
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="project">
            <Projects />
          </section>
          <section id="contact">
            <FormContact />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
