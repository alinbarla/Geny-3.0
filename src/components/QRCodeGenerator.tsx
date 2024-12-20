import React from 'react';
import { URLInput } from './URLInput';
import { StyledQRCode } from './StyledQRCode';
import { DotStylePicker } from './styling/DotStylePicker';
import { CornerStylePicker } from './styling/CornerStylePicker';
import { SocialLogos } from './logos/SocialLogos';
import { Description } from './Description';
import { ThemeSelector } from './styling/ThemeSelector';
import { useQRCode } from '../hooks/useQRCode';
import { Wand2, Sparkles } from 'lucide-react';

const QRCodeGenerator: React.FC = () => {
  const {
    url,
    setUrl,
    error,
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
  } = useQRCode();

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 flex items-center justify-center gap-3">
        <Wand2 className="w-8 h-8 text-purple-500" />
        Geny - Free QR Code Generator
      </h1>
      
      <Description />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col items-center gap-8">
          <div className="w-full max-w-[400px] aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 md:p-16 shadow-lg">
            <StyledQRCode
              qrRef={qrRef}
              value={url || 'https://google.com'}
              foregroundColor={foregroundColor}
              logo={logo}
              dotStyle={dotStyle}
              cornerStyle={cornerStyle}
            />
          </div>
          <SocialLogos 
            onSelect={handleLogoSelect} 
            selectedLogo={selectedLogoName}
            onFileUpload={handleLogoUpload}
            onClear={clearLogo}
          />
        </div>

        <div className="flex-1 space-y-8">
          <div className="bg-purple-50 rounded-2xl p-6 space-y-6">
            <URLInput 
              url={url} 
              setUrl={setUrl} 
              onDownload={downloadQRCode}
              error={error}
            />
            <ThemeSelector onChange={updateColors} />
            <DotStylePicker value={dotStyle} onChange={setDotStyle} />
            <CornerStylePicker value={cornerStyle} onChange={setCornerStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;