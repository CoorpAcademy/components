import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 15.999H2v-12h8v8.408a7.017 7.017 0 0 1 2-2.148v-8.26c0-1.103-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c.083 0 .161-.015.242-.024A6.963 6.963 0 0 1 9 15.999z" />
      <Path d="M23.414 21.999l-3.247-3.247c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.413l1.414-1.414zm-10.414-6c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
