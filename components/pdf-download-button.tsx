'use client';

import { useState } from 'react';

export default function PDFDownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    try {
      // Dynamically import html2pdf.js and html2canvas
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

      // Clone the element to avoid modifying the original
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '0';
      clone.style.width = element.scrollWidth + 'px';
      clone.style.backgroundColor = bgColor;
      document.body.appendChild(clone);

      // Convert all computed colors to rgb format to avoid oklab/oklch issues
      const allElements = clone.querySelectorAll('*');
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const computed = window.getComputedStyle(htmlEl);
        
        // Get computed colors and apply as inline styles
        const color = computed.color;
        const backgroundColor = computed.backgroundColor;
        const borderColor = computed.borderColor;
        
        if (color) htmlEl.style.color = color;
        if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
          htmlEl.style.backgroundColor = backgroundColor;
        }
        if (borderColor) htmlEl.style.borderColor = borderColor;
      });

      const opt = {
        margin: [5, 5, 5, 5],
        filename: 'CMA4002-Architectural-Design.pdf',
        image: { type: 'jpeg', quality: 0.90 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: bgColor,
          logging: false,
          foreignObjectRendering: false,
        },
        jsPDF: { 
          orientation: 'portrait', 
          unit: 'mm', 
          format: 'a4',
          compress: true 
        },
        pagebreak: { mode: 'avoid-all' }
      };
      
      // Generate and save PDF
      await html2pdf().set(opt).from(clone).save();
      
      // Clean up clone
      document.body.removeChild(clone);
      
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
