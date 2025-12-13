import { BookOpen, Briefcase, DollarSign, Heart } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Financial Literacy",
      description: "Comprehensive training on managing finances, budgeting, and understanding financial concepts.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Briefcase,
      title: "Business Planning",
      description: "Hands-on workshops to develop sustainable business plans and entrepreneurial skills.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: DollarSign,
      title: "Microfinance Support",
      description: "Access to funding opportunities and microloans to kickstart their business ventures.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "Creating a supportive network of women entrepreneurs who uplift each other.",
      color: "bg-sherise-orange/10 text-sherise-orange",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About the Project
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Third Phase of <span className="text-gradient">EmpowerAll</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Project SheRise focuses on Entrepreneurship Support for Women in Rural Areas, 
            empowering them with skills, knowledge, and resources to build sustainable livelihoods.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Highlight */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-sm font-medium opacity-80">Title Partner</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-2">Emerald</h3>
              <p className="text-primary-foreground/80 mt-3 max-w-md">
                Proudly partnered with Emerald to bring transformative opportunities to women entrepreneurs.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-6 py-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <div className="font-display text-3xl font-bold">March</div>
                <div className="text-sm opacity-80">2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
