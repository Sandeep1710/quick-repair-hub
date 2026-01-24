import { motion } from "framer-motion";
import { Award, Users, Wrench, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We never compromise on workmanship",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified and trained professionals",
  },
  {
    icon: Wrench,
    title: "Right Tools",
    description: "Modern equipment for every job",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl p-8 md:p-10 elegant-shadow-lg elegant-border">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-5 rounded-xl bg-muted/50"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-card rounded-xl p-5 elegant-shadow-lg elegant-border"
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6 tracking-tight">
              Your Trusted Partner
              <br />
              for Home Repairs
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                For over 15 years, we've been the go-to choice for homeowners seeking 
                reliable, professional appliance repair services. What started as a small 
                family business has grown into a trusted name in the industry.
              </p>
              <p>
                Our team of certified technicians undergoes rigorous training to stay 
                updated with the latest appliance technologies. We believe in doing things 
                right the first time, which is why we back all our repairs with a 
                comprehensive warranty.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <h4 className="font-display font-semibold text-foreground mb-2">Our Mission</h4>
              <p className="text-muted-foreground italic leading-relaxed">
                "To provide exceptional appliance repair services that exceed customer 
                expectations, delivered with honesty, integrity, and a commitment to 
                quality that stands the test of time."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
