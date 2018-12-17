import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.124 10.752h-.875v1.749h.875a.874.874 0 1 0 0-1.749zM5.003 10.75h1.75v1.749h-1.75z" />
      <path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.502 15.998H6.753v-1.75h-1.75v1.75H3.254V9.875c0-.484.391-.875.874-.875h3.499c.484 0 .875.391.875.875v6.123zm6.123-5.246h-3.061a.438.438 0 0 0 0 .875h.875c1.205 0 2.186.981 2.186 2.187S13.644 16 12.439 16H9.377v-1.75h3.062c.24 0 .438-.196.438-.436a.44.44 0 0 0-.438-.438h-.875c-1.206 0-2.187-.982-2.187-2.188s.981-2.187 2.187-2.187h3.061v1.751zm3.499 3.498h-.875V16H15.5V9.002h2.624a2.627 2.627 0 0 1 2.624 2.625 2.627 2.627 0 0 1-2.624 2.623z" />
    </g>
  </svg>
);

export default SvgComponent;
