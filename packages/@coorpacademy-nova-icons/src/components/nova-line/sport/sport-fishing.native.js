import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 8c0-2.243-2.636-4-6-4-2.12 0-4.493 1.016-5.837 2.123L2.6 4.2A.999.999 0 0 0 1 5v6a1 1 0 0 0 1.6.8l2.563-1.923C6.507 10.984 8.88 12 11 12c3.364 0 6-1.757 6-4zM3 9V7l1.333 1L3 9zm8 1c-2.045 0-4.294-1.268-4.916-2C6.706 7.268 8.955 6 11 6c2.29 0 4 1.056 4 2s-1.71 2-4 2z" />
      <Path d="M22 10a2 2 0 0 0-4 0c0 .738.405 1.376 1 1.723V18c0 1.103-.897 2-2 2s-2-.897-2-2h2l-4-5v5c0 2.205 1.794 4 4 4s4-1.795 4-4v-6.277c.595-.347 1-.985 1-1.723z" />
      <Circle cx={12} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
