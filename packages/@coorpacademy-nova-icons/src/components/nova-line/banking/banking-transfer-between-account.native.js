import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 6h10a.998.998 0 0 0 .625-1.78l-5-4a1.001 1.001 0 0 0-1.25 0l-5 4A.999.999 0 0 0 13 6zm5-3.719L20.149 4H15.85L18 2.281zM24 9V7H12v2h1v2h-1v2h12v-2h-1V9h1zm-9 0h2v2h-2V9zm6 2h-2V9h2v2zM1 17h10a.998.998 0 0 0 .625-1.78l-5-4a1.001 1.001 0 0 0-1.25 0l-5 4A.999.999 0 0 0 1 17zm5-3.719L8.149 15H3.851L6 13.281zM0 20h1v2H0v2h12v-2h-1v-2h1v-2H0v2zm3 0h2v2H3v-2zm6 2H7v-2h2v2zM5 10l3-3H6V4h3v2l3-3-3-3v2H5a1 1 0 0 0-1 1v4H2l3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
