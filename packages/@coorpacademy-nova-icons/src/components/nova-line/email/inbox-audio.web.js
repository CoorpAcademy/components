import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 5.195a.748.748 0 0 0-.983-.712l-5 1.63a.748.748 0 0 0-.517.712V10a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H11v-4l3.5-1.141V9a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H16V5.195z" />
      <path d="M6 3h12v9h2V1H4v11h2zM21 14h-5a.996.996 0 0 0-.707.293L13.586 16h-3.172l-1.707-1.707A.996.996 0 0 0 8 14H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H4v-4h3.586l1.707 1.707A.996.996 0 0 0 10 18h4c.266 0 .52-.105.707-.293L16.414 16H20v4z" />
    </g>
  </svg>
);

export default SvgComponent;
