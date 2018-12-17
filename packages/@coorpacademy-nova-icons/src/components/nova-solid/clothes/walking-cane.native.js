import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M12 2C9.795 2 8 3.795 8 6v1h2V6c0-1.103.896-2 2-2s2 .897 2 2v13h2V6c0-2.205-1.795-4-4-4z" />
      <Circle cx={15} cy={21} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
