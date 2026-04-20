'use client';

import { useState } from 'react';

export default function PDFDownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    try {
      // Dynamically import html2pdf.js only on client-side when needed
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Get the main content area
      const element = document.querySelector('main');
      if (!element) {
        throw new Error('Main content not found');
      }

      // Clone the element to avoid modifying the original
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Remove fixed/sticky elements from clone that cause issues
      const fixedElements = clone.querySelectorAll('[class*="fixed"], [class*="sticky"]');
      fixedElements.forEach(el => el.remove());
      
      // Create a container for the PDF content
      const container = document.createElement('div');
      container.style.width = '210mm';
      container.style.padding = '10mm';
      container.style.backgroundColor = '#0a0a0a';
      container.style.color = '#ffffff';
      container.appendChild(clone);
      
      // Temporarily add to DOM (hidden) for rendering
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      document.body.appendChild(container);

      // Wait for images to load
      const images = container.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      const opt = {
        margin: [5, 5, 5, 5],
        filename: 'CMA4002-Architectural-Design.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0a0a0a',
          logging: false,
          scrollY: 0,
          windowWidth: container.scrollWidth,
          windowHeight: container.scrollHeight,
        },
        jsPDF: { 
          orientation: 'portrait', 
          unit: 'mm', 
          format: 'a4',
          compress: true 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      // Generate and save PDF - wait for completion
      await html2pdf().set(opt).from(container).save();
      
      // Clean up
      document.body.removeChild(container);
      
    } catch (error) {
      console.error('PDF download failed:', error);
      alert('PDF generation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isLoading}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d669] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      {isLoading ? 'Generating PDF...' : 'Download as PDF'}
    </button>
  );
}
