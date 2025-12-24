"use client";

import Script from "next/script";

export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do your services cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project is unique, so we provide custom quotes based on your specific requirements. Share your project details with us, and we'll provide a detailed, transparent quote within 24-48 hours. This ensures you pay a fair price for exactly what you need."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timeline depends on your project scope and complexity. Simple business websites: 2-4 weeks. E-commerce stores: 4-6 weeks. Custom applications: 6-12 weeks. We'll provide an exact timeline in your custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups and small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We customize our services to fit businesses of all sizes. Whether you're a startup, small business, or enterprise, we'll create a solution and pricing structure that works for your budget and goals."
        }
      },
      {
        "@type": "Question",
        "name": "What if I need changes after the project is complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All projects include a support period (duration specified in your quote). After that, we offer flexible maintenance options - either monthly retainer packages or hourly rates for one-off changes. We'll discuss this in your custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after I receive my quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you receive and acknowledge our quote, you're agreeing to our terms of service. We'll then proceed with a 20% deposit to begin work. The remaining 80% is due upon project completion. By acknowledging the quote, you also agree to our refund policy."
        }
      },
      {
        "@type": "Question",
        "name": "What is your refund policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you acknowledge and accept our custom quote, refunds are not available as we allocate resources and begin work on your project. All terms are clearly outlined in the quote you receive. We ensure complete transparency before you commit."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
