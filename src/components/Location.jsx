import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import './Location.css';

export default function Location() {
  return (
    <section id="location" className="location-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">العنوان والتواجد الجغرافي</span>
          <h2 className="section-title">موقعنا</h2>
          <p className="section-desc">
            يسعدنا استقبالكم في مقر شركة شمال أفريقيا للتأمين، كما يمكنك الوصول إلينا بسهولة عبر خرائط جوجل.
          </p>
        </div>

        <div className="location-grid">
          {/* Info Card */}
          <div className="location-info-card">
            <div className="location-badge">
              <MapPin size={24} className="location-pin-icon" />
              <h3>المقر الرئيسي</h3>
            </div>

            <p className="location-address">
              <strong>العنوان:</strong> {COMPANY_CONFIG.address}
            </p>

            <p className="location-hours">
              <strong>ساعات العمل:</strong> {COMPANY_CONFIG.workingHours}
            </p>

            <div className="location-features">
              <div className="loc-feature">
                <Navigation size={18} className="loc-icon" />
                <span>موقع متميز وسهل الوصول في العاصمة طرابلس</span>
              </div>
            </div>

            <a
              href={COMPANY_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary location-cta-btn"
            >
              <span>فتح الموقع في Google Maps</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="location-map-visual">
            <div className="map-frame-wrapper">
              <div className="map-placeholder-bg">
                <div className="map-pin-pulse">
                  <MapPin size={36} className="pulse-pin" />
                </div>
                <div className="map-info-tooltip">
                  <strong>{COMPANY_CONFIG.name}</strong>
                  <span>{COMPANY_CONFIG.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
