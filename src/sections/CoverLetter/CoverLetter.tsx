import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiMail, FiFileText, FiDownload } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

export default function CoverLetter() {
  const { coverLetter, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const fullLetterText = `${coverLetter.salutation}\n\n${coverLetter.paragraphs.join(
    "\n\n"
  )}\n\n${coverLetter.signOff}\n${coverLetter.name}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullLetterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="cover-letter"
      className="py-24 md:py-32 relative bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-[1px]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Cover Letter"
          subtitle="A personalized introduction highlighting my passion, skills, and background"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative p-8 md:p-12 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xl backdrop-blur-md"
        >
          {/* Top Decorative Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100 dark:border-slate-700/60">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25">
                <FiFileText size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Application Letter
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Candidate: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{personal.name}</span> | Full-Stack .NET Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href="/Resumecv/PRAVEEN-COVER-LETTER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="PRAVEEN-COVER-LETTER.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50 transition-all text-sm font-medium"
              >
                <FiDownload size={16} />
                Download PDF
              </motion.a>

              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/70 hover:bg-slate-200 dark:hover:bg-slate-600/50 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/50 transition-all text-sm font-medium"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-green-500" size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <FiCopy size={16} />
                    Copy Letter
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Letter Body */}
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-base md:text-lg">
            <p className="font-semibold text-slate-900 dark:text-white text-lg">
              {coverLetter.salutation}
            </p>

            {coverLetter.paragraphs.map((para, index) => (
              <p key={index} className="leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-6 border-t border-slate-100 dark:border-slate-700/60">
              <p className="font-medium text-slate-800 dark:text-slate-200">
                {coverLetter.signOff}
              </p>
              <p className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mt-1">
                {coverLetter.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                <FiMail size={14} className="text-indigo-500" />
                {personal.email} • {personal.phone}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
