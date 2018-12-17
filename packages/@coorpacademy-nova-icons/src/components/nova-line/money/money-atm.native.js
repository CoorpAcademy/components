import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.5 14H9v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.45 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2V7h-2v1.05c-1.14.233-2 1.242-2 2.45 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1z" />
      <Path d="M17 19H7V6H5v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6h-2v13z" />
      <Path d="M23 3H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3V9H2V5h20v4h-2v2h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
