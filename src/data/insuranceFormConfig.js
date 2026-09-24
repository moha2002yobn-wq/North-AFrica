/**
 * Smart Insurance Request Form Configuration
 * Data-driven schema defining base fields and dynamic type-specific fields.
 */

export const BASE_FIELDS = [
  {
    name: "fullName",
    label: "الاسم الكامل",
    type: "text",
    placeholder: "مثال: أحمد محمد علي",
    required: true,
    minLength: 3,
    errorMessage: "يرجى إدخال الاسم الكامل (3 حروف على الأقل)"
  },
  {
    name: "phone",
    label: "رقم الهاتف",
    type: "tel",
    placeholder: "مثال: 0910000000",
    required: true,
    errorMessage: "يرجى إدخال رقم هاتف ليبي صحيح (مثال: 0911234567)"
  },
  {
    name: "address",
    label: "العنوان / المدينة",
    type: "text",
    placeholder: "مثال: طرابلس - حي الأندلس",
    required: false
  }
];

export const INSURANCE_TYPES_CONFIG = {
  personal: {
    label: "التأمين الشخصي",
    fields: [
      {
        name: "ageGroup",
        label: "الفئة العمرية",
        type: "select",
        options: ["اختر الفئة العمرية", "18 - 30 سنة", "31 - 50 سنة", "أكثر من 50 سنة"],
        required: true,
        errorMessage: "يرجى تحديد الفئة العمرية"
      },
      {
        name: "coverageDetails",
        label: "ملاحظات أو تغطيات خاصة",
        type: "textarea",
        placeholder: "اذكر أي تفاصيل إضافية تود حمايتها...",
        required: false
      }
    ]
  },
  health: {
    label: "التأمين الصحي",
    fields: [
      {
        name: "membersCount",
        label: "عدد الأفراد المراد تأمينهم",
        type: "number",
        placeholder: "مثال: 4",
        min: 1,
        required: true,
        errorMessage: "يرجى تحديد عدد الأفراد"
      },
      {
        name: "coverageLevel",
        label: "مستوى التغطية المطلوبة",
        type: "select",
        options: ["اختر المستوى", "تأمين صحي عائلي شامل", "تأمين صحي أفراد", "تأمين صحي للمؤسسات والشركات"],
        required: true,
        errorMessage: "يرجى اختيار مستوى التغطية"
      }
    ]
  },
  car: {
    label: "تأمين السيارات",
    fields: [
      {
        name: "carModel",
        label: "نوع وموديل السيارة",
        type: "text",
        placeholder: "مثال: تويوتا كامري 2022",
        required: true,
        errorMessage: "يرجى تحديد نوع وموديل السيارة"
      },
      {
        name: "manufactureYear",
        label: "سنة الصنع",
        type: "number",
        placeholder: "مثال: 2020",
        min: 1990,
        max: 2026,
        required: true,
        errorMessage: "يرجى إدخال سنة صنع صحيحة"
      },
      {
        name: "insuranceCategory",
        label: "نوع تغطية السيارة",
        type: "select",
        options: ["اختر نوع التغطية", "تأمين شامل", "تأمين ضد الغير (إجباري)"],
        required: true,
        errorMessage: "يرجى اختيار نوع التغطية"
      }
    ]
  },
  marine: {
    label: "التأمين البحري",
    fields: [
      {
        name: "cargoType",
        label: "نوع البضاعة / الشحنة / السفينة",
        type: "text",
        placeholder: "مثال: مواد غذائية / معدات ثقيلة",
        required: true,
        errorMessage: "يرجى توضيح نوع البضاعة أو السفينة"
      },
      {
        name: "shippingRoute",
        label: "مسار الشحن (من - إلى)",
        type: "text",
        placeholder: "مثال: من ميناء إسطنبول إلى ميناء طرابلس",
        required: true,
        errorMessage: "يرجى ذكر مسار الشحن"
      },
      {
        name: "estimatedValue",
        label: "القيمة التقديرية للبضاعة ($ / د.ل)",
        type: "text",
        placeholder: "مثال: 50,000 دولار",
        required: false
      }
    ]
  },
  aviation: {
    label: "التأمين الجوي",
    fields: [
      {
        name: "aviationType",
        label: "نوع الطائرة / الشحنة الجوية",
        type: "text",
        placeholder: "مثال: طائرة شحن / طرد تجاري",
        required: true,
        errorMessage: "يرجى إدخال تفاصيل الشحنة الجوية"
      },
      {
        name: "flightDetails",
        label: "خط الطيران / التفاصيل",
        type: "text",
        placeholder: "مثال: رحلة شحن من تونس إلى طرابلس",
        required: false
      }
    ]
  },
  travel: {
    label: "تأمين المسافرين",
    fields: [
      {
        name: "destination",
        label: "وجهة السفر (الدولة / المنطقة)",
        type: "text",
        placeholder: "مثال: دول الشنغن / تونس / تركيا",
        required: true,
        errorMessage: "يرجى ذكر وجهة السفر"
      },
      {
        name: "durationDays",
        label: "مدة السفر (بالأيام)",
        type: "number",
        placeholder: "مثال: 15",
        min: 1,
        required: true,
        errorMessage: "يرجى تحديد مدة السفر بالأيام"
      },
      {
        name: "travelersCount",
        label: "عدد المسافرين",
        type: "number",
        placeholder: "مثال: 2",
        min: 1,
        required: true,
        errorMessage: "يرجى إدخال عدد المسافرين"
      }
    ]
  },
  fire: {
    label: "تأمين الحريق",
    fields: [
      {
        name: "propertyType",
        label: "نوع العقار / المنشأة",
        type: "select",
        options: ["اختر نوع العقار", "منزل / فيلا مسكونة", "مبنى تجاري / مكاتب", "مستودع / مخزن", "مصنع / منشأة صناعية"],
        required: true,
        errorMessage: "يرجى اختيار نوع العقار"
      },
      {
        name: "propertyLocation",
        label: "موقع العقار بالتفصيل",
        type: "text",
        placeholder: "مثال: طرابلس - المنطقة الصناعية تاجوراء",
        required: true,
        errorMessage: "يرجى تحديد موقع العقار"
      }
    ]
  },
  engineering: {
    label: "التأمين الهندسي",
    fields: [
      {
        name: "projectType",
        label: "نوع المشروع الهندسي / المقاولات",
        type: "text",
        placeholder: "مثال: إنشاء مبنى سكني / تركيب شبكات",
        required: true,
        errorMessage: "يرجى ذكر نوع المشروع الهندسي"
      },
      {
        name: "projectDuration",
        label: "مدة تنفيذ المشروع",
        type: "text",
        placeholder: "مثال: 12 شهراً",
        required: true,
        errorMessage: "يرجى تحديد مدة تنفيذ المشروع"
      }
    ]
  }
};
