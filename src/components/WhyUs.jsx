import React from 'react';
import { Award, ShieldCheck, Clock, Zap } from 'lucide-react';
import { WHY_US_DATA } from '../data/whyUs';
import './WhyUs.css';

const ICON_MAP = {
  Award,
  ShieldCheck,
  Clock,
  Zap
};

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">معايير الثقة والتميز</span>
          <h2 className="section-title">لماذا نحن؟</h2>
          <p className="section-desc">
            أسباب تجعل اختيارك لشركة شمال أفريقيا للتأمين قراراً صائباً لحماية أموالك وممتلكاتك ومستقبلك.
          </p>
        </div>

        <div className="whyus-grid">
          {WHY_US_DATA.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || ShieldCheck;

            return (
              <div key={item.id} className="whyus-card">
                <div className="whyus-icon-box">
                  <IconComponent size={30} className="whyus-icon" />
                </div>
                <h3 className="whyus-card-title">{item.title}</h3>
                <p className="whyus-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
