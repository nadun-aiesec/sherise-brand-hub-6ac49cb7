import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Empowered women celebrating success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6 animate-slide-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              AIESEC in SLIIT • EmpowerAll Initiative
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up animation-delay-100">
            Empowering Women,{" "}
            <span className="text-gradient">Transforming Lives</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up animation-delay-200">
            Project SheRise supports 150+ women in rural areas through entrepreneurship training, 
            business planning workshops, and microfinance opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-300">
            <Button variant="hero" size="lg">
              Get Involved
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-slide-up animation-delay-400">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">150+</span>
              </div>
              <span className="text-sm text-muted-foreground">Women Empowered</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Target className="h-5 w-5 text-accent" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">14</span>
              </div>
              <span className="text-sm text-muted-foreground">Team Members</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="h-5 w-5 text-sherise-orange" />
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">2026</span>
              </div>
              <span className="text-sm text-muted-foreground">Launch Year</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
