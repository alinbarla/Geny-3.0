import React, { useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';

interface StyledQRCodeProps {
  qrRef: React.MutableRefObject<QRCodeStyling | null>;
  value: string;
  foregroundColor: string;
  logo?: string;
  dotStyle: 'dots' | 'squares' | 'rounded' | 'classy' | 'extra-rounded';
  cornerStyle: 'dot' | 'square' | 'extra-rounded';
}

export const StyledQRCode: React.FC<StyledQRCodeProps> = ({
  qrRef,
  value,
  foregroundColor,
  logo,
  dotStyle,
  cornerStyle,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!qrRef.current) {
      qrRef.current = new QRCodeStyling({
        width: 300,
        height: 300,
        type: 'svg',
        data: value,
        dotsOptions: {
          color: foregroundColor,
          type: dotStyle,
        },
        cornersSquareOptions: {
          type: cornerStyle,
          color: foregroundColor,
        },
        cornersDotOptions: {
          type: cornerStyle,
          color: foregroundColor,
        },
        backgroundOptions: {
          color: 'transparent',
        },
        image: logo,
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 10,
          imageSize: 0.4,
          hideBackgroundDots: true,
        },
        qrOptions: {
          errorCorrectionLevel: 'H',
        },
      });
    }

    if (ref.current && qrRef.current) {
      ref.current.innerHTML = '';
      qrRef.current.append(ref.current);
    }
  }, []);

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.update({
        data: value,
        dotsOptions: {
          color: foregroundColor,
          type: dotStyle,
        },
        cornersSquareOptions: {
          type: cornerStyle,
          color: foregroundColor,
        },
        cornersDotOptions: {
          type: cornerStyle,
          color: foregroundColor,
        },
        backgroundOptions: {
          color: 'transparent',
        },
        image: logo,
      });
    }
  }, [value, foregroundColor, logo, dotStyle, cornerStyle]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div ref={ref} className="qr-code" />
    </div>
  );
};