import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22.687 22L17.934 9.641a1.001 1.001 0 0 0-1.868 0l-2.127 5.531L15.002 19h4.388l1.154 3H19v2h5v-2h-1.313zm-7.308-5L17 12.786 18.621 17h-3.242zM8.963 4.732a.999.999 0 0 0-.938-.731c-.472-.027-.835.266-.974.683L1.279 22H0v2h5v-2H3.388l1-3h6.463l.833 3H10v2h5v-2h-1.24L8.963 4.732zM5.054 17l2.859-8.577L10.295 17H5.054z" />
    </g>
  </svg>
);

export default SvgComponent;
