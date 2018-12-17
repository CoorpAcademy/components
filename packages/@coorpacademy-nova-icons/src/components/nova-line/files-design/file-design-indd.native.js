import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.002h10v4h4v1h2V5.587l-4.586-4.585H5c-1.103 0-2 .896-2 2v5h2v-5zM19 21.002H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM4 16.002H3v-4h1v-2H0v2h1v4H0v2h4zM6.832 10.447a1.002 1.002 0 0 0-1.122-.403c-.421.128-.71.517-.71.958v7h2v-3.697l2.168 3.251A1 1 0 0 0 11 17.002v-7H9v3.697l-2.168-3.252zM14 10.002h-2v8h2c2.206 0 4-1.794 4-4s-1.794-4-4-4zm0 6v-4c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2zM20 10.002h-2v8h2c2.206 0 4-1.794 4-4s-1.794-4-4-4zm0 6v-4c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
