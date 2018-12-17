import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10c0 .691-.098 1.359-.264 2h2.063A10.05 10.05 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10c.685 0 1.354-.07 2-.201v-2.063c-.641.166-1.309.264-2 .264s-1.359-.098-2-.264V14h4v-2H8V8h4v4h2V8h3.736c.166.641.264 1.309.264 2zM6 16.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6zm6 0H8V2.264C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6zm2 0V3.082A8.051 8.051 0 0 1 16.918 6H14zM22.293 17.286L20 19.579v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.407l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
