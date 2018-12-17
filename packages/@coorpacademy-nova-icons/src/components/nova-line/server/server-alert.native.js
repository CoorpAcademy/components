import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <Path
      fill="currentColor"
      d="M3 3.001h5v2H3zM3 9.001h5v2H3zM3 15.001h5v2H3z"
    />
    <Circle cx={13} cy={4.001} r={1} fill="currentColor" />
    <Circle cx={16} cy={4.001} r={1} fill="currentColor" />
    <Circle cx={13} cy={10.001} r={1} fill="currentColor" />
    <Circle cx={16} cy={10.001} r={1} fill="currentColor" />
    <Circle cx={13} cy={16.001} r={1} fill="currentColor" />
    <Circle cx={16} cy={16.001} r={1} fill="currentColor" />
    <Path
      d="M18 18.001l-.003-.006v.006H2v-4h15.998v.004l.002-.004v-2h2v-10a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h16v-2zm-16-16h16l-.001 4H2v-4zm0 6h15.999l-.001 4H2v-4zM20 14.001h2v6h-2z"
      fill="currentColor"
    />
    <Circle cx={21} cy={22.001} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
