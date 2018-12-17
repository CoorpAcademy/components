import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M21 9c0-3.86-4.037-7-9-7S3 5.14 3 9v9c0 .111.029.213.063.313-.018.006.982 2.986.988 3.004A1 1 0 0 0 5 22h14a1 1 0 0 0 .949-.684l1-3S21 18.087 21 18V9zm-11 7v-2h4v2h-4zm-2-4v5H5v-7h14v7h-3v-5H8zm4-8c3.381 0 6.209 1.721 6.859 4H5.141C5.791 5.721 8.619 4 12 4zM5.721 20l-.333-1h13.225l-.333 1H5.721z" />
      <path d="M10 5h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
