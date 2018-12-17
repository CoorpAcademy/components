import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v5h2v-5h10v4h4v1h2V5.587l-4.586-4.585zM19 21.002H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM9 14.002c0-2.206-1.794-4-4-4H3v8h2c2.206 0 4-1.794 4-4zm-4-2c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2v-4z" />
      <Path d="M15 12.002v5.779l-2.268-3.779 2.4-4H12.8l-1.233 2.057-1.233-2.057H8l2.4 4-2.4 4h2.333l1.233-2.056 1.233 2.056H17v-3h3v-2h-3v-1h4v-2h-4c-1.103 0-2 .896-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
