import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../services/api";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
        setError("Unable to load projects.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-zinc-950 px-6 py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono mb-3">
            MY WORK
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Featured{" "}
                <span className="text-cyan-400">
                  Projects
                </span>
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl text-lg leading-relaxed">
                A selection of projects where I combine software,
                AI and emerging technologies to solve real-world problems.
              </p>
            </div>

            {!loading && !error && projects.length > 0 && (
              <div className="text-gray-500 font-mono text-sm">
                {projects.length.toString().padStart(2, "0")} PROJECT
                {projects.length !== 1 ? "S" : ""}
              </div>
            )}

          </div>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="h-96 rounded-2xl border border-white/10 bg-white/5 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-14 p-6 rounded-2xl border border-red-400/20 bg-red-400/5 text-red-400">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && projects.length === 0 && (
          <div className="mt-14 p-10 rounded-2xl border border-white/10 bg-white/5 text-center">
            <p className="text-gray-400">
              No projects available yet.
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;