import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      d="M21.586 8.071L23 6.657 17.343 1l-1.414 1.413 2.122 2.122-7.071 7.071-2.83-2.828a.999.999 0 0 0-1.414 0L2.494 13.02a.998.998 0 0 0-.292.675c-.004.119-.185 5.507-.171 5.624a2.982 2.982 0 0 0 2.649 2.649c.12.015 5.502-.167 5.624-.17.254-.008.495-.113.675-.292l4.242-4.244a.998.998 0 0 0 0-1.413l-2.828-2.829 7.071-7.071 2.122 2.122zM9.846 19.812l-5.003.162a.993.993 0 0 1-.816-.816l.162-5.003L7.444 10.9l5.657 5.658-3.255 3.254z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
