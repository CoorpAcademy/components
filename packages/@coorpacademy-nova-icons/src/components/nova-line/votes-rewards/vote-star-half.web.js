import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M7 22.001a1 1 0 0 1-.961-1.274l1.838-6.435-4.584-4.584A1.001 1.001 0 0 1 4 8.001h5.382l2.724-5.447a.996.996 0 0 1 1.125-.525.996.996 0 0 1 .769.972v14c0 .334-.167.646-.445.832l-6 4a1 1 0 0 1-.555.168zm-.586-12l3.293 3.293a1 1 0 0 1 .254.982L8.709 18.66 12 16.466V7.237l-1.105 2.211c-.17.339-.516.553-.895.553H6.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
