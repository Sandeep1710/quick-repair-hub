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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-5 tracking-tight">
            Trusted by Thousands
            <br />
            of Happy Customers
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 h-full border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-display font-bold text-primary-foreground/5">
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
