import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.822 14.521l.708.707-3.257 3.257 4.242 4.243 3.258-3.258.707.707 1.914-1.914-5.658-5.656-1.914 1.914zm1.693 5.378l-1.414-1.414 1.747-1.747 1.51 1.318-1.843 1.843zM8.773 12.399l-1.001 1 2.829 2.829 1-1a2 2 0 0 0-2.828-2.829zM20.379 9.279l-.707-.707 3.742-3.745L19.172.585l-3.744 3.742-.707-.707-3.536 3.538v2.827l2.828 2.829h2.829l3.537-3.535zm-1.207-5.865l1.414 1.414-2.121 2.123-1.415-1.416 2.122-2.121zm-6.571 5.159l2.121-2.122 2.829 2.829-2.121 2.12-2.829-2.827zM20.293 15.293L17 18.586V16h-2v6h6v-2h-2.585l3.292-3.293zM3.762 8.704L7 5.433V8h2V2H3v2h2.603L2.34 7.297z" />
    </g>
  </svg>
);

export default SvgComponent;
