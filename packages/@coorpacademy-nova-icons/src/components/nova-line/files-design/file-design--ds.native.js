import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v5h2v-5h10v4h4v1h2V5.587l-4.586-4.585zM19 21.002H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM15 14.002c0-2.206-1.794-4-4-4H9v8h2c2.206 0 4-1.794 4-4zm-4 2v-4c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2zM15 12.502c0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H15v2h3.5c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H21v-2h-3.5a2.503 2.503 0 0 0-2.5 2.5zM8 17.002v-6a1 1 0 0 0-1-1H3v2h3v1H3v2h3v1H3v2h4a1 1 0 0 0 1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
