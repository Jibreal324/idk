'use client';

import { useState } from 'react';

export default function PDFDownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = () => {
    setIsLoading(true);
    
    // Use browser's native print functionality which handles all CSS properly
    // This opens the print dialog where users can save as PDF
    setTimeout(() => {
      window.print();
      setIsLoading(false);
    }, 100);
  };

  return (
    <>
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          /* Hide navigation, buttons, and non-essential elements */
          nav, 
          footer,
          button,
          .no-print {
            display: none !important;
          }
          
          /* Ensure proper page breaks */
          main {
            padding: 0 !important;
          }
          
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          /* Ensure images print properly */
          img {
            max-width: 100% !important;
            page-break-inside: avoid;
          }
          
          /* Force background colors to print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          /* Set white background for print */
          html, body {
            background: white !important;
          }
          
          /* Ensure text is readable */
          body {
            font-size: 12pt !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
      
      <button
        onClick={handleDownloadPDF}
        disabled={isLoading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed print:hidden"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {isLoading ? 'Opening Print...' : 'Download as PDF'}
      </button>
    </>
  );
}
