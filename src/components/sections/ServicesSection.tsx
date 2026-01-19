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
  Bug
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: WashingMachine,
    name: "Washing Machine",
    description: "Expert repair for all brands and models",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Refrigerator,
    name: "Refrigerator",
    description: "Quick fixes for cooling issues",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Wind,
    name: "Air Conditioner",
    description: "AC repair, servicing & installation",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Microwave,
    name: "Microwave Oven",
    description: "Safe and efficient microwave repairs",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Tv,
    name: "LED TV",
    description: "Display and audio troubleshooting",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Droplets,
    name: "Water Purifier",
    description: "Filter replacement & repairs",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Fan,
    name: "Chimney",
    description: "Cleaning and motor repairs",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: Utensils,
    name: "Dishwasher",
    description: "Complete dishwasher solutions",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Sparkles,
    name: "Dryer",
    description: "Heating and drum repairs",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Bug,
    name: "Pest Control",
    description: "Safe and effective pest solutions",
    color: "from-amber-500 to-amber-600",
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

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Expert Repairs for All Appliances
          </h2>
          <p className="text-muted-foreground text-lg">
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative h-full bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Book Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  asChild
                >
                  <a href="#booking">Book Now →</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
