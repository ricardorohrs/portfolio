import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Laravel", "PHP", "REST APIs", "PostgreSQL", "MySQL"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Linux", "Godot"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            // Habilidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mt-3">
            Tech Stack<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <h3 className="font-mono font-semibold text-primary mb-5 text-sm tracking-wider uppercase">
                {`{${cat.title}}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm font-mono bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
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

export default SkillsSection;
