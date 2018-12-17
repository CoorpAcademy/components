import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M22.371 6.07l-10-4a1.024 1.024 0 0 0-.743 0l-10 4c-.379.153-.628.52-.628.929v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-14c0-.409-.25-.776-.629-.929zM9 13.999H7v-2c0-.551.449-1 1-1s1 .449 1 1v2zm-2 2h2v4H7v-4zm10-2h-2v-2c0-.551.449-1 1-1s1 .449 1 1v2zm-2 2h2v4h-2v-4zm6 4h-2v-8c0-1.654-1.346-3-3-3s-3 1.346-3 3v8h-2v-8c0-1.654-1.346-3-3-3s-3 1.346-3 3v8H3V7.677l9-3.601 9 3.601v12.322z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
