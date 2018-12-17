import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 13v7H4V8h2V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9h-2zM15.406 9.592l-1.408 1.41-1.41-1.41c.359-.369.859-.59 1.41-.59.549 0 1.049.221 1.408.59zM14.002 5a6.031 6.031 0 0 0-4.241 1.767l1.428 1.427C11.934 7.442 12.922 7 14.002 7c1.078 0 2.064.439 2.81 1.188l1.429-1.429A5.945 5.945 0 0 0 14.002 5z" />
      <Path d="M14.002 1a9.97 9.97 0 0 0-7.066 2.94l1.412 1.414a7.972 7.972 0 0 1 11.304-.007l1.413-1.412A9.974 9.974 0 0 0 14.002 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
