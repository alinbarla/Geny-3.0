import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ReaderSEO: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free QR Code Reader - Scan QR Codes Online | QR Code Geny</title>
        <meta name="description" content="Free online QR code reader. Scan and decode QR codes directly in your browser. Upload QR code images and instantly view their contents. No app installation required." />
        <meta name="keywords" content="QR code reader, QR code scanner, scan QR code online, free QR code reader, QR code decoder" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free QR Code Reader - Scan QR Codes Online" />
        <meta property="og:description" content="Free online QR code reader. Scan and decode QR codes directly in your browser. No app installation required." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1622836829380-5f28b824e6ce?auto=format&fit=crop&q=80" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free QR Code Reader - Scan QR Codes Online" />
        <meta name="twitter:description" content="Free online QR code reader. Scan and decode QR codes directly in your browser. No app installation required." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1622836829380-5f28b824e6ce?auto=format&fit=crop&q=80" />
      </Helmet>

      {/* Hidden keywords for SEO */}
      <div className="sr-only" aria-hidden="true">
        QR code reader QR code scanner Free QR code scanner QR code reader online
        Scan QR code QR code scanner for Android QR code scanner for iPhone
        Scan QR code with phone QR code scanner free QR code reader for website
        QR code scanner for PC QR code reader for laptop QR code scanner for Mac
        QR code scanner for Windows QR code reader for desktop QR code reader camera
        QR code scanner online free QR code scanner for Chrome QR code reader extension
        QR code reader plugin QR code reader tool Best QR code reader
        QR code scanner for URL QR code reader with history Scan QR code without app
        QR code scanner for free download Mobile QR code reader QR code reader for iPad
        QR code reader for tablet QR code scanner for barcode Scan QR code with webcam
        QR code reader for websites QR code reader for QR code links
        QR code scanner for payment QR code scanner for e-commerce
        QR code reader for contact details QR code scanner for event tickets
        QR code scanner for Wi-Fi Scan QR code for restaurant menu
        Scan QR code for promotions QR code reader for payments
        QR code reader for marketing Free QR code reader download
        Open QR code with camera QR code reader with camera
        QR code scanner for product QR code scanner for coupons
        QR code scanner for discount codes QR code scanner for PDF
        QR code scanner for videos QR code scanner for messages
        Scan QR code for links QR code reader to open links
        Scan QR code for social media QR code scanner for event registration
        QR code scanner for email QR code scanner for website visit
        QR code scanner for promotions and discounts
        QR code reader for contact information Scan QR code for app download
        QR code reader for files QR code reader for text
        QR code reader with logo QR code scanner for feedback
        Scan QR code for survey QR code scanner for video
        QR code scanner for Google Drive Scan QR code to join WhatsApp
        QR code scanner for Wi-Fi login QR code scanner for Google Sheets
        QR code reader for tickets Scan QR code for ticketing systems
        QR code scanner for restaurant orders Scan QR code for delivery
        QR code reader for flight check-in QR code reader for membership cards
        QR code reader for loyalty cards QR code reader for brochures
        QR code reader for vouchers QR code reader for product reviews
        Scan QR code to access content QR code scanner for educational content
        QR code scanner for interactive content
        QR code scanner for coupons and deals
        QR code reader for customer feedback Scan QR code for event updates
        Scan QR code for event info QR code scanner for newsletters
        QR code reader with link shortener QR code scanner with data tracking
        Scan QR code for web links Scan QR code for PDF documents
        Scan QR code for files and folders QR code scanner for safe browsing
        QR code scanner for shopping
        QR code scanner for payments and transactions
        QR code scanner for promotions and offers
        QR code scanner for discounts and deals
        QR code reader for customer service
        Scan QR code for product information
      </div>
    </>
  );
};