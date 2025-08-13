'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Fonctionnement', href: '#howitworks' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Rouen', href: '#rouen' },
    { name: 'Nantes', href: '#nantes' },
    { name: 'FAQ', href: '#faq' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-primary shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-brand-primary-foreground">
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
          <Image
            src="/images/icons/logo-dark.png"
            alt="LockMyBag logo"
            width={70}
            height={70}
            className="rounded"
          />
          <span className="font-brand uppercase text-2xl font-extrabold text-brand-primary-foreground whitespace-nowrap leading-none">
            <span className="text-3xl">L</span>OCK <span className="text-3xl">M</span>Y <span className="text-3xl">B</span>AG
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-brand-primary-foreground hover:text-brand-secondary hover:bg-surface-light transition-colors duration-200 font-medium px-3 py-2 rounded-md"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-brand-primary shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-4 py-3 text-brand-primary-foreground hover:text-brand-secondary hover:bg-surface-light transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
