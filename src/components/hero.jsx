import CurvedLoop from "../assets/animation/CurvedLoop";
import RotatingText from "../assets/animation/RotatingText";
import SplitText from "../assets/animation/SplitText";
import AboutSection from "./about";
//import heroImg from "../assets/images/hero-dev.png";

export default function Hero() {
  // Play animation on menu icon click

  return (
    <section className='min-h-screen flex flex-col items-center text-text justify-center px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-center items-center mt-4'>
          <SplitText
            text="Hi, I'm "
            className='text-4xl md:text-8xl font-playfair '
            delay={100}
            duration={0.6}
            ease='power3.out'
            splitType='chars'
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin='-100px'
            textAlign='center'
            //onLetterAnimationComplete={handleAnimationComplete}
          />
          <RotatingText
            texts={["Yebga", "Ruben", "Neb"]}
            mainClassName='px-2 sm:px-2 md:px-3 bg-accent text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-4xl md:text-7xl font-playfair'
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <p className='text-5xl md:text-6xl mb-6 font-monofett text-center'>
          {" "}
          <span className='text-accent'>Software</span> &{" "}
          <span className='text-cta'>AI</span> Engineer
        </p>
        <CurvedLoop
          marqueeText='Web 💻 | Mobile 📱| Blockchain 🌐⛓️ | Cloud ☁️ | ML 🤖 |'
          speed={5}
          curveAmount={100}
          direction='right'
          interactive={false}
          className='text-text text-6xl font-grotesk lowercase font-thin'
        />
      </div>
      {/* <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-border border-4 cursor-pointer transform-gpu'>
        <img
          //ref={imageRef}
          src={heroImg}
          alt='Developer at work'
          className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110'
          //onClick={handleImageClick}
        />
      </div> */}
      <AboutSection />
    </section>
  );
}
