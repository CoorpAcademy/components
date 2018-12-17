import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 8.001h-2v2h2v5H5v-5h2v-2H5a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-9c0-1.103-.896-2-2-2zm-14 11v-2h14v2H5zM17.656 4.343l1.414-1.414c-3.898-3.898-10.243-3.898-14.142 0l1.414 1.414c3.12-3.117 8.195-3.117 11.314 0z" />
      <Path d="M16.242 5.757a6.009 6.009 0 0 0-8.485 0l1.414 1.415a4.005 4.005 0 0 1 5.657-.001l1.414-1.414z" />
      <Circle cx={12} cy={9.001} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
