import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 23.408l-3.707-3.706 1.414-1.415L18 20.58l4.293-4.293 1.414 1.415zM19 14c.341 0 .674.035 1 .09V5c0-1.102-.897-2-2-2h-2V0h-2v3H6V0H4v3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h11a6 6 0 0 1 6-6zM2 8V5h16v3H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
