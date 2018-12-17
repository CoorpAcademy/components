import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.003h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={9.001} r={1} />
      <circle cx={9.5} cy={9.501} r={0.75} />
      <circle cx={14.5} cy={9.501} r={0.75} />
      <circle cx={14.5} cy={14.501} r={0.75} />
      <circle cx={9.5} cy={14.501} r={0.75} />
      <circle cx={15} cy={12.001} r={1} />
      <circle cx={12} cy={12.001} r={1} />
      <circle cx={9} cy={12.001} r={1} />
      <circle cx={12} cy={15.001} r={1} />
      <path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </g>
  </svg>
);

export default SvgComponent;
