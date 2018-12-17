import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 2H7C4.243 2 2 4.243 2 7v3.999a1 1 0 0 0 1 1h2v4h2v-1h1V13H7v-1.001h3a1 1 0 0 0 .895-.552l.724-1.448H12V17H3c-.553 0-1 .447-1 .999v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6c0-2.206-1.795-4-4-4zM4 20v-1.001h9a1 1 0 0 0 1-1v-9A.999.999 0 0 0 13 8h-2a1 1 0 0 0-.895.552L9.382 10H4V7c0-1.654 1.346-3 3-3h11c.737 0 1.375.405 1.722 1H11v2h9v13H4z" />
      <circle cx={17} cy={14.999} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
