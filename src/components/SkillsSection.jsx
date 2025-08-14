import React from "react";
import { SiGithub } from "react-icons/si";
import Separator from "./ui/separator";
import Postgres from "../assets/images/skills/postgreesql.png";
import Nextjs from "../assets/images/skills/next.js-logo.avif";
import Nestjs from "../assets/images/skills/nest.js-logo.avif";
import Docker from "../assets/images/skills/docker-logo.gif";
import Pandas from "../assets/images/skills/pandas.svg";
import Fastapi from "../assets/images/skills/fastapi.png";
import Python from "../assets/images/skills/python.png";
import Scikit from "../assets/images/skills/scikit.png";
import Tensorflow from "../assets/images/skills/Tensorflow_logo.svg.png";
import Ts from "../assets/images/skills/ts.webp";
import Reactjs from "../assets/images/skills/react.png";
import Hardhat from "../assets/images/skills/hardhat.png";
import Solidity from "../assets/images/skills/solidity.png";
import Wordpress from "../assets/images/skills/wordpress.png";

const skills = [
  {
    name: "React (js/Native)",
    icon: <img src={Reactjs} className='text-indigo-600 w-22 h-22' />,
  },
  {
    name: "Typescript",
    icon: <img src={Ts} className='text-blue-600 w-18 h-18' />,
  },
  {
    name: "Python",
    icon: (
      <img src={Python} className='text-indigo-600 w-18 h-18 bg-background' />
    ),
  },
  {
    name: "Solidity",
    icon: <img src={Solidity} className='text-indigo-600 w-22 h-22' />,
  },
  {
    name: "PostgreSQL",
    icon: <img src={Postgres} className='text-indigo-600 w-18 h-18' />,
  },
  { name: "GitHub", icon: <SiGithub className='text-gray-800 w-14 h-14' /> },
  {
    name: "Docker",
    icon: <img src={Docker} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Nextjs",
    icon: <img src={Nextjs} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Nestjs",
    icon: <img src={Nestjs} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "FastAPI",
    icon: <img src={Fastapi} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Pandas",
    icon: <img src={Pandas} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Scikit-learn",
    icon: <img src={Scikit} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "TensorFlow",
    icon: <img src={Tensorflow} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Hardhat",
    icon: <img src={Hardhat} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "WordPress",
    icon: <img src={Wordpress} className='text-indigo-600 w-18 h-18' />,
  },
];

const SkillsSection = () => {
  return (
    <section id='experiences' className='py-20 px-6  text-center'>
      <Separator id='experiences' title='Technical Expertise' />

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center space-y-2'
          >
            <div className='text-4xl'>{skill.icon}</div>
            <p className='text-sm text-slate-600'>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
