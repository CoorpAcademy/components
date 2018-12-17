import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 2H7C4.795 2 3 3.794 3 6v3a1 1 0 0 0 1 1h2v1.279l-2.316.772A1 1 0 0 0 3 13v3c0 .334.167.646.445.832l3 2a1 1 0 0 0 1.11 0l3-2c.278-.186.445-.498.445-.832v-3a1 1 0 0 0-.684-.949L8 11.279V10h4v10H2v2h20V3a1 1 0 0 0-1-1zM5 13.721l1-.333v2.745l-1-.667v-1.745zm4 0v1.744l-1 .667v-2.745l1 .334zM14 20V9a1 1 0 0 0-1-1H5V6c0-1.103.896-2 2-2h6v3h2V4h1v3h2V4h2v16h-6z" />
      <path d="M17 19c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .449 1 1 0 .551-.449 1-1 1s-1-.449-1-1c0-.551.449-1 1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
