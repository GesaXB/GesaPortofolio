import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      {/* Fixed Sidebar */}
      <div className="fixed hidden md:flex w-80 h-full border-r border-gray-800 bg-gray-950/80 backdrop-blur-lg z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 md:ml-80"
      >
        {children}
      </motion.main>
    </div>
  );
}
