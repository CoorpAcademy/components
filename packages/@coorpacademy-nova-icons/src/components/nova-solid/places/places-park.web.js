import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M23.482 15.223L20 10h1.54a.497.497 0 1 0 .41-.785L19 5h.691a.498.498 0 0 0 .447-.723L18.447.895a.498.498 0 0 0-.894 0l-1.691 3.382a.498.498 0 0 0 .447.723H17l-2.949 4.214a.5.5 0 0 0 .409.786H16l-2 3h2v3h1v7h2v-7h4.065a.5.5 0 0 0 .417-.777z" />
      <path d="M13.5 14h-11c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5H3v2h2v-2h6v2h2v-2h.5c.827 0 1.5-.673 1.5-1.5v-4c0-.827-.673-1.5-1.5-1.5zm-.5 4H3v-2h10v2z" />
    </g>
  </svg>
);

export default SvgComponent;
