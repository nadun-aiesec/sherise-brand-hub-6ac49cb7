import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

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
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in partnering, volunteering, or learning more about Project SheRise? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">sherise@aiesec.lk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">SLIIT, Malabe, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Follow Us</h4>
                  <p className="text-muted-foreground">@aiesecinsliit</p>
                </div>
              </div>
            </div>

            {/* AIESEC Branding */}
            <div className="mt-12 p-6 bg-secondary rounded-2xl text-secondary-foreground">
              <p className="text-sm opacity-80 mb-2">An initiative by</p>
              <h4 className="font-display text-2xl font-bold">AIESEC in SLIIT</h4>
              <p className="text-sm opacity-80 mt-2">
                Part of the global youth-led organization developing leadership potential.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl border border-border shadow-soft">
            <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-2">
                  I'm interested in...
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option>Joining the OC Team</option>
                  <option>Becoming a Partner</option>
                  <option>Volunteering</option>
                  <option>Learning More</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
