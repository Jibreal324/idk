'use client';

import { useState } from 'react';

export default function PDFDownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    try {
      // Dynamically import html2pdf.js and jspdf
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;
      
      // Get the main content area
      const element = document.querySelector('main');
      if (!element) {
        throw new Error('Main content not found');
      }

      // Get current theme for PDF background
      const isDark = document.documentElement.classList.contains('dark');
      const bgColor = isDark ? '#0a0a0a' : '#fafaf9';
      const textColor = isDark ? '#ffffff' : '#1c1917';

      const opt = {
        margin: [10, 10, 10, 10],
        filename: 'CMA4002-Architectural-Design.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { 
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: bgColor,
          logging: false,
          scrollX: 0,
          scrollY: -window.scrollY,
          width: element.scrollWidth,
          onclone: (clonedDoc: Document) => {
            const clonedElement = clonedDoc.querySelector('main');
            if (clonedElement) {
              // Remove lightbox/modal if open
              const modals = clonedElement.querySelectorAll('[class*="fixed"]');
              modals.forEach(el => el.remove());
              
              // Ensure proper styling
              (clonedElement as HTMLElement).style.backgroundColor = bgColor;
              (clonedElement as HTMLElement).style.color = textColor;
            }
          }
        },
        jsPDF: { 
          orientation: 'portrait', 
          unit: 'mm', 
          format: 'a4',
          compress: true 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      // Generate and save PDF
      await html2pdf().set(opt).from(element).save();
      
    } catch (error) {
      console.error('[v0] PDF download failed:', error);
      alert('PDF generation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isLoading}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      {isLoading ? 'Generating PDF...' : 'Download as PDF'}
    </button>
  );
}
