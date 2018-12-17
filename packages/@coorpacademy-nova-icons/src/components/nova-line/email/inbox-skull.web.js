import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      d="M12 4a4 4 0 0 0-4 4c0 1.477.81 2.752 2 3.445V13h4v-1.555c1.19-.693 2-1.969 2-3.445a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M20 12h-2V3H6v9H4V1h16zM21 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5c.266 0 .52.105.707.293L10.414 16h3.172l1.707-1.707A.996.996 0 0 1 16 14h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM4 20h16v-4h-3.586l-1.707 1.707A.996.996 0 0 1 14 18h-4a.996.996 0 0 1-.707-.293L7.586 16H4v4z"
    />
  </svg>
);

export default SvgComponent;
