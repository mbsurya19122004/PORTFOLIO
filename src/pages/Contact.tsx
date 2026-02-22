import { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-12"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Let's <span className="text-cyan-400">Connect</span></h1>
          <p className="text-gray-400 mb-8 text-lg">
            I'm currently available for freelance projects and full-time opportunities. 
            If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                <Mail size={20} />
              </div>
              <a href="mailto:someone@example.com?subject=Hello&body=I%20wanted%20to%20contact%20you">
                <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</h3>
                <p className="text-white font-medium">mbsurya19122004@gmail.com</p>
              </div>
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/10">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone</h3>
                <p className="text-white font-medium">+91 79823 20898</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 border border-white/10">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Location</h3>
                <p className="text-white font-medium">Delhi , India</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
              <Send size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
