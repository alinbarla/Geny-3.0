import { useState, useCallback, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { socialLogoPaths } from '../components/logos/socialLogoPaths';

type DotStyle = 'dots' | 'squares' | 'rounded' | 'classy' | 'extra-rounded';
type CornerStyle = 'dot' | 'square' | 'extra-rounded';

export const useQRCode = () => {
  const qrRef = useRef<QRCodeStyling | null>(null);
  const [url, setUrl] = useState('');
  const [foregroundColor, setForegroundColor] = useState('#553C9A');
  const [backgroundColor, setBackgroundColor] = useState('#ebf8ff');
  const [logo, setLogo] = useState<string>('');
  const [selectedLogoName, setSelectedLogoName] = useState<string | null>(null);
  const [dotStyle, setDotStyle] = useState<DotStyle>('rounded');
  const [cornerStyle, setCornerStyle] = useState<CornerStyle>('extra-rounded');

  const updateColors = ({
    fg,
    bg,
  }: {
    fg?: string;
    bg?: string;
  }) => {
    if (fg) setForegroundColor(fg);
    if (bg) setBackgroundColor(bg);
  };

  const handleLogoSelect = (name: string) => {
    const selectedLogo = socialLogoPaths.find(logo => logo.name === name);
    if (selectedLogo) {
      setSelectedLogoName(name);
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${selectedLogo.color}"><path d="${selectedLogo.path}"/></svg>`;
      const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      setLogo(url);
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedLogoName(null);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearLogo = () => {
    setLogo('');
    setSelectedLogoName(null);
  };

  const downloadQRCode = useCallback(() => {
    if (qrRef.current) {
      qrRef.current.download({
        extension: 'png',
        name: 'qr-code',
      });
    }
  }, []);

  return {
    url,
    setUrl,
    foregroundColor,
    backgroundColor,
    logo,
    selectedLogoName,
    dotStyle,
    setDotStyle,
    cornerStyle,
    setCornerStyle,
    updateColors,
    handleLogoSelect,
    handleLogoUpload,
    clearLogo,
    downloadQRCode,
    qrRef
  };
};