import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M21.971 20.758l-1-4a1.003 1.003 0 0 0-.523-.652C20.221 15.992 18.06 15 12 15s-8.221.992-8.447 1.106a.997.997 0 0 0-.523.652l-1 4a1.001 1.001 0 0 0 1.522 1.077C3.578 21.816 6.428 20 12 20c5.562 0 8.412 1.81 8.449 1.834a.999.999 0 0 0 1.522-1.076zM3 12v2.697C4.266 14.402 6.921 14 12 14s7.734.402 9 .697V12C21 .066 3 .049 3 12zm5-5h8v4H8V7z" />
    </g>
  </svg>
);

export default SvgComponent;
