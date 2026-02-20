import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "AppEstat",
    desc: "Aplicativo de estatística sobre análise exploratória de dados.",
    tech: ["JavaScript"],
    github: "https://github.com/ricardorohrs/AppEstat",
  },
  {
    name: "Happy",
    desc: "Plataforma desenvolvida durante a Next Level Week da Rocketseat.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/ricardorohrs/Happy",
  },
  {
    name: "ToDoList",
    desc: "Aplicação de tarefas construída com Laravel e Vue.js.",
    tech: ["PHP", "Laravel", "Vue.js"],
    github: "https://github.com/ricardorohrs/ToDoList",
  },
  {
    name: "RGB-Pattern",
    desc: "Aplicativo gamificado para auxiliar no aprendizado de Padrões de Projeto.",
    tech: ["TypeScript"],
    github: "https://github.com/ricardorohrs/RGB-Pattern",
  },
  {
    name: "Flappy Game",
    desc: "Estudo e desenvolvimento de um jogo utilizando a engine Godot.",
    tech: ["GDScript", "Godot"],
    github: "https://github.com/ricardorohrs/Flappy-Game",
  },
  {
    name: "Cine55",
    desc: "Projeto colaborativo para sistema de cinema.",
    tech: ["Web"],
    github: "https://github.com/ricardorohrs/cine55",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            // Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mt-3">
            Trabalhos em destaque<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
