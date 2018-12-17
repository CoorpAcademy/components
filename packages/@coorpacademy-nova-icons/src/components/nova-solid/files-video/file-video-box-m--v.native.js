import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.371 12.5h1.504v-1.75h-1.066z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 16H6.75v-3.234l-.147.22c-.325.487-1.131.487-1.456 0L5 12.766V16H3.25V9.875c0-.385.253-.725.622-.836a.872.872 0 0 1 .981.351l1.022 1.533L6.897 9.39a.874.874 0 0 1 .982-.351.873.873 0 0 1 .621.836V16zm7-1.75h-.875V16h-1.75v-1.75H10.25a.877.877 0 0 1-.848-1.087l.875-3.5A.875.875 0 0 1 11.125 9h2.625c.483 0 .875.392.875.875V12.5h.875v1.75zM19.019 16H17.217L15.5 9h1.75l.862 3.414L18.95 9h1.8L19 15.929l.019.071z" />
    </G>
  </Svg>
);

export default SvgComponent;
