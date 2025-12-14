import { BookOpen, Briefcase, DollarSign, Heart } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Financial Literacy",
      description:
        "Comprehensive training on managing finances, budgeting, and understanding financial concepts.",
    },
    {
      icon: Briefcase,
      title: "Business Planning",
      description:
        "Hands-on workshops to develop sustainable business plans and entrepreneurial skills.",
    },
    {
      icon: DollarSign,
      title: "Microfinance Support",
      description:
        "Access to funding opportunities and microloans to kickstart their business ventures.",
    },
    {
      icon: Heart,
      title: "Community Building",
      description:
        "Creating a supportive network of women entrepreneurs who uplift each other.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About the Project
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            The Third Phase of <span className="text-primary">EmpowerAll</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Project SheRise focuses on Entrepreneurship Support for Women in
            Rural Areas, empowering them with skills, knowledge, and resources
            to build sustainable livelihoods.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <pillar.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Highlight */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a3d2c] via-[#0b5c3a] to-[#0e7c4a] p-[1px] shadow-lg">
          <div className="relative rounded-[2.75rem] bg-[rgba(11,63,48,0.92)] p-8 md:p-12 text-emerald-50">
            <div className="absolute inset-y-0 right-0 w-1/2 translate-x-16 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                  Title Partner
                </span>
                <h3 className="font-display text-3xl md:text-4xl mt-3 text-emerald-50">
                  Emerald
                </h3>
                <p className="mt-4 text-base text-emerald-100/80">
                  Proudly partnered with Emerald to bring transformative
                  opportunities to women entrepreneurs.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-emerald-200/30 bg-emerald-100/10 px-7 py-5 text-center text-emerald-50">
                  <div className="font-display text-3xl tracking-wide">
                    March
                  </div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-emerald-100/70">
                    2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
