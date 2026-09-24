MASTER SPECIFICATION --- North Africa Insurance Landing Page

Version: 1.0 --- Implementation Ready

Instruction to Codex: This document is the single source of truth for
the project. Implement the website directly according to these
specifications. Do not redesign, add new sections, change approved UX
decisions, or ask unnecessary clarification questions. When a value is
explicitly marked as pending/placeholder, keep it isolated in
configuration/data so it can be replaced without changing the UI
architecture.

1.  Project Identity

Company: شمال أفريقيا للتأمين English: North Africa Insurance

Project Type: Professional corporate insurance landing page.

Primary Language: Arabic.

Direction: RTL.

Target Market: Libya.

Primary audience: Individuals, families, travelers, vehicle owners,
businesses and organizations looking for insurance services in Libya.

Main objectives Present North Africa Insurance professionally. Build
trust. Explain the available insurance services. Make contacting the
company easy. Allow visitors to submit an insurance request through the
smart form. Transfer the submitted request to WhatsApp. Provide company
location and Google Maps access. Make the website search-engine
friendly. Optimize heavily for mobile users. Keep the implementation
lightweight and fast. 2. Non-Negotiable Rules

Codex MUST:

Keep the website Arabic RTL. Keep the approved section order. Keep the
approved Footer. Keep the approved Smart Insurance Form concept. Keep
WhatsApp as the submission destination. Keep Google Maps location
access. Keep the approved "لماذا نحن؟" section. Implement SEO from the
beginning. Use semantic HTML. Optimize for mobile. Avoid unnecessary
dependencies. Avoid unnecessary animations. Avoid bloated JavaScript.
Avoid keyword stuffing. Avoid fake company information. Avoid inventing
certifications, statistics, awards, branches, partners or claims. Avoid
adding sections that are not specified here. Avoid replacing approved
copy with AI-generated alternatives. Avoid asking for clarification when
the specification already provides the answer. 3. Final Page Structure

The page MUST follow this order:

Navbar ↓ Hero ↓ من نحن ↓ خدمات التأمين ↓ لماذا نحن؟ ↓ نموذج طلب التأمين
الذكي ↓ الموقع / Google Maps ↓ التواصل ↓ Footer

Do not change this order unless technically required.

4.  Navbar Purpose

Simple professional navigation that allows the user to move between the
main sections.

Requirements RTL. Responsive. Desktop navigation. Mobile navigation.
Company logo/brand identity. Clear CTA leading to the insurance request
form. Sticky/fixed behavior only if it does not negatively affect
performance or UX. Smooth scrolling between sections. Navigation targets

Use the actual section IDs:

#home #about #services #why-us #insurance-request #location #contact

The exact visible Arabic labels should correspond to the approved
sections.

Mobile

On mobile:

Use a compact menu. Keep the CTA easily accessible. Avoid an oversized
navigation panel. Ensure the menu closes after selecting a section. 5.
Hero Section Purpose

The Hero is the first visual and informational impression.

It must immediately communicate:

Company identity. Insurance context. Professionalism. Main value
proposition. Clear next action. Approved main message

Use:

تأمينك لرؤية حديثة --- معكم لغد أكثر أماناً

Do not replace this with a new slogan.

Hero requirements

Include:

Main heading. Supporting short description. Primary CTA. Secondary
navigation/action if already included in the approved design.
Appropriate visual/brand imagery. Primary CTA

The main CTA should lead toward the insurance request/contact journey.

Example implementation label should use the approved Arabic wording from
the design rather than inventing a new marketing slogan.

SEO

The Hero must contain the page's primary H1.

The H1 should naturally identify the company and/or its insurance
offering.

There must be one primary H1 only.

6.  About --- من نحن Purpose

Introduce North Africa Insurance and establish credibility.

This section must answer:

Who is the company? What does it provide? Who does it serve? What is its
general purpose? Design

Keep it concise.

Do not turn it into a long corporate history.

Do not invent:

Establishment dates. Capital figures. Number of employees. Number of
customers. Awards. Certifications. Partnerships.

