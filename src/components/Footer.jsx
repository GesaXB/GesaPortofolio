import { motion } from "framer-motion";
import { FaCode, FaFigma, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVercel } from "react-icons/si";

export default function Footer() {
  const tools = [
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaCode/>, name: "VS Code" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <FaReact />, name: "React" }
  ];

  return (
    <motion.footer
      className="py-12 px-6 sm:px-12 md:px-20 lg:px-28 text-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-400 text-sm mb-6">
          Loosely designed in <span className="text-purple-400">Figma</span> and coded in <span className="text-blue-400">Visual Studio Code</span> by yours truly.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/40 hover:bg-gray-800/60 transition-colors"
              whileHover={{
                y: -3,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-lg text-gray-300"
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.1
                }}
              >
                {tool.icon}
              </motion.span>
              <span className="text-xs text-gray-400">{tool.name}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-500 text-xs">
          Built with passion • © {new Date().getFullYear()} • All text in <span className="text-gray-400">Inter</span> typeface
        </p>
      </div>
    </motion.footer>
  );
}
