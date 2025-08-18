import { motion } from "framer-motion";
import { experienceData } from "../data/data";

export default function ExperienceSection() {
  const smoothSpring = {
    type: "spring",
    stiffness: 250,
    damping: 15,
    mass: 0.4
  };

  const techHoverSpring = {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.3
  };

  return (
    <section id="experience" className="py-16 px-6 sm:px-12 md:px-20 lg:px-28">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="flex items-center">
          <span className="text-primary-white text-2xl font-mono mr-4">02.</span>
          <h1 className="text-3xl font-bold text-gray-100">Professional <span className="text-green-400">Experience</span></h1>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </div>

        <motion.p
          className="mt-6 text-gray-400 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          As a <span className="text-primary-white">full-stack developer</span>, I've gained hands-on experience through <span className="text-primary-white">internships</span> and <span className="text-primary-white">school projects</span>, working with modern web technologies like <span className="text-primary-white">Laravel</span>, <span className="text-primary-white">React</span>, and <span className="text-primary-white">WordPress</span>.
        </motion.p>
      </motion.div>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.article
            key={exp.id}
            className="relative"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover="hover"
          >
            <motion.div
              className="
                p-6
                rounded-xl
                border border-gray-800/80
                backdrop-blur-sm
                cursor-default
                bg-gray-900/20
              "
              variants={{
                hover: {
                  y: -4,
                  transition: smoothSpring
                }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
                <motion.time
                  dateTime={exp.period.split(' - ').join('/')}
                  className="text-green-400 text-sm"
                  whileHover={{
                    x: 3,
                    transition: smoothSpring
                  }}
                >
                  {exp.period}
                </motion.time>
                <div>
                  <h2 className="text-lg text-gray-100">
                    {exp.role} • <span className="text-green-400">{exp.company}</span>
                  </h2>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-5 pl-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-sm leading-relaxed"
                    whileHover={{
                      x: 4,
                      color: "#f3f4f6",
                      transition: {
                        ...smoothSpring,
                        duration: 0.2
                      }
                    }}
                  >
                    {item.split(/(full-stack|Laravel|Tailwind CSS|MySQL|WordPress|SEO)/g).map((part, j) =>
                      /full-stack|Laravel|Tailwind CSS|MySQL|WordPress|SEO/.test(part) ? (
                        <span key={j} className="text-primary-white">{part}</span>
                      ) : (
                        part
                      )
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech?.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="
                      text-xs
                      text-green-400
                      bg-gray-900/40
                      px-2.5 py-1
                      rounded-full
                      border border-gray-800/40
                      select-none
                    "
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: "rgba(74, 222, 128, 0.2)",
                      color: "#ffffff",
                      boxShadow: "0 0 8px rgba(74, 222, 128, 0.3)",
                      transition: techHoverSpring
                    }}
                    transition={{
                      ...techHoverSpring,
                      duration: 0.25
                    }}
                    aria-label={`Technology: ${tech}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="
                absolute
                inset-0
                -z-10
                bg-gradient-to-br
                from-green-400/10
                to-transparent
                rounded-xl
                blur-lg
                opacity-0
              "
              variants={{
                hover: {
                  opacity: 0.8,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              initial={{ opacity: 0 }}
            />
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
        <p className="mb-4">
          Through these experiences, I've developed strong skills in <span className="text-primary-white">web application development</span>, <span className="text-primary-white">database management</span>, and <span className="text-primary-white">responsive design</span> implementation. My work has contributed to improved <span className="text-primary-white">user experiences</span> and more efficient digital solutions.
        </p>
        <p>
          Currently focused on expanding my expertise in <span className="text-primary-white">modern JavaScript frameworks</span> and <span className="text-primary-white">backend technologies</span>, I'm passionate about creating <span className="text-primary-white">accessible</span>, <span className="text-primary-white">performant</span> web applications.
        </p>
      </motion.div>
    </section>
  );
}
