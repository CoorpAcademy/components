import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M20.538 3.323s-4.242-1.415-7.778.707c-3.429 2.058-4.629 6.604-4.174 9.144-2.37-.678-5.725.756-5.725.756l4.949 2.122L9.932 21s1.434-3.355.756-5.725c2.539.454 7.086-.746 9.144-4.174 2.12-3.535.706-7.778.706-7.778zm-2.121 4.284h-1.371v1.372h-1.5V7.607h-1.372v-1.5h1.372V4.736h1.5v1.371h1.371v1.5z"
    />
  </Svg>
);

export default SvgComponent;
