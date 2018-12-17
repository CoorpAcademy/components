import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <Path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <Circle cx={13} cy={4} r={1} fill="currentColor" />
    <Circle cx={16} cy={4} r={1} fill="currentColor" />
    <Circle cx={13} cy={10} r={1} fill="currentColor" />
    <Circle cx={16} cy={10} r={1} fill="currentColor" />
    <Path
      d="M10 18H2v-4h8v-2H2V8h15.999l-.001 3H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h8v-2zM2 2h16l-.001 4H2V2z"
      fill="currentColor"
    />
    <Path
      d="M21.5 19a2.49 2.49 0 0 0-1.986.998l-2.562-1.024c.03-.155.048-.312.048-.474s-.018-.319-.048-.473l2.562-1.025A2.492 2.492 0 0 0 21.5 18c1.379 0 2.5-1.121 2.5-2.5S22.879 13 21.5 13 19 14.121 19 15.5c0 .03.008.059.009.089l-2.78 1.112A2.49 2.49 0 0 0 14.5 16c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5c.672 0 1.278-.27 1.729-.701l2.78 1.112c-.001.03-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
