import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 6h1c1.654 0 3-1.346 3-3V2h-2v1c0 .551-.449 1-1 1h-1c-1.654 0-3 1.346-3 3v1H8c-1.103 0-2 .896-2 2v7c0 3.309 2.691 6 6 6s6-2.691 6-6v-7c0-1.104-.897-2-2-2h-3V7c0-.551.449-1 1-1zm-3 4v3H8v-3h3zm1 11c-2.206 0-4-1.795-4-4v-2h8v2c0 2.205-1.794 4-4 4zm4-11v3h-3v-3h3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
