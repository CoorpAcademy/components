import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M15 9c0-.366-.106-.705-.277-1H16a1 1 0 0 0 1-1V4h-2v2h-1V4h-2v2h-1V4H9v3a1 1 0 0 0 1 1h1.277A1.987 1.987 0 0 0 11 9a2 2 0 0 0 4 0zM5.003 3c-.003 0 1.003.105 1-1C6 1 6 0 6 0S4.003.896 4.003 2c0 1.105 1.002 1 1 1z" />
      <path d="M9.125 21h7.784l-.253-2.786L21 13l-2-2-2.75 2.75L16 11h-5L6.583 5.823A.925.925 0 0 0 7 5.062v-.119a.94.94 0 0 0-.94-.94H3.94a.94.94 0 0 0-.94.94v.119c0 .519.421.94.94.94h.422l5.637 8L9.125 21zM7 22h12v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
