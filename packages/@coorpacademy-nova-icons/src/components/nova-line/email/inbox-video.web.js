import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M20 12h-2V3H6v9H4V1h16z" />
    <path
      fill="currentColor"
      d="M9 4v7.796L16 8zM21 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5c.266 0 .52.105.707.293L10.414 16h3.172l1.707-1.707A.996.996 0 0 1 16 14h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM4 20h16v-4h-3.586l-1.707 1.707A.996.996 0 0 1 14 18h-4a.996.996 0 0 1-.707-.293L7.586 16H4v4z"
    />
  </svg>
);

export default SvgComponent;
