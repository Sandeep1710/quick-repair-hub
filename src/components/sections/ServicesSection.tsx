import { motion } from "framer-motion";
import { 
  WashingMachine, 
  Refrigerator, 
  Wind, 
  Microwave, 
  Tv, 
  Droplets,
  Fan,
  Utensils,
  Sparkles,
  Bug,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: WashingMachine,
    name: "Washing Machine",
    description: "Expert repair for all brands and models",
  },
  {
    icon: Refrigerator,
    name: "Refrigerator",
    description: "Quick fixes for cooling issues",
  },
  {
    icon: Wind,
    name: "Air Conditioner",
    description: "AC repair, servicing & installation",
  },
  {
    icon: Microwave,
    name: "Microwave Oven",
    description: "Safe and efficient microwave repairs",
  },
  {
    icon: Tv,
    name: "LED TV",
    description: "Display and audio troubleshooting",
  },
  {
    icon: Droplets,
    name: "Water Purifier",
    description: "Filter replacement & repairs",
  },
  {
    icon: Fan,
    name: "Chimney",
    description: "Cleaning and motor repairs",
  },
  {
    icon: Utensils,
    name: "Dishwasher",
    description: "Complete dishwasher solutions",
  },
  {
    icon: Sparkles,
    name: "Dryer",
    description: "Heating and drum repairs",
  },
  {
    icon: Bug,
    name: "Pest Control",
    description: "Safe and effective pest solutions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-5 tracking-tight">
            Expert Repairs for
            <br />
            All Appliances
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From washing machines to pest control, we've got all your home service needs covered 
            with certified professionals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {services.map((service) => (
            <motion.a
              key={service.name}
              href="#booking"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group block"
            >
              <div className="relative h-full bg-card rounded-xl p-6 elegant-shadow elegant-border hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-sm lg:text-base">
                  {service.name}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
