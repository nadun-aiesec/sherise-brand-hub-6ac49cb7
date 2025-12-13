import { Users } from "lucide-react";

const Team = () => {
  const teamStructure = [
    {
      role: "OCP",
      title: "Organizing Committee President",
      count: 1,
      description: "Leads the entire OC to a financially and logistically successful event",
      color: "bg-gradient-hero text-primary-foreground",
    },
    {
      role: "OCVP Finance",
      title: "Finance Vice President",
      count: 1,
      description: "Manages event finances, budgets, and cash flow",
      color: "bg-secondary text-secondary-foreground",
    },
    {
      role: "OCVP Logistics",
      title: "Logistics Vice President",
      count: 3,
      description: "Handles venue, event management, and technical operations",
      color: "bg-accent text-accent-foreground",
    },
    {
      role: "OCVP PD",
      title: "Partnership Development VP",
      count: 4,
      description: "Develops partnerships with stakeholders and NGOs for support",
      color: "bg-primary text-primary-foreground",
    },
    {
      role: "OCVP Delivery",
      title: "Delivery Vice President",
      count: 1,
      description: "Ensures quality and experience delivery for all participants",
      color: "bg-sherise-orange text-foreground",
    },
    {
      role: "OCVP Marketing",
      title: "Marketing Vice President",
      count: 2,
      description: "Manages marketing campaigns and promotional content",
      color: "bg-muted text-foreground",
    },
    {
      role: "OCVP PR",
      title: "Public Relations VP",
      count: 2,
      description: "Handles external communications and media relations",
      color: "bg-border text-foreground",
    },
  ];

  const totalMembers = teamStructure.reduce((sum, item) => sum + item.count, 0);

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Organizing Committee <span className="text-gradient">Structure</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A dedicated team of {totalMembers} passionate individuals working together to make Project SheRise a success.
          </p>
        </div>

        {/* Team Structure Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamStructure.map((member, index) => (
            <div
              key={member.role}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-elevated transition-all duration-300"
            >
              <div className={`${member.color} p-6`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold opacity-90">{member.role}</span>
                  <div className="flex items-center gap-1.5 bg-background/20 px-3 py-1 rounded-full">
                    <Users className="h-4 w-4" />
                    <span className="font-bold">{member.count}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mt-3">{member.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-muted/50 rounded-3xl">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Be part of this transformative initiative and help empower women in rural areas.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-elevated hover:opacity-90 transition-all"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
