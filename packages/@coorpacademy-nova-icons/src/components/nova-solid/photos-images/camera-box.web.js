import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm-3 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h.382a.999.999 0 0 0 .895-.552l.447-.895c.169-.338.516-.553.895-.553h2.764a1 1 0 0 1 .895.553l.447.895a.995.995 0 0 0 .893.552H16a1 1 0 0 1 1 1v5z" />
      <circle cx={12} cy={12} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
