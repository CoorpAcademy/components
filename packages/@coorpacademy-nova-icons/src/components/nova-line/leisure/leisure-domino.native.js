import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21 7.657L16.415 3.07c-.754-.754-2.074-.754-2.828 0L3 13.657a2.002 2.002 0 0 0 0 2.827l4.586 4.586c.377.378.879.585 1.414.585s1.037-.207 1.414-.585L21 10.484a2 2 0 0 0 0-2.827zM9.003 19.654L9 19.655v.002L4.415 15.07 9 10.484l4.586 4.587-4.583 4.583zM15 13.657L10.415 9.07 15 4.484l4.586 4.586L15 13.657z" />
      <Circle cx={17} cy={9.07} r={1} />
      <Circle cx={13} cy={9.07} r={1} />
      <Circle cx={9} cy={15.07} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
