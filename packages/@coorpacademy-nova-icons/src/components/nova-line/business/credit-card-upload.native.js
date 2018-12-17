import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999l-.001 5H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12c0 1.103.896 2 2 2h12v-2H2V7zm16-5l-.001 3H2V2h16zM23.707 19.292L19 14.584l-4.707 4.708 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
