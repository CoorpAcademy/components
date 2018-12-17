import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M6.721 13l2.541-7.621 1.658 2.764L9.531 13h2.08l1.35-4.726a.995.995 0 0 0-.104-.788l-3-5a.999.999 0 0 0-1.806.197L4.53 13.246A4.971 4.971 0 0 1 6 13h.721zM19 5c-1.654 0-3 1.346-3 3v5h2v-2h1V9h-1V8a1.001 1.001 0 0 1 2 0v5.424a5.028 5.028 0 0 1 2 1.607V8c0-1.654-1.346-3-3-3z" />
      <path d="M18 14H6c-2.205 0-4 1.794-4 4s1.795 4 4 4h12c2.205 0 4-1.794 4-4s-1.795-4-4-4zM6 19a1 1 0 1 1-.002-1.998A1 1 0 0 1 6 19zm12 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 18 19z" />
    </g>
  </svg>
);

export default SvgComponent;
