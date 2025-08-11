import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { containerVariants } from "../../utils/helper";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const { isDarkMode } = useTheme();
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    {
      name: "Github",
      icon: FiGithub,
      url: "https://github.com",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com",
      color: "hover:text-purple-400",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com",
      color: "hover:text-text-sky-400",
    },
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:elizabethbehaghel@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 9, behavior: "smooth" });
  };

  // Animated Gradient Line Component
  const AnimatedGradientLine = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <motion.div
          className={`h-px bg-gradient-to-r ${
            isDarkMode
              ? "from-transparent via-purple-500 to-transparent"
              : "from-transparent via-purple-600 to-transparent"
          }`}
          initial={{ width: "0%", opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <motion.div
          className={`absolute top-0 h-px bg-gradient-to-r ${
            isDarkMode
              ? "from-purple-400 via-blue-500 to-purple-400"
              : "from-purple-500 via-blue-600 to-purple-500"
          } blur-sm`}
          animate={{
            x: ["-50%", "calc(100vw + 50%)"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>
    );
  };

  return (
    <footer
      ref={footerRef}
      className={`relative ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      {/* Animated Wave/Gradient Line */}
      <AnimatedGradientLine />

      {/* Background Elements */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute top-10 left-1/3 w-48 h-48 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
      </motion.div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            <div className="flex justify-center space-x-6">
              {socialLinks.map(({ name, icon: Icon, url, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${color}`}
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Back to top
            </button>

            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} Elizabeth Behaghel Aiyebelehin. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
