import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 9h3v2h2V9h8v2h2V9h3a1 1 0 0 0 .707-.293l2-2-1.414-1.413L20.586 7H3.414L1.707 5.293.293 6.707l2 2A1 1 0 0 0 3 9zM20.949 12.684l-.012.004A.989.989 0 0 0 20 12H4a.99.99 0 0 0-.938.688l-.012-.004-1.684 5.051c-.186.558-.109 1.13.208 1.571.319.442.838.694 1.426.694h18c.588 0 1.107-.252 1.425-.694.317-.441.394-1.014.208-1.57l-1.684-5.052zM11 17H6v-2h5v2zm3 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 14 17zm3 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 17 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
