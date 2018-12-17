import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      d="M11.6 7.4h2.8V5.8h-1.6V5h-1.6v.841c-.912.185-1.6.993-1.6 1.959 0 1.104.897 2 2 2h.8a.4.4 0 0 1 0 .799H9.6V12.2h1.6v.8h1.6v-.84a2.004 2.004 0 0 0 1.601-1.96c0-1.104-.897-2-2-2H11.6a.4.4 0 0 1 0-.8z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M20 12h-2V3H6v9H4V1h16zM21 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5c.266 0 .52.105.707.293L10.414 16h3.172l1.707-1.707A.996.996 0 0 1 16 14h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM4 20h16v-4h-3.586l-1.707 1.707A.996.996 0 0 1 14 18h-4a.996.996 0 0 1-.707-.293L7.586 16H4v4z"
    />
  </svg>
);

export default SvgComponent;
