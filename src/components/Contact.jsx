import React from 'react';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">تواصل دائم وقريب</span>
          <h2 className="section-title">تواصل معنا</h2>
          <p className="section-desc">
            فريق خدمة العملاء بشركة شمال أفريقيا للتأمين على استعداد دائم للإجابة على استفساراتكم وتقديم الدعم.
          </p>
        </div>

        <div className="contact-grid">
          {/* Phone Card */}
          <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={28} className="contact-icon" />
            </div>
            <h3 className="contact-card-title">الاتصال الهاتفي</h3>
            <p className="contact-card-value" dir="ltr">{COMPANY_CONFIG.phone}</p>
            <span className="contact-action-link">اضغط للاتصال المباشر</span>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${COMPANY_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card highlight-whatsapp"
          >
            <div className="contact-icon-wrapper wa-wrapper">
              <MessageSquare size={28} className="contact-icon wa-icon" />
            </div>
            <h3 className="contact-card-title">تواصل عبر الواتساب</h3>
            <p className="contact-card-value" dir="ltr">{COMPANY_CONFIG.whatsappFormatted}</p>
            <span className="contact-action-link wa-link">محادثة سريعة ومباشرة</span>
          </a>

          {/* Location Card */}
          <a
            href={COMPANY_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon-wrapper">
              <MapPin size={28} className="contact-icon" />
            </div>
            <h3 className="contact-card-title">مقر الشركة</h3>
            <p className="contact-card-value">{COMPANY_CONFIG.address}</p>
            <span className="contact-action-link">عرض الاتجاهات الخريطة</span>
          </a>

          {/* Working Hours Card */}
          <div className="contact-card info-only">
            <div className="contact-icon-wrapper">
              <Clock size={28} className="contact-icon" />
            </div>
            <h3 className="contact-card-title">أوقات العمل</h3>
            <p className="contact-card-value">{COMPANY_CONFIG.workingHours}</p>
            <span className="contact-action-link muted">خدمة سريعة في أوقات العمل</span>
          </div>
        </div>
      </div>
    </section>
  );
}
