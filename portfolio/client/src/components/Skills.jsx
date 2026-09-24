import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Customer Success",
      skills: [
        "Customer Success Management",
        "Customer Relationship Management",
        "Account Management",
        "Client Engagement",
        "Stakeholder Management",
      ],
    },
    {
      title: "Supply Chain & Logistics",
      skills: [
        "Supply Chain Management",
        "Logistics",
        "Transportation Management",
        "Supply Chain Execution",
        "Enterprise Solutions",
      ],
    },
    {
      title: "Leadership & Business",
      skills: [
        "Team Leadership",
        "Cross-functional Collaboration",
        "Business Strategy",
        "Operations Management",
        "Problem Solving",
      ],
    },
    {
      title: "Technology & SaaS",
      skills: [
        "SaaS",
        "Enterprise Technology",
        "Product Adoption",
        "Process Improvement",
        "Customer Experience",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-mono mb-3">
          PROFESSIONAL SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Skills &{" "}
          <span className="text-cyan-400">
            Expertise
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl text-lg leading-relaxed">
          A professional skill set focused on customer success, enterprise
          solutions, supply chain and logistics, leadership, and business
          collaboration.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="border border-white/10 rounded-2xl p-7 bg-white/5"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-6">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
