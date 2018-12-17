import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.898 0 5v11h24V5c0-1.102-.897-2-2-2zm-9 5.414l-4 4-2-2-3 3v-2.828l3-3 2 2 4-4v2.828zm7 .252h-2.333a.334.334 0 0 0 0 .667h.667A1.67 1.67 0 0 1 20 11a1.67 1.67 0 0 1-1.333 1.633v.701h-1.333v-.667H16v-1.333h2.333a.334.334 0 0 0 0-.667h-.667A1.67 1.67 0 0 1 16 9a1.67 1.67 0 0 1 1.333-1.633v-.701h1.333v.668H20v1.332zM0 18c0 1.103.897 2 2 2h9v2H7.001v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1H0v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
