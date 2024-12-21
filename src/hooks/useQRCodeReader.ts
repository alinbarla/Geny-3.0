import { useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export const useQRCodeReader = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const resetReader = () => {
    setResult(null);
    setError(null);
    setIsProcessing(false);
  };

  const readQRCode = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      const html5QrCode = new Html5Qrcode("qr-reader");
      
      try {
        const decodedText = await html5QrCode.scanFile(file, true);
        setResult(decodedText);
      } catch (err) {
        setError("Could not find a valid QR code in the image.");
      }
      
      html5QrCode.clear();
    } catch (err) {
      setError("An error occurred while processing the image.");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    result,
    error,
    isProcessing,
    readQRCode,
    resetReader
  };
};
