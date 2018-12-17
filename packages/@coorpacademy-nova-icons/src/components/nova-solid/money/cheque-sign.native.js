import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18.414 8l3.293-3.293a.999.999 0 0 0 0-1.414l-3-3a.997.997 0 0 0-1.414 0L15 2.586l-1.293-1.292a.997.997 0 0 0-1.414 0l-3 3 1.414 1.414L13 3.415l.586.585-4 4H0v16h24V8h-5.586zM18 2.415L19.586 4 18 5.586 16.414 4 18 2.415zM16.586 7l-8.097 8.097-2.114.528.528-2.114L15 5.415 16.586 7zM22 21H10v-2h12v2zm0-4h-8v-2h8v2z"
    />
  </Svg>
);

export default SvgComponent;
