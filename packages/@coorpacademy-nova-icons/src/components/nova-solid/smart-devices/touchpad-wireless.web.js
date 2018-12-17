import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M4.882 5.851l-1.53-1.289A9.992 9.992 0 0 1 11.007.999a9.99 9.99 0 0 1 7.639 3.547L17.12 5.837a7.999 7.999 0 0 0-6.113-2.838 7.992 7.992 0 0 0-6.125 2.852z"
    />
    <path
      fill="currentColor"
      d="M14.209 8.601a3.973 3.973 0 0 0-3.202-1.602 3.965 3.965 0 0 0-3.2 1.6L6.207 7.4a6.024 6.024 0 0 1 4.8-2.4c1.905 0 3.655.875 4.802 2.401l-1.6 1.2zM13 22.001H5v-8h14v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12h10v-2z"
    />
    <path fill="currentColor" d="M16 24.001l-2-4h2v-5h2v4l3 1v4z" />
  </svg>
);

export default SvgComponent;
