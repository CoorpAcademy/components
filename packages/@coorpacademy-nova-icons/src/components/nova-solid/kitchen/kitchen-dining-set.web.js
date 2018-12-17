import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M20.707 2.293A.999.999 0 0 0 19 3v19h2v-6h2a1 1 0 0 0 1-1c0-9.306-3.158-12.572-3.293-12.707zM8 6V2H6v4c0 .737-.405 1.375-1 1.723V2H3v5.723C2.405 7.375 2 6.737 2 6V2H0v4c0 1.858 1.279 3.411 3 3.858V22h2V9.858c1.721-.447 3-2 3-3.858z" />
      <circle cx={12} cy={15} r={3} />
      <path d="M12 9c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </g>
  </svg>
);

export default SvgComponent;
