import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

const navItems = [
  { name: 'Главная', href: '#home' },
  { name: 'Ассортимент', href: '#assortment' },
  { name: 'О нас', href: '#about' },
  { name: 'Почему мы', href: '#why-us' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'Контакты', href: '#contacts' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle anchor scrolling when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3',
        isScrolled ? 'bg-bakery-cream/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-serif font-bold text-bakery-caramel leading-none">
            Домашние радости
          </span>
          <span className="text-[10px] uppercase tracking-widest text-bakery-terracotta font-medium">
            Семейная пекарня
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-bakery-caramel hover:text-bakery-terracotta transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <Link to="/cart" className="relative group cursor-pointer">
            <motion.div
              key={totalItems}
              animate={totalItems > 0 ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <ShoppingCart size={24} className="text-bakery-caramel group-hover:text-bakery-terracotta transition-colors" />
            </motion.div>
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-bakery-terracotta text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <a
            href="tel:+996707609955"
            className="flex items-center gap-2 bg-bakery-terracotta text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-bakery-caramel transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Phone size={16} />
            Позвонить
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link to="/cart" className="relative cursor-pointer">
            <motion.div
              key={totalItems}
              animate={totalItems > 0 ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <ShoppingCart size={24} className="text-bakery-caramel" />
            </motion.div>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-bakery-terracotta text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="text-bakery-caramel p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bakery-cream shadow-xl border-t border-bakery-vanilla lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium text-bakery-caramel border-b border-bakery-vanilla pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+996707609955"
                className="flex items-center justify-center gap-2 bg-bakery-terracotta text-white py-3 rounded-xl font-bold shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                Позвонить
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
