import { useState } from "react";
import { Users, Briefcase, Target, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RoleDetails {
  role: string;
  title: string;
  count: number;
  description: string;
  jobDescription: string[];
  skills: string[];
  kpis: string[];
}

const Team = () => {
  const [selectedRole, setSelectedRole] = useState<RoleDetails | null>(null);

  const teamStructure: RoleDetails[] = [
    {
      role: "OCP",
      title: "Organizing Committee President",
      count: 1,
      description:
        "Leads the entire OC to a financially and logistically successful event",
      jobDescription: [
        "Lead the entire OC to a financially and logistically successful event",
        "Ensure the event is meeting its goals agreed upon between the OC and the EB of AIESEC in SLIIT",
        "Ensure correct communication and reporting with OC, EMs & the EB",
        "Set and ensure the respect of a specific timeline and an action plan",
        "Manage the OC and maintain good communication",
        "Setting out initial timelines for all the OCVPs",
        "Plan & track OC tasks and OC performance",
        "Setting out PD raising plan together with LCVP BD",
        "Plan initial marketing and PR campaigns together with LCVP PR",
        "Always keep in touch with the EMs & LCVP Finance regarding the status of the ER raised",
        "Make sure that the marketing materials are ready & the calendar is booked the day before it is supposed to be posted",
      ],
      skills: [
        "Strong Communication",
        "Time management",
        "Solution oriented",
        "Experience in event management and coordination",
        "Team and time management skills",
        "Creativity and Innovative thinking",
        "Attentive to details",
      ],
      kpis: [
        "Attentive to details",
        "The impact of the event",
        "Delegate engagement",
      ],
    },
    {
      role: "OCVP Finance",
      title: "Organizing Committee Vice President Finance",
      count: 1,
      description: "Manages event finances, budgets, and cash flow",
      jobDescription: [
        "Manage the finance of the event",
        "Cash Flow management of the event",
        "Preparing necessary budgets and reports",
        "Responsible for budget execution",
        "Preparing final finance report",
        "Understanding and addressing synergy points with other positions as required",
        "Performing additional duties related to the project set out by the OCP",
      ],
      skills: [
        "Skill of using tools and trackers",
        "Time management skills",
        "Communication skills",
        "People Management skills",
      ],
      kpis: [
        "% of budget achievement",
        "% of budget variance",
        "0 Cash flow issues",
        "Profitability of the event",
      ],
    },
    {
      role: "OCVP Logistics",
      title: "Organizing Committee Vice President Logistics",
      count: 3,
      description: "Handles venue, event management, and technical operations",
      jobDescription: [
        "Responsible for finding a suitable venue and managing venue management",
        "Responsible for All Logistic Requirements Before and during the Project",
        "Responsible for In-Project Event Management",
        "Responsible for taking an innovative approach in logistics supply and management",
        "Responsible for printing and supplying merchandise",
        "Responsible for the technical operations of the conference",
        "Understanding and addressing synergy points with other positions as required",
        "Attending all virtual and physical meetings and presenting updates on logistics and events",
        "Any required assistance on ER-related work",
      ],
      skills: [
        "Experience in event organizing and promotion",
        "Inventory management skill",
        "Communication skills",
        "Negotiation skills",
        "Proper partnership delivery skills",
      ],
      kpis: [
        "Feedback on in-Project events",
        "A venue for an affordable price",
        "Zero complaints on logistic management",
        "Feedback from delegates",
      ],
    },
    {
      role: "OCVP PD",
      title: "Organizing Committee Vise Presidetnt Partnership Development",
      count: 4,
      description:
        "Develops partnerships with stakeholders and NGOs for support",
      jobDescription: [
        "Develop partnerships with Stakeholders & NGOs",
        "Develop partnerships with organizations in order to get monetary or in-kind support",
        "Current ER accounts management",
        "Creating and implementing ER strategies",
        "Identify potential Companies/Organizations and get them on board",
        "Responsible for the value deliveries of the partnerships",
        "Responsible for the content published on media",
        "Understanding and addressing synergy points with other positions as required",
        "Performing additional duties related to the Project set out by the OCP",
        "Partnership Account Management",
      ],
      skills: [
        "Stakeholder management and negotiation",
        "Sales and Strong Communication",
      ],
      kpis: [
        "# of partners",
        "Overall successful event",
        "% of PD raise out of cost",
        "# of company meetings arranged",
      ],
    },
    {
      role: "OCVP DEL",
      title: "Organizing Committee Vice President Delegates",
      count: 1,
      description:
        "Ensures quality and experience delivery for all participants",
      jobDescription: [
        "Delegate Communication",
        "Delegate Interaction, communication & coordination",
        "Delegates Attraction Sessions Creating",
        "Pre, During, post event Delegate Engagement",
        "In-kind Sponsors Raising and Management",
        "Handling related personnel and Invitees",
        "Understanding and Addressing synergy points with other positions as Required",
        "Performing additional duties related to the Project set out by the OCP",
        "Research to improve the delegate experience and engagement",
      ],
      skills: [
        "Skill of using tools and trackers",
        "Time management skills",
        "Communication skills",
        "People management skills",
      ],
      kpis: [
        "# of Participants (Target: 150+)",
        "Participant retention rate throughout the training",
        "Positive feedback from the community",
      ],
    },
    {
      role: "OCVP Marketing",
      title: "Organizing Committee Vice President Marketing",
      count: 2,
      description: "Manages marketing campaigns and promotional content",
      jobDescription: [
        "Planning Event Marketing Timeline",
        "Creating and implementing marketing strategies",
        "Increasing virtual outreach through various platforms",
        "AIESEC brand alignment and coordination",
        "Managing digital marketing materials & tools",
        "Collect content for Showcasing",
        "Content creation and comprehensive writing skills",
        "Follow up with the Agenda",
        "Manage the event page",
        "Understanding and Addressing synergy points with other positions as Required",
        "Performing additional duties related to the Project set out by the OCP",
      ],
      skills: [
        "Platform management skills",
        "Campaign management skills",
        "Events creating skills",
        "Critical thinking",
        "Planning skills",
        "Time management skills",
      ],
      kpis: [
        "0 issues in screen controlling during the event",
        "Time management for deadlines",
        "Good delegates involvement in the campaign",
        "Impact showcased through Digital Platforms",
        "0 Branding & Content complaints",
        "# Delegates",
      ],
    },
    {
      role: "OCVP PR",
      title: "Organizing Committee Vice President Public Relations",
      count: 2,
      description: "Handles external communications and media relations",
      jobDescription: [
        "Contact media houses (newspapers, TV) to cover the social impact of the project and the partnership with Emerald",
        "Coordinate photography and videography to create the mandatory 'Aftermovie' and Photo Album",
        "Write the official Blog Article for the project detailing the impact on the rural community",
        "Manage the reputation of the project and ensure external stakeholders understand the 'SheRise' mission",
        "Responsible for identifying, contacting, and securing guest speakers and trainers for the entrepreneurship and financial literacy sessions",
      ],
      skills: [
        "Excellent written and verbal communication",
        "Networking and Media Relations",
        "Storytelling and Copywriting",
      ],
      kpis: [
        "# of Speakers/Trainers secured",
        "# of Media partners raised (Newspapers/TV/Radio)",
        "# of External media features/mentions secured",
      ],
    },
  ];

  const totalMembers = teamStructure.reduce((sum, item) => sum + item.count, 0);
  const ocpRole = teamStructure.find((member) => member.role === "OCP") ?? null;
  const otherRoles = teamStructure.filter((member) => member.role !== "OCP");

  const MemberCard = ({
    member,
    className,
  }: {
    member: RoleDetails;
    className?: string;
  }) => (
    <div
      onClick={() => setSelectedRole(member)}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 cursor-pointer hover:border-primary hover:shadow-elevated",
        className
      )}
    >
      <div className="bg-secondary p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">
            {member.role}
          </span>
          <div className="flex items-center gap-1.5 bg-background px-3 py-1 rounded-full">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-foreground">{member.count}</span>
          </div>
        </div>
        <h3 className="font-display text-xl mt-3">{member.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground text-sm">{member.description}</p>
        <p className="text-xs text-primary mt-3 font-medium group-hover:underline">
          Click to view details →
        </p>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Team
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            Organizing Committee <span className="text-primary">Structure</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground">
            A dedicated team of {totalMembers} passionate individuals working together to make Project SheRise a success.
          </p> */}
        </div>

        {/* OCP Highlight */}
        {ocpRole && (
          <div className="mb-10 flex justify-center">
            <div className="w-full max-w-2xl">
              <MemberCard
                member={ocpRole}
                className="rounded-2xl border-primary/30 bg-card/95 shadow-lg hover:-translate-y-1"
              />
            </div>
          </div>
        )}

        {/* Team Structure Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherRoles.map((member) => (
            <MemberCard key={member.role} member={member} />
          ))}
        </div>

        {/* Role Details Dialog */}
        <Dialog
          open={!!selectedRole}
          onOpenChange={() => setSelectedRole(null)}
        >
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            {selectedRole && (
              <>
                <DialogHeader>
                  <div className="bg-secondary -mx-6 -mt-6 p-6 mb-4 rounded-t-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary">
                        {selectedRole.role}
                      </span>
                      <div className="flex items-center gap-1.5 bg-background px-3 py-1 rounded-full">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">
                          {selectedRole.count} position
                          {selectedRole.count > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                    <DialogTitle className="font-display text-2xl">
                      {selectedRole.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {selectedRole.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Job Description */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h4 className="font-display text-lg">Job Description</h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedRole.jobDescription.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Knowledge */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h4 className="font-display text-lg">
                        Skills & Knowledge
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRole.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* KPIs */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-5 w-5 text-primary" />
                      <h4 className="font-display text-lg">
                        KPIs / Measures of Success
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {selectedRole.kpis.map((kpi, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">✓</span>
                          {kpi}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Join CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6 rounded-3xl border border-border bg-secondary/80 px-10 py-12 shadow-soft backdrop-blur">
            <div className="flex flex-col items-center gap-2">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                Want to Join Our Team?
              </h3>
              <p className="max-w-xl text-sm md:text-base text-muted-foreground">
                Step into leadership, drive impact, and help shape Project
                SheRise for March 2026.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 px-8 text-sm md:text-base font-semibold text-primary-foreground shadow-lg ring-1 ring-primary/20 transition-transform hover:-translate-y-0.5 hover:ring-2 hover:ring-primary/30"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSetyORTMM1IdU5Jvs1ou2PZ2exg7fPdWy5zWDi9VK-0vw8CWg/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
              >
                Join the OC
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
