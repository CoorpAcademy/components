import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.612 17.615a8.831 8.831 0 0 0 1.285-.509L17 13.003l.036.037A8.963 8.963 0 0 0 18 9.003c0-4.971-4.029-9-9-9s-9 4.029-9 9a8.976 8.976 0 0 0 2.636 6.365L6 12.003l5.612 5.612zM5 8.003h1.077c.429-2.921 2.74-4 4.923-4v2c-1.157 0-2.491.387-2.879 2H11v2H8.121c.388 1.613 1.722 2 2.879 2v2c-2.183 0-4.494-1.078-4.923-4H5v-2z" />
      <Path d="M22 18.003v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.589l-5.293-5.292-1.414 1.413 6 6a.999.999 0 0 0 1.414 0L17 18.417l3.586 3.586H18v2h6v-6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
