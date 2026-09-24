import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Digital Marketing",
      issuer: "FDP",
    },
    {
      title: "Python for Data Science",
      issuer: "FDP",
    },
    {
      title: "Machine Learning with Python",
      issuer: "FDP",
    },
    {
      title: "C Programming for Beginners",
      issuer: "FDP",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-zinc-950 px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 font-mono mb-3">
          CERTIFICATIONS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Learning &{" "}
          <span className="text-cyan-400">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition"
            >
              <Award
                size={30}
                className="text-cyan-400"
              />

              <h3 className="text-xl font-semibold mt-5">
                {certificate.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {certificate.issuer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;