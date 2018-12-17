import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 12.002h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-1 2v6h-4v-6h4zM2 10.002v2h8v-2H7v-1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4v1H2zm8-8v4H2v-4h8zM17.707 6.295l-1.293-1.293H19v5h2v-6a1 1 0 0 0-1-1h-3.586l1.293-1.293L16.293.295l-3.707 3.707 3.707 3.707 1.414-1.414zM9.293 17.709l1.293 1.293H7v-5H5v6a1 1 0 0 0 1 1h4.586l-1.293 1.293 1.414 1.414 3.707-3.707-3.707-3.707-1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
