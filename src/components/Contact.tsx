import { Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import nadun from "../assets/nadun.jpg";
import shenise from "../assets/shenise.png";

interface ContactPerson {
  name: string;
  position: string;
  phone: string;
  email: string;
  imageUrl: string;
}

const contactPersons: ContactPerson[] = [
  {
    name: "Nadun Weerakkody",
    position: "LCVPe BD",
    phone: "+94 71 743 9912",
    email: "nadunweerakkody@aiesec.lk",
    imageUrl: nadun,
  },
  {
    name: "Shenise Pronk",
    position: "LCVPe PR",
    phone: "+94 76 468 4101",
    email: "shenisepronk@aiesec.net",
    imageUrl: shenise,
  },
];

const Contact = () => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Get in Touch
          </span> */}
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            Contact <span className="text-primary">EMs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out to our team for any inquiries about Project SheRise.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {contactPersons.map((person, index) => (
            <div
              key={index}
              className="bg-card p-10 rounded-2xl border border-border shadow-lg hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20 border-2 border-primary/20 shadow-md">
                    <AvatarImage
                      src={person.imageUrl}
                      alt={`${person.name} portrait`}
                    />
                    <AvatarFallback className="text-xl font-semibold text-primary bg-primary/10">
                      {getInitials(person.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">
                      {person.name}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {person.position}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${person.phone}`}
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      {person.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
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
