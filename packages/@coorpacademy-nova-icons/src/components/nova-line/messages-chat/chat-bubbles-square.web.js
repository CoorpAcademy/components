import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20.998 24l-5.334-4h-3.166c-.827 0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5h-1.5v4zm-8-6h3.334l2.666 2v-2h3v-6h-9v6z"
      fill="currentColor"
    />
    <path
      d="M2.998 20v-4h-1.5c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h13c.827 0 1.5.673 1.5 1.5v4.498h-2V4h-12v10h3v2l2.666-2h1.334v2h-.666l-5.334 4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
