import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 10h-3.42l-3.712-6.496-1.736.992L16.277 10H7.723l3.145-5.504-1.736-.992L5.42 10H2v2h20zM3.42 13l1.603 7.218A1 1 0 0 0 6 21h12c.469 0 .875-.326.977-.783L20.58 13H3.42z" />
    </G>
  </Svg>
);

export default SvgComponent;
