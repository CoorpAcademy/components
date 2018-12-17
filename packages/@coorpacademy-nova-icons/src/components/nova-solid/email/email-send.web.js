import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M1.4 14L1 16h5.601L7 14zM3.057 11l-.401 2h4.601l.399-2zM5.697 7.999L5.297 10h2.601l.399-2.001z"
    />
    <g fill="currentColor">
      <path d="M21.729 6.999h-10.22l3.685 4.636z" />
      <path d="M15.579 13.815a.996.996 0 0 1-1.362-.193l-4.3-5.412-1.887 7.547a.998.998 0 0 0 .182.857c.189.244.48.386.788.386h11a1 1 0 0 0 .97-.757l1.9-7.601-7.291 5.173z" />
    </g>
  </svg>
);

export default SvgComponent;
