import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">QR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-semibold text-foreground tracking-tight">
                QuickRepair
              </span>
              <span className="text-xs text-muted-foreground tracking-wide uppercase">
                Premium Service
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919920971479"
              className="flex items-center gap-2 text-sm font-medium text-foreground group"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                +91 9920971479
              </span>
            </a>
            <Button asChild className="rounded-full px-6 font-medium">
              <a href="#booking">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-accent hover:bg-muted/50 transition-colors py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-border flex flex-col gap-4">
                <a
                  href="tel:+919920971479"
                  className="flex items-center gap-3 text-base font-medium text-foreground px-4"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  +91 9920971479
                </a>
                <Button asChild className="rounded-full mx-4 font-medium">
                  <a href="#booking">Book Now</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
