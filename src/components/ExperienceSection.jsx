import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      description: [
        "Build and maintain critical components used across Klaviyo's frontend",
        "Implement and advocate for best practices in web accessibility",
        "Work closely with cross-functional teams including developers and designers"
      ],
      tech: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      period: "2022 — 2024",
      role: "Frontend Engineer",
      company: "Upstatement",
      description: [
        "Developed responsive, accessible websites for various clients",
        "Implemented custom animations and interactive elements",
        "Optimized frontend performance and loading times"
      ],
      tech: ["React", "Next.js", "GSAP", "Tailwind CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 sm:px-16 md:px-24 lg:px-32">
      <motion.h2
        className="text-2xl font-bold mb-12 text-gray-100 flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-green-400 mr-3">02.</span>
        Where I've Worked
      </motion.h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="glass-effect p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <p className="text-green-400 text-sm">{exp.period}</p>
              <div>
                <h3 className="text-xl text-gray-100">
                  {exp.role} • {exp.company}
                </h3>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 pl-4">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-green-400 bg-gray-900/50 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
