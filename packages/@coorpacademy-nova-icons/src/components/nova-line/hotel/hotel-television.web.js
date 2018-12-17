import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M20 7h-8.72l3.5-4.375-1.562-1.249L10 5.399 6.781 1.376 5.219 2.625 8.72 7H4c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.104-.897-2-2-2zM4 9h10v10H4V9zm12 10V9h4l.001 10H16z" />
      <circle cx={18} cy={12} r={1.25} />
      <circle cx={18} cy={16} r={1.25} />
    </g>
  </svg>
);

export default SvgComponent;
