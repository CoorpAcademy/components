import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.947 16.759c-.374 2.952-2.895 5.244-5.947 5.244-3.309 0-6-2.691-6-6 0-3.051 2.292-5.574 5.244-5.947a9.066 9.066 0 0 1-.241-1.983C3.062 8.565 0 11.93 0 16.003c0 4.411 3.589 8 8 8 4.073 0 7.438-3.062 7.931-7.003a9.068 9.068 0 0 1-1.984-.241z" />
      <path d="M16 16.003c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.692 6 6 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-3.308 2.691-6 6-6z" />
      <path d="M15 13.003h2v-1.051c1.14-.232 2-1.242 2-2.449 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H19v-2h-2v-1h-2v1.051c-1.14.232-2 1.243-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H13v2h2v1zM8 3.003H5v-1h4v-2H4c-.552 0-1 .449-1 1v2H0l4 4 4-4zM16 21.003h3v1h-4v2h5a1 1 0 0 0 1-1v-2h3l-4-4-4 4zM9 21.003v-1.051c1.14-.232 2-1.242 2-2.449 0-.565-.195-1.08-.513-1.5.146-.192.262-.407.349-.635a9.018 9.018 0 0 1-3.313-4.365H7v1H5v8h2v1h2zm-2-7h1.5a.5.5 0 0 1 0 1H7v-1zm0 3h1.5a.5.5 0 0 1 0 1H7v-1z" />
    </g>
  </svg>
);

export default SvgComponent;
