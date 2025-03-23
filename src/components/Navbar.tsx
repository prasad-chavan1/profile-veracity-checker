
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={cn("w-full py-4 border-b border-gray-100", className)}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 z-10">
          <Instagram className="text-[#E1306C] w-6 h-6" />
          <span className="text-xl font-semibold bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
            ProfileChecker
          </span>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu}
              className="z-20 text-gray-700 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-10 flex flex-col pt-20 px-6 animate-fade-in">
                <ul className="flex flex-col space-y-6">
                  <li>
                    <Link 
                      to="/analyze" 
                      className="text-gray-700 hover:text-[#E1306C] transition-colors text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Analyze Profile
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="text-gray-700 hover:text-[#E1306C] transition-colors text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/team" 
                      className="text-gray-700 hover:text-[#E1306C] transition-colors text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/privacy" 
                      className="text-gray-700 hover:text-[#E1306C] transition-colors text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
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
        )}
      </div>
    </nav>
  );
};
