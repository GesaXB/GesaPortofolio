import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 py-32">
      <motion.div
        className="glass-effect p-8 rounded-xl max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-green-400 mb-4 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-100 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Gesa Vlop.
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-400 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-8 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I specialize in building accessible, pixel-perfect digital experiences that combine thoughtful design with robust engineering.
        </motion.p>
      </motion.div>
    </section>
  );
}
