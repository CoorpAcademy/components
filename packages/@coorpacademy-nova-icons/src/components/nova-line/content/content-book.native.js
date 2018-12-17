import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 2.001H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1zm-15 2h2v16H5v-16zm14 16H9v-16h10v16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
