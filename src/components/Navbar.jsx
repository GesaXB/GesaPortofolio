import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    setActiveSection(sectionId);
    smoothScrollTo(sectionId);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
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

  const navItems = ['About', 'Experience', 'Projects', 'Skills'];

  return (
    <div className="flex flex-col justify-between h-full p-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.h1
          className="text-3xl font-bold mb-7 text-primary-white"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{
            type: "spring",
            stiffness: 100
          }}
        >
          Gesa<span className="text-green-400">Vlop</span>
        </motion.h1>

        <motion.h2
          className="text-lg text-primary-white mb-7"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          Junior Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-sm mb-15 text-gray-400"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </motion.p>

        <nav className="space-y-2">
          {navItems.map((item, index) => {
            const sectionId = item.toLowerCase();
            return (
              <motion.div
                key={item}
                className="relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  className={`relative block ${activeSection === sectionId ? 'text-primary-white' : 'text-gray-400'} hover:text-primary-white transition-colors text-2xl pl-8 py-2 w-full text-left`}
                  whileHover={{
                    x: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item)}
                >
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
                    initial={{ width: 0 }}
                    animate={{ width: '1rem' }}
                    transition={{ duration: 0.3 }}
                  >
                    -
                  </motion.span>
                  <span className="relative z-10">
                    {item}
                  </span>
                  {activeSection === sectionId && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-primary-white"
                      layoutId="navUnderline"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </nav>
      </motion.div>

      <motion.div
        className="flex flex-col space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="flex space-x-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-400 hover:text-primary-white transition-colors"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          className="text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Built with React & Tailwind
        </motion.p>
      </motion.div>
    </div>
  );
}
