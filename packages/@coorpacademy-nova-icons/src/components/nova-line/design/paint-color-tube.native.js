import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M3.15 16.29l2.122-2.119 2.121 2.124-2.123 2.12zM8.101 15.585c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l4.156-4.155 4.528-2.718-6.76-6.76-2.718 4.527-4.156 4.157a1.991 1.991 0 0 0-.585 1.414c0 .534.208 1.036.586 1.414l2.121 2.121zm5.148-10.408l3.138 3.139-1.767 1.061-2.446-2.445 1.075-1.755zm-2.32 3.337l2.139 2.139-3.553 3.519-2.121-2.122 3.535-3.536zM7 19h13v2H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
