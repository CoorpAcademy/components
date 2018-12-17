import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 14V5c0-1.102-.897-2-2-2h-2V0h-2v3H6V0H4v3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h12a6 6 0 0 1 6-6zM2 8V5h16v3H2zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
