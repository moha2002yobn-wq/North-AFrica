import React from 'react';
import { Building2, Shield, Users, Target } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">هوية الشركة</span>
          <h2 className="section-title">من نحن</h2>
          <p className="section-desc">
            تعرّف على شركة شمال أفريقيا للتأمين ورؤيتنا في تقديم خدمات تأمينية حديثة وموثوقة.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Copy Content */}
          <div className="about-main-card">
            <div className="about-card-badge">
              <Building2 size={24} className="about-icon" />
              <h3>شركة شمال أفريقيا للتأمين</h3>
            </div>
            <p className="about-text">
              تعتبر <strong>شركة شمال أفريقيا للتأمين</strong> من المؤسسات التأمينية الوطنية التي تسعى إلى تلبية احتياجات الأفراد والأعمال في السوق الليبي من خلال حلول وتغطيات شاملة تضمن حماية الممتلكات والأنشطة المختلفة.
            </p>
            <p className="about-text">
              نلتزم بالاحترافية في تقديم خدمات التأمين الشخصي والصحي وتأمين السيارات والمسافرين، بالإضافة إلى القطاعات الحيوية مثل التأمين البحري والجوي والحريق والهندسي، مع التركيز على سهولة التواصل وسرعة إنجاز المعاملات لجميع عملائنا.
            </p>

            <div className="about-highlights">
              <div className="highlight-box">
                <Shield className="box-icon" size={22} />
                <div>
                  <h4>تغطيات متكاملة</h4>
                  <p>تلبية متطلبات الأفراد والشركات في ليبيا بمختلف المجالات.</p>
                </div>
              </div>
              <div className="highlight-box">
                <Users className="box-icon" size={22} />
                <div>
                  <h4>خدمة العملاء</h4>
                  <p>تواصل مباشر وسريع لإتاحة طلب الخدمة بكل مرونة.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Feature Box */}
          <div className="about-vision-card">
            <div className="vision-header">
              <Target size={32} className="vision-icon" />
              <h3>رسالتنا ورؤيتنا</h3>
            </div>
            <p className="vision-desc">
              تقديم تجربة تأمينية حديثة قائمة على الموثوقية الشفافة، وتوفير الأمان وراحة البال لعملائنا في كافة ربوع ليبيا لغدٍ أكثر أمناً واستقراراً.
            </p>

            <div className="vision-badges-list">
              <span className="v-badge">الالتزام بالشفافية</span>
              <span className="v-badge">السرعة في الأداء</span>
              <span className="v-badge">حماية حقيقية</span>
              <span className="v-badge">ابتكار وتسهيل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
