import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 10.298L6 11.59V8.004H4v9h6v-2H6v-.586l2-2 1.293 1.293a.996.996 0 0 0 .707.292V11.59l-1.293-1.292a.999.999 0 0 0-1.414 0z" />
      <Path d="M2 2.002h10v4h4v3.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M20.167 18.754c.524-.79.833-1.735.833-2.752 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 2.756 2.243 5 5 5 1.018 0 1.963-.31 2.753-.834L22 23.416l1.414-1.414-3.247-3.248zM16 19.002c-1.654 0-3-1.346-3-3 0-1.655 1.346-3 3-3s3 1.345 3 3c0 1.654-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
