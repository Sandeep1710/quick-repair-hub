import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Downtown District",
  "North Valley",
  "East Side",
  "West End",
  "South Bay",
  "Central Heights",
  "Riverside",
  "Lakefront",
  "Industrial Zone",
  "Suburban Areas",
  "Tech Park",
  "University District",
];

export function ServiceAreaSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Map Container */}
              <div className="absolute inset-0 bg-muted rounded-2xl overflow-hidden elegant-border">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground" />
                  </svg>
                </div>

                {/* City Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-8">
                    {/* Central Hub */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center elegant-shadow-lg"
                    >
                      <MapPin className="w-8 h-8 text-primary-foreground" />
                    </motion.div>

                    {/* Service Points */}
                    {[
                      { top: "20%", left: "30%" },
                      { top: "25%", left: "70%" },
                      { top: "60%", left: "20%" },
                      { top: "70%", left: "75%" },
                      { top: "80%", left: "45%" },
                      { top: "35%", left: "15%" },
                    ].map((pos, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{ top: pos.top, left: pos.left }}
                        className="absolute w-3 h-3 bg-accent rounded-full elegant-shadow"
                      />
                    ))}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      {[
                        "M 30% 20% L 50% 50%",
                        "M 70% 25% L 50% 50%",
                        "M 20% 60% L 50% 50%",
                        "M 75% 70% L 50% 50%",
                        "M 45% 80% L 50% 50%",
                        "M 15% 35% L 50% 50%",
                      ].map((d, i) => (
                        <motion.path
                          key={i}
                          d={d}
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-full px-6 py-3 elegant-shadow elegant-border flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground font-medium">Main Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-sm text-muted-foreground font-medium">Service Points</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest">
              Service Coverage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-5 tracking-tight">
              We Cover Your
              <br />
              Entire City
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our network of expert technicians ensures quick response times across all major 
              areas. No matter where you are, we're just a call away.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mt-8 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Don't see your area? Contact us – we may still be able to help!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
