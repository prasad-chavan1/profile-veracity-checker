
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("w-full py-4 border-b border-gray-100", className)}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Instagram className="text-[#E1306C] w-6 h-6" />
          <span className="text-xl font-semibold bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
            ProfileChecker
          </span>
        </Link>
        
        <ul className="flex items-center space-x-6">
          <li>
            <Link 
              to="/analyze" 
              className="text-gray-700 hover:text-[#E1306C] transition-colors"
            >
              Analyze Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-[#E1306C] transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/team" 
              className="text-gray-700 hover:text-[#E1306C] transition-colors"
            >
              Team
            </Link>
          </li>
          <li>
            <Link 
              to="/privacy" 
              className="text-gray-700 hover:text-[#E1306C] transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
