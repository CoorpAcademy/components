import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 8h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v2l3-2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-2 6h-4v-1h4v1zm2-3h-6v-1h6v1z" />
      <Path d="M20.767 14c-.913 4.002-4.494 7-8.769 7-4.055 0-7.489-2.696-8.611-6.389L5.998 12h-6v6l1.827-1.827C3.473 20.174 7.41 23 11.998 23c5.382 0 9.865-3.888 10.809-9h-2.04zM22.171 7.827C20.523 3.826 16.586 1 11.998 1 6.616 1 2.133 4.888 1.189 10h2.04c.913-4.002 4.494-7 8.769-7 4.055 0 7.489 2.696 8.611 6.389L17.998 12h6V6l-1.827 1.827z" />
    </G>
  </Svg>
);

export default SvgComponent;
