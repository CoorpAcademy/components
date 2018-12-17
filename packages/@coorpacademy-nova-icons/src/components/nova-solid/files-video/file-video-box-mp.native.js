import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.496 12.5h.629v-1.75h-.191z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 16H6.75v-3.234l-.147.22c-.325.487-1.131.487-1.456 0L5 12.766V16H3.25V9.875a.874.874 0 0 1 1.603-.485l1.022 1.533L6.897 9.39a.874.874 0 1 1 1.603.485V16zm3.5-1.75h-.875V16h-1.75V9H12a2.629 2.629 0 0 1 2.625 2.625A2.628 2.628 0 0 1 12 14.25zm8.75 0h-.875V16h-1.75v-1.75h-1.75a.87.87 0 0 1-.848-1.086l.875-3.5A.874.874 0 0 1 17.25 9H19c.483 0 .875.392.875.875V12.5h.875v1.75z" />
      <Path d="M12 10.75h-.875v1.75H12a.875.875 0 0 0 0-1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