unless those values are explicitly provided in the approved content.

SEO

Use an H2:

من نحن

Naturally mention the company name:

شمال أفريقيا للتأمين

without repeating it unnaturally.

7.  Insurance Services Purpose

Clearly show the insurance services offered by the company.

Approved service categories التأمين الشخصي التأمين الصحي تأمين السيارات
التأمين البحري التأمين الجوي تأمين المسافرين تأمين الحريق التأمين
الهندسي

These services should be represented naturally.

Service cards

Each service card should contain:

Icon/visual. Service name. Short description. Optional action connected
to the insurance request.

Do not create long paragraphs.

Important

The descriptions must be factually safe.

Do not claim coverage details, exclusions, compensation amounts or
policy conditions unless supplied by the company.

8.  Why Us --- لماذا نحن؟ Status 🔒 APPROVED --- DO NOT REDESIGN

This section was already agreed upon in the previous project work.

Codex must use the previously approved Why Us design/content, not
generate a new version.

Purpose

Communicate the reasons a customer should feel confident dealing with
North Africa Insurance.

Implementation rules Keep the approved visual structure. Keep the
approved copy. Keep the approved number of items/cards. Keep the
approved icons/visual hierarchy. Do not add artificial statistics. Do
not invent guarantees. Do not replace approved content with generic AI
marketing text. 9. Smart Insurance Request Form Status 🔒 APPROVED CORE
FEATURE

This is one of the most important interactive elements of the website.

The purpose is to make requesting insurance easy without requiring a
backend system in the first version.

User flow User opens form ↓ Chooses insurance type ↓ Form displays
relevant fields ↓ User fills information ↓ Client-side validation ↓ User
clicks Submit ↓ Website creates WhatsApp message ↓ WhatsApp opens ↓
Customer sends prepared request 9.1 Base fields

The form should support the agreed basic information:

الاسم العنوان رقم الهاتف نوع التأمين

Additional fields should appear according to the selected insurance
type.

9.2 Dynamic fields

The form must be data-driven.

Do NOT build eight completely separate forms.

Instead use a configuration structure similar to:

insuranceTypes = { personal: {...}, health: {...}, car: {...}, marine:
{...}, aviation: {...}, travel: {...}, fire: {...}, engineering: {...} }

Each type defines its relevant fields.

This makes the form easy to maintain.

10. Form Validation

Validation must happen before generating the WhatsApp message.

Minimum validation:

Name Required. Reasonable minimum length. Phone Required. Accept Libyan
phone formats. Do not unnecessarily reject valid formats. Insurance type
Required. Dynamic fields Required only when relevant.

Display errors in Arabic.

Errors should appear next to the relevant field.

Do not use browser-only English validation messages where possible.

11. WhatsApp Integration

The website does not need a backend to send the first version of the
request.

The frontend generates a structured Arabic message.

Example structure:

طلب تأمين جديد

الاسم: ... رقم الهاتف: ... العنوان: ... نوع التأمين: ...

تفاصيل إضافية: ...

Then encode the message correctly and open the WhatsApp link.

Important

The WhatsApp number must be stored in one configuration location, not
duplicated throughout the code.

Example:

const COMPANY_WHATSAPP = "...";

Use the real approved company WhatsApp number when supplied.

Do not invent a number.

12. User Experience for WhatsApp

Before redirecting:

Validate all required fields. Generate readable Arabic text. URL-encode
the message. Open WhatsApp using the appropriate link format. Prefer
opening WhatsApp on mobile and WhatsApp Web/Desktop where appropriate.

The form must not falsely tell the user that the request was received by
the company.

Correct wording should make clear that:

the request is prepared and the user needs to send it through WhatsApp.

13. Location Section Status 🔒 APPROVED

The page includes the company's location.

It should contain:

Location information. Elegant map/location visual. CTA:

فتح الموقع في Google Maps

The Google Maps action should open the official/company-approved map
location.

Do not invent coordinates.

If an official Google Maps URL is already available in the project
assets/configuration, use it.

Keep the location URL in configuration rather than hardcoding it across
components.

14. Contact Section

