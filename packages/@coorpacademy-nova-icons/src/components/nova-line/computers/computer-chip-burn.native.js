import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 17.001a7 7 0 0 1-.999-.079v1.079H5v-12h7.26A7.005 7.005 0 0 1 16 3.295V2.001h-2v2h-2v-2h-2v2H8v-2H6v2H5c-1.103 0-2 .896-2 2v1H1v2h2v2H1v2h2v2H1v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1.08c-.328.047-.66.08-1 .08z" />
      <Path d="M18 .001c1.667 6.666-2 8.75-2 8.75V5.368c-1.707.742-3 2.535-3 4.633 0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.576 0-5-5-10z" />
    </G>
  </Svg>
);

export default SvgComponent;
