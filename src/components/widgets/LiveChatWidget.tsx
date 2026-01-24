import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, MessageSquare, Mail, Send } from "lucide-react";

const contactOptions = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    description: "Chat on WhatsApp",
    href: "https://wa.me/9920971479",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: Phone,
    label: "Call Us",
    description: "Speak with an expert",
    href: "tel:+919920971479",
    color: "bg-primary hover:bg-primary/90",
  },
  {
    icon: Mail,
    label: "Email",
    description: "Send us a message",
    href: "mailto:info@quickrepair.com",
    color: "bg-accent hover:bg-accent/90",
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
            className="absolute bottom-20 right-0 w-72 bg-card rounded-2xl elegant-shadow-lg elegant-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-5">
              <h3 className="text-primary-foreground font-display font-semibold text-lg">
                Get in Touch
              </h3>
              <p className="text-primary-foreground/70 text-sm mt-1">
                We typically reply within minutes
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
                  className={`flex items-center gap-4 p-4 rounded-xl text-white transition-all ${option.color}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <option.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-white/80">{option.description}</div>
                  </div>
                  <Send className="w-4 h-4 opacity-60" />
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
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-14 h-14 rounded-full elegant-shadow-lg flex items-center justify-center transition-all ${
          isOpen ? "bg-muted text-foreground" : "bg-accent text-accent-foreground"
        }`}
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
      </motion.button>

      {/* Subtle pulse indicator */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
      )}
    </div>
  );
}