Provide the approved contact channels.

At minimum support:

Phone. WhatsApp. Location.

Known approved phone/contact data should be used exactly as supplied.

Do not fabricate:

Email. Facebook. Instagram. LinkedIn. Fax. Additional phone numbers.

If a channel has not been officially supplied, leave it out rather than
inventing it.

15. Footer Status 🔒 FINAL --- DO NOT REDESIGN

The Footer that was previously approved is the final Footer.

Codex must reproduce the approved Footer structure and content.

Do not:

Add random links. Add unnecessary social media. Change the visual
hierarchy. Add generic copyright text if it conflicts with the approved
design. Redesign it.

SEO additions are allowed only where they do not alter the approved
visual design.

16. SEO Architecture

SEO is a core project requirement.

It must be implemented from the beginning.

16.1 Title

The page title should naturally target the company name and core
service.

Recommended structure:

شمال أفريقيا للتأمين \| خدمات التأمين في ليبيا

Do not stuff multiple keywords into the title.

17. Meta Description

Create a concise Arabic description naturally describing the company and
services.

Example direction:

شمال أفريقيا للتأمين تقدم مجموعة من خدمات التأمين للأفراد والأعمال في
ليبيا، بما يشمل تأمين السيارات والتأمين الصحي وتأمين المسافرين وغيرها.

Keep it readable and natural.

Do not turn the description into a keyword list.

18. Keywords / Search Intent

Do not create a visible keyword block.

The site should naturally cover search intent around:

شمال أفريقيا للتأمين شركة شمال أفريقيا للتأمين شركات التأمين في ليبيا
تأمين السيارات التأمين الصحي تأمين المسافرين التأمين البحري التأمين
الجوي تأمين الحريق التأمين الهندسي خدمات التأمين في ليبيا

These should appear naturally through:

headings service names descriptions page content metadata structured
data Absolutely prohibited

Keyword stuffing such as:

تأمين سيارات ليبيا، تأمين سيارات طرابلس، تأمين سيارات ليبيا...

repeated unnaturally.

19. Heading Hierarchy

Use semantic heading hierarchy.

Example:

H1 └── الصفحة الرئيسية / هوية الشركة

H2 ├── من نحن ├── خدمات التأمين ├── لماذا نحن؟ ├── طلب التأمين ├──
موقعنا └── تواصل معنا

H3 └── Individual service titles/cards

Only one H1.

Do not use headings simply to achieve visual font sizes.

20. Canonical

Add:

`<link rel="canonical" href="https://DOMAIN/" />`{=html}

The final domain must be inserted once confirmed.

Do not hardcode multiple competing canonical URLs.

21. Open Graph

Implement Open Graph metadata:

og:title og:description og:type og:url og:image og:locale

Arabic locale should be:

ar_LY

Use an appropriate company/social preview image.

Do not create a huge OG image unnecessarily.

22. Structured Data --- JSON-LD

Implement valid Schema.org JSON-LD.

Use the appropriate organization/business schema based only on verified
company information.

Minimum direction:

{ "@context": "https://schema.org", "@type": "InsuranceAgency", "name":
"شمال أفريقيا للتأمين", "url": "https://DOMAIN/" }

Add only verified:

phone address logo location sameAs services

Do not invent values.

Validate the JSON-LD before deployment.

23. robots.txt

Create:

robots.txt

Basic structure:

User-agent: \* Allow: /

Sitemap: https://DOMAIN/sitemap.xml

Replace DOMAIN with the actual production domain.

24. sitemap.xml

Create a valid XML sitemap.

For the single-page website, the main production URL is sufficient
initially.

Example:

