import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h8v-7.498L5 17V9l5 2.502V11c0-1.101.9-2 2-2h6zm-6-8l5 5h-5V1z" />
      <Path d="M12 10.996v7c0 3.813 3.797 5.579 5.804 5.981l.196.039.196-.039C20.203 23.575 24 21.809 24 17.996v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
