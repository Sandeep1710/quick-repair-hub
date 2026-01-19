import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    service: "AC Repair",
    rating: 5,
    image: "SJ",
    content:
      "Absolutely fantastic service! The technician arrived within 2 hours and fixed my AC in no time. Very professional and transparent about the pricing. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Apartment Owner",
    service: "Washing Machine Repair",
    rating: 5,
    image: "MC",
    content:
      "I've used their services twice now and both times exceeded expectations. Quick response, fair pricing, and quality work. My go-to for all appliance repairs!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Business Owner",
    service: "Refrigerator Service",
    rating: 5,
    image: "ER",
    content:
      "They saved my restaurant's refrigerator! Same-day service during a holiday weekend. The team was polite, efficient, and even cleaned up after themselves.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Homeowner",
    service: "LED TV Repair",
    rating: 5,
    image: "DK",
    content:
      "Great experience from start to finish. The online booking was easy, and the technician explained everything clearly. Fixed my TV for half of what others quoted!",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Property Manager",
    service: "Multiple Repairs",
    rating: 5,
    image: "LT",
    content:
      "As a property manager, I need reliable service providers. This team has been consistently excellent across multiple properties and appliance types. 5 stars!",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/20 to-background" />

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our happy customers have to say 
            about their experience with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <Quote className="w-12 h-12 text-primary/10" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "4.9", label: "Average Rating" },
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Expert Technicians" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
