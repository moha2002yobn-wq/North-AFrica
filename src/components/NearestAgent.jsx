import React from 'react';
import { MapPin, ExternalLink, Navigation, Compass, ShieldCheck, PhoneCall, Globe, ArrowLeft } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import agentLocatorImg from '../assets/agent-locator.jpg';
import './NearestAgent.css';

export default function NearestAgent() {
  const features = [
    {
      icon: Compass,
      title: 'تحديد الوكيل الأقرب فوراً',
      desc: 'ابحث بسهولة حسب مدينتك أو موقعك الحالي للوصول لأقرب وكيل معتمد لشركة شمال أفريقيا للتأمين.'
    },
    {
      icon: PhoneCall,
      title: 'بيانات التواصل المباشر',
      desc: 'عرض كامل لأرقام الهواتف، العناوين التفصيلية، وأوقات العمل الرسمية لكل وكيل.'
    },
    {
      icon: Navigation,
      title: 'خرائط وتوجيه مباشر',
      desc: 'احصل على أفضل المسارات والاتجاهات للوصول إلى مقر الوكيل باستخدام خرائط جوجل.'
    },
    {
      icon: ShieldCheck,
      title: 'وكلاء معتمدون ورسميون',
      desc: 'شبكة واسعة من الوكلاء المعتمدين الجاهزين لخدمتكم وإصدار وثائق التأمين بكفاءة.'
    }
  ];

  const popularCities = ['طرابلس', 'بنغازي', 'مصراتة', 'الزاوية', 'سبها', 'الخمس', 'زليتن', 'غريان'];

  return (
    <section id="nearest-agent" className="nearest-agent-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            الفروع والوكلاء
          </span>
          <h2 className="section-title">ابحث عن أقرب وكيل للتأمين</h2>
          <p className="section-desc">
            يسر شركة <strong>شمال أفريقيا للتأمين</strong> تقديم منصة <strong>tamen.ly</strong> المخصصة لمساعدتك في العثور على أقرب وكيل معتمد بالقرب منك في مختلف المدن الليبية.
          </p>
        </div>

        {/* Main Section Content Grid */}
        <div className="agent-content-grid">
          {/* Right Column: Features & Information */}
          <div className="agent-info-column">
            {/* Features Cards Grid */}
            <div className="features-grid">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="agent-feature-card">
                    <div className="feature-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <div className="feature-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Popular Cities Badges */}
            <div className="cities-coverage-box">
              <span className="cities-title">شبكة الوكلاء تشتمل على:</span>
              <div className="cities-tags">
                {popularCities.map((city, i) => (
                  <span key={i} className="city-chip">
                    <MapPin size={12} />
                    {city}
                  </span>
                ))}
                <span className="city-chip more-chip">+ وجميع المناطق</span>
              </div>
            </div>
          </div>
          {/* Left Column: Visual Card & Live Site Preview */}
          <div className="agent-visual-card">
            <div className="preview-image-container">
              <a
                href={COMPANY_CONFIG.tamenUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={agentLocatorImg}
                  alt="تطبيق وموقع ابحث عن أقرب وكيل - شمال أفريقيا للتأمين"
                  className="agent-preview-img"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="live-status-badge">
                <span className="pulse-dot"></span>
              </div>
            </div>

            <div className="agent-url-box">
              <div className="url-info">
                <span className="url-label">رابط المنظومة المباشر:</span>
              </div>
              <a
                href={COMPANY_CONFIG.tamenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary agent-visit-btn"
              >
                <span>زيارة موقع أقرب وكيل</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
