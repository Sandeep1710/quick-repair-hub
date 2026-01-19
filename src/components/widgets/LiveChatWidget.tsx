import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    icon: Phone,
    label: "Call Us",
    description: "Speak with an expert",
    href: "tel:+1234567890",
    color: "bg-green-500",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    description: "Chat on WhatsApp",
    href: "https://wa.me/9920971479",
    color: "bg-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    description: "Send us a message",
    href: "mailto:info@quickrepair.com",
    color: "bg-primary",
  },
];

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground">
              <h3 className="font-semibold text-lg">Need Help?</h3>
              <p className="text-sm text-primary-foreground/80">
                Choose how you'd like to reach us
              </p>
            </div>

            {/* Options */}
            <div className="p-4 space-y-3">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-3 rounded-xl bg-muted hover:bg-secondary transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-lg ${option.color} flex items-center justify-center`}>
                    <option.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {option.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {option.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-center text-muted-foreground">
                Available 24/7 for emergencies
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg ${
            isOpen ? "bg-muted-foreground" : "bg-primary"
          } hover:opacity-90 transition-colors`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Pulse Ring */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/30 pointer-events-none" />
      )}
    </div>
  );
}
