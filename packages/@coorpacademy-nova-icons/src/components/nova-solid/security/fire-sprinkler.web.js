import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24.001v24.001H.001z" />
    <g fill="currentColor">
      <path d="M15.652 16.243a.998.998 0 0 0-1.206-.074L13 17.133v-4.132a.999.999 0 1 0-1.687-.726c-.721.682-4.312 4.213-4.312 6.726 0 2.757 2.243 5 5 5s5-2.243 5-5c-.001-1.556-1.211-2.641-1.349-2.758zM9 .001h6v2H9z" />
      <circle cx={12} cy={4.001} r={1} />
      <circle cx={12} cy={7.001} r={1} />
      <circle cx={15} cy={4.001} r={1} />
      <circle cx={17} cy={7.001} r={1} />
      <circle cx={9} cy={4.001} r={1} />
      <circle cx={7} cy={7.001} r={1} />
      <circle cx={5} cy={10.001} r={1} />
      <circle cx={10} cy={10.001} r={1} />
      <circle cx={14} cy={10.001} r={1} />
      <circle cx={19} cy={10.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
