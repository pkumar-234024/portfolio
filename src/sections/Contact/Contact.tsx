import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiCheckCircle,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
  leetcode: <SiLeetcode size={20} />,
  twitter: <FiTwitter size={20} />,
  instagram: <FiInstagram size={20} />,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you'd send this data to a backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-[1px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-slate-800 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-slate-800 dark:text-white font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="text-slate-800 dark:text-white font-medium">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                Follow me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all shadow-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    {socialIconMap[link.icon] || link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm space-y-6"
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-400"
                >
                  <FiCheckCircle size={18} />
                  <span className="font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border ${
                    errors.name
                      ? "border-red-400 dark:border-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400"
                  } text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border ${
                    errors.email
                      ? "border-red-400 dark:border-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400"
                  } text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border ${
                    errors.message
                      ? "border-red-400 dark:border-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400"
                  } text-slate-800 dark:text-white placeholder-slate-400 outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
