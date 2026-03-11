import Skills from "../components/Skills"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center text-white overflow-hidden px-4 md:px-8">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
            animate={{
              x: [0, 120, -120, 0],
              y: [0, -80, 80, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
            animate={{
              x: [0, -150, 150, 0],
              y: [0, 100, -100, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </div>

        {/* Glass Container */}
        <div className="max-w-3xl mx-auto p-6 md:p-10 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-center md:text-left"
          >
            Hi, I'm <span className="text-blue-500">Victor</span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base md:text-lg text-gray-300 mb-8 text-center md:text-left"
          >
            I build modern, responsive web applications using React and Tailwind CSS.
            I focus on clean UI, performance, and creating impactful digital experiences.
            I am also adept at writing powerful technical pieces to help explain complex
            concepts and fictional stories to inspire and entertain readers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/projects">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                View Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="w-full sm:w-auto px-6 py-3 border border-gray-500 hover:border-white rounded-lg transition">
                Contact Me
              </button>
            </Link>
          </motion.div>

        </div>

      </section>

      <Skills />
    </>
  )
}
