import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M2.74 12.968L2.024 11.1l2.619-1 .714 1.868zM4.643 5.968l-2.619-1L2.738 3.1l2.618 1zM2 7.035h3v2H2zM22 8c0-2.757-2.243-5-5-5L7 5.199v5.604l7.77 1.726C14.686 12.781 13 17.735 13 18c0 1.103.897 2 2 2h3c1.103 0 2-.897 2-2v-6.025c1.207-.914 2-2.348 2-3.975zm-4 10h-2.946l1.678-5.035.051.011L17 13c.342 0 .677-.035 1-.101V18zm-.898-7.002L9 9.199V6.803l8.102-1.801C18.709 5.056 20 6.38 20 8s-1.291 2.944-2.898 2.998z" />
      <circle cx={17} cy={8} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
