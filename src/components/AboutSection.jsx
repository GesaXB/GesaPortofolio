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
          <span className="text-green-400 text-2xl font-mono mr-4">01.</span>
          <h2 className="text-3xl font-bold text-gray-100">About Me</h2>
          <div className="ml-6 h-px bg-gray-800 flex-1"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="space-y-6 text-gray-400 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a frontend engineer with 5+ years of experience specializing in building accessible,
              high-performance web applications. My passion lies in creating interfaces that are not
              only visually stunning but also intuitive and inclusive for all users.
            </p>

            <p>
              Currently at <span className="text-green-400">Klaviyo</span>, I lead accessibility initiatives
              across our design system, ensuring our components meet WCAG 2.1 AA standards and
              provide an exceptional experience for all users regardless of ability.
            </p>

            <p>
              My technical expertise spans modern JavaScript frameworks, performance optimization,
              and responsive design principles. I particularly enjoy working at the intersection
              of design and engineering, bridging the gap between pixel-perfect visuals and
              robust, maintainable code.
            </p>

            <p>
              Beyond coding, I'm an advocate for inclusive design, regularly speaking at conferences
              and writing about accessibility best practices. When not at my desk, you'll find me
              rock climbing, experimenting with new cooking recipes, or exploring the outdoors.
            </p>

            <div className="pt-6">
              <h3 className="text-gray-300 font-medium mb-4">Technologies I work with:</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                  "GraphQL",
                  "Storybook",
                  "Jest",
                  "Cypress"
                ].map((tech, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-green-400 mr-2">▹</span>
                    <span className="text-gray-400 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden border border-gray-800">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
                <span className="text-gray-400">Profile Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
