import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 18h11v2H1zM20 8a1 1 0 0 0 .534-1.846l-9.5-6a1 1 0 0 0-1.068 0l-9.5 6A1 1 0 0 0 1 8h19zm-9.5-5.817L16.544 6H4.456L10.5 2.183zM3 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H3zm2 6H4v-4h1v4zM13 10a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6zm-2 5h-1v-4h1v4zM15 9a1 1 0 0 0-1 1v1h5v-1a1 1 0 0 0-1-1h-3zM22 15c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zM19 18c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5z" />
    </g>
  </svg>
);

export default SvgComponent;
