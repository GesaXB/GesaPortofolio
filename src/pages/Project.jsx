import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SidebarLayout from "../components/SidebarLayout";
import { projectData } from "../data/data";

export const Project = () => {
  const techHoverSpring = {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.3
  };

  return (
    <SidebarLayout>
      <section className="min-h-screen px-6 py-20 sm:px-12 md:px-20 lg:px-28">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center">
            <Link to="/" className="flex items-center text-sm text-gray-400 transition-colors hover:text-green-400">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gray-100">
              All <span className="text-green-400">Projects</span>
            </h1>
            <div className="ml-6 h-px flex-1 bg-gray-800"></div>
          </div>

          <p className="mt-6 max-w-3xl leading-relaxed text-gray-400">
            Here is a complete list of my projects, ranging from web applications with rich user interfaces to fully functional systems powered by modern back-end technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-green-300">
                  Case Study
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-400 transition-colors hover:text-green-400"
                    aria-label={`GitHub repository for ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              {project.image && (
                <div className="mb-5 overflow-hidden rounded-xl border border-gray-700/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-green-400">{project.title}</h2>
                  <p className="text-sm leading-6 text-gray-400">
                    {project.description.split(/(React|Node\.js|MongoDB|Express|Spotify API|Next\.js|TypeScript|Prisma|Tailwind CSS|OpenRouter)/gi).map((part, i) =>
                      /React|Node\.js|MongoDB|Express|Spotify API|Next\.js|TypeScript|Prisma|Tailwind CSS|OpenRouter/i.test(part) ? (
                        <span key={i} className="text-primary-white">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="rounded-full bg-gray-950/60 px-2.5 py-1 text-[11px] font-medium text-green-400/90 transition-colors group-hover:bg-green-400/10"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(74, 222, 128, 0.2)",
                        color: "#ffffff",
                        transition: techHoverSpring
                      }}
                      aria-label={`Technology: ${tag}`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-green-400 transition-colors hover:text-green-300"
                    aria-label={`View ${project.title} project`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {!project.github ? "Visit Site" : "View Project"}
                    <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {project.demo && project.github && (
                    <a
                      href={project.demo}
                      className="text-sm text-gray-400 transition-colors hover:text-green-300"
                      aria-label={`Live demo of ${project.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SidebarLayout>
  );
};
