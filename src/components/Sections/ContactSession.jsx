import React, { useState, useRef, useEffect } from 'react';
import { motion, useTransform, useInView, useScroll } from "framer-motion";
import { Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { containerVariants, itemsVariants } from '../../utils/helper';
import TextInput from '../input/TextInput';
import SuccessModal from '../Sections/SuccessModal';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/data';

const ContactSession = () => {
  const { isDarkMode } = useTheme();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Modal and submission state
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation & scroll tracking
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Auto-hide success modal after 3 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  // Update form fields
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} relative overflow-hidden`}
    >
      {/* Background animated shapes */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`} />
        <div className={`absolute bottom-40 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemsVariants}
            className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-4`}
          >
            Let's Connect
          </motion.div>
          <motion.h2
            variants={itemsVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get In <span className="text-purple-500 font-medium">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemsVariants}
            className={`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Ready to start your next project? Let's discuss how you can bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Form and other content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
            <motion.div
              variants={itemsVariants}
              className={`p-8 rounded-2xl border ${isDarkMode ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm" : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"}`}
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.name}
                    handleInputChange={(text) => handleInputChange("name", text)}
                    label="Your Name"
                  />
                  <TextInput
                    isDarkMode={isDarkMode}
                    label="Email Address"
                    value={formData.email}
                    handleInputChange={(text) => handleInputChange("email", text)}
                  />
                </div>
                <TextInput
                  isDarkMode={isDarkMode}
                  label="Your Message"
                  value={formData.message}
                  textarea
                  handleInputChange={(text) => handleInputChange("message", text)}
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info and Social Links */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} className="space-y-8">
            {/* Contact Information */}
            <motion.div variants={itemsVariants}>
              <h3 className="text-2xl font-medium mb-8">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemsVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${isDarkMode ? "bg-gray-800/30 hover:bg-gray-800/50" : "bg-gray-50/50 hover:bg-gray-100/50"} transition-all duration-300`}
                  >
                    <div className="p-3 rounded-lg text-gray-500">
                      <info.icon size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemsVariants}>
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${isDarkMode ? "bg-gray-800/50 border-gray-700 hover:border-gray-600" : "bg-white/80 border-gray-200 hover:border-gray-300"} ${social.bgColor} ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemsVariants}
              className={`p-6 rounded-xl border ${isDarkMode ? "bg-green-500/10 border-green-500/20" : "bg-green-50 border-green-200"}`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-green-500">Available for work</span>
              </div>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                I'm currently available for freelance projects and full-time opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/*Bottom CTA*/}
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mt-20"
        >
            <motion.div
                variants={itemsVariants}
                className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
                   isDarkMode
                   ? "bg-gray-800/30 border-gray-700"
                   : "bg-gray-50/50 border-gray-200" 
                }`}
            >
                <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
                <p 
                    className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }mb-6`}
                >
                    Sometimes a conversation is worth a thousand messages. feel free to schedule a call to discuss your project
                </p>

                <motion.button
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 mt-4 rounded-full border font-medium transition-all duration-300 ${
                        isDarkMode 
                        ? "border-gray-600 hover:border-purple-500 hover:text-purple-400"
                        : "border-gray-300 hover:border-purple-500 hover:text-purple-600"
                    }`}
                >
                    Schedule a Call
                </motion.button>
            </motion.div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess} isDarkMode={isDarkMode} />
    </section>
  );
};

export default ContactSession;
