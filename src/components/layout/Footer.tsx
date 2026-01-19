import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Wrench
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
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">
                Quick<span className="text-primary">Repair</span>
              </span>
            </a>
            <p className="text-background/70 mb-6">
              Your trusted partner for all home appliance repair needs. 
              Professional service, honest pricing, guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
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
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-primary transition-colors"
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
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span>+91 9920971479</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@quickrepair.com"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span>info@quickrepair.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>123 Repair Street, Service City, SC 12345</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>Mon - Sat: 8AM - 8PM<br />Sun: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} QuickRepair. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
