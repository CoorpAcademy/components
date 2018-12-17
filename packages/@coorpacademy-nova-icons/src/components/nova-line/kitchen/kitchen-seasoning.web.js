import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <g fill="currentColor">
      <path d="M19 11H3a1 1 0 0 0-1 1 8.96 8.96 0 0 0 4.559 7.827l-.404.64A1 1 0 0 0 7 22h8a1 1 0 1 0 .846-1.534l-.404-.64A8.958 8.958 0 0 0 20 12a1 1 0 0 0-1-1zm-5.375 7.486a.997.997 0 0 0-.576.62c-.097.298-.055.59.139.894H8.813c.193-.304.235-.596.139-.894a.997.997 0 0 0-.576-.62A6.969 6.969 0 0 1 4.07 13h13.86a6.97 6.97 0 0 1-4.305 5.486zM20.895 6.553l-2-4a1 1 0 0 0-1.266-.481l-5 2a.999.999 0 0 0-.523 1.376l2 4a1 1 0 0 0 1.265.481l5-2a.998.998 0 0 0 .524-1.376zM15.482 7.73L14.38 5.525l3.137-1.256 1.102 2.206-3.137 1.255zM9.683 5.05l.633 1.899-3 1-.633-1.899zM12.707 8.707l-2 2-1.413-1.414 2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
