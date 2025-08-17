import { motion } from "framer-motion";
import { experienceData } from "../data/data";
export default function ExperienceSection() {
  const smoothSpring = {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.5
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
          <h2 className="text-3xl font-bold text-gray-100">Where I've <span className="text-green-400">Worked</span></h2>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </div>

        <motion.p
          className="mt-6 text-gray-300 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Over the past few years, I've had the privilege to work with amazing teams on challenging projects.
          Each experience has shaped my approach to building accessible, performant web applications.
          Here's a snapshot of my professional journey so far.
        </motion.p>
      </motion.div>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.div
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
              "
              variants={{
                hover: {
                  y: -3,
                  transition: smoothSpring
                }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
                <motion.p
                  className="text-green-400 text-sm"
                  whileHover={{
                    x: 3,
                    transition: smoothSpring
                  }}
                >
                  {exp.period}
                </motion.p>
                <div>
                  <h3 className="text-lg text-gray-100">
                    {exp.role} • <span className="text-green-400">{exp.company}</span>
                  </h3>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-5 pl-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-sm leading-relaxed"
                    whileHover={{
                      x: 4,
                      color: "#f3f4f6",
                      transition: smoothSpring
                    }}
                  >
                    {item}
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
                    "
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(74, 222, 128, 0.15)",
                      transition: smoothSpring
                    }}
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
                bg-green-400/5
                rounded-xl
                blur-md
              "
              variants={{
                hover: {
                  opacity: 1,
                  transition: { duration: 0.4 }
                }
              }}
              initial={{ opacity: 0 }}
            />
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
        <p className="mb-4">
          Beyond these roles, I've also contributed to open-source projects and mentored junior developers,
          because I believe in giving back to the community that has given me so much.
        </p>
        <p>
          Every project has taught me something valuable—whether it's technical skills,
          the importance of accessibility, or how to collaborate effectively in distributed teams.
        </p>
      </motion.div>
    </section>
  );
}
