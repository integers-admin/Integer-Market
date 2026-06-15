// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function SamplePreview({pdfUrl}) {
//   const [loading, setLoading] = useState(true);
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     // Fallback timeout - agar 5 second mein load nahi hui toh loading hata do
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 5000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   const handleIframeLoad = () => {
//     console.log("PDF loaded");
//     setLoading(false);
//   };

//   return (
//     <div className="h-screen w-full bg-white relative">
//       {/* Loading State */}
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
//           <div className="text-center">
//             <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-2"></div>
//             <p className="text-gray-500">Loading PDF...</p>
//           </div>
//         </div>
//       )}
      
//       {/* PDF Viewer - with both onLoad and onError */}
//       <iframe
//         ref={iframeRef}
//         src={`${pdfUrl}#toolbar=0`}
//         onLoad={handleIframeLoad}
//         onError={() => {
//           console.log("PDF error, hiding loader");
//           setLoading(false);
//         }}
//         className="w-full h-full border-none bg-white"
//         title="PDF Viewer"
//       />
//     </div>
//   );
// }






"use client";

import { useState, useEffect, useRef } from "react";

export default function SamplePreview({pdfUrl}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setError(true);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [loading]);

  const handleIframeLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(true);
  };

  if (!pdfUrl) {
    return (
      <div className="h-screen w-full bg-white flex items-center justify-center">
        <p className="text-gray-500">No PDF available</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-white relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-500">Loading PDF...</p>
          </div>
        </div>
      )}
      {error && !loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-gray-500 text-lg">No PDF Available</p>
            <p className="text-gray-400 text-sm mt-2">The document could not be loaded</p>
          </div>
        </div>
      )}
      {!error && (
        <iframe
          ref={iframeRef}
          src={`${pdfUrl}#toolbar=0`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="w-full h-full border-none bg-white"
          title="PDF Viewer"
        />
      )}
    </div>
  );
}