import { motion } from "framer-motion";
import { projectData } from "../data/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 sm:px-12 md:px-20 lg:px-28">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <span className="text-primary-white text-2xl font-mono mr-4">03.</span>
          <h2 className="text-3xl font-bold text-gray-100">Some Things I've <span className="text-green-400">Built</span></h2>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </div>

        <motion.p
          className="mt-6 text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I believe in learning by building. Each project represents a unique challenge I've tackled,
          combining technical skills with creative problem-solving. From open-source contributions to
          personal experiments, here are some highlights of my work.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all border border-gray-800/50 hover:border-green-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl text-green-400">{project.title}</h3>
              {project.github && (
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="GitHub repository"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-green-400/90 bg-gray-900/80 px-2 py-1 rounded group-hover:bg-green-400/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={project.link}
                className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1 group/link"
              >
                View Project
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  className="text-gray-400 hover:text-green-300 text-sm flex items-center gap-1"
                >
                  Live Demo
                </a>
              )}
            </div>

            <div className="absolute inset-0 -z-10 bg-green-400/5 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-gray-300 max-w-3xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          These projects represent just a portion of my work. I'm constantly experimenting with new technologies
          and approaches to solve interesting problems. Have an idea you'd like to collaborate on?
          I'd love to hear about it!
        </p>
      </motion.div>
    </section>
  );
}
