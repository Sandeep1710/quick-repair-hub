import { motion } from "framer-motion";
import { Phone, Calendar, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Clock, text: "Same Day Service" },
  { icon: Shield, text: "No Hidden Fees" },
  { icon: Award, text: "Expert Technicians" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Available 24/7 for Emergencies
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Expert Home Appliance{" "}
              <span className="text-gradient">Repair Services</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Fast, reliable, and affordable repair services for all your home appliances. 
              Our certified technicians are just a call away!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" asChild className="text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <a href="#booking">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-xl">
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-1">
                <div className="bg-card rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-20 h-20 text-primary"
                        fill="currentColor"
                      >
                        <path d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                        <path d="M65 45h-10v-10c0-2.8-2.2-5-5-5s-5 2.2-5 5v10h-10c-2.8 0-5 2.2-5 5s2.2 5 5 5h10v10c0 2.8 2.2 5 5 5s5-2.2 5-5v-10h10c2.8 0 5-2.2 5-5s-2.2-5-5-5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      Your Appliance Hero
                    </h3>
                    <p className="text-muted-foreground">
                      Professional repairs at your doorstep
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -left-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="text-3xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
