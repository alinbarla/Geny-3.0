import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'QR Code Geny - Free QR Code Generator',
  description = 'Create stunning, customizable QR codes with QR Code Geny. Add custom logos, colors, and styles to make your QR codes stand out.',
  keywords = 'qr code generator, custom qr code, qr code design, qr code with logo, branded qr code',
  image = 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?auto=format&fit=crop&q=80',
  url = 'https://comfy-valkyrie-3b5e1a.netlify.app',
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B5CF6" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};