
import { Navbar } from "@/components/Navbar";
import { Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former security analyst with expertise in social media threat detection.",
      image: "https://i.pravatar.cc/300?img=1",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating tools that make the internet safer.",
      image: "https://i.pravatar.cc/300?img=5",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Michael Roberts",
      role: "Data Scientist",
      bio: "Specializes in pattern recognition and machine learning models for profile analysis.",
      image: "https://i.pravatar.cc/300?img=3",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "UX Designer",
      bio: "Creates intuitive user experiences that make complex analysis simple to understand.",
      image: "https://i.pravatar.cc/300?img=10",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAFAFA] to-[#F3F3F5]">
      <Navbar />
      
      <main className="flex-1 container mx-auto max-w-6xl py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a passionate group of security experts, developers, and designers dedicated to making social media safer for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-[#E1306C] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                
                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-500 hover:text-[#0077B5] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-[#405DE6] to-[#5851DB] rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who are passionate about making the internet a safer place. Check out our open positions below.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-[#5851DB] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </a>
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

export default Team;
