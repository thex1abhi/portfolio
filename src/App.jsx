import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";


const projects = [
  {
    title: "Event Management App",
    description:
      "Full-stack MERN app with authentication and role-based access.",
    tech: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/400x250",
    github: "https://github.com/yourusername/event-management-app",
  
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio using React and TailwindCSS.",
    tech: "React, TailwindCSS",
    image: "https://via.placeholder.com/400x250",
    github: "https://github.com/yourusername/portfolio",
   
  },
  {
    title: "DSA Practice Platform",
    description:
      "Problem-solving focused app with categorized questions.",
    tech: "JavaScript, Algorithms",
    image: "https://via.placeholder.com/400x250",
    github: "https://github.com/yourusername/dsa-platform",
   
  },
];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      
      <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-500">
          Abhishek.dev
        </h1>

       
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>

      
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Hi, I'm <span className="text-indigo-500">Abhishek</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-8"
        >
          MERN Stack Developer building scalable applications and
          solving real-world problems.
        </motion.p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-400 dark:border-gray-700 rounded-lg"
          >
             <span className=":hidden" > Download  </span>  Resume
          </a>
        </div>
      </section>

    
      <section id="about" className="px-8  py-20 sm:py-7 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I work with React, Node.js, Express, and MongoDB to build
          scalable full-stack applications. I focus on clean UI,
          performance, and strong problem-solving fundamentals.
        </p>
      </section>

      <section id="skills" className="px-8 py-20 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "TailwindCSS",
              "Git",
              "DSA",
            ].map((skill) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={skill}
                className="bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-lg py-4 text-center font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="projects" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">Projects</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-indigo-500 mb-4">
                    {project.tech}
                  </p>

                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-indigo-400"
                    >
                      <FaGithub /> GitHub
                    </a>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="contact" className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>

        <form
          onSubmit={sendEmail}
          className="grid gap-6 max-w-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>

    
      <footer className="border-t border-gray-300 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 Abhishek Yadav. All rights reserved.
      </footer>
    </div>
  );
}
