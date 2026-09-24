import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Customer Success Leadership",
      company: "Pando",
      period: "Current",
      description:
        "Working with enterprise customers and teams in the supply chain and logistics technology space, with a focus on customer success and business outcomes.",
    },
    {
      role: "Enterprise Solutions & Customer Success",
      company: "Pando",
      period: "Previous Roles",
      description:
        "Experience across customer-facing enterprise solutions, collaboration and operational problem solving in supply chain and logistics technology.",
    },
  ];

  return (
    <section id="experience" className="bg-zinc-950 px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-mono mb-3">
          EXPERIENCE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          My{" "}
          <span className="text-cyan-400">
            Journey
          </span>
        </h2>

        <div className="mt-14 space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative border-l border-cyan-400/30 pl-8"
            >
              <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30" />

              <div className="p-7 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-start justify-between gap-5 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3">
                      <Briefcase
                        size={20}
                        className="text-cyan-400"
                      />

                      <h3 className="text-2xl font-bold">
                        {experience.role}
                      </h3>
                    </div>

                    <p className="text-cyan-400 mt-2">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-500 font-mono">
                    {experience.period}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mt-5">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;