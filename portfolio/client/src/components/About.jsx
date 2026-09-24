import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Customer Success",
      description:
        "Building strong customer relationships and helping enterprise teams achieve measurable outcomes.",
    },
    {
      icon: Brain,
      title: "Supply Chain & Logistics",
      description:
        "Working with enterprise supply chain and logistics solutions and understanding operational needs.",
    },
    {
      icon: Rocket,
      title: "Leadership & Collaboration",
      description:
        "Collaborating with customers and cross-functional teams to solve business challenges and improve delivery.",
    },
  ];

  return (
    <section id="about" className="bg-zinc-950 px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Turning Ideas Into{" "}
            <span className="text-cyan-400">
              Technology
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mt-6">
            I'm Jayamurugan R, a customer success professional based in Chennai,
            with experience in enterprise solutions, supply chain and logistics.
            I focus on customer relationships, business outcomes, collaboration
            and practical problem solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
              >
                <Icon className="text-cyan-400" size={32} />

                <h3 className="text-xl font-semibold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;