import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 1.001c-6.065 0-11 4.935-11 11 0 6.066 4.935 11 11 11s11-4.934 11-11c0-6.065-4.935-11-11-11zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" />
      <Path d="M14 5.587l-1.414 1.414 2 2H10c-2.205 0-4 1.794-4 4s1.795 4 4 4h1v-2h-1c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2h4.586l-2 2L14 14.416l4.414-4.414L14 5.587z" />
    </G>
  </Svg>
);

export default SvgComponent;
