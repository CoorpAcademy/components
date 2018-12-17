import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={7.001} cy={5.001} r={3} />
      <Path d="M7.001 8.001c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5zM24.001 7V5H22.9a4.978 4.978 0 0 0-.734-1.754l.785-.784-1.414-1.414-.786.784A4.922 4.922 0 0 0 19 1.102V0h-2v1.102a4.935 4.935 0 0 0-1.752.73l-.784-.782-1.414 1.414.783.783A5.006 5.006 0 0 0 13.101 5h-1.102v2h1.102c.131.639.385 1.229.732 1.754l-.783.784 1.415 1.413.783-.784a4.958 4.958 0 0 0 1.753.732v1.102h2v-1.103a4.961 4.961 0 0 0 1.753-.732l.785.783 1.413-1.415-.785-.782A4.969 4.969 0 0 0 22.9 7h1.101zm-6.002 1A2 2 0 1 1 18 3.999 2 2 0 0 1 18 8" />
    </G>
  </Svg>
);

export default SvgComponent;
