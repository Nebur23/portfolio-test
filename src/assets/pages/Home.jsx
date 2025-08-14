import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";
//import Squares from "../animation/Squares";

const HomePage = () => {
  return (
    <div className='bg-background text-text min-h-screen relative'>
      <Header />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
