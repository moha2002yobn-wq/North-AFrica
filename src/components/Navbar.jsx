import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowLeft } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import mainIcon from '../assets/main-icon.jpg';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدمات التأمين' },
    { href: '#why-us', label: 'لماذا نحن؟' },
    { href: '#nearest-agent', label: 'أقرب وكيل' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Title */}
        <a href="#home" className="navbar-brand" aria-label={COMPANY_CONFIG.name}>
          <div className="brand-icon">
            <img
              src={mainIcon}
              alt={COMPANY_CONFIG.name}
              width="44"
              height="44"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">{COMPANY_CONFIG.name}</span>
            <span className="brand-subtitle">{COMPANY_CONFIG.nameEn}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="تنقل الموقع الرئيسي">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="navbar-actions">
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <div className="mobile-brand">
              <div className="brand-icon">
                <img
                  src={mainIcon}
                  alt={COMPANY_CONFIG.name}
                  width="36"
                  height="36"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="brand-text">
                <span className="brand-title">{COMPANY_CONFIG.name}</span>
                <span className="brand-subtitle">{COMPANY_CONFIG.nameEn}</span>
              </div>
            </div>
            <button className="mobile-close-btn" onClick={closeMenu} aria-label="إغلاق القائمة">
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
