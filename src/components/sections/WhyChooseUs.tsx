import { motion } from "framer-motion";
import { 
  UserCheck, 
  Clock, 
  Wallet, 
  Shield, 
  BadgeCheck,
  Headphones
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Qualified Experts",
    description: "All technicians are certified and extensively trained",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "We arrive within hours, not days",
  },
  {
    icon: Wallet,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise charges",
  },
  {
    icon: Shield,
    title: "Warranty on Parts",
    description: "All replacement parts come with warranty",
  },
  {
    icon: BadgeCheck,
    title: "Uniformed Professionals",
    description: "Easily identifiable, trusted technicians",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Trusted by Thousands of Happy Customers
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to providing the best repair experience with quality service 
            and customer satisfaction as our top priorities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-card rounded-2xl p-8 h-full border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Icon with background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 w-16 h-16 bg-primary/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>

                {/* Decorative Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-muted/20 group-hover:text-primary/10 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
