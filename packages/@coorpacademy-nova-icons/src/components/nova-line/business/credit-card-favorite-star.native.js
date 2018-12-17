import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999l-.001 4H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h9v-2H2V7zm16-5v3H2V2h16z" />
      <Path d="M24 16.286h-4.286L18 12l-1.715 4.286H12l3.708 3.13L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
