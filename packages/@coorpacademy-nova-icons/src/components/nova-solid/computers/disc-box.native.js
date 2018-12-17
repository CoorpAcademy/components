import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 2.001H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zm-8 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
    />
    <Path
      fill="currentColor"
      d="M12 18.001c-3.309 0-6-2.691-6-6h2c0 2.205 1.794 4 4 4v2zM18 12.001h-2c0-2.205-1.794-4-4-4v-2c3.309 0 6 2.691 6 6z"
    />
    <Circle fill="currentColor" cx={12} cy={12.001} r={2} />
  </Svg>
);

export default SvgComponent;
