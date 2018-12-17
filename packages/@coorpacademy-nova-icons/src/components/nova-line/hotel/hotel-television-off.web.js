import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M20 7h-8.72l3.5-4.375-1.562-1.249L10 5.399 6.781 1.376 5.219 2.625 8.72 7H4c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.104-.897-2-2-2zM4 9h10v10H4V9zm12 10V9h4l.001 10H16z" />
      <circle cx={18} cy={12} r={1.25} />
      <circle cx={18} cy={16} r={1.25} />
      <path d="M6.936 17.126A3.72 3.72 0 0 0 9 17.75 3.754 3.754 0 0 0 12.75 14c0-.763-.231-1.472-.625-2.064l-5.189 5.19zM11.064 10.875A3.72 3.72 0 0 0 9 10.25 3.754 3.754 0 0 0 5.25 14c0 .763.232 1.472.625 2.065l5.189-5.19z" />
    </g>
  </svg>
);

export default SvgComponent;
