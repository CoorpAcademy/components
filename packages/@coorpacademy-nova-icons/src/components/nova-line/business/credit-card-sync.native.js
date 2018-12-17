import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999l-.001 3H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12c0 1.103.896 2 2 2h8v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4s4 1.794 4 4-1.795 4-4 4c-1.069 0-2.074-.416-2.761-1.097l-.063-.078L17 19h-5v5l1.758-1.757A5.954 5.954 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
