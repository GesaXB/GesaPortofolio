import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiGraphql, SiMongodb, SiPostgresql, SiJest, SiLaravel, SiPython } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaReact className="text-2xl" />,
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Laravel", icon: <SiLaravel/>},
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend & Databases",
      icon: <FaNodeJs className="text-2xl" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      category: "Tools & Others",
      icon: <FaGitAlt className="text-2xl" />,
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Jest", icon: <SiJest /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 sm:px-12 md:px-20 lg:px-28">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <span className="text-primary-white text-2xl font-mono mr-4">04.</span>
          <h2 className="text-3xl font-bold text-gray-100">
            Skills & <span className="text-green-400">Technologies</span>
          </h2>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </div>

        <motion.p
          className="mt-6 text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The tools and technologies I work with to create exceptional digital experiences.
          Each icon represents a technology I'm proficient in and have used in production projects.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all border border-gray-800/50 hover:border-green-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-green-400">{skillCategory.icon}</span>
              <h3 className="text-xl font-semibold text-gray-100">{skillCategory.category}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {skillCategory.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-green-400 text-lg flex-shrink-0">{skill.icon}</span>
                  <span className="text-gray-300 text-sm font-medium truncate">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 -z-10 bg-green-400/5 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
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
          I focus on mastering tools that deliver real value to users. My approach combines
          technical expertise with thoughtful design to build solutions that are both
          powerful and enjoyable to use.
        </p>
      </motion.div>
    </section>
  );
}
