import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 18V6h8v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H4zM18 9h6v2h-6z" />
      <Path d="M12 17c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z" />
      <Circle cx={15} cy={11} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
