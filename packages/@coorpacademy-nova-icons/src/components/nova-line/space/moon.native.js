import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Circle cx={14} cy={10} r={2} />
      <Circle cx={14} cy={15} r={1} />
      <Circle cx={9} cy={9} r={1} />
      <Circle cx={9.5} cy={14.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
