import React from 'react';
import {
  UserCheck,
  HeartPulse,
  Car,
  Ship,
  Plane,
  Globe,
  Flame,
  HardHat,
  ArrowLeft
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import './Services.css';

// Dynamic Icon Mapping
const ICON_MAP = {
  UserCheck,
  HeartPulse,
  Car,
  Ship,
  Plane,
  Globe,
  Flame,
  HardHat
};

export default function Services({ onSelectService }) {
  const handleServiceClick = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    const formElement = document.getElementById('insurance-request');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">باقات الحماية والحلول</span>
          <h2 className="section-title">خدمات التأمين</h2>
          <p className="section-desc">
            تغطيات تأمينية شاملة ومصممة بعناية لحماية وتأمين الأفراد والشركات في مختلف المجالات والقطاعات.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || UserCheck;

            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-wrapper">
                    <IconComponent size={28} className="service-icon" />
                  </div>
                  <span className="service-badge">{service.badge}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.shortDescription}</p>

                {/* <button
                  className="service-action-btn"
                  onClick={() => handleServiceClick(service.id)}
                  aria-label={`طلب ${service.title}`}
                >
                  <span>طلب هذا التأمين</span>
                  <ArrowLeft size={16} />
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
