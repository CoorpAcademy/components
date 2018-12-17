import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path fill="currentColor" d="M18 22.001H3a1 1 0 0 1-1-1v-15h2v14h14v2z" />
    <Path
      fill="currentColor"
      d="M21 2.001H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1zm-10 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-2 10l3-4 1.412 1.882L16 9.001l3 6H9z"
    />
  </Svg>
);

export default SvgComponent;
