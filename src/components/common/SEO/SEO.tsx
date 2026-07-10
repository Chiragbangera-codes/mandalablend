import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface ProductSchemaData {
  name: string;
  description: string;
  category: string;
  image: string;
  price?: number;
  originalPrice?: number;
  customizable: boolean;
  slug: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  ogType?: 'website' | 'product';
  ogImage?: string;
  productData?: ProductSchemaData;
  faqData?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogType = 'website',
  ogImage = '/logo.png',
  productData,
  faqData,
  breadcrumbs,
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://themandalablend.in${pathname}`;

  useEffect(() => {
    // 1. Dynamic Page Metadata
    document.title = title;

    // Helper functions for meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);

    // 2. Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Open Graph Metadata
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage.startsWith('http') ? ogImage : `https://themandalablend.in${ogImage}`);
    setMetaTag('property', 'og:site_name', 'The Mandala Blend');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `https://themandalablend.in${ogImage}`);

    // Helper for script tags
    const setJsonLd = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    // 5. JSON-LD Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://themandalablend.in/#organization',
      'name': 'The Mandala Blend',
      'url': 'https://themandalablend.in',
      'logo': 'https://themandalablend.in/logo.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91 81977 18018',
        'contactType': 'customer service',
        'email': 'themandalablend@gmail.com',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi', 'kn']
      },
      'sameAs': [
        'https://www.instagram.com/themandalablend?igsh=OGNyd2U1bDRzOXd1'
      ]
    };
    setJsonLd('schema-org', orgSchema);

    // 6. JSON-LD WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://themandalablend.in/#website',
      'url': 'https://themandalablend.in',
      'name': 'The Mandala Blend',
      'publisher': {
        '@id': 'https://themandalablend.in/#organization'
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://themandalablend.in/collections?search={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    };
    setJsonLd('schema-website', websiteSchema);

    // 7. JSON-LD Product Schema
    if (productData) {
      const prodSchema: Record<string, any> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': productData.name,
        'description': productData.description,
        'image': productData.image.startsWith('http') ? productData.image : `https://themandalablend.in${productData.image}`,
        'category': productData.category,
        'brand': {
          '@type': 'Brand',
          'name': 'The Mandala Blend'
        },
        'url': `https://themandalablend.in/collections/${productData.slug}`,
        'offers': {
          '@type': 'Offer',
          'url': `https://themandalablend.in/collections/${productData.slug}`,
          'priceCurrency': 'INR',
          'price': productData.price,
          'itemCondition': 'https://schema.org/NewCondition',
          'availability': 'https://schema.org/InStock'
        }
      };

      // If price is not fixed/customizable, omit the Offer object
      if (productData.price === undefined || productData.price === 0) {
        delete prodSchema.offers;
      }
      setJsonLd('schema-product', prodSchema);
    } else {
      const existing = document.getElementById('schema-product');
      if (existing) existing.remove();
    }

    // 8. JSON-LD Breadcrumbs Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': b.name,
          'item': b.item
        }))
      };
      setJsonLd('schema-breadcrumbs', breadSchema);
    } else {
      const existing = document.getElementById('schema-breadcrumbs');
      if (existing) existing.remove();
    }

    // 9. JSON-LD FAQ Schema
    if (faqData && faqData.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqData.map((f) => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      };
      setJsonLd('schema-faq', faqSchema);
    } else {
      const existing = document.getElementById('schema-faq');
      if (existing) existing.remove();
    }
  }, [title, description, ogType, ogImage, productData, faqData, breadcrumbs, canonicalUrl]);

  return null;
};

export default SEO;
