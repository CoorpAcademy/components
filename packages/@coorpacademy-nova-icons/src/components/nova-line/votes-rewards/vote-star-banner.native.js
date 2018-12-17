import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 2.001H7c-1.104 0-2 .897-2 2v17a1 1 0 0 0 1.554.832L12 18.203l5.445 3.63a1.006 1.006 0 0 0 1.027.05 1 1 0 0 0 .528-.882v-17c0-1.103-.896-2-2-2zm0 17.132l-4.445-2.964a1 1 0 0 0-1.109 0L7 19.133V4.001h10v15.132z" />
      <Path d="M13 9.001l-1-3-1 3H8l2 2-1 3 3-2 3 2-1-3 2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
