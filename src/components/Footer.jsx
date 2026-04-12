import { motion } from "framer-motion";

export default function Footer() {

  return (
    <motion.footer
      className="py-12 px-6 sm:px-12 md:px-20 lg:px-28 text-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-500 text-xs">
          Built with passion • © {new Date().getFullYear()} • All text in <span className="text-gray-400">Inter</span> typeface
        </p>
      </div>
    </motion.footer>
  );
}
