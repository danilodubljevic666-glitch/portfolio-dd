import React, { useState, useEffect } from 'react';

const CVDownload = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Detektuj mobilni uređaj
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Funkcija za download sa fallback-om
  const handleDownload = (fileType) => {
    const files = {
      pdf: '/cv/cv.pdf',
      jpg: '/cv/cv_mobile.jpg',
      html: '/cv/cv.html'
    };

    const link = document.createElement('a');
    link.href = files[fileType];
    
    if (fileType === 'pdf') {
      link.download = 'Moj_CV.pdf';
    } else if (fileType === 'jpg') {
      link.download = 'Moj_CV.jpg';
    } else {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowOptions(false);
  };

  // Google Drive preview link
  const googleDrivePreview = "https://drive.google.com/drive/u/0/folders/1zmrJ9fTswrE9rU8NHJukFqqkn7y6z81x";

  return (
    <div className="relative">
      {/* Glavno dugme */}
      <button
        onClick={() => isMobile ? setShowOptions(!showOptions) : handleDownload('pdf')}
        className="px-6 py-2.5 font-['Inter'] font-medium text-white rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
      >
        <span>Preuzmi CV</span>
        {isMobile && (
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {/* Opcije za mobilni (dropdown) */}
      {isMobile && showOptions && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="py-1">
            <button
              onClick={() => handleDownload('pdf')}
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <div className="font-medium">PDF verzija</div>
                <div className="text-xs text-gray-400">Za kompjuter</div>
              </div>
            </button>

            <button
              onClick={() => handleDownload('jpg')}
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 border-t border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="font-medium">Slikovna verzija</div>
                <div className="text-xs text-gray-400">Za telefon</div>
              </div>
            </button>

            <button
              onClick={() => handleDownload('html')}
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 border-t border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div>
                <div className="font-medium">Online pregled</div>
                <div className="text-xs text-gray-400">Otvori u browseru</div>
              </div>
            </button>

            <a
              href={googleDrivePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 border-t border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
              </svg>
              <div>
                <div className="font-medium">Google Drive</div>
                <div className="text-xs text-gray-400">Universalni pregled</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Desktop hover options (tooltip) */}
      {!isMobile && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="p-3">
            <p className="text-sm text-gray-300 mb-2">Izaberite format:</p>
            <div className="space-y-2">
              <button
                onClick={() => handleDownload('pdf')}
                className="w-full text-left px-3 py-2 text-sm rounded hover:bg-white/10 transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-blue-400">📄</span>
                <span>PDF (profesionalno)</span>
              </button>
              <button
                onClick={() => handleDownload('html')}
                className="w-full text-left px-3 py-2 text-sm rounded hover:bg-white/10 transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-green-400">🌐</span>
                <span>Online verzija</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVDownload;