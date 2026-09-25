import React from 'react';
import { Shield, MapPin, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import mainIcon from '../assets/main-icon.jpg';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-brand">
              <div className="footer-brand-icon">
                <img 
                  src={mainIcon} 
                  alt={COMPANY_CONFIG.name} 
                  width="40" 
                  height="40" 
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
              <div className="footer-brand-text">
                <span className="f-title">{COMPANY_CONFIG.name}</span>
                <span className="f-subtitle">{COMPANY_CONFIG.nameEn}</span>
              </div>
            </a>
            <p className="footer-slogan-text">
              تأمينك برؤية حديثة
            </p>
            <p className="footer-desc">
              تغطيات ومفهوم متطور لخدمات التأمين في ليبيا لحماية الأفراد والأعمال بكفاءة وموثوقية عالية.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">روابط سريعة</h4>
            <ul className="footer-links">
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#services">خدمات التأمين</a></li>
              <li><a href="#why-us">لماذا نحن؟</a></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div className="footer-col">
            <h4 className="footer-heading">خدماتنا والتواصل</h4>
            <ul className="footer-links">
              <li><a href="#nearest-agent">أقرب وكيل (tamen.ly)</a></li>
              <li><a href="#location">موقعنا على الخريطة</a></li>
              <li><a href="#contact">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">معلومات التواصل</h4>
            <div className="footer-contact-item">
              <Phone size={16} className="f-icon" />
              <span dir="ltr">{COMPANY_CONFIG.phone}</span>
            </div>
            <div className="footer-contact-item">
              <MessageSquare size={16} className="f-icon" />
              <span dir="ltr">{COMPANY_CONFIG.whatsappFormatted}</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} className="f-icon" />
              <span>{COMPANY_CONFIG.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} شركة شمال أفريقيا للتأمين. جميع الحقوق محفوظة.
          </p>
          <span className="footer-seo-tag">
            خدمات التأمين الشاملة في ليبيا
          </span>
        </div>
      </div>
    </footer>
  );
}
