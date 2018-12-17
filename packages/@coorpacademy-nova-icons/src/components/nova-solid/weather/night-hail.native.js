import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.878 1.002c.148.405.23.838.23 1.294a3.814 3.814 0 0 1-3.813 3.815A3.814 3.814 0 0 1 4 5.88a3.814 3.814 0 0 0 3.583 2.519 3.813 3.813 0 0 0 1.295-7.397z" />
      <Circle cx={9} cy={19.002} r={1} />
      <Circle cx={7} cy={22.002} r={1} />
      <Circle cx={12.5} cy={19.002} r={1} />
      <Circle cx={10.5} cy={22.002} r={1} />
      <Circle cx={16} cy={19.002} r={1} />
      <Circle cx={14} cy={22.002} r={1} />
      <Path d="M15.1 7.002c-1.634 0-3.092.816-3.986 2.105 1.115.366 1.949 1.491 2.157 1.981-.014.011-.819.593-.849.613-1.048-1.518-1.947-1.843-2.922-1.843-1.93 0-3.5 1.603-3.5 3.573 0 1.968 1.57 3.571 3.5 3.571h5.6c2.702 0 4.9-2.241 4.9-5 0-2.757-2.198-5-4.9-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
