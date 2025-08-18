import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 sm:px-16 md:px-24 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-primary-white text-2xl font-mono mr-4">01.</span>
          <h2 className="text-3xl font-bold text-gray-100">About <span className="text-green-400">Me</span></h2>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6 text-gray-400 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Hello! I'm <span className="text-primary-white">Geisha Lutfan Waldhani</span>, a passionate
              <span className="text-primary-white"> aspiring Fullstack Developer</span> currently in my final year at
              <span className="text-primary-white"> SMK Telkom</span> with a focus on
              <span className="text-primary-white"> Software Engineering (RPL)</span>.
              My journey in web development began with school projects and has grown into a genuine passion.
            </p>

            <p>
              Though early in my professional journey, I've developed solid foundations in
              <span className="text-primary-white"> modern web technologies</span> through coursework and personal projects.
              I particularly enjoy the creative problem-solving aspect of development and
              the satisfaction of bringing ideas to life through code.
            </p>

            <p>
              When I'm not coding, you'll find me immersed in
              <span className="text-primary-white"> webtoons</span>, discovering new stories, or
              <span className="text-primary-white"> gaming</span> - which actually sparked my interest in
              interactive digital experiences. These hobbies inspire me to create engaging,
              user-friendly web applications.
            </p>

            <p>
              I'm eager to continue growing my skills through real-world experience and
              collaboration with other developers. My goal is to contribute to meaningful
              projects while constantly expanding my technical knowledge.
            </p>

            <div className="pt-6">
              <h3 className="text-gray-300 font-medium mb-4">Technologies I'm learning:</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Solidty",
                  "Laravel",
                  "MongoDB",
                  "Tailwind CSS",
                  "Git/GitHub",
                  "Figma",
                  "Python"
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center overflow-hidden"
                    whileHover={{
                      x: 4,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                  >
                    <motion.span
                      className="text-green-400 mr-2"
                      initial={{ x: 0 }}
                      whileHover={{
                        x: -4,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }
                      }}
                    >
                      ▹
                    </motion.span>
                    <motion.span
                      className="text-gray-400 text-sm"
                      initial={{ x: 0 }}
                      whileHover={{
                        x: 8,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }
                      }}
                    >
                      {tech}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
