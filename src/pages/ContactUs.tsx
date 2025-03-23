
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAFAFA] to-[#F3F3F5]">
      <Navbar />
      
      <main className="flex-1 container mx-auto max-w-6xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions about our profile verification tool? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#405DE6] to-[#5851DB] hover:from-[#5851DB] hover:to-[#833AB4]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="bg-[#E1306C]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#E1306C]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">support@profilechecker.com</p>
                  <p className="text-gray-600">info@profilechecker.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="bg-[#5851DB]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#5851DB]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri: 9AM - 5PM EST</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex gap-4">
                <div className="bg-[#833AB4]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#833AB4]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">123 Social Media Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#FCAF45] to-[#E1306C] p-6 rounded-xl text-white">
              <h3 className="font-semibold text-xl mb-2">Follow Us</h3>
              <p className="opacity-90 mb-4">
                Stay updated with our latest tools and features.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 ProfileChecker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
