import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M23.999 14.998a5 5 0 0 0-10 0c0 1.632.794 3.068 2.004 3.981 0 .007-.004.013-.004.019v4c0 .405.244.769.617.925.373.154.803.069 1.09-.217l1.293-1.294 1.293 1.294a1 1 0 0 0 1.707-.708v-4c0-.006-.004-.012-.004-.019 1.21-.913 2.004-2.349 2.004-3.981zm-5 2s-2-2-2-3a1 1 0 0 1 2 0 1 1 0 0 1 2 0c0 1-2 3-2 3z" />
      <Path d="M15.999 8.682V6.998a1 1 0 0 0-.293-.707l-6-6a1 1 0 0 0-.707-.293h-8a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h13.106a6.978 6.978 0 0 1-2.106-5 6.994 6.994 0 0 1 4-6.316zm-7-6.684l5 5h-5v-5zm-7 3h4v1h-4v-1zm0 4h10v1h-10v-1zm8 5h-8v-1h8v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
