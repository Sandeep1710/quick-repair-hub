import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Book Service", href: "#booking" },
];

const services = [
  "Washing Machine Repair",
  "Refrigerator Service",
  "AC Repair & Installation",
  "Microwave Repair",
  "LED TV Repair",
  "Water Purifier Service",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">QR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-semibold tracking-tight">
                  QuickRepair
                </span>
                <span className="text-xs text-primary-foreground/60 tracking-wide uppercase">
                  Premium Service
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for all home appliance repair needs. 
              Professional service, honest pricing, guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+919920971479"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="pt-1">+91 9920971479</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@quickrepair.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="pt-1">info@quickrepair.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="pt-1">123 Repair Street, Service City, SC 12345</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <span className="pt-1">Mon - Sat: 8AM - 8PM<br />Sun: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} QuickRepair. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
