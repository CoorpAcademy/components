import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 10a7.98 7.98 0 0 1 1.987.259c.002-.087.013-.172.013-.259 0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.459C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10 .087 0 .172-.011.259-.013A7.987 7.987 0 0 1 10 18a8 8 0 0 1 8-8z" />
      <path d="M18 11.984c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zM21 19h-4v-5.016h2v3h2V19z" />
    </g>
  </svg>
);

export default SvgComponent;
