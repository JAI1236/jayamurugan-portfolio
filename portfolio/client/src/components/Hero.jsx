
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black px-6 pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm"
          >
            <Sparkles size={16} />
            <span>Building the future with technology</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Jayamurugan R
            </span>
            <span>.</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300"
          >
            Customer Success & Supply Chain Professional
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            I work with customers, teams and enterprise solutions to drive
            successful outcomes across customer success, supply chain,
            logistics and technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              View My Projects

              <ArrowDown
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/15 text-gray-200 hover:border-cyan-400/40 hover:text-cyan-400 transition"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-x-8 gap-y-3 mt-14 text-sm text-gray-500"
          >
            <span>📍 India</span>
            <span>💼 Customer Success & Enterprise Solutions</span>
            <span>🚀 Open to opportunities</span>
          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}

export default Hero;


