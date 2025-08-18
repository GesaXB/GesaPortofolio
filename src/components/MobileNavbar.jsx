import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['About', 'Experience', 'Projects', 'Skills'];

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };

  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    setActiveSection(sectionId);
    smoothScrollTo(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = [
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/GesaXB",
      label: "GitHub Profile"
    },
    {
      icon: <FiLinkedin size={20} />,
      url: "https://www.linkedin.com/in/geisha-lutfan-waldhani-284128304/",
      label: "LinkedIn Profile"
    },
    {
      icon: <FiMail size={20} />,
      url: "mailto:gesavlop@gmail.com",
      label: "Send Email"
    }
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Minimal Header Bar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <h1 className="text-xl font-bold text-primary-white">
              Gesa<span className="text-green-400">Vlop</span>
            </h1>
          </motion.div>

          <motion.button
            className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FiX className="text-gray-300" size={22} />
            ) : (
              <FiMenu className="text-gray-300" size={22} />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-lg md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="h-full flex flex-col justify-between px-6 pt-24 pb-10">
              <motion.nav className="flex-1">
                <motion.ul className="space-y-6">
                  {navItems.map((item) => {
                    const sectionId = item.toLowerCase();
                    return (
                      <motion.li
                        key={item}
                        variants={itemVariants}
                      >
                        <motion.button
                          className={`text-2xl font-medium w-full text-left ${
                            activeSection === sectionId
                              ? 'text-green-400'
                              : 'text-gray-400 hover:text-gray-200'
                          } transition-colors`}
                          onClick={() => handleNavClick(item)}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`Navigate to ${item} section`}
                        >
                          {item}
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.nav>

              <motion.div
                className="flex flex-col items-center space-y-6"
                variants={itemVariants}
              >
                <div className="flex space-x-5">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  Built with React & Tailwind CSS
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
