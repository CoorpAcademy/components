import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 10h-1V8c0-1.102-.897-2-2-2h-.382l-1.724-3.447a1.001 1.001 0 0 0-1.266-.481L4.807 6H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2h1a1 1 0 0 0 1-1v-6c0-.551-.448-1-1-1zm-6.483-5.73L15.382 6h-5.189l4.324-1.73zM20 16h-6.585l-2-2 2-2H20v4z" />
      <Circle cx={15} cy={14} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
