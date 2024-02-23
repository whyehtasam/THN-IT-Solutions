import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PDFViewer = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [pdfUrl, setPdfUrl] = useState('./easYgen-1400.pdf'); // Update with your PDF file URL

  useEffect(() => {
    // Load the PDF document and get the number of pages
    const loadPdf = async () => {
      const pdfDoc = await pdfjs.getDocument(pdfUrl).promise;
      setNumPages(pdfDoc.numPages);
    };

    loadPdf();
  }, [pdfUrl]);

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div className="flex flex-col items-center bg-slate-700">
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousPage}
          disabled={pageNumber <= 1}
        >
          Previous Page
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={handleNextPage}
          disabled={pageNumber >= numPages}
        >
          Next Page
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={handleZoomIn}
        >
          Zoom In
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={handleZoomOut}
        >
          Zoom Out
        </button>
      </div>
      <div className="border border-gray-300 overflow-hidden mb-4">
        <Document file={pdfUrl}>
          <Page
            pageNumber={pageNumber}
            width={window.innerWidth * 0.8}
            scale={scale}
            renderTextLayer={false} // Disable rendering of text layer
          />
        </Document>
      </div>
      <p className="mt-4 text-sm">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
export default PDFViewer;
