import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19.574 16.058l-1.742-2.613A1.001 1.001 0 0 0 17 13h-.322l-.4-1H20v1h2V9h-2v1h-4.523l-.548-1.371A1.003 1.003 0 0 0 14 8H9c-.408 0-.776.249-.929.629L6.322 13H6a1 1 0 0 0-.949.684l-.797 2.392A4.001 4.001 0 0 0 1 20c0 2.206 1.795 4 4 4h14c2.205 0 4-1.794 4-4 0-2.009-1.494-3.661-3.426-3.942zM17.131 16H6.387l.334-1h9.744l.666 1zm-7.453-6h3.645l1.201 3H8.477l1.201-3zM19 22H5c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2h14c1.104 0 2 .898 2 2 0 1.103-.896 2-2 2z" />
      <Circle cx={7} cy={20} r={1.25} />
      <Circle cx={12} cy={20} r={1.25} />
      <Circle cx={17} cy={20} r={1.25} />
    </G>
  </Svg>
);

export default SvgComponent;
