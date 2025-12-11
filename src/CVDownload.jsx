import React, { useState } from 'react';

const CVDownload = () => {
  const [error, setError] = useState(false);
  
  // Vaš glavni Google Drive link
  const googleDriveLink = "https://drive.google.com/file/d/1Xbo1sp01gKg_k1LpikLCNhLEHjIODVCZ/preview";
  
  // Fallback link ako Google Drive ne radi
  const directPdfLink = "/documents/cv.pdf";
  
  const handleClick = (e) => {
    // Proverava da li je mobilni
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Za mobilni, probaj Google Drive prvo
      window.open(googleDriveLink, '_blank');
    } else {
      // Za desktop, normalno otvori
      // Ne radimo ništa posebno - browser će otvoriti
    }
  };

  return (
    <a
      href={googleDriveLink}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2.5 font-['Inter'] font-medium text-white rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
    >
      {error ? 'Preuzmi CV' : 'Pogledaj CV'}
    </a>
  );
};

export default CVDownload;