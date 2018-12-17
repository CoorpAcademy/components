import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M9.001 12c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
      fill="currentColor"
    />
    <circle cx={12.001} cy={6} r={2} fill="currentColor" />
    <path
      fill="currentColor"
      d="M20.001 12h-2V3h-12v9h-2V1h16zM21.001 22h-18a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5c.265 0 .52.105.707.293L10.415 16h3.172l1.707-1.707a.997.997 0 0 1 .707-.293h5a1 1 0 0 1 1 1v6c0 .551-.448 1-1 1zm-17-2h16v-4h-3.586l-1.707 1.707a1.002 1.002 0 0 1-.707.293h-4a.997.997 0 0 1-.707-.293L7.587 16H4.001v4z"
    />
  </svg>
);

export default SvgComponent;
