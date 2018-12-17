import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.153 20.708l-7.824-7.824 4.596-4.596 3.004 3.004L15.741 6H4.042c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9.069l-8.889 9.777z"
    />
    <Path
      fill="currentColor"
      d="M11.085 17.81l-4.927-4.926 1.767-1.768 3.073 3.074 9.119-10.031 1.849 1.682z"
    />
  </Svg>
);

export default SvgComponent;
