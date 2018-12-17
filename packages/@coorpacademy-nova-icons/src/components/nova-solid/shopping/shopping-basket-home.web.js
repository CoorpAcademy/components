import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.58 10.001h-1.56a8.972 8.972 0 0 1 1.529.142l.031-.142zM20 9.001v-2h-3.42L12.868.504l-1.736.994 3.145 5.503H5.723l3.145-5.503L7.132.504 3.42 7.001H0v2zM16.98 10.001H1.42l1.604 7.217a.997.997 0 0 0 .976.783h4.059c.496-4.494 4.298-7.99 8.921-8zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.413L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.292 1.414-1.413-6-6zM18 22h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
