import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.537 6.242L15.754.003H8.246L6.463 6.242a7.97 7.97 0 0 0 0 11.522l1.783 6.239h7.509l1.783-6.239a7.97 7.97 0 0 0-.001-11.522zM9.754 2.003h4.491l.738 2.583a7.936 7.936 0 0 0-5.967 0l.738-2.583zm4.492 20H9.754l-.738-2.583a7.945 7.945 0 0 0 5.968 0l-.738 2.583zm-2.247-4.002a6 6 0 0 1 0-12 6 6 0 0 1 0 12z" />
      <path d="M10 8.001l-2 3h1v2h2v-2h1zM14 16.001l2-3h-1v-2h-2v2h-1z" />
    </g>
  </svg>
);

export default SvgComponent;
