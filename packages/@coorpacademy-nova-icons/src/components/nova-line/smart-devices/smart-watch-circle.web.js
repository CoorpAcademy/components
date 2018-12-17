import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M17.537 6.242L15.754.003H8.246L6.463 6.242a7.97 7.97 0 0 0 0 11.522l1.783 6.239h7.508l1.783-6.239a7.97 7.97 0 0 0 0-11.522zM9.754 2.003h4.492l.738 2.583a7.945 7.945 0 0 0-5.968 0l.738-2.583zm4.492 20H9.754l-.738-2.583c.924.373 1.93.583 2.984.583s2.061-.21 2.984-.583l-.738 2.583zm-2.247-4.002a6 6 0 0 1 0-12 6 6 0 0 1 0 12z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
