import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M15 19H7c-2.757 0-5-2.243-5-5s2.243-5 5-5c.533 0 1.061.086 1.563.254A6.958 6.958 0 0 1 15 5c3.859 0 7 3.141 7 7 0 3.86-3.141 7-7 7zm-8-8c-1.654 0-3 1.346-3 3s1.346 3 3 3h8c2.757 0 5-2.243 5-5s-2.243-5-5-5a4.971 4.971 0 0 0-4.865 3.867 1 1 0 0 1-1.517.613A2.985 2.985 0 0 0 7 11z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
