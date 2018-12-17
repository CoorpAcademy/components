import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M18 1H6C3.795 1 2 2.794 2 5v14.001c0 2.206 1.795 4 4 4h12c2.205 0 4-1.794 4-4V5c0-2.206-1.795-4-4-4zM6 3h12c1.104 0 2 .898 2 2v2H4V5c0-1.102.896-2 2-2zm12 18.001H6c-1.104 0-2-.897-2-2V9h16v10.001c0 1.103-.896 2-2 2z" />
      <Path d="M6 4h5v2H6z" />
      <Circle cx={14} cy={5} r={1} />
      <Circle cx={17} cy={5} r={1} />
      <Path d="M12 10c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm3 5c0 .254-.041.496-.101.731L13 14.465v-2.281c1.162.415 2 1.515 2 2.816zm-4-2.816v2.281l-1.899 1.266A2.937 2.937 0 0 1 9 15c0-1.301.838-2.401 2-2.816zm-.789 5.21L12 16.202l1.789 1.192C13.287 17.77 12.673 18 12 18s-1.287-.23-1.789-.606z" />
    </G>
  </Svg>
);

export default SvgComponent;
