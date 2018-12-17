import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 4H4c-1.104 0-2 .897-2 2v11c0 1.103.896 2 2 2v1h2v-1h12v1h2v-1c1.104 0 2-.897 2-2V6c0-1.103-.896-2-2-2zm0 13H4V6h16v11z" />
      <Path d="M6 16h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zm1-7h7v5H7V9zM17 7h2v5h-2z" />
      <Circle cx={18} cy={15} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
