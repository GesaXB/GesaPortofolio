import { motion } from "framer-motion";
import { FaFigma, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiGo, SiJavascript, SiLaravel, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";

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
        { name: "Go", icon: <SiGo /> },
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
    <section id="skills" className="px-6 py-20 sm:px-12 md:px-20 lg:px-28">
      <div className="mx-auto max-w-7xl">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <span className="mr-4 text-2xl font-mono text-primary-white">04.</span>
          <h1 className="text-3xl font-bold text-gray-100">
            Technical <span className="text-green-400">Skillset</span>
          </h1>
          <div className="ml-6 h-px flex-1 bg-gray-800"></div>
        </div>

        <motion.p
          className="mt-6 max-w-3xl leading-relaxed text-gray-400"
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

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((skillCategory, index) => (
          <motion.article
            key={index}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                {skillCategory.icon}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-100">{skillCategory.category}</h2>
                <p className="text-sm text-gray-500">Core tools</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-950/60 px-3 py-2 text-sm text-gray-300"
                  whileHover={{ x: 3 }}
                  aria-label={`Skill: ${skill.name}`}
                >
                  {skill.icon && (
                    <span className="flex-shrink-0 text-green-400">
                      {skill.icon}
                    </span>
                  )}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-12 max-w-3xl leading-relaxed text-gray-400"
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
      </div>
    </section>
  );
}
