import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 13c0-4.411-3.589-8-8-8h-5a7.96 7.96 0 0 0-.964.061L6.641 2.232A1 1 0 0 0 5 3v4.713A8.033 8.033 0 0 0 3.587 10H1c-.552 0-1 .449-1 1v5a1 1 0 0 0 1 1h3.08A8.05 8.05 0 0 0 8 20.403V23h2v-2.067A8.1 8.1 0 0 0 11 21h5c.34 0 .672-.028 1-.068V23h2v-2.589c2.928-1.19 5-4.061 5-7.411zm-8 6h-5a6.027 6.027 0 0 1-5.414-3.43 1.002 1.002 0 0 0-.903-.57H2v-3h2.294c.442 0 .832-.29.959-.714a5.994 5.994 0 0 1 1.462-2.48c.182-.188.285-.439.285-.701v-2.97l2.103 1.752c.228.19.529.27.819.215A6 6 0 0 1 11 7h5c3.309 0 6 2.691 6 6s-2.691 6-6 6z" />
      <Path d="M11 9h6v2h-6z" />
      <Circle cx={8} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
