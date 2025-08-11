import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import PROFILE_PIC from '../../assets/images/profile.jpg';
import { containerVariants, itemsVariants } from '../../utils/helper';


export const HeroSections = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-8 pt-8">
          {/* Mobile Layout */}
          <div className="block lg:hidden text-center">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"} shadow-2xl`}
                  >
                    <img src={PROFILE_PIC} alt="Profile" className="w-full h-full object-cover" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-2xl border border-purple-500/20"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={textVariants} className={`text-sm uppercase tracking-widest mb-4 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                Full Stack Developer
              </motion.div>

              <motion.h1 variants={containerVariants} className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                <span>
                  Building digital <span className="text-purple-500 font-medium">experiences</span>
                  <br />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>that matter</span>
                </span>
              </motion.h1>

              <motion.p variants={itemsVariants} className={`text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
              </motion.p>

              <motion.div variants={itemsVariants} className="flex flex-col space-y-4 items-center">
                <motion.button whileHover={{ y: -2 }} onClick={() => scrollToSection("work")}
                  className="bg-purple-700 py-3 px-8 text-white rounded-full uppercase tracking-widest">
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              <motion.div variants={itemsVariants} className="flex justify-center space-x-4 mt-6">
                {[{ icon: FiGithub, href: "#" }, { icon: FiLinkedin, href: "#" }, { icon: Mail, href: "#" }].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={textVariants} className={`text-sm uppercase tracking-widest mb-6 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                Full Stack Developer
              </motion.div>

              <motion.h1 variants={itemsVariants} className="text-5xl md:text-7xl font-light mb-8 leading-tight">
                <span>
                  Building digital <span className="text-purple-500 font-medium">experiences</span>
                  <br />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>that matter</span>
                </span>
              </motion.h1>

              <motion.p variants={itemsVariants} className={`text-xl font-light leading-relaxed mb-12 max-w-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
              </motion.p>

              <motion.div variants={itemsVariants} className="flex space-x-4 mb-8">
                <motion.button whileHover={{ y: -2 }} onClick={() => scrollToSection("work")} className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300">
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              <motion.div variants={itemsVariants} className="flex space-x-6 mb-10">
                {[{ icon: FiGithub, href: "#" }, { icon: FiLinkedin, href: "#" }, { icon: Mail, href: "#" }].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Column */}
            <motion.div initial="hidden" animate="visible" variants={imageVariants} className="flex justify-center relative">
              {/* Tech names above image */}
              <motion.div className="absolute -top-20 left-1/2 -translate-x-1/2 flex space-x-8">
                {["React", "Node.js", "TypeScript", "MongoDB"].map((tech) => (
                  <span key={tech} className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-80 h-96 rounded-3xl overflow-hidden border-4 ${
                  isDarkMode ? "border-gray-800" : "border-gray-300"
                } shadow-2xl`}
              >
                <img src={PROFILE_PIC} alt="Profile" className="w-full h-full object-cover" />
              </motion.div>
              {/*Decorative elements*/}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-3xl border border-purple-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-3xl border border-blue-500/10"
              />
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 flex justify-center"
          >
            <ArrowDown size={20} className={isDarkMode ? "text-gray-600" : "text-gray-400"} />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
