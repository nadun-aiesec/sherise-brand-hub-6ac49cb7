import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg px-3 py-1.5">
              <span className="font-display text-xl font-bold text-primary-foreground">
                She<span className="font-sans">Rise</span>
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Credits */}
          <div className="text-sm text-secondary-foreground/70 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by AIESEC in SLIIT
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          <p>© 2026 Project SheRise. Part of the EmpowerAll Initiative.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
