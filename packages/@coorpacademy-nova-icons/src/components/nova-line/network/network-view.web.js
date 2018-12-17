import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 8h4v2.004l2-.002V8h3.736c.166.641.264 1.309.264 2h2c0-5.514-4.486-10-10-10S0 4.486 0 10c0 5.515 4.486 10 10 10v-2a7.959 7.959 0 0 1-2-.263V14h2v-2H8V8zm6-4.917A8.056 8.056 0 0 1 16.918 6H14V3.083zm-6-.819C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6H8V2.264zM6 16.918A8.044 8.044 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.953 7.953 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.056 8.056 0 0 1 6 3.083V6z" />
      <path d="M23.414 21.994l-3.247-3.247c.524-.79.833-1.735.833-2.753 0-2.756-2.243-5-5-5s-5 2.244-5 5c0 2.758 2.243 5 5 5a4.97 4.97 0 0 0 2.753-.832L22 23.408l1.414-1.414zm-10.414-6c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
