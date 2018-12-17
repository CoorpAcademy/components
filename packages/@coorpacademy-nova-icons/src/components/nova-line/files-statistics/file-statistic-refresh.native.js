import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.416l1.293 1.293a.999.999 0 0 0 1.414 0l3-3-1.414-1.414L10 11.588l-1.293-1.292a.999.999 0 0 0-1.414 0L6 11.588V8.002H4v9h6v-1.996l.004-.004H6v-.586l2-2z" />
      <Path d="M2 1.999h10v4h4v4.011h2V4.585L13.414-.001H2c-1.103 0-2 .897-2 2V20c0 1.104.897 2 2 2h8v-2H2V1.999z" />
      <Path d="M18 22.002c-1.077 0-2.064-.441-2.811-1.19L17 19.002h-5v5l1.761-1.761A5.937 5.937 0 0 0 18 24.002c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4zM22.24 13.763A5.937 5.937 0 0 0 18 12.002c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.188L19 17.002h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
