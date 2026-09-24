import React, { useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/company';

export default function SEO() {
  useEffect(() => {
    // Inject Schema.org JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      "name": COMPANY_CONFIG.name,
      "alternateName": COMPANY_CONFIG.nameEn,
      "description": COMPANY_CONFIG.description,
      "url": COMPANY_CONFIG.domain,
      "telephone": COMPANY_CONFIG.phoneRaw,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "طرابلس",
        "addressCountry": "LY"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات التأمين",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "التأمين الشخصي" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "التأمين الصحي" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تأمين السيارات" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "التأمين البحري" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "التأمين الجوي" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تأمين المسافرين" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "تأمين الحريق" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "التأمين الهندسي" } }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-jsonld';
    script.innerHTML = JSON.stringify(jsonLd);

    const existing = document.getElementById('schema-jsonld');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-jsonld');
      if (el) el.remove();
    };
  }, []);

  return null;
}
