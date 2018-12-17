import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 5.586L16.414 7H20v3.586zM4 13.414L7.586 17H4v-3.586zM10.414 17L4 10.586V7h9.586L20 13.414V17h-9.586z" />
      <Path d="M12 8c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 6c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
