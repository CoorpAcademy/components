import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16.002 24.006h-16v-1c0-3.533 3.289-6 8-6s8 2.467 8 6v1zm-13.841-2h11.684c-.599-1.808-2.834-3-5.842-3s-5.244 1.192-5.842 3zM8.002 14.006a2 2 0 0 1 0-4v-2c-2.205 0-4 1.795-4 4s1.795 4 4 4c1.474 0 2.75-.811 3.443-2H8.002zM17.002 14.006c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M20.002 8.006h-4v-5h2v3h2z" />
  </svg>
);

export default SvgComponent;
