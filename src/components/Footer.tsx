const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">&lt;</span>RR
          <span className="text-primary">/&gt;</span>{" "}
          © {new Date().getFullYear()}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          Feito com <span className="text-primary">♥</span> em Porto Alegre
        </span>
      </div>
    </footer>
  );
};

export default Footer;
