import { motion } from "framer-motion";
import { Code2, Globe, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    desc: "Desenvolvimento completo do backend ao frontend com tecnologias modernas.",
  },
  {
    icon: Globe,
    title: "Web Moderno",
    desc: "Aplicações responsivas, performáticas e com ótima experiência de usuário.",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    desc: "Código limpo, escalável e seguindo as melhores práticas do mercado.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            // Sobre mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mt-3">
            Quem sou eu<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16"
        >
          Sou um Desenvolvedor Full Stack baseado em Porto Alegre, RS. Trabalho na{" "}
          <span className="text-foreground font-medium">Follow55</span> construindo
          soluções web robustas. Formado pela{" "}
          <span className="text-foreground font-medium">UFSM</span>, tenho experiência com
          diversas tecnologias e frameworks, sempre buscando criar produtos que fazem a diferença.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_hsl(165_80%_48%/0.5)] transition-all" />
              <h3 className="font-mono font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
