import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M2.998 24v-4h-1c-1.103 0-2-.897-2-2V9c0-1.104.897-2 2-2h13c1.103 0 2 .896 2 2v9c0 1.103-.897 2-2 2H8.332l-5.334 4zm-1-15v9h3v2l2.667-2h7.333V9h-13zM15.513 2.828L23.998 0l-2.829 8.484-1.414-4.242z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
