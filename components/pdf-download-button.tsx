'use client';

import { useState } from 'react';

export default function PDFDownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    try {
      // Dynamically import html2pdf.js only on client-side when needed
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = document.documentElement;
      const opt = {
        margin: 10,
        filename: 'CMA4002-Architectural-Design.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      };
      
      html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isLoading}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d669] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 disabled:opacity-50"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8H3m18 0h3" />
      </svg>
      {isLoading ? 'Generating PDF...' : 'Download as PDF'}
    </button>
  );
}
