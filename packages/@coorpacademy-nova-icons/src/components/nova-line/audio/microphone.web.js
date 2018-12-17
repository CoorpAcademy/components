import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 7c0-3.309-2.691-6-6-6S6 3.691 6 7c0 1.791.792 3.396 2.041 4.498l.797 8.774A2.985 2.985 0 0 0 11.826 23h.348a2.985 2.985 0 0 0 2.987-2.729l.798-8.773A5.987 5.987 0 0 0 18 7zm-4.831 13.09a.994.994 0 0 1-.995.91h-.348a.994.994 0 0 1-.996-.909l-.67-7.382a5.986 5.986 0 0 0 3.68 0l-.671 7.381zM12 11c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4z" />
      <circle cx={12} cy={15} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
