import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const initials = project.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  return (
    <article className="group h-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 hover:border-cyan-400/40 transition-all duration-500">

      {/* Visual */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent">

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-cyan-400/80">
              {initials}
            </span>
          </div>
        )}

        {project.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/20 text-cyan-400 text-xs font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 mt-7">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}

        </div>

      </div>
    </article>
  );
};

export default ProjectCard;