import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300",
        isScrolled
          ? "border-border/60 bg-background/95 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-0"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6 md:py-5">
        {/* Logo */}
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display text-xl text-foreground transition-colors group-hover:text-primary md:text-2xl">
            She<span className="text-primary">Rise</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-2 py-1 shadow-sm backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 px-6 text-sm font-semibold text-primary-foreground shadow-lg ring-1 ring-primary/20 transition-transform hover:-translate-y-0.5 hover:ring-2 hover:ring-primary/30"
          >
            Join the OC
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-border/60 p-2 text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-4 mb-4 rounded-3xl border border-border/70 bg-background/95 p-6 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-sm font-semibold text-primary-foreground shadow-md ring-1 ring-primary/20">
              Join the OC
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
