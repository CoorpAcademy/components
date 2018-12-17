import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M21.586 8.071L23 6.657 17.343 1l-1.414 1.414 2.122 2.122-7.778 7.778-2.123-2.122a.999.999 0 0 0-1.414 0L3.48 13.448a1 1 0 0 0-.292.674l-.164 5.086a2 2 0 0 0 1.767 1.767l5.086-.164a1 1 0 0 0 .675-.293l3.255-3.255a.999.999 0 0 0 0-1.414l-2.122-2.122 7.778-7.777 2.123 2.121z"
    />
  </Svg>
);

export default SvgComponent;
