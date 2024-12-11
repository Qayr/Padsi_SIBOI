// app/dashboard/transaksi/TransaksiPDFDownload.tsx
'use client';

import { useEffect } from 'react';
import html2pdf from 'html2pdf.js';

const TransaksiPDFDownload = ({ tableId }: { tableId: string }) => {
  const handleDownloadPDF = () => {
    const element = document.getElementById(tableId);
    if (element) {
      const options = {
        filename: 'laporan-transaksi.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        margin: 10,
      };
      html2pdf().from(element).set(options).save();
    } else {
      console.log('Element with ID "' + tableId + '" not found');
    }
  };

  useEffect(() => {
    // Ensure this runs only on the client-side
  }, []);

  return (
    <button
      onClick={handleDownloadPDF}
      className="px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-400  data-html2canvas-ignore"
    >
      Download PDF
    </button>
  );
};

export default TransaksiPDFDownload;
