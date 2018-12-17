import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 12.4l4.011-9.626C14.751 2.281 13.398 2 12 2s-2.751.281-4.011.774L12 12.4z" />
      <Path d="M21.49 8.923a.999.999 0 0 0 .171-1.186 11.007 11.007 0 0 0-3.857-4.067L12 16.542 6.196 3.67a11.007 11.007 0 0 0-3.857 4.067.999.999 0 0 0 .171 1.186l5.955 5.955 2.121 2.121-2.121 2.124a.999.999 0 0 0 0 1.414c.943.943 2.199 1.462 3.535 1.462s2.592-.519 3.535-1.462a.996.996 0 0 0 0-1.414l-2.121-2.124 2.121-2.121 5.955-5.955z" />
    </G>
  </Svg>
);

export default SvgComponent;
