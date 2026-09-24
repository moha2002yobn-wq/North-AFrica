import React, { useState, useEffect } from 'react';
import { Send, FileText, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { BASE_FIELDS, INSURANCE_TYPES_CONFIG } from '../data/insuranceFormConfig';
import './InsuranceForm.css';

export default function InsuranceForm({ selectedTypeKey, onTypeChange }) {
  const [selectedType, setSelectedType] = useState(selectedTypeKey || 'personal');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: ''
  });
  const [dynamicFieldsData, setDynamicFieldsData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessNotice, setSubmitSuccessNotice] = useState(false);

  // Sync external selected service type if passed from props
  useEffect(() => {
    if (selectedTypeKey && INSURANCE_TYPES_CONFIG[selectedTypeKey]) {
      setSelectedType(selectedTypeKey);
    }
  }, [selectedTypeKey]);

  // Reset dynamic fields on insurance type change
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    setDynamicFieldsData({});
    setErrors({});
    if (onTypeChange) onTypeChange(newType);
  };

  const handleBaseInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDynamicInputChange = (e) => {
    const { name, value } = e.target;
    setDynamicFieldsData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate Libyan Phone Numbers & required inputs
  const validateForm = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.fullName || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'يرجى إدخال الاسم الكامل (3 حروف على الأقل)';
    }

    // Validate Libyan Phone
    const cleanPhone = formData.phone ? formData.phone.trim().replace(/\s+|-/g, '') : '';
    // Libyan formats: 091xxxxxxx, 092xxxxxxx, 094xxxxxxx, 093xxxxxxx, 095xxxxxxx, 021xxxxxxx, +2189xxxxxxx, 2189xxxxxxx
    const libyanPhoneRegex = /^(?:\+?218|0)?(9[12345]\d{7}|21\d{7})$/;

    if (!cleanPhone) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف';
    } else if (!libyanPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'يرجى إدخال رقم هاتف ليبي صحيح (مثال: 0911234567)';
    }

    // Validate dynamic fields for selected type
    const currentConfig = INSURANCE_TYPES_CONFIG[selectedType];
    if (currentConfig && currentConfig.fields) {
      currentConfig.fields.forEach((field) => {
        if (field.required) {
          const val = dynamicFieldsData[field.name];
          if (!val || (typeof val === 'string' && val.trim() === '') || val === 'اختر الفئة العمرية' || val === 'اختر المستوى' || val === 'اختر نوع التغطية' || val === 'اختر نوع العقار') {
            newErrors[field.name] = field.errorMessage || 'هذا الحقل مطلوب';
          }
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const typeConfig = INSURANCE_TYPES_CONFIG[selectedType];
    const typeLabel = typeConfig ? typeConfig.label : selectedType;

    // Generate formatted Arabic text for WhatsApp
    let message = `📋 *طلب تأمين جديد - ${COMPANY_CONFIG.name}*\n\n`;
    message += `👤 *الاسم الكامل:* ${formData.fullName}\n`;
    message += `📞 *رقم الهاتف:* ${formData.phone}\n`;
    if (formData.address) {
      message += `📍 *العنوان:* ${formData.address}\n`;
    }
    message += `🛡️ *نوع التأمين:* ${typeLabel}\n\n`;

    // Dynamic field details
    if (typeConfig && typeConfig.fields) {
      message += `📝 *تفاصيل إضافية للطلب:*\n`;
      typeConfig.fields.forEach((field) => {
        const val = dynamicFieldsData[field.name];
        if (val) {
          message += `• ${field.label}: ${val}\n`;
        }
      });
    }

    message += `\nأتطلع للحصول على تفاصيل التغطية والتواصل معي. شكراً لكم.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsapp}?text=${encodedMessage}`;

    setSubmitSuccessNotice(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  const currentTypeConfig = INSURANCE_TYPES_CONFIG[selectedType];

  return (
    <section id="insurance-request" className="form-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">تواصل سريع وتأمين إلكتروني</span>
          <h2 className="section-title">نموذج طلب التأمين الذكي</h2>
          <p className="section-desc">
            حدد نوع التأمين المطلوب وقم بتعبئة البيانات ليتم تجهيز طلبك وإرساله مباشرة عبر الواتساب إلى فريق الخدمة.
          </p>
        </div>

        <div className="form-card-wrapper">
          <form className="insurance-smart-form" onSubmit={handleSubmit} noValidate>
            {/* Header Badge */}
            <div className="form-top-bar">
              <div className="top-bar-title">
                <FileText size={22} className="form-top-icon" />
                <h3>بيانات الطلب</h3>
              </div>
              <span className="form-notice-pill">إرسال مباشر عبر الواتساب</span>
            </div>

            {/* Insurance Type Selection */}
            <div className="form-group full-width">
              <label htmlFor="insuranceTypeSelect" className="form-label">
                اختر نوع التأمين المطلوب <span className="req">*</span>
              </label>
              <select
                id="insuranceTypeSelect"
                className="form-select"
                value={selectedType}
                onChange={handleTypeChange}
              >
                {Object.keys(INSURANCE_TYPES_CONFIG).map((key) => (
                  <option key={key} value={key}>
                    {INSURANCE_TYPES_CONFIG[key].label}
                  </option>
                ))}
              </select>
            </div>

            {/* Base Required Fields */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullNameInput" className="form-label">
                  الاسم الكامل <span className="req">*</span>
                </label>
                <input
                  id="fullNameInput"
                  name="fullName"
                  type="text"
                  className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  placeholder="مثال: أحمد عبد الله"
                  value={formData.fullName}
                  onChange={handleBaseInputChange}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phoneInput" className="form-label">
                  رقم الهاتف (ليبي) <span className="req">*</span>
                </label>
                <input
                  id="phoneInput"
                  name="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? 'has-error' : ''}`}
                  placeholder="مثال: 0910000000"
                  value={formData.phone}
                  onChange={handleBaseInputChange}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="addressInput" className="form-label">
                  العنوان / المدينة
                </label>
                <input
                  id="addressInput"
                  name="address"
                  type="text"
                  className="form-input"
                  placeholder="مثال: طرابلس - النوفليين"
                  value={formData.address}
                  onChange={handleBaseInputChange}
                />
              </div>
            </div>

            {/* Dynamic Type-Specific Fields */}
            {currentTypeConfig && currentTypeConfig.fields && currentTypeConfig.fields.length > 0 && (
              <div className="dynamic-fields-block">
                <div className="dynamic-block-header">
                  <h4>بيانات إضافية خاصة بـ {currentTypeConfig.label}</h4>
                </div>

                <div className="form-grid">
                  {currentTypeConfig.fields.map((field) => {
                    const error = errors[field.name];

                    if (field.type === 'select') {
                      return (
                        <div key={field.name} className="form-group">
                          <label htmlFor={`dynamic-${field.name}`} className="form-label">
                            {field.label} {field.required && <span className="req">*</span>}
                          </label>
                          <select
                            id={`dynamic-${field.name}`}
                            name={field.name}
                            className={`form-select ${error ? 'has-error' : ''}`}
                            value={dynamicFieldsData[field.name] || ''}
                            onChange={handleDynamicInputChange}
                          >
                            {field.options.map((opt, idx) => (
                              <option key={idx} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          {error && <span className="error-text">{error}</span>}
                        </div>
                      );
                    }

                    if (field.type === 'textarea') {
                      return (
                        <div key={field.name} className="form-group full-width">
                          <label htmlFor={`dynamic-${field.name}`} className="form-label">
                            {field.label} {field.required && <span className="req">*</span>}
                          </label>
                          <textarea
                            id={`dynamic-${field.name}`}
                            name={field.name}
                            rows={3}
                            className={`form-textarea ${error ? 'has-error' : ''}`}
                            placeholder={field.placeholder}
                            value={dynamicFieldsData[field.name] || ''}
                            onChange={handleDynamicInputChange}
                          />
                          {error && <span className="error-text">{error}</span>}
                        </div>
                      );
                    }

                    return (
                      <div key={field.name} className="form-group">
                        <label htmlFor={`dynamic-${field.name}`} className="form-label">
                          {field.label} {field.required && <span className="req">*</span>}
                        </label>
                        <input
                          id={`dynamic-${field.name}`}
                          name={field.name}
                          type={field.type || 'text'}
                          min={field.min}
                          max={field.max}
                          className={`form-input ${error ? 'has-error' : ''}`}
                          placeholder={field.placeholder}
                          value={dynamicFieldsData[field.name] || ''}
                          onChange={handleDynamicInputChange}
                        />
                        {error && <span className="error-text">{error}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Note & UX Disclaimer */}
            <div className="form-disclaimer">
              <Info size={18} className="disclaimer-icon" />
              <p>
                <strong>ملاحظة هامة:</strong> عند النقر على إرسال الطلب، سيقوم الموقع بفتح تطبيق واتساب برسالة مُنسّقة تحتوي بيانات طلبك لتصل مباشرة إلى فريق خدمة شمال أفريقيا للتأمين.
              </p>
            </div>

            {/* Submit Action */}
            <button type="submit" className="btn btn-whatsapp submit-form-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span>جاري إعداد الرسالة...</span>
              ) : (
                <>
                  <span>إرسال الطلب عبر الواتساب</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
