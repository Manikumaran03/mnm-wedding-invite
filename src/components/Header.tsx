import { useState, useEffect } from 'react';
import { Menu, X, Heart, BotMessageSquare } from 'lucide-react';
import { navItems } from '../config/config';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-purple-50/90'
      }`}
    >
      <nav className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 animate-pulse fill-current text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text font-signature text-2xl font-bold text-transparent">
              M & M
            </span>
          </div>

          <div className="flex space-x-4">
            {/* Language Toggle */}
            {/* <button
              onClick={onToggleChatbot}
              className="rounded-full bg-purple-600/50 p-3 shadow-md transition hover:bg-purple-600/80" // Added relative and overflow-hidden
              aria-label={'chat-bot'}
            >
              <BotMessageSquare className="h-6 w-6" />
            </button> */}

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="group relative font-medium text-gray-700 transition-colors duration-300 hover:text-purple-600"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 transition-colors hover:text-purple-600 md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-in slide-in-from-top-2 mt-4 rounded-lg bg-white/95 py-4 shadow-lg backdrop-blur-md duration-200 md:hidden">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="py-2 text-left font-medium text-gray-700 transition-colors duration-300 hover:text-purple-600"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
