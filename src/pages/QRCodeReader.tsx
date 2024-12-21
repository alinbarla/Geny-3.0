import React from 'react';
import { FileUpload } from '../components/qr-reader/FileUpload';
import { ResultDisplay } from '../components/qr-reader/ResultDisplay';
import { ReaderSEO } from '../components/qr-reader/ReaderSEO';
import { ReadButton } from '../components/qr-reader/ReadButton';
import { useQRCodeReader } from '../hooks/useQRCodeReader';
import { AlertCircle, Sparkles, QrCode } from 'lucide-react';

const QRCodeReader: React.FC = () => {
  const { result, error, isProcessing, readQRCode, resetReader } = useQRCodeReader();
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [progress, setProgress] = React.useState(0);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setProgress(0);
    resetReader(); // Reset previous results when new file is selected
  };

  const handleRead = () => {
    if (!selectedFile) return;
    
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    readQRCode(selectedFile).finally(() => {
      clearInterval(interval);
      setProgress(100);
    });
  };

  return (
    <>
      <ReaderSEO />
      <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-purple-500" />
          Geny - QR Code Reader
        </h1>

        <div className="relative mb-8 p-6 bg-gradient-to-r from-purple-100/90 to-pink-100/90 rounded-2xl backdrop-blur-sm">
          <div className="absolute -top-3 -left-3 p-2 bg-white rounded-xl">
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-center text-gray-700 leading-relaxed">
            Upload a QR code image and instantly decode its contents. Our reader supports various QR code formats
            and provides quick results without any installation required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div id="qr-reader" className="hidden"></div>
            <FileUpload onFileSelect={handleFileSelect} />
            
            {selectedFile && (
              <ReadButton 
                onClick={handleRead}
                isReading={isProcessing}
                progress={progress}
              />
            )}

            {error && (
              <div className="p-4 bg-red-50 rounded-xl flex items-start gap-2 text-red-600">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Error reading QR code</p>
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              </div>
            )}
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            {result ? (
              <ResultDisplay result={result} />
            ) : (
              <div className="text-center text-gray-500">
                <QrCode className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Upload a QR code to see the results here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCodeReader;
