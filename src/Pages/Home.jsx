import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
import Banner from "../Components/banner";
import Works from "../Components/Works";
import Study from "../Components/Study";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div>
        <Navbar />
      </div>
      <div id="home">
        <Banner />
      </div>
      <div>
        <Skills />
      </div>
      <hr />
      <div id="works">
        <Works />
      </div>
      <hr />
      <div id="study">
        <Study />
      </div>
      <hr />
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
