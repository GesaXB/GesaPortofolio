import { motion } from "framer-motion";
import { projectData } from "../data/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8 sm:px-12 md:px-16 lg:px-24">
      <motion.h2
        className="text-2xl font-bold mb-12 text-gray-100 flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-400 mr-4">03.</span>
        Some Things I've Built
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl text-green-400 mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
