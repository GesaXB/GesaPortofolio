import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiGraphql, SiMongodb, SiPostgresql, SiJest, SiLaravel, SiPython, SiNextdotjs, SiExpress } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <FaReact className="text-2xl" />,
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Laravel", icon: <SiLaravel /> },
      ],
    },
    {
      category: "Backend & Databases",
      icon: <FaNodeJs className="text-2xl" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Python", icon: <SiPython /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: <FaGitAlt className="text-2xl" />,
      items: [
        { name: "Git Version Control", icon: <FaGitAlt /> },
        { name: "Figma Design", icon: <FaFigma /> },
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
          <h1 className="text-3xl font-bold text-gray-100">
            Technical <span className="text-green-400">Skillset</span>
          </h1>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </div>

        <motion.p
          className="mt-6 text-gray-400 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My <span className="text-primary-white">full-stack development expertise</span> spans across modern <span className="text-primary-white">JavaScript frameworks</span>,
          <span className="text-primary-white"> backend technologies</span>, and <span className="text-primary-white">cloud infrastructure</span>.
          I specialize in building <span className="text-primary-white">scalable web applications</span> with <span className="text-primary-white">responsive designs</span>
          and <span className="text-primary-white">optimized performance</span>.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillCategory, index) => (
          <motion.article
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
              <h2 className="text-xl font-semibold text-gray-100">{skillCategory.category}</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {skillCategory.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
                  whileHover={{ x: 3 }}
                  aria-label={`Skill: ${skill.name}`}
                >
                  {skill.icon && (
                    <span className="text-green-400 text-lg flex-shrink-0">
                      {skill.icon}
                    </span>
                  )}
                  <span className="text-gray-300 text-sm font-medium truncate">
                    {skill.name.split(' ').map((word, i) =>
                      ['API', 'CI/CD'].includes(word) ? (
                        <span key={i} className="text-primary-white">{word} </span>
                      ) : (
                        word + ' '
                      )
                    )}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-400/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-12 text-gray-400 max-w-3xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          I continuously expand my skillset to include <span className="text-primary-white">emerging technologies</span> while maintaining
          expertise in <span className="text-primary-white">core programming principles</span>. My <span className="text-primary-white">problem-solving approach</span> combines
          technical knowledge with <span className="text-primary-white">user experience considerations</span> to deliver optimal solutions.
        </p>
      </motion.div>
    </section>
  );
}
