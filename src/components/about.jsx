import React from "react";
import DecryptedText from "../assets/animation/DecryptedText";

const AboutSection = () => {
  return (
    <section
      id='about'
      className=' pb-6 scroll-mt-20 text-left mt-4.5 tracking-wide'
    >
      <div className='container mx-auto max-w-4xl text-center'>
        {/* <h2 className='text-3xl md:text-4xl font-bold mb-6'>About Me</h2> */}
        <DecryptedText
          text=" I'm a passionate software engineer with a focus on building clean,
          interactive, and efficient applications.I’ve been diving into AI to help small businesses make
          smarter decisions."
          speed={100}
          maxIterations={20}
          //          characters='ABCD1234!?'
          className='revealed font-inter  text-lg text-slate-700 leading-3.5 italic'
          parentClassName='all-letters max-w-2xl mx-auto text-center text-left'
          encryptedClassName='encrypted'
        />
      </div>
    </section>
  );
};

export default AboutSection;
