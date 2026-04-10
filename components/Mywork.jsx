import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { workData } from "@/assets/projectdata";

const Mywork = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-6 md:px-[12%] py-14 scroll-mt-20"
    >
      <motion.div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-3xl md:text-4xl font-bold mb-4"
        >
          Projects I built
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto text-sm md:text-base text-gray-700  mb-12"
        > 
          Explore a selection of my latest work, including live demos, GitHub repositories, and polished UI-focused web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-black shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100 ">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 md:p-6">
              

                <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6  text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-nowrap gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold  transition hover:bg-slate-300"
                  >
                    <Image src={assets.github} alt="GitHub" width={18} height={18} />
                    GitHub
                  </Link>

                  {project.liveLink && project.liveLink.startsWith("http") ? (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-semibold transition h"
                    >
                      <Image src={assets.send_icon} alt="Live Demo" width={18} height={18} />
                      Live demo
                    </Link>
                  ) : (
                    <div  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-semibold ">
                      {project.liveLink}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Mywork;
