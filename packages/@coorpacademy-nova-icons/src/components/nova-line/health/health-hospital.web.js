import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M5 12h6v2H5zM5 15h6v2H5z" />
      <path d="M21 11h-7V7a1 1 0 0 0-1-1h-.101A4.999 4.999 0 0 0 8 0a4.999 4.999 0 0 0-4.899 6H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zM5 4h2V2h2v2h2v2H9v2H7V6H5V4zM4 8h.023C4.936 9.208 6.369 10 8 10s3.064-.792 3.977-2H12v13H9v-2H7v2H4V8zm16 13h-6v-8h6v8z" />
      <path d="M15 17h4v2h-4zM15 14h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
