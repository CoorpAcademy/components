import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 13.003l1.84 1.84A8.981 8.981 0 0 0 17 13.114v-2.111h.77a9.03 9.03 0 0 0 .23-2c0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9l5-5zm-7.923-3H5v-2h1.077c.429-2.921 2.74-4 4.923-4v2c-1.157 0-2.491.387-2.879 2H11v2H8.121c.388 1.613 1.722 2 2.879 2v2c-2.183 0-4.494-1.078-4.923-4z" />
      <Path d="M18 13.003v2h2.586L17 18.589l-2.293-2.292a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L14 18.417l2.293 2.293a.999.999 0 0 0 1.414 0L22 16.417v2.586h2v-6h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
