import { useRef } from "react";
import {
  easeOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import SIGNATURE from "../../assets/images/signature.png";
import { containerVariants, itemsVariants } from "../../utils/helper";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-90 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
      </motion.div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemsVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Get to Know Me
          </motion.div>
          <motion.h2
            variants={itemsVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About <span className="text-purple-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>

        {/* Personal Story */}
        <div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left side: Mission & Passions */}
            <motion.div
              variants={itemsVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                  : "bg-white/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-xl font-medium mb-1">My Mission</h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I see technology as a powerful tool to connect people and solve real problems. I’m passionate about creating digital experiences that are not only useful but also enjoyable and accessible to everyone.
              </p>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                When I’m not coding, I enjoy exploring new frameworks, contributing to open source, and supporting other developers on their journey. I love how web technologies constantly evolve, opening up endless possibilities to build meaningful, user-centered solutions.
              </p>

              {/* What I Love Building */}
              <motion.div variants={itemsVariants}>
                <h3 className="text-lg font-semibold mb-4">What I Love Building</h3>
                <div className="space-y-4">
                  {PASSIONS.map((passion) => (
                    <motion.div
                      key={passion.title}
                      variants={itemsVariants}
                      whileHover={{ x: 4 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${
                        isDarkMode
                          ? "bg-gray-800/30 hover:bg-gray-800/50"
                          : "bg-gray-50/50 hover:bg-gray-100/50"
                      } transition-all duration-300`}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          isDarkMode ? "bg-gray-700" : "bg-white"
                        }`}
                      >
                        {<passion.icon size={20} />}
                      </div>
                      <div>
                        <h4 className="font-semibold">{passion.title}</h4>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {passion.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Signature */}
              <motion.div variants={itemsVariants} className="mt-8 text-center">
                <div
                  className={`text-sm mb-2 ${
                    isDarkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Crafted with passion by
                </div>
                <img
                  src={SIGNATURE}
                  alt="Elizabeth's Signature"
                  className="h-5 mb-2 m-auto"
                />
                <div className="text-lg font-medium text-purple-700">Elizabeth Behaghel</div>
              </motion.div>
            </motion.div>

            {/* Right side: Timeline */}
            <motion.div
              variants={timelineVariants}
              ref={timelineRef}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              className="relative"
            >
              <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
                Developer Journey
              </h3>

              {/* Timeline Line */}
              <div
                className={`absolute left-8 top-16 bottom-0 w-px ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              />

              <div className="space-y-8">
                {JOURNEY_STEPS.map((step) => (
                  <motion.div
                    key={step.year}
                    variants={stepVariants}
                    whileHover={{ x: 4 }}
                    className={`relative flex items-start space-x-4 group p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-gray-50/50 hover:bg-gray-100/50"
                    } transition-all duration-300`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}
                    >
                      {<step.icon size={24} className="text-white" />}
                    </div>

                    {/* Timeline Content */}
                    <div
                      className={`flex-grow p-6 rounded-xl border ${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-white/80 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-medium">{step.title}</h4>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {step.year}
                        </span>
                      </div>
                      <div
                        className={`text-sm font-medium mb-2 ${
                          isDarkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      >
                        {step.Company}
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/*Call to Action */}
        <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants} 
            className="text-center mt-20"
        >
            <motion.div
                variants={itemsVariants}
                className= "flex flex-col items-center space-y-6"
                >
                  <p
                    className={`text-lg ${
                       isDarkMode ? "text-gray-400" : "text-gray-600" 
                    }`}
                  >Ready to bring your ideas to life?
                  </p>
                
                <motion.button
                    whileHover={{y: -2, scale: 1.05}}
                    whileTap={{scale: 0.98}}
                    className="bg-purple-500 hover:bg-purple-60 text-white px-8 py-3 text-sm uppercas rounded-full tracking-wider font-medium transition-all duration-300"
                >
                    Let's Work Together
                </motion.button>
                </motion.div>
              </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
