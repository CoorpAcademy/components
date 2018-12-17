import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={14} r={2} />
      <Path d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-1 12.909h-1.492a3.608 3.608 0 0 1-.358.877l.941.941-1.363 1.363-.942-.941a3.562 3.562 0 0 1-.876.358V19h-1.818v-1.492a3.625 3.625 0 0 1-.876-.358l-.942.941-1.363-1.363.941-.941a3.608 3.608 0 0 1-.358-.877H7v-1.818h1.492c.081-.312.203-.604.358-.876l-.941-.942 1.363-1.363.942.941c.273-.156.564-.277.876-.358V9h1.818v1.492c.312.081.604.202.876.358l.942-.941 1.363 1.363-.941.942c.155.273.277.565.358.876H17v1.819z" />
    </G>
  </Svg>
);

export default SvgComponent;
