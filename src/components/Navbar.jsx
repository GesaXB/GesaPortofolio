import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between h-full p-10">
      <div>
        <motion.h1
          className="text-3xl font-bold mb-16 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Gesa Vlop
        </motion.h1>

        <motion.h2
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Front End Engineer
        </motion.h2>

        <nav className="space-y-3">
          {['About', 'Experience', 'Projects'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-400 hover:text-green-400 transition-colors text-lg"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>

      <motion.div
        className="flex flex-col space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex space-x-5">
          {[
            { icon: <FiGithub size={20} />, url: "#" },
            { icon: <FiTwitter size={20} />, url: "#" },
            { icon: <FiLinkedin size={20} />, url: "#" },
            { icon: <FiMail size={20} />, url: "#" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-green-400 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-gray-500">Built with React & Tailwind</p>
      </motion.div>
    </div>
  );
}
