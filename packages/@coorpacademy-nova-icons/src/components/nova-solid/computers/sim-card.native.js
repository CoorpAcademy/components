import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.414 6.414l-3.828-3.828A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.828a2 2 0 0 0-.586-1.414zM9 19a2 2 0 0 1-2-2v-1h2v3zm0-5H7v-1a2 2 0 0 1 2-2v3zm4 5h-2v-8h2v8zm4-2a2 2 0 0 1-2 2v-3h2v1zm0-3h-2v-3a2 2 0 0 1 2 2v1z"
    />
  </Svg>
);

export default SvgComponent;
