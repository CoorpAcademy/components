import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={16} r={2} />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM17 19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h.382a1 1 0 0 0 .895-.553l.447-.895c.169-.337.515-.552.894-.552h2.764c.379 0 .726.215.895.553l.447.895a1 1 0 0 0 .894.552H16a1 1 0 0 1 1 1v5zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
