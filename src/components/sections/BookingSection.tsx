import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Washing Machine Repair",
  "Refrigerator Repair",
  "AC Repair & Service",
  "Microwave Repair",
  "LED TV Repair",
  "Water Purifier Service",
  "Chimney Cleaning",
  "Dishwasher Repair",
  "Dryer Repair",
  "Pest Control",
];

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-2xl p-12 elegant-shadow-lg elegant-border"
          >
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Your booking request has been submitted successfully. Our team will contact you 
              within 30 minutes to confirm your appointment.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="rounded-full px-8">
              Book Another Service
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest">
              Book a Service
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-5 tracking-tight">
              Schedule Your
              <br />
              Repair Appointment
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Fill out the form and our team will get back to you within 30 minutes 
              to confirm your booking.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {[
                "Free inspection with every booking",
                "Transparent pricing before work begins",
                "90-day warranty on all repairs",
                "Flexible rescheduling options",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 elegant-shadow-lg elegant-border space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Full Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 9920971479"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Select Service
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange("service", value)}
                  required
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    Time Slot
                  </label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleInputChange("time", value)}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Additional Details (Optional)
                </label>
                <Textarea
                  placeholder="Describe the issue or any specific requirements..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[100px] resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 rounded-full text-base font-medium group">
                Submit Booking Request
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
