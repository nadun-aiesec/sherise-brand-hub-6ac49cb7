import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-2xl">
            She<span className="text-primary">Rise</span>
          </span>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="opacity-70 hover:opacity-100 transition-opacity">Home</a>
            <a href="#about" className="opacity-70 hover:opacity-100 transition-opacity">About</a>
            <a href="#team" className="opacity-70 hover:opacity-100 transition-opacity">Team</a>
            <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a>
          </nav>

          {/* Credits */}
          <div className="text-sm opacity-70 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by AIESEC in SLIIT
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center text-sm opacity-50">
          <p>© 2026 Project SheRise. Part of the EmpowerAll Initiative.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
