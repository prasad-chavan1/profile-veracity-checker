
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Users, UserCheck } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#E1306C]" />,
      title: "Profile Authenticity",
      description: "Quickly determine if an Instagram profile is genuine based on key metrics and patterns."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#5851DB]" />,
      title: "Scam Protection",
      description: "Avoid falling victim to fake profiles and potential scams on social media."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#833AB4]" />,
      title: "Simple Analysis",
      description: "Just input a few profile details to get an instant authenticity verification."
    },
    {
      icon: <Users className="w-8 h-8 text-[#405DE6]" />,
      title: "For Everyone",
      description: "Whether you're meeting someone online or vetting business partners, stay safe."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAFAFA] to-[#F3F3F5]">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
                  Detect Fake Instagram Profiles Instantly
                </h1>
                <p className="text-lg text-gray-600">
                  Our powerful tool analyzes profile metrics to help you identify genuine accounts from fakes, keeping you safe from scams and catfishing.
                </p>
                <div className="flex gap-4">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-[#405DE6] to-[#5851DB] hover:from-[#5851DB] hover:to-[#833AB4] text-white px-8 py-6"
                    size="lg"
                  >
                    <Link to="/analyze">Try It Now</Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-[#5851DB] text-[#5851DB] hover:bg-[#5851DB]/10"
                    size="lg"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-[500px] bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] rounded-2xl shadow-xl overflow-hidden relative">
                  <div className="absolute inset-1 bg-white rounded-xl flex items-center justify-center">
                    <img 
                      src="https://placehold.co/600x800/FAFAFA/E1306C?text=Profile+Verifier" 
                      alt="App Preview" 
                      className="w-full h-auto object-cover rounded-lg shadow-inner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#FCAF45] to-[#E1306C]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Verify Instagram Profiles?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Try our free tool now and stay protected from fake profiles and potential scams on Instagram.
            </p>
            <Button 
              asChild
              className="bg-white text-[#E1306C] hover:bg-gray-100 px-8 py-6"
              size="lg"
            >
              <Link to="/analyze">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 ProfileChecker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
