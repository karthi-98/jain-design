import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/assets/og-image.jpg',
  ogType = 'website',
  keywords,
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Update primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);

    if (canonical) {
      updateMetaTag('og:url', canonical, true);
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    if (canonical) {
      updateMetaTag('twitter:url', canonical);
    }

    // Update canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');

      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }

      linkElement.setAttribute('href', canonical);
    }
  }, [title, description, canonical, ogImage, ogType, keywords]);

  return null;
};

export default SEO;
