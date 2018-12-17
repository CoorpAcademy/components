import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2c-4.411 0-8 3.589-8 8a8.042 8.042 0 0 0 4 6.922V17h8v-.078A8.043 8.043 0 0 0 20 10c0-4.411-3.589-8-8-8zm3 6h-3.5a.5.5 0 1 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5a2.503 2.503 0 0 1-2 2.45V15h-2v-1H9v-2h3.5a.5.5 0 1 0 0-1h-1A2.502 2.502 0 0 1 9 8.5c0-1.207.859-2.217 2-2.449V5h2v1h2v2zM8 20a1 1 0 0 0 1 1h2v1h2v-1h2a1 1 0 0 0 1-1v-2H8v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
