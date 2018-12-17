import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.964 9.426l2.181-.814a4.076 4.076 0 0 0 4.918 1.72c2.191-.819 4.832-4.791 6.011-6.63-2.033-.511-5.104-1.233-7.317-1.233-3.029 0-4.526 2.523-4.139 4.738l-2.178.812.524 1.407zm5.794-5.457c1.478 0 3.623.413 4.89.691-1.065 1.511-2.879 3.808-4.109 4.268-1.06.396-2.261-.006-2.938-.858l3.661-1.365-.524-1.406-3.668 1.369c-.075-1.221.713-2.699 2.688-2.699z" />
      <Path d="M21 13H6V9.5a1 1 0 0 0-.4-.8l-2-1.5A1 1 0 0 0 2 8v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-11 8H7v-2h3v2zm0-4H7v-2h3v2zm5 4h-3v-2h3v2zm0-4h-3v-2h3v2zm5 4h-3v-2h3v2zm0-4h-3v-2h3v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
