import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M18 2H6c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h2.434L12 22.943 15.566 17H18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 13h-3.566L12 19.057 9.566 15H6V4h12v11z" />
      <path d="M9.5 9.88l1.25 1.56c.34-.28.78-.44 1.25-.44s.91.16 1.25.44l1.25-1.56C13.811 9.33 12.939 9 12 9s-1.811.33-2.5.88z" />
      <path d="M12 8c1.18 0 2.27.411 3.12 1.1l1.25-1.56C15.17 6.57 13.65 6 12 6s-3.17.57-4.37 1.54L8.88 9.1C9.73 8.411 10.82 8 12 8z" />
      <circle cx={12} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
