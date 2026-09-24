import React from 'react';
import { ShieldCheck, ArrowLeft, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import heroImg from '../assets/Hero-image.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow" />

      <div className="container hero-container">
        {/* Left/Main Column - Content */}
        <div className="hero-content">
          {/* <div className="hero-badge">
            <ShieldCheck size={18} className="badge-icon" />
            <span>شركة شمال أفريقيا للتأمين</span>
          </div> */}

          <h1 className="hero-title">
            {COMPANY_CONFIG.name}
            <span className="hero-title-sub">تأمينك بـرؤية حديثة</span>
          </h1>

          {/* <p className="hero-slogan">
            تأمينك بـرؤية حديثة — معكم لغد أكثر أماناً
          </p> */}

          <p className="hero-description">
            نوفر لكم حلولاً وتغطيات تأمينية متكاملة للأفراد، العائلات، المركبات، والشركات مع سهولة التواصل وتقديم الطلب مباشرة.
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn btn-primary hero-btn">
              <span>تعرف علينا</span>
              <ArrowLeft size={18} />
            </a>

            <a href="#services" className="btn btn-secondary hero-btn">
              <span>استكشف خدماتنا</span>
            </a>
          </div>

          {/* Key Value Micro Features */}
          <div className="hero-features-strip">
            <div className="feature-item">
              <CheckCircle2 size={18} className="feature-check" />
              <span>طلب مباشر عبر الواتساب</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} className="feature-check" />
              <span>تغطيات للأفراد والأعمال</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} className="feature-check" />
              <span>استجابة سريعة ومعتمدة</span>
            </div>
          </div>
        </div>

        {/* Right/Visual Column */}
        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-image-wrapper">
              <img
                src={heroImg}
                alt="شمال أفريقيا للتأمين - خدمات تأمينية حديثة"
                className="hero-main-img"
                loading="eager"
                decoding="async"
                width="600"
                height="400"
              />
              <div className="hero-image-overlay" />
            </div>

            {/* Floating Glass Badges */}
            {/* <div className="floating-badge badge-top">
              <div className="badge-dot" />
              <div>
                <strong>تغطيات متنوعة</strong>
                <span>سيارات • صحي • سفر • حريق</span>
              </div>
            </div> */}

            {/* <div className="floating-badge badge-bottom">
              <ShieldCheck size={28} className="badge-shield" />
              <div>
                <strong>حماية موثوقة</strong>
                <span>رؤية حديثة لأمان غدك</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down-btn" aria-label="الانتقال إلى قسم من نحن">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
