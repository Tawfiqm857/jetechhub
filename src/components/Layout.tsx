import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Feeds", path: "/feeds" },
    { name: "Gadgets", path: "/gadgets" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg group-hover:shadow-glow transition-all duration-300">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                TechHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="tech-gradient hover:shadow-glow transition-all duration-300">
                Enroll Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-fade-in-up">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button size="sm" className="w-full tech-gradient">
                    Enroll Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold font-heading bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                  TechHub
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering the next generation of tech professionals through comprehensive training and innovative services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Software Development</li>
                <li>Digital Marketing</li>
                <li>UI/UX Design</li>
                <li>Data Analysis</li>
                <li>Graphics Design</li>
                <li>Video Editing</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">+234 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">info@techhub.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">123 Tech Street, Lagos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TechHub. All rights reserved. Built with passion for technology education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;