import { motion } from "framer-motion";
import { Phone, Calendar, Shield, Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Clock, text: "Same Day Service" },
  { icon: Shield, text: "No Hidden Fees" },
  { icon: Award, text: "Expert Technicians" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 border border-accent/20"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available 24/7 for Emergencies
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] tracking-tightest mb-6">
              Expert Home
              <br />
              Appliance{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Repair</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-0" />
              </span>
              {" "}Services
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Fast, reliable, and affordable repair services for all your home appliances. 
              Our certified technicians deliver excellence at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" asChild className="text-base px-8 h-14 rounded-full font-medium group">
                <a href="#booking" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book a Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-14 rounded-full font-medium border-2">
                <a href="tel:+919920971479" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card rounded-2xl p-10 elegant-shadow-lg elegant-border">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-12 h-12 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                    Your Appliance Expert
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional repairs delivered with precision and care
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-accent/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-primary/20 rounded-full" />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 bg-card rounded-xl p-5 elegant-shadow-lg elegant-border"
              >
                <div className="text-3xl font-display font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Customers</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-6 bottom-1/4 bg-card rounded-xl p-5 elegant-shadow-lg elegant-border"
              >
                <div className="flex items-center gap-1 text-3xl font-display font-bold text-accent">
                  4.9
                  <svg className="w-6 h-6 fill-accent" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="text-sm text-muted-foreground font-medium">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
