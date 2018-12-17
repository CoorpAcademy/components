import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={14} cy={16} r={1} />
      <circle cx={17} cy={16} r={1} />
      <path d="M20.961 11.726l-.016.004A.985.985 0 0 0 20 11h-2V9h3c.266 0 .52-.105.707-.293l2-2-1.414-1.414L20.586 7H3.414L1.707 5.293.293 6.707l2 2A.996.996 0 0 0 3 9h3v2H4a.985.985 0 0 0-.945.73l-.016-.004-1.726 6.038c-.159.557-.063 1.123.263 1.556S2.421 20 3 20h18c.579 0 1.098-.248 1.424-.681s.422-.999.263-1.556l-1.726-6.037zM8 9h8v2H8V9zm-4.674 9l1.428-5h14.492l1.428 5H3.326z" />
      <path d="M6 15h6v2H6z" />
    </g>
  </svg>
);

export default SvgComponent;
