import React from "react";
import Separator from "./ui/separator";
import Bizsense from "../assets/images/projects/bizsense.png";
import MentorGuru from "../assets/images/projects/mentorguru.png";
import Badge from "./ui/badge";

const projects = [
  {
    title: "Bizsense AI",
    image: Bizsense, // Replace with your own image
    tech: ["Nextjs", "Supabase", "fastapi", "tensorflow", "shadcn", "docker"],
    description:
      "An AI-enhanced ERP system for small businesses with real-time cash flow forecasting.",
    link: "https://bizsense-ai.vercel.app",
  },
  {
    title: "Mentor Guru",
    image: MentorGuru,
    tech: ["React Native", "Appwrite", "Playstore"],
    description:
      " A mobile app for Cameroon GCE students to connect with mentors, access resources, and enhance their learning experience.",
    link: "https://play.google.com/store/apps/details?id=com.jpteks.mentorguru&pcampaignid=web_share",
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-20 px-6 text-slate-800'>
      <div className='max-w-6xl mx-auto text-center'>
        <Separator title='Recent Work' />
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className=' rounded-2xl border-1 border-slate-400 hover:shadow-lg transition p-7'
            >
              <div className='rounded-xl h-1/2 overflow-hidden mb-4 '>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-fill'
                />
              </div>
              <h3 className='text-2xl text-left font-semibold font-monofett text-slate-600 mb-2'>
                {project.title}
              </h3>
              <p className='text-sm text-slate-600 mb-2 text-left'>
                {<Badge text={project.tech.join(" • ")} />}
              </p>
              <p className='text-sm mb-4 font-inter text-slate-500 text-left'>
                {project.description}
              </p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-700 underline text-sm font-inter hover:underline font-medium flex items-center gap-1'
              >
                View Project{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href='https://github.com/Nebur23/'
          target='_blank'
          className='mt-8 px-6 py-2 bg-accent  text-white rounded-lg hover:bg-cta transition-colors'
        >
          More on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
