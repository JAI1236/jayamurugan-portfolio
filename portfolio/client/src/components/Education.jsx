import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-black px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-mono mb-3">
          EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Academic{" "}
          <span className="text-cyan-400">
            Background
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="flex items-start gap-5">

            <div className="p-4 rounded-xl bg-cyan-400/10">
              <GraduationCap
                size={32}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                B.Tech — Information Technology
              </h3>

              <p className="text-cyan-400 mt-2">
                Sathyabama Institute of Science and Technology
              </p>

              <p className="text-gray-500 mt-2">
                2024 — 2028
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed max-w-3xl">
                Pursuing a Bachelor of Technology in Information
                Technology with an interest in artificial intelligence,
                machine learning, software development and emerging
                technologies.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;