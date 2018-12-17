import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 10h-1V8c0-1.103-.897-2-2-2h-.382l-1.724-3.447a1 1 0 0 0-1.266-.481L4.807 6H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-6.483-5.73L15.382 6h-5.189l4.324-1.73zM17.997 20H4V8h14v2h-3a.998.998 0 0 0-.707.294l-3 3a.999.999 0 0 0 0 1.414l3 3c.187.186.442.292.707.292h2.998l-.001 2zM20 16h-4.586l-2-2 2-2H20v4z" />
      <Circle cx={16} cy={14} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