```{=html}
<?xml version="1.0" encoding="UTF-8"?>
```
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`{=html}
`<url>`{=html} `<loc>`{=html}https://DOMAIN/`</loc>`{=html}
`</url>`{=html} `</urlset>`{=html}

Do not include development URLs.

25. Google Search Console

This is a deployment step, not something that needs to be simulated
inside the website.

After deployment:

Add the domain/property to Google Search Console. Verify ownership.
Submit: /sitemap.xml Inspect the homepage URL. Request indexing when
appropriate. Monitor indexing and search performance. 26. Arabic / RTL

The document must declare Arabic:

```{=html}
<html lang="ar" dir="rtl">
```
Use logical CSS properties where appropriate:

margin-inline padding-inline inset-inline text-align: start

Avoid unnecessary left/right hardcoding.

Ensure:

Arabic typography is readable. Numbers remain readable. Phone numbers
behave correctly. Form fields work naturally in RTL. WhatsApp-generated
content remains readable. 27. Accessibility

Implement basic WCAG-friendly practices.

Images

Every meaningful image:

alt="..."

Decorative images:

alt="" Buttons

Buttons must have meaningful labels.

Forms

Every field must have a proper label.

Do not rely solely on placeholders.

Focus

Keyboard focus must remain visible.

Contrast

Text must have sufficient contrast.

Motion

Do not use excessive animations.

Respect:

prefers-reduced-motion

where animations exist.

28. Performance

Performance is especially important for mobile.

Images

Use:

WebP or AVIF where supported. Proper dimensions. Compression. Responsive
image sizes.

Do not load a 4K image if the user only needs a 600px display.

Lazy Loading

Images below the initial viewport should use lazy loading where
appropriate.

The main Hero image should not be lazily loaded if that would delay the
LCP element.

29. Fonts

Use a suitable Arabic font.

Do not import several font families unnecessarily.

Prefer:

one primary Arabic font family; limited font weights.

If using Google Fonts, ensure the implementation does not unnecessarily
damage performance.

30. JavaScript

Keep JavaScript minimal.

Do not install a library for something that can be done with native
JavaScript/React capabilities.

JavaScript is primarily needed for:

mobile navigation smooth interactions smart form validation WhatsApp
message generation small UI interactions 31. Animations

Use subtle animations only.

Examples:

fade/slide on section entry hover states button transitions

Avoid:

excessive parallax heavy animation libraries animated backgrounds
continuous movement

The website should feel professional, not like a promotional gaming
website.

32. Responsive Design

Must support at minimum:

Mobile Tablet Desktop Large Desktop

Priority:

1.  Mobile
2.  Tablet
3.  Desktop

The mobile version must not simply be a compressed desktop layout.

33. Mobile UX

The following are especially important:

Large enough touch targets. Easy-to-use form. Phone number clickable.
WhatsApp CTA easily accessible. No horizontal scrolling. No tiny text.
No oversized Hero. Cards stack correctly. Navigation works correctly.
Map/location CTA works correctly. 34. Project Architecture

Use a clean maintainable structure.

Recommended structure:

src/ ├── components/ │ ├── Navbar │ ├── Hero │ ├── About │ ├── Services
│ ├── WhyUs │ ├── InsuranceForm │ ├── Location │ ├── Contact │ └──
Footer │ ├── data/ │ ├── services │ └── insuranceForm │ ├── config/ │
└── company │ ├── assets/ │ ├── images │ ├── icons │ └── logo │ └── ...

The exact framework structure may follow the selected framework
conventions.

The important requirement is separation of:

UI content/data company configuration assets logic 35. Company
Configuration

Centralize company information.

For example:

const company = { name: "شمال أفريقيا للتأمين", phone: "...", whatsapp:
"...", address: "...", mapsUrl: "...", website: "..." };

Do not scatter these values throughout components.

This allows the company information to be changed later without
searching through the entire codebase.

36. Service Data

Services should be data-driven.

Example:

\[ { id: "car", title: "تأمين السيارات", description: "...", icon: "..."
}\]

This makes it easy to:

reorder services edit descriptions add/remove services reuse service
information

without rewriting the UI.

37. Code Quality

Codex must:

Use reusable components. Avoid duplicated code. Use meaningful variable
names. Keep components reasonably sized. Keep configuration separate
from UI. Avoid unnecessary abstractions. Avoid overengineering.

The project is a professional landing page, not a large enterprise
application.

38. SEO-Friendly URLs / IDs

Use readable IDs:

home about services why-us insurance-request location contact

These IDs support navigation and accessibility.

39. Error Handling

The site should gracefully handle:

Empty form fields. Invalid phone. Missing dynamic fields. WhatsApp
unavailable. Broken map URL.

Do not show technical errors to normal users.

40. Security

Even though there is no backend in the first version:

Do not expose API keys. Do not place secrets in frontend code. Do not
collect unnecessary personal information. Do not use external scripts
unnecessarily. Do not include tracking scripts unless explicitly
approved. 41. No Backend Requirement for V1

The first version does not require:

database authentication admin dashboard API server-side form processing

The insurance request flow is:

Frontend Form → Validation → WhatsApp message → User sends message

This keeps the project lightweight and suitable for the current
deployment.

42. Content Safety / Accuracy

This is a real insurance company website.

Therefore:

Never invent company claims.

Do not write things such as:

"أكبر شركة تأمين في ليبيا"

unless officially provided.

Do not write:

"نضمن لك..."

unless officially approved.

Do not invent:

awards licenses years of experience number of clients coverage amounts
branches partners guarantees

Professional credibility comes from accurate information, not
exaggerated marketing.

43. SEO Content Principle

The goal is:

First:

Excellent website for humans.

Then:

Excellent structure for search engines.

Do not sacrifice UX for SEO.

Google optimization must come naturally from:

useful content clear structure semantic HTML correct metadata fast
performance mobile usability structured data crawlability 44. Production
Checklist

Before declaring the project finished, Codex must verify:

UI Navbar works. Mobile menu works. Hero works. About works. Services
display correctly. Why Us matches approved design. Smart form works.
Dynamic fields work. Validation works. WhatsApp message generation
works. Location button works. Contact section works. Footer matches
approved design. RTL lang="ar" dir="rtl" No RTL layout bugs. Phone
numbers display correctly. Form works correctly. SEO One H1. Correct
H2/H3 hierarchy. Title. Meta description. Canonical. Open Graph.
JSON-LD. robots.txt. sitemap.xml. Image alt text. Semantic HTML.
Performance Images compressed. No unnecessary libraries. No unnecessary
JavaScript. Mobile optimized. No horizontal overflow. Fonts optimized.
Lazy loading implemented appropriately. Lighthouse checked. Final
Production build succeeds. No console errors. No broken links. No
missing assets. No placeholder text remains. No invented company
information remains. Production domain configured. Sitemap uses
production domain. 45. Deployment Structure

The final production deployment must contain at minimum:

/ ├── index.html ├── robots.txt ├── sitemap.xml ├── assets/ └──
application files

depending on the selected framework/build system.

The production domain must be used consistently in:

canonical sitemap Open Graph URL Schema robots.txt 46. Final Codex
Execution Instruction

START IMPLEMENTATION DIRECTLY.

Do not spend the initial task on explaining what you intend to build.

Do not redesign the project.

Do not propose alternative layouts.

Do not add sections.

Do not replace approved copy.

Do not ask unnecessary questions.

First inspect the existing project/repository and determine the current
framework and existing files.

Then:

Preserve useful existing work. Implement the approved page structure.
Implement the approved design. Implement the Smart Insurance Form.
Implement WhatsApp integration. Implement responsive behavior. Implement
SEO. Implement structured data. Implement robots.txt. Implement
sitemap.xml. Optimize assets. Run the production build. Fix errors.
Perform a final responsive/SEO/accessibility check.

If a required company value is genuinely missing, do not invent it. Put
it in the centralized configuration as a clearly marked placeholder and
continue implementing the rest of the website.

🔒 PROJECT LOCK

The following decisions are LOCKED and must not be reopened during
implementation:

Arabic RTL Corporate + modern visual direction Single landing page
Approved Navbar Approved Hero Approved About section Approved Services
section Approved Why Us section Approved Smart Insurance Form WhatsApp
submission Google Maps location Approved Contact section Approved Footer
SEO from day one Mobile-first optimization Natural SEO --- no keyword
stuffing

This document is the implementation contract.

Codex should prioritize execution over discussion.
