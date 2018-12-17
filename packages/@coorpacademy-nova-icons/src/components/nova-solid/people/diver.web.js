import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.942 7H17c0-2.757-2.243-5-5-5S7 4.243 7 7h.058A3.487 3.487 0 0 0 6 9.5c0 1.262.678 2.36 1.683 2.977C8.547 13.977 10.148 15 12 15s3.453-1.023 4.317-2.523A3.493 3.493 0 0 0 18 9.5c0-.979-.407-1.864-1.058-2.5zM14.5 11h-5C8.673 11 8 10.327 8 9.5S8.673 8 9.5 8h5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5zM12 16c-4.71 0-8 2.467-8 6v2h16v-2c0-3.533-3.29-6-8-6zm1 6h-2v-4h2v4z"
    />
    <path
      fill="currentColor"
      d="M18 15h-1v-2h1c.551 0 1-.449 1-1V3h2v9c0 1.654-1.346 3-3 3z"
    />
  </svg>
);

export default SvgComponent;
