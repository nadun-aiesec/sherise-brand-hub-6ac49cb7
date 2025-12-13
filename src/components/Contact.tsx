import { Mail, Phone, User, Briefcase } from "lucide-react";

interface ContactPerson {
  name: string;
  position: string;
  phone: string;
  email: string;
}

const contactPersons: ContactPerson[] = [
  {
    name: "Contact Person 1",
    position: "Position Title",
    phone: "+94 XX XXX XXXX",
    email: "email@aiesec.lk",
  },
  {
    name: "Contact Person 2",
    position: "Position Title",
    phone: "+94 XX XXX XXXX",
    email: "email@aiesec.lk",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out to our team for any inquiries about Project SheRise.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactPersons.map((person, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <h3 className="font-display text-xl font-bold">{person.name}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Position</p>
                    <p className="font-semibold">{person.position}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href={`tel:${person.phone}`} className="font-semibold hover:text-primary transition-colors">
                      {person.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${person.email}`} className="font-semibold hover:text-primary transition-colors">
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
